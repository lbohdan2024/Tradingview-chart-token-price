// hooks/datafeed.ts

import timestring from "timestring"

import {
  makeApiRequest,
  checkInterval,
  intervals,
  getMarksFunc,
  liveData,
} from "./helpers"

import {
  HistoryCallback,
  LibrarySymbolInfo,
  PeriodParams,
  ResolutionString,
  ResolveCallback,
  SubscribeBarsCallback,
} from "@/public/static/charting_library"
import { paths } from "@/config/config"
import { Mark, Point } from "@/config/interface"

let lastCandleTime = 0

let timeoutId: NodeJS.Timeout | null = null

// Utility function to create a datafeed instance
export function createDataFeed(
  tokenId: string,
  chain: string,
  chartType: string,
  quoteToken?: string,
  walletId?: string,
  token_id_org?: any,
) {
  // let timeoutId: any;
  let totalSupply: number
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  // Determine chain_id from chain
  const chainDict: {
    [key: string]: number
  } = {
    eth: 1,
    sol: 1399811149,
  }
  const chainId = chainDict[chain] || chainDict.sol
  let tokenSymbol =
    `${tokenId}:${chainId}` || `${paths.ChainIdDataFeed}:${chainId}`
  let token_name = localStorage.getItem("tokenName") || paths.DefaultTokenName
  let chartDataCache: Array<any[]> = []

  // Configuration Data
  const configurationData = {
    supported_resolutions: ["1", "5", "15", "30", "60", "240", "1D", "1W"],
    supports_marks: true,
    supported_marks: true,
    supports_timescale_marks: false,
    supports_time: true,
  }

  return {
    onReady: (callback: any) => {
      setTimeout(() => callback(configurationData))
    },

    searchSymbols: async (
      userInput: string,
      exchange: string,
      symbolType: string,
      onResultReadyCallback: Function,
    ) => {
      const symbols = userInput.toLowerCase() === "wethusd" ? ["WETHUSD"] : []

      onResultReadyCallback(symbols)
    },

    resolveSymbol: async (
      symbolName: string,
      onSymbolResolvedCallback: ResolveCallback,
      onResolveErrorCallback: Function,
    ) => {
      try {
        const symbolInfo: LibrarySymbolInfo = {
          ticker: token_name,
          name: token_name,
          description: token_name.toUpperCase(),
          timezone: "Etc/UTC",
          exchange: "",
          minmov: 1,
          listed_exchange: "Uniswap",
          format: "price",
          pricescale: 100000000000,
          supported_resolutions: [
            "1",
            "5",
            "15",
            "30",
            "60",
            "120",
            "240",
            "1D",
          ] as ResolutionString[],
          type: "crypto",
          session: "24x7",
          has_intraday: true,
          volume_precision: 11,
          data_status: "streaming",
        }

        onSymbolResolvedCallback(symbolInfo)
      } catch (error) {
        onResolveErrorCallback("[resolveSymbol]: symbol not found", error)
      }
    },

    getBars: async (
      symbolInfo: LibrarySymbolInfo,
      resolution: ResolutionString,
      periodParams: PeriodParams,
      onHistoryCallback: HistoryCallback,
      onErrorCallback: Function,
    ) => {
      // console.log("[getBars] Method call");
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (!checkInterval(resolution) || !chain) {
        return onErrorCallback("[getBars] Invalid interval")
      }

      const { to, firstDataRequest } = periodParams
      const period = intervals[resolution]

      if (periodParams.firstDataRequest) lastCandleTime = 0
      const toTime = lastCandleTime == 0 ? to : lastCandleTime
      const fromTime = to - timestring(period) * 600

      try {
        if (chartType === "marketcap") {
          const getSupply = `query {token(input: { address: "${token_id_org}", networkId: ${chainId} })
            {
              id
              address
              cmcId
              decimals
              name
              symbol
              totalSupply
              info {
                circulatingSupply
                imageThumbUrl
              }
              explorerData {
                blueCheckmark
                description
                tokenType
              }
            }
          }`

          const supply = await makeApiRequest(
            getSupply,
            `${process.env.NEXT_PUBLIC_CODEX_API}`,
          )
          totalSupply = parseFloat(supply.data.token.totalSupply)
        }

        const getTokenInfo = `query {
          getBars(
            symbol: "${tokenSymbol}"
            quoteToken: ${quoteToken || "null"}
            from: ${fromTime}
            to: ${toTime}
            statsType: FILTERED
            removeLeadingNullValues: true
            resolution: "${resolution}"
            currencyCode:"USD"
          ) {
            c
            h
            l
            o
            t
            v
            s
          }
        }`

        const data = await makeApiRequest(
          getTokenInfo,
          `${process.env.NEXT_PUBLIC_CODEX_API}`,
        )

        const formattedData = await formatBars(data)

        if (
          (data.Response && data.Response === "Error") ||
          formattedData.length === 0
        ) {
          onHistoryCallback([], {
            noData: true,
          })

          return
        }
        const bars = formattedData
          .filter((bar: any) => bar.time >= fromTime && bar.time < to)
          .map((bar: any) => ({
            time: bar.time * 1000,
            low: chartType == 'price' ? bar.low : bar.low * totalSupply,
            high: chartType == 'price' ? bar.high : bar.high * totalSupply,
            open: chartType == 'price' ? bar.open : bar.open * totalSupply,
            close: chartType == 'price' ? bar.close : bar.close * totalSupply,
            volume: bar.volume,
          }))

        chartDataCache = bars
        let chartDataFromCache1: any = chartDataCache[chartDataCache.length - 1]

       // console.log(
         // "lastCandleTime===================>",
          //toTime,
          //"=====bars===>",
          //bars,
        //)
        //console.log(
         // "chartDataFromCache1===================>",
         // chartDataFromCache1,
        //)

        onHistoryCallback(bars, {
          noData: false,
        })
      } catch (error) {
        console.log("[getBars]: Get error", error)
        onErrorCallback(error)
      }
    },
    subscribeBars(
      symbolInfo: LibrarySymbolInfo,
      resolution: ResolutionString,
      onRealtimeCallback: SubscribeBarsCallback,
      subscriberUID: string,
      onResetCacheNeededCallback: () => void,
    ) {
      let chartDataFromCache: any = chartDataCache[chartDataCache.length - 1]
      let lastDefinedApiTime = chartDataFromCache["time"]
      let lastDefinedApiClose = chartDataFromCache["close"]
      let isNewCandle = true
      let resolution_time: any = { "1": 60, "5": 300, 15: 900 }
      let previousClose = chartDataFromCache["close"] // Track the close price of the previous candle

      console.log(
        "previousClose=chartDataFromCache========>===>",
        lastDefinedApiClose,
      )
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      const calculateNextCandleTime = (
        currentTime: number,
        resolution: string,
      ) => {
        const date = new Date(currentTime)
        let nextCandleTime

        switch (resolution) {
          case "1S":
            nextCandleTime = date.setSeconds(date.getSeconds() + 1)
            break
          case "1":
            nextCandleTime = date.setMinutes(date.getMinutes() + 1, 0, 0)
            break
          case "5":
            nextCandleTime = date.setMinutes(
              Math.ceil((date.getMinutes() + 1) / 5) * 5,
              0,
              0,
            )
            break
          case "15":
            nextCandleTime = date.setMinutes(
              Math.ceil((date.getMinutes() + 1) / 15) * 15,
              0,
              0,
            )
            break
          case "30":
            nextCandleTime = date.setMinutes(
              Math.ceil((date.getMinutes() + 1) / 30) * 30,
              0,
              0,
            )
            break
          case "60":
            nextCandleTime = date.setHours(date.getHours() + 1, 0, 0, 0)
            break
          case "240":
            nextCandleTime = date.setHours(
              Math.ceil((date.getHours() + 1) / 4) * 4,
              0,
              0,
              0,
            )
            break
          case "1D":
            nextCandleTime = date.setHours(24, 0, 0, 0)
            break
          default:
            nextCandleTime = currentTime
        }

        return nextCandleTime
      }

      async function getLatestData() {
        try {
          const resolutionsToSkip = ["1D"]

          if (!resolutionsToSkip.includes(resolution)) {
            // Pass lastDefinedApiClose only if isNewCandle is true
            let lastDefinedApiClose_first = isNewCandle
              ? lastDefinedApiClose
              : ""

            const data = await liveData(
              resolution,
              token_id_org,
              lastDefinedApiTime,
              lastDefinedApiClose_first,
            )

            let latestData

            try {
              const chart_data = JSON.parse(data.response_data)

              latestData = chart_data[chart_data.length - 1]
            } catch (e) {
              const chart_data = data.response_data

              latestData = chart_data[chart_data.length - 1]
            }

            if (latestData) {
              const low = Number(Number(latestData["low"]).toFixed(11))
              const high = Number(Number(latestData["high"]).toFixed(11))
              const open = Number(Number(latestData["open"]).toFixed(11))
              const close = Number(Number(latestData["close"]).toFixed(11))
              const vol = Math.floor(Number(latestData["vol"]))

              const lastPrice = {
                time: Number(latestData["time"]),
                low: chartType == "price" ? low : low * totalSupply,
                high: chartType == "price" ? high : high * totalSupply,
                open: chartType == "price" ? open : open * totalSupply,
                close: chartType == "price" ? close : close * totalSupply,
                volume: vol,
              }

              // console.log("===========totalSupply===>", totalSupply)
              // Send the updated candle to the chart
              await onRealtimeCallback(lastPrice)

              if (Number(latestData["time"]) !== lastDefinedApiTime) {
                // Update lastDefinedApiTime and lastDefinedApiClose for a new candle
                lastDefinedApiTime = Number(latestData["time"])
                lastDefinedApiClose = close
                isNewCandle = true
                //console.log(
                  //"New Candle Detected lastDefinedApiClose liveData api call ===lastDefinedApiTime==>",
                  //lastDefinedApiTime,
                  //"===latestData time===>",
                  //latestData["time"],
                  //"====last_close_price===>",
                  //lastDefinedApiClose,
                //)
                // console.log("New Candle Detected. Updated lastDefinedApiTime and lastDefinedApiClose.");
              } else if (close !== lastDefinedApiClose) {
                //console.log(
                  //"Updated lastDefinedApiClose liveData api call ===lastDefinedApiTime==>",
                  //lastDefinedApiTime,
                  //"===latestData time===>",
                  //latestData["time"],
                  //"====last_close_price===>",
                  //lastDefinedApiClose,
                //)
                // console.log("liveData api call ===latestData time==>",latestData["time"])
                // console.log("liveData api call ===last_close_price==>",lastDefinedApiClose)
                // Update only the close price if the time remains the same
                // lastDefinedApiClose = close;
                // console.log("Updated lastDefinedApiClose for the same candle.");
              }
            } else {
              console.warn("No latestData received from API.")
            }
          }
        } catch (error) {
          console.error("Error fetching latest data:", error)
        }
      }

      async function fetchDataAndUpdateChart() {
        const resolutionsToSkip = ["1D"]

        if (!resolutionsToSkip.includes(resolution)) {
          timeoutId = setTimeout(async () => {
            await getLatestData()
            isNewCandle = false // Reset isNewCandle after fetching data
            await fetchDataAndUpdateChart() // Recursive call to continue fetching data
          }, 1000) // Update every second
        }
      }

      fetchDataAndUpdateChart()

      fetchDataAndUpdateChart()

      function updateLatestPrice(): void {
        const value: string | null = localStorage.getItem(
          "price_" + token_id_org,
        )

        if (value && Number(value) > 0) {
          const lastPrice = {
            time: chartDataFromCache["time"],
            low: chartDataFromCache["low"],
            high: chartDataFromCache["high"],
            open: chartDataFromCache["open"],
            close: parseFloat(value),
            volume: chartDataFromCache["volume"],
          }

          onRealtimeCallback(lastPrice)
        }
      }
      // setInterval(updateLatestPrice, 1000);
    },
    unsubscribeBars: async (subscriberUID: string) => {},
    getMarks: async (
      symbolInfo: LibrarySymbolInfo,
      startDate: number,
      endDate: number,
      onDataCallback: (marks: any[]) => void,
      resolution: ResolutionString,
    ) => {
      let lengthOfPrevData: number = 0
      const fetchMarks = async () => {
        try {
          //console.log("getMarks called")
          const data = await getMarksFunc(walletId || "", token_id_org || "")
          const buyPoints: Point[] = data.buy_dict_list
          const sellPoints: Point[] = data.sell_dict_list

          if (!buyPoints && !sellPoints) {
            console.warn("Both buyPoints and sellPoints are empty")

            return
          }

          let alignedBuyPoints: Point[] = []
          let alignedSellPoints: Point[] = []

          if (buyPoints) {
            alignedBuyPoints = roundOffPoints(buyPoints, resolution)
          }

          if (sellPoints) {
            alignedSellPoints = roundOffPoints(sellPoints, resolution)
          }

          const marksSell: Mark[] = alignedSellPoints.map((data, index) => ({
            id: index + 1,
            time: data.time,
            color: "red",
            text: [`Sold: $${data.price} at ${data.tn_time}`],
            label: "S",
            labelFontColor: "white",
            minSize: 25,
          }))

          const marksBuy: Mark[] = alignedBuyPoints.map((data, index) => ({
            id: index + 1 + alignedSellPoints.length,
            time: data.time,
            color: "green",
            text: [`Bought: $${data.price} at ${data.tn_time}`],
            label: "B",
            labelFontColor: "white",
            minSize: 25,
          }))

          const combinedMarks: Mark[] = [...marksBuy, ...marksSell]

          if (lengthOfPrevData != combinedMarks.length) {
            onDataCallback(combinedMarks)
            lengthOfPrevData = combinedMarks.length
          }
        } catch (error) {
          console.error("Error in getMarks:", error)
        }
      }

      const intervalId = setInterval(async () => {
        if (!document.hidden) {
          await fetchMarks()
        }
      }, 10000)

      await fetchMarks()

      return () => clearInterval(intervalId)
    },
  }
}

function roundOffPoints(points: Point[], resolution: string): Point[] {
  return points.map((point: Point) => {
    let roundedTimeUnix: number

    // Determine the rounded time based on resolution
    switch (resolution) {
      case "1S":
        roundedTimeUnix = Math.round(point.time / 1) * 1
        break
      case "1":
        roundedTimeUnix = Math.round(point.time / 60) * 60
        break
      case "5":
        roundedTimeUnix = Math.round(point.time / (5 * 60)) * 5 * 60
        break
      case "15":
        roundedTimeUnix = Math.round(point.time / (15 * 60)) * 15 * 60
        break
      case "30":
        roundedTimeUnix = Math.round(point.time / (30 * 60)) * 30 * 60
        break
      case "60":
        roundedTimeUnix = Math.round(point.time / (60 * 60)) * 60 * 60
        break
      case "120":
        roundedTimeUnix = Math.round(point.time / (120 * 60)) * 120 * 60
        break
      case "240":
        roundedTimeUnix = Math.round(point.time / (240 * 60)) * 240 * 60
        break
      case "1D":
        roundedTimeUnix = Math.round(point.time / (24 * 60 * 60)) * 24 * 60 * 60
        break
      default:
        throw new Error("Invalid resolution")
    }

    point.time = roundedTimeUnix

    return point
  })
}

async function removeOutliers<T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
) {
  // Step 1: Extract the values associated with the given key
  const values = arr.map((item) => item[key])

  // Step 2: Calculate the mean
  const mean = values.reduce((acc, val) => acc + val, 0) / values.length

  // Step 3: Calculate the standard deviation
  const variance =
    values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
    values.length
  const stdDeviation = Math.sqrt(variance)

  // Step 4: Filter the array based on z-score
  const filteredArray = arr.filter((item) => {
    const zScore = (item[key] - mean) / stdDeviation

    return Math.abs(zScore) < 3
  })

  return filteredArray
}

export async function formatBars(response: any) {
  const data = response.data

  if (data && data.getBars) {
    var df = data.getBars

    // Remove rows with null/undefined values in 'v' and 'c'
    lastCandleTime = df.t[0] as number
    let dfArray = df.c.map((cValue: number, index: number) => ({
      c: cValue,
      v: df.v[index],
      h: df.h[index],
      l: df.l[index],
      o: df.o[index],
      t: df.t[index],
      s: df.s[index],
    }))

    // Filter the array to remove rows where either c or v is null
    dfArray = dfArray.filter((row: any, index: number) => {
      const prevRow = index == 0 ? dfArray[0] : dfArray[index - 1]

      if (
        row.v == null ||
        row.c == null ||
        (row.v == 0 && row.o == row.h && row.o == row.l && row.o == row.c)
      )
        return

      return row
    })

    // If needed, convert the filtered array back to the original structure
    df = {
      c: dfArray.map((row: any) => row.c),
      v: dfArray.map((row: any) => row.v),
      h: dfArray.map((row: any) => row.h),
      l: dfArray.map((row: any) => row.l),
      o: dfArray.map((row: any) => row.o),
      t: dfArray.map((row: any) => row.t),
      s: dfArray.map((row: any) => row.s),
    }

    df = df.t.map((t: number, index: number) => ({
      close: df.c[index],
      high: df.h[index],
      low: df.l[index],
      open: df.o[index],
      time: t, // Assuming time in seconds; no need to divide by 1000
      volume: df.v[index],
      status: "ok", // Assuming you may want to keep 's' field.
    }))
    // df = await removeOutliers(df, "close");
    // df = await removeOutliers(df, "open");
    // df = await removeOutliers(df, "low");
    // df = await removeOutliers(df, "high");
  } else {
    df = []
  }

  return df
}
