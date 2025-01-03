import timestring from "timestring";
import {
  makeApiRequest,
  checkInterval,
  intervals,
  getMarksFunc,
  liveData,
} from "./helpers";
import {
  HistoryCallback,
  LibrarySymbolInfo,
  PeriodParams,
  ResolutionString,
  ResolveCallback,
  SubscribeBarsCallback,
} from "@/public/static/charting_library";
import { paths } from "@/config/config";
import { Mark } from "@/config/interface";

interface Point {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export class DataFeed {
  static lastCandleTime = 0;
  static timeoutId: NodeJS.Timeout | null = null;
  private lastFetchTime: number | undefined;
  private chartDataCache: any[];
  private totalSupply: number;
  private chainId: number;
  private tokenSymbol: string;
  private tokenName: string;
  private configurationData: any;

  constructor(
    private tokenId: string,
    private chain: string,
    private chartType: string,
    private quoteToken: string | null,
    private walletId: string | null,
    private tokenIdOrg: string | null
  ) {
    this.chartDataCache = [];
    this.totalSupply = 0;

    if (DataFeed.timeoutId) {
      clearTimeout(DataFeed.timeoutId);
    }

    const chainDict = {
      eth: 1,
      sol: 1399811149,
    };
    const chainId = chainDict[chain as keyof typeof chainDict] || chainDict.sol;
    this.chainId = chainId;
    this.tokenSymbol = `${tokenId}:${chainId}` || `${paths.ChainIdDataFeed}:${chainId}`;
    this.tokenName = localStorage.getItem("tokenName") || paths.DefaultTokenName;

    this.configurationData = {
      supported_resolutions: ["1", "5", "15", "30", "60", "240", "1D", "1W"],
      supports_marks: true,
      supports_timescale_marks: false,
      supports_time: true,
    };
  }

  onReady(callback: (data: any) => void): void {
    setTimeout(() => callback(this.configurationData));
  }

  async searchSymbols(
    userInput: string,
    exchange: string,
    symbolType: string,
    onResultReadyCallback: Function
  ) {
    const symbols = userInput.toLowerCase() === "wethusd" ? ["WETHUSD"] : [];
    onResultReadyCallback(symbols);
  }

  async resolveSymbol(
    symbolName: string,
    onSymbolResolvedCallback: (symbolInfo: any) => void,
    onResolveErrorCallback: (error: string, details: any) => void
  ): Promise<void> {
    try {
      const symbolInfo = {
        ticker: this.tokenName,
        name: this.tokenName,
        description: this.tokenName.toUpperCase(),
        timezone: "Etc/UTC",
        exchange: "",
        minmov: 1,
        listed_exchange: "Uniswap",
        format: "price",
        pricescale: 100000000000,
        supported_resolutions: ["1", "5", "15", "30", "60", "120", "240", "1D"],
        type: "crypto",
        session: "24x7",
        has_intraday: true,
        volume_precision: 11,
        data_status: "streaming",
      };
      onSymbolResolvedCallback(symbolInfo);
    } catch (error) {
      onResolveErrorCallback("[resolveSymbol]: symbol not found", error);
    }
  }

  async getBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: ResolutionString,
    periodParams: PeriodParams,
    onHistoryCallback: HistoryCallback,
    onErrorCallback: (error: any) => void
  ) {
    if (DataFeed.timeoutId) {
      clearTimeout(DataFeed.timeoutId);
    }
    if (!checkInterval(resolution) || !this.chain) {
      return onErrorCallback("[getBars] Invalid interval");
    }
  
    const { to, firstDataRequest } = periodParams;
    const period = intervals[resolution];
  
    if (firstDataRequest) DataFeed.lastCandleTime = 0;
    const toTime = DataFeed.lastCandleTime === 0 ? to : DataFeed.lastCandleTime;
    const fromTime = toTime - timestring(period) * 600;
  
    console.log("Fetching bars from:", new Date(fromTime * 1000), "to:", new Date(toTime * 1000));
  
    try {
      if (this.chartType === "marketcap") {
        const getSupplyQuery = `query {token(input: { address: "${this.tokenIdOrg}", networkId: ${this.chainId} }) { totalSupply }}`;
        const supplyResponse = await makeApiRequest(getSupplyQuery, `${process.env.NEXT_PUBLIC_CODEX_API}`);
        this.totalSupply = parseFloat(supplyResponse.data.token.totalSupply);
      }
  
      const getTokenInfoQuery = `query {
        getBars(
          symbol: "${this.tokenSymbol}",
          quoteToken: ${this.quoteToken || "null"},
          from: ${fromTime},
          to: ${toTime},
          statsType: FILTERED,
          removeLeadingNullValues: true,
          resolution: "${resolution}",
          currencyCode: "USD"
        ) {
          c h l o t v s
        }
      }`;
  
      const data = await makeApiRequest(getTokenInfoQuery, `${process.env.NEXT_PUBLIC_CODEX_API}`);
  
      if (!data || !data.data || !data.data.getBars) {
        console.log("No data returned from API");
        onHistoryCallback([], { noData: true });
        return;
      }
  
      const formattedData = await DataFeed.formatBars(data);
  
      if (formattedData.length === 0) {
        console.log("No formatted data available");
        onHistoryCallback([], { noData: true });
        return;
      }
  
      interface Bar {
        time: number;
        low: number;
        high: number;
        open: number;
        close: number;
        volume: number;
      }
  
      const bars: Bar[] = formattedData
        .filter((bar: Bar) => bar.time >= fromTime && bar.time < to)
        .map((bar: Bar) => ({
          time: bar.time * 1000,
          low: this.chartType === "price" ? bar.low : bar.low * this.totalSupply,
          high: this.chartType === "price" ? bar.high : bar.high * this.totalSupply,
          open: this.chartType === "price" ? bar.open : bar.open * this.totalSupply,
          close: this.chartType === "price" ? bar.close : bar.close * this.totalSupply,
          volume: bar.volume,
        }));
  
      if (bars.length === 0) {
        console.log("No bars available after filtering and mapping");
        onHistoryCallback([], { noData: true });
        return;
      }
  
      this.chartDataCache = bars;
      DataFeed.lastCandleTime = bars[bars.length - 1].time / 1000;
      onHistoryCallback(bars, { noData: false });
    } catch (error) {
      console.log("[getBars]: Get error", error);
      onErrorCallback(error);
    }
  }

  subscribeBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: ResolutionString,
    onRealtimeCallback: SubscribeBarsCallback,
    subscriberUID: string,
    onResetCacheNeededCallback: () => void
): void {

    if (DataFeed.timeoutId) {
      clearTimeout(DataFeed.timeoutId);
    }

    const fetchDataAndUpdateChart = async () => {
        try {
            const now = Date.now();
            this.lastFetchTime = now;

            const lastCandle = this.chartDataCache[this.chartDataCache.length - 1];
            const data = await liveData(
              resolution,
              this.tokenIdOrg || '',
              lastCandle.time,
              lastCandle.close
            );
            const latestData = JSON.parse(data.response_data)[0];
            if (latestData) {
              const lastPrice = {
                time: Number(latestData.time),
                low: Math.min(lastCandle.low, Number(latestData.low)),
                high: Math.max(lastCandle.high, Number(latestData.high)),
                open: lastCandle.open !== undefined ? lastCandle.open : Number(latestData.open),
                close: Number(latestData.close),
                volume: Math.floor(latestData.vol),
              };
          
              lastPrice.low = Math.min(lastPrice.low, Number(latestData.low));  
              lastPrice.high = Math.max(lastPrice.high, Number(latestData.high));  
          
              this.chartDataCache[this.chartDataCache.length - 1] = lastPrice;
              onRealtimeCallback(lastPrice);
          }
        } catch (error) {
          console.error("Error fetching latest data:", error);
        }
        DataFeed.timeoutId = setTimeout(() => {
          fetchDataAndUpdateChart();
        }, 1000);
    };

    fetchDataAndUpdateChart();
  };

  unsubscribeBars(subscriberUID: string): void {
    if (DataFeed.timeoutId) {
      clearTimeout(DataFeed.timeoutId);
      DataFeed.timeoutId = null;
    }
  };

  static async formatBars(response: any) {
    const data = response.data
    let df: any;

    if (data && data.getBars) {
      df = data.getBars

      DataFeed.lastCandleTime = df.t[0] as number;
      console.log("Last candle time", new Date(DataFeed.lastCandleTime * 1000).getTime());

      let dfArray = df.c.map((cValue: number, index: number) => ({
        c: cValue,
        v: df.v[index],
        h: df.h[index],
        l: df.l[index],
        o: df.o[index],
        t: df.t[index],
        s: df.s[index],
      }));
  
      dfArray = dfArray.filter((row: any, index: number) => {
        if (
          row.v == null ||
          row.c == null ||
          (row.v == 0 && row.o == row.h && row.o == row.l && row.o == row.c)
        ) {
          return;
        }
        return row;
      });

      df = {
        c: dfArray.map((row: any) => row.c),
        v: dfArray.map((row: any) => row.v),
        h: dfArray.map((row: any) => row.h),
        l: dfArray.map((row: any) => row.l),
        o: dfArray.map((row: any) => row.o),
        t: dfArray.map((row: any) => row.t),
        s: dfArray.map((row: any) => row.s),
      };
  
      df = df.t.map((t: number, index: number) => ({
        close: df.c[index],
        high: df.h[index],
        low: df.l[index],
        open: df.o[index],
        time: t,
        volume: df.v[index],
        status: "ok",
      }));
    } else {
      df = [];
    }
  
    return df;
  };
};