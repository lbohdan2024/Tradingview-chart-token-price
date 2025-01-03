import React, { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation"
import {
  ChartingLibraryWidgetOptions,
  LanguageCode,
  LineToolsAndGroupsState,
  ResolutionString,
  widget,
  ISymbolValueFormatter,
  SymbolValueFormatterFormatOptions,
} from "@/public/static/charting_library"
import { loadLocalStorage, saveLocalStorage, removeLocalStorage } from "./SaveLoadDrawings";
import style from "./index.module.css"
import { DataFeed } from "@/hooks/ref_datafeed";
import { prettyNumber } from "../utils/chart-number"
import {
  savingTrendLine
} from  "@/hooks/helpers"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Switch, Select, SelectItem} from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {v6 as uuidv6} from "uuid";
import { IsPopupVisible } from "./isPopVisible";

interface TVChartContainerProps extends Partial<ChartingLibraryWidgetOptions> {
  searchResponse?: any
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
  const [chartTypes, setChartTypes] = useState('');

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
      if (alertTitle) {
        const updatedData = { ...sendingData, text: alertTitle, crossing: selectedValue };
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

  const pathName = usePathname();
  const search = useSearchParams();
  const chartContainerRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const getChartType = () => {
    let chartType = window.localStorage.getItem("tvChartType");
    let title;
    let content;

    if (chartType == 'marketcap') {
      title = 'Switch price chart';
      content = "Price / <span style='color: blue;'>Market Cap</span>";
    } else {
      title = 'Switch market cap chart';
      content = "<span style='color: blue;'>Price</span> / Market Cap";
    }
    return { chartType, title, content };
  };
  
  const priceFormatterFactory = (
    symbolInfo: any, 
    minTick: any
  ): ISymbolValueFormatter | null => {
    
    if (symbolInfo === null) {
      return null;
    }
    if (symbolInfo.format === "price") {
      return {
        format: (price: number, options?: SymbolValueFormatterFormatOptions) => {
          if (price >= 1000000000) {
            return `${(price / 1000000000).toFixed(2)}B`;
          }
  
          if (price >= 1000000) {
            return `${(price / 1000000).toFixed(2)}M`;
          }
  
          if (price >= 1000) {
            return `${(price / 1000).toFixed(2)}K`;
          }
  
          return prettyNumber(price);
        },
      };
    }
    if (symbolInfo.format === "volume") {
      return {
        format: (price: number, options?: SymbolValueFormatterFormatOptions) => {
          if (price >= 1000000000) {
            return `${(price / 1000000000).toFixed(3)}B`;
          }
  
          if (price >= 1000000) {
            return `${(price / 1000000).toFixed(3)}M`;
          }
  
          if (price >= 1000) {
            return `${(price / 1000).toFixed(3)}K`;
          }
  
          return price.toFixed(2);
        },
      };
    }
    return null;
  };

  // Load data from local storage
  let chn: string | null;
  let token_id: string;

  useEffect(() => {
    chn = localStorage.getItem("chain");
    token_id = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee";

    if (chn && chn === "eth") {
      localStorage.setItem(
        "tokenName",
        searchResponse?.token_info?.token_info_dex.token_symbol ?? "Neiro",
      );
      token_id = "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee";
    } else if (chn && chn === "sol") {
      localStorage.setItem(
        "tokenName",
        searchResponse?.token_info?.token_info_dex.token_symbol ?? "POPCAT",
      );
      token_id = "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr";
    }
  }, []);

  // ..
  useEffect(() => {
    const tokenId =
      (searchResponse?.token_info?.qoute_token
        ? searchResponse?.token_info?.pool_address
        : searchResponse?.token_info?.token_id ||
          searchResponse?.token_info?.token_id) ?? token_id

    let chain: string;

    const quoteToken = searchResponse?.token_info?.qoute_token || ""
    const walletId = searchResponse?.token_info?.user_wallet_id || ""
    const token_id_org = search.get("search") || tokenId
    const avgPrice = searchResponse?.token_info?.avgPrice || 0
    if (pathName.includes("/sol")) {
      chain = "sol"
    } else {
      chain = "eth"
    }

    const chartType = window.localStorage.getItem("tvChartType") || 'price';
    const datafeed = new DataFeed(
      tokenId,
      chain,
      chartType,
      quoteToken,
      walletId,
      token_id_org,
    );

    const resolution: string = localStorage.getItem("tradingview.chart.lastUsedTimeBasedResolution") || "";
    const properties: string | null = localStorage.getItem("tradingview.chartproperties");
    const mainProps: string | null = localStorage.getItem("tradingview.chartproperties.mainSeriesProperties");
    const chartProperties: { timezone?: string } = properties ? JSON.parse(properties) : {};
    
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: props.symbol,
      datafeed: datafeed,
      interval: (resolution ? resolution : props.interval) as ResolutionString,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale as LanguageCode,
      load_last_chart: props.load_last_chart,
      enabled_features: props.enabled_features,
      timezone: chartProperties?.timezone as ChartingLibraryWidgetOptions["timezone"] || props.timezone,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize,
      theme: props.theme,
      time_frames: props.time_frames,
      custom_formatters: {
        priceFormatterFactory: priceFormatterFactory, 
      },
    };

    // Chart type
    const tvWidget = new widget(widgetOptions);
    
    tvWidget.headerReady().then(() => {
      const { chartType, content, title } = getChartType();

      let button = tvWidget.createButton();
      button.setAttribute('title', title);
      button.innerHTML = content;
      button.addEventListener('click', function () {
        const chartType = window.localStorage.getItem("tvChartType");

        const switchType = chartType == 'marketcap' ? 'price' : 'marketcap';
        window.localStorage.setItem("tvChartType", switchType);

        let switchTitle;
        let switchContent;
        if (switchType == 'marketcap') {
          switchTitle = 'Switch price chart';
          switchContent = "Price / <span style='color: blue;'>Market Cap</span>";
        } else {
          switchTitle = 'Switch market cap chart';
          switchContent = "<span style='color: blue;'>Price</span> / Market Cap";
        }

        button.setAttribute('title', switchTitle);
        button.innerHTML = switchContent;
        setChartTypes(switchType);
      });
    });

    tvWidget.onChartReady(async () => {
      const load = await loadLocalStorage();
      if (load != undefined) {
        tvWidget
          .activeChart()
          .applyLineToolsState(load.states)
          .then(() => {
            console.log("Drawings state restored!", load.states)
          });
      }

      tvWidget.activeChart().reloadLineToolsFromServer();
      tvWidget.subscribe("drawing_event", async (id: string, type: string) => {
        let layoutId: string = "";
        let chartId: string | number = "";
        let drawings: LineToolsAndGroupsState;

        if (!load?.drawingsKey || load?.drawingsKey == undefined) {
          
          layoutId = uuidv6().slice(-12);
          tvWidget.save((layout: Partial<Record<string, []>>) => {
            if (!layout['charts']) return;
            chartId = layout['charts'][layout['charts'].length-1]['chartId']
          });

        } else {
          const keys = load.drawingsKey?.split('/');
          
          layoutId = keys![0]
          chartId =  keys![1]
        }

        drawings = tvWidget.activeChart().getLineToolsState();
        switch(type) {
          case "properties_changed":
          case "create":
          case "move":
          case "points_changed":
          case "click":
          case "show":
          case "hide":
            await saveLocalStorage(layoutId, chartId, drawings);
            break;

          case "remove":
            if(isChecked){
              try{
                if(id){
                  const requestData = {'token_id':token_id_org,'chain':chain, 'key':id,'type':'delete'};
                  handleTrendLineSaving(requestData);
                }
              }
              catch(e){
                console.log(e);
              }
            }
            drawings = tvWidget.activeChart().getLineToolsState();
            await removeLocalStorage(layoutId, chartId, drawings);
            break;

          default:
            break;
        };

        if (avgPrice) {
          const latestBarTime = tvWidget.activeChart().getVisibleRange().from;
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
          );
        }
      });
    });

    return () => {
      tvWidget.remove();
    };
  }, []);


  return (
    <>
      <ToastContainer />
      <IsPopupVisible 
        isPopupVisible={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
        alertTitle={alertTitle}
        setAlertTitle={setAlertTitle}
        onSave={onSave}
        onClose={onClose}
        handleChange={handleChange}
        handleTitleChange={handleTitleChange}
      /> 
      <div className="flex items-center justify-end">
        <span className="mr-2">Chart Alert</span>
        <Switch defaultSelected={isChecked} color="success" onChange={handleSwitchChange} />
      </div>
      <div ref={chartContainerRef} className={style.TVChartContainer} />
    </>
  );
};