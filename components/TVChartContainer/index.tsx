import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  LineToolsAndGroupsState,
  ResolutionString,
  widget,
} from "@/public/static/charting_library"
import style from "./index.module.css"
import { createDataFeed } from "@/hooks/ref_datafeed"
import { prettyNumber } from "../utils/chart-number"
import {
  savingTrendLine
} from  "@/hooks/helpers"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Switch, Select, SelectItem} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface TVChartContainerProps extends Partial<ChartingLibraryWidgetOptions> {
  searchResponse?: any
}

interface LineToolsState {
  sources: any[]
  groups: any[]
}

export const TVChartContainer: React.FC<TVChartContainerProps> = ({
  searchResponse,
  ...props
}) => {
  const [alertTitle, setAlertTitle] = useState<string>("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sendingData, setSendingData] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Crossing Up");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  async function handleTrendLineSaving(requestData: any) {
    try {
      const data = await savingTrendLine(requestData || "");
      toast.success(data.message); 
      return data
    } catch (error) {
      console.error("Error saving trend line data:", error);
    }
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlertTitle(event.target.value);
  };

  const onClose = () => {
    setIsPopupVisible(false);
  };

  const onSave = async () => {
    try {
      if(alertTitle){
      const updatedData = { ...sendingData, text: alertTitle, crossing: selectedValue};
      handleTrendLineSaving(updatedData);
      onClose();
      setAlertTitle("")
    }
    } catch (error) {
      console.error("Trend line:", error);
    }
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const pathName = usePathname()
  const chartContainerRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    let chn = localStorage.getItem("chain")
    let token_id = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee"

    if (chn && chn === "eth") {
      localStorage.setItem(
        "tokenName",
        searchResponse?.token_info?.token_info_dex.token_symbol ?? "Neiro",
      )
      token_id = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee"
    } else if (chn && chn === "sol") {
      localStorage.setItem(
        "tokenName",
        searchResponse?.token_info?.token_info_dex.token_symbol ?? "POPCAT",
      )
      token_id = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee"
    }

    const tokenId =
      (searchResponse?.token_info?.qoute_token
        ? searchResponse?.token_info?.pool_address
        : searchResponse?.token_info?.token_id ||
          searchResponse?.token_info?.token_id) ?? token_id

    let chain: string
    const quoteToken = searchResponse?.token_info?.qoute_token || ""
    const walletId = searchResponse?.token_info?.user_wallet_id || ""
    const token_id_org = searchResponse?.token_info?.token_id || ""
    const avgPrice = searchResponse?.token_info?.avgPrice || 0
    if (pathName.includes("/sol")) {
      chain = "sol"
    } else {
      chain = "eth"
    }
    const datafeed = createDataFeed(
      tokenId,
      chain,
      quoteToken,
      walletId,
      token_id_org,
    )
    const resolution: any =
      localStorage.getItem("tradingview.chart.lastUsedTimeBasedResolution") ||
      ""
    const properties: any = localStorage.getItem("tradingview.chartproperties")
    const mainProps: any = localStorage.getItem(
      "tradingview.chartproperties.mainSeriesProperties",
    )
    const chartProperties = properties ? JSON.parse(properties) : {}
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: props.symbol,
      datafeed: datafeed,
      interval: (resolution ? resolution : props.interval) as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      load_last_chart: props.load_last_chart,
      enabled_features: props.enabled_features,
      timezone: chartProperties?.timezone || props.timezone, // Use timezone from localStorage or fallback
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      theme: props.theme,
      time_frames: props.time_frames,
      custom_formatters: {
        priceFormatterFactory: (symbolInfo, minTick) => {
          if (symbolInfo === null) {
            return null
          }
          if (symbolInfo.format === "price") {
            return {
              format: (price, signPositive) => {
                return prettyNumber(price)
              },
            }
          }
          if (symbolInfo.format === "volume") {
            return {
              format: (price, signPositive) => {
                if (price >= 1000000000) {
                  return `${(price / 1000000000).toFixed(3)}B`
                }

                if (price >= 1000000) {
                  return `${(price / 1000000).toFixed(3)}M`
                }

                if (price >= 1000) {
                  return `${(price / 1000).toFixed(3)}K`
                }

                return price.toFixed(2)
              },
            }
          }

          return null // The default formatter will be used.
        },
      },
    }

    async function handleTrendLineSaving(requestData: any) {
      try {
          const data = await savingTrendLine(requestData || "");
      } catch (error) {
          console.error("Error saving trend line data:", error);
      }
  }

    const tvWidget = new widget(widgetOptions)
    tvWidget.onChartReady(() => {
      tvWidget.subscribe("drawing_event", (id: string, type: string) => {
        let temp: { sources: unknown[]; groups: unknown[] } | undefined

        const lineToolsState: any = tvWidget.activeChart().getLineToolsState()
        let localState = window.localStorage.getItem("tvWidgetLineToolsState")

        switch (type) {
          case "create":
            console.log(lineToolsState)
            if (localState === null || localState === undefined) {
              temp = {
                sources: Array.from(new Set([...lineToolsState.sources!])),
                groups: Array.from(new Set([...lineToolsState.groups!])),
              }
            } else {
              localState = JSON.parse(localState)
              const mapState: any = {
                groups: new Map(
                  (localState as unknown as LineToolsAndGroupsState).groups,
                ),
                sources: new Map(
                  (localState as unknown as LineToolsAndGroupsState).sources,
                ),
              }
              temp = {
                sources: Array.from(
                  new Set([...lineToolsState.sources!, ...mapState.sources!]),
                ),
                groups: Array.from(
                  new Set([...lineToolsState.groups!, ...mapState.groups!]),
                ),
              }
            }
            window.localStorage.setItem(
              "tvWidgetLineToolsState",
              JSON.stringify(temp),
            )
            try{
              const newLinesArray = Array.from(lineToolsState.sources.entries()).pop() as [string, any] | undefined;
              const newLinesObj: any = newLinesArray ? newLinesArray[1] : undefined;
              let requestDataTrendLine = {'token_id':token_id_org,'chain':chain,'x1':newLinesObj?.state?.points[0]?.time_t,
                'y1':newLinesObj?.state?.points[0]?.price,'x2':newLinesObj?.state?.points[1]?.time_t,
                'y2':newLinesObj?.state?.points[1]?.price, 'key':newLinesObj.id
              }
              if(isChecked){
                setSendingData(requestDataTrendLine)
                setIsPopupVisible(true)
              }
             
            }catch(e){
              console.log(e)
            }
            break

          case "remove":
            if(isChecked){
            try{
              if(id){
                let requestData = {'token_id':token_id_org,'chain':chain, 'key':id,'type':'delete'}
                handleTrendLineSaving(requestData);
              }
            }
            catch(e){
              console.log(e)
            }
          }
            if (localState === null || localState === undefined) {
              temp = {
                sources: Array.from(
                  new Set(
                    [...lineToolsState.sources!].filter(([key]) => key !== id),
                  ),
                ),
                groups: Array.from(
                  new Set(
                    [...lineToolsState.groups!].filter(([key]) => key !== id),
                  ),
                ),
              }
            } else {
              localState = JSON.parse(localState)
              const mapState: any = {
                groups: new Map(
                  (localState as unknown as LineToolsAndGroupsState).groups,
                ),
                sources: new Map(
                  (localState as unknown as LineToolsAndGroupsState).sources,
                ),
              }
              const filterSources = new Set(
                [...lineToolsState.sources!, ...mapState.sources!].filter(
                  ([key]) => key !== id,
                ),
              )
              const filterGroups = new Set(
                [...lineToolsState.groups!, ...mapState.groups!].filter(
                  ([key]) => key !== id,
                ),
              )
              temp = {
                sources: Array.from(filterSources),
                groups: Array.from(filterGroups),
              }
            }
            window.localStorage.setItem(
              "tvWidgetLineToolsState",
              JSON.stringify(temp),
            )
            break

          case "move":
            console.log("Line tools state====>", lineToolsState)
            break

          default:
            break
        }
      })

      let lineToolsState = window.localStorage.getItem("tvWidgetLineToolsState")
      if (lineToolsState) {
        lineToolsState = JSON.parse(lineToolsState)
        const mapState: LineToolsAndGroupsState = {
          groups: new Map(
            (lineToolsState as unknown as LineToolsAndGroupsState).groups,
          ),
          sources: new Map(
            (lineToolsState as unknown as LineToolsAndGroupsState).sources,
          ),
        }

        if (!mapState) return

        tvWidget
          .activeChart()
          .applyLineToolsState(mapState)
          .then(() => {
            console.log("Drawings state restored!", mapState)
          })
      }
      if (avgPrice) {
        const latestBarTime = tvWidget.activeChart().getVisibleRange().from

        tvWidget.activeChart().createShape(
          { price: avgPrice, time: latestBarTime },
          {
            shape: "horizontal_line",
            text: "Average Price",
            overrides: {
              linecolor: "#0000FF", // Blue color
              linewidth: 2,
              linestyle: 2, // Dotted line style
            },
            disableSave: true,
            lock: true,
          },
        )
      }
    })

    return () => {
      tvWidget.onChartReady(() => {
        // tvWidget.activeChart();
      })
      tvWidget.remove()
    }
  })

  return (
  <>
       <ToastContainer />
       {isPopupVisible && (
        <Modal isOpen={isPopupVisible} onOpenChange={(isOpen) => setIsPopupVisible(isOpen)}>
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Trend Line Alert Confirmation
                </ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    type="text"
                    label="Alert Title"
                    placeholder="Enter alert title"
                    value={alertTitle}
                    onChange={handleTitleChange}
                    className="max-w-xs"
                  />
                <Select
                    isRequired
                    label="Crossing"
                    defaultSelectedKeys={["Crossing Up"]}
                    className="max-w-xs"
                    onChange={handleChange}
                  >
                  <SelectItem key="Crossing Up" value="Crossing Up">
                    Crossing Up
                  </SelectItem>
                  <SelectItem key="Crossing Down" value="Crossing Down">
                    Crossing Down
                  </SelectItem>
                  </Select>
                  <p className="text-white">Alert will automatically expiry in 30days!</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={() => setAlertTitle("")}>
                    Clear
                  </Button>
                  <Button color="primary" onPress={onSave}>
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
        <div className="flex items-center justify-end">
          <span className="mr-2">Chart Alert</span>
          <Switch defaultSelected={isChecked} color="success" onChange={handleSwitchChange} />
        </div>
   <div ref={chartContainerRef} className={style.TVChartContainer} />
  </>)
 
}
