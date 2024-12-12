import {
  makeApiRequest,
  generateSymbol,
  parseFullSymbol,
  formatBars,
} from "./helpers.js";
// import { subscribeOnStream, unsubscribeFromStream } from "./streaming.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
let chain = params.get("chain");
let resolution = params.get("resolution");
console.log("✌️resolution --->", resolution);
let token_name = params.get("token_name");
let token_id = params.get("token_id");
let display_value = resolution;
let chartDataCache = [];
let subscriptions = new Map();
let quoteSubScriptions = [];
let lastBarsCache = new Map();
let recentData = {};
let allSymbols = [];

const configurationData = {
  supported_resolutions: [
    "1S",
    "1",
    "5",
    "15",
    "30",
    "60",
    "120",
    "240",
    "1D",
    "1W",
    "1M",
  ],
  supported_marks: true,
};

export default {
  onReady: (callback) => {
    console.log("[onReady]: Method call");
    setTimeout(() => callback(configurationData));
  },

  searchSymbols: async (
    userInput,
    exchange,
    symbolType,
    onResultReadyCallback,
  ) => {
    const symbols = userInput.toLowerCase() === "BTCUSD" ? ["BTCUSD"] : [];
    onResultReadyCallback(symbols);
  },

  resolveSymbol: async (
    symbolName,
    onSymbolResolvedCallback,
    onResolveErrorCallback,
  ) => {
    setTimeout(function () {
      let pricescale;
      try {
        if (priceFlag) {
          if (priceFlag[0]["close"] < 0.000000001) {
            pricescale = 1000000000000000;
          } else {
            pricescale = 100000000;
            console.log("else condition", pricescale);
          }
        }
      } catch (error) {
        pricescale = 100000000;
      }

      const symbolInfo = {
        ticker: token_name,
        name: token_name,
        description: token_name + "/" + token_name.toUpperCase(),
        timezone: "Etc/UTC",
        exchange: "eth".toUpperCase() + "_TEST1",
        minmov: 1,
        type: "crypto",
        session: "24x7",
        pricescale: pricescale,
        has_intraday: true,
        volume_precision: 8,
        data_status: "streaming",
      };
      onSymbolResolvedCallback(symbolInfo);
    }, 0);
  },

  getBars: async (
    symbolInfo,
    resolution,
    periodParams,
    onHistoryCallback,
    onErrorCallback,
  ) => {
    const { from, to, firstDataRequest } = periodParams;
    try {
      const chain_dict = { eth: 1, sol: 1399811149 };
      const chain_id = chain_dict[chain];
      const token_symbol = `${token_id}:${chain_id}`;
      // const getTokenInfo = `query {\n  getBars(\n    symbol: \"${token_symbol}\"\n    from: ${from}\n    to: ${to}\n    resolution: \"${resolution}\"\n    quoteToken: token1\n  ) {\n    o\n    h\n    l\n    c\n    v\n    volume\n  }\n}`;
      const getTokenInfo = `query {
        getBars(
          symbol: "${token_symbol}"
          from: ${from}
          to: ${to}
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
      }`;
      const getBarQuery = getTokenInfo;
      var data = await makeApiRequest({ getBarQuery });
      var formattedData = formatBars(data);
      console.log("✌️formattedData --->", formattedData);
      if (
        (data.Response && data.Response === "Error") ||
        formattedData.length === 0
      ) {
        // "noData" should be set if there is no data in the requested period.
        onHistoryCallback([], {
          noData: true,
        });
        return;
      }
      let bars = [];
      formattedData.forEach((bar) => {
        if (bar.time >= from && bar.time < to) {
          bars = [
            ...bars,
            {
              time: bar.time * 1000,
              low: bar.low,
              high: bar.high,
              open: bar.open,
              close: bar.close,
            },
          ];
        }
      });
      if (firstDataRequest) {
        lastBarsCache.set(symbolInfo.full_name, {
          ...bars[bars.length - 1],
        });
      }
      console.log(`[getBars]: returned ${bars.length} bar(s)`);
      onHistoryCallback(bars, {
        noData: false,
      });
      return;
    } catch (error) {
      console.log("[getBars]: Get error", error);
      onErrorCallback(error);
    }
  },

  subscribeBars: (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback,
  ) => {
    console.log(
      "[subscribeBars]: Method call with subscribeUID:",
      subscribeUID,
    );
    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscribeUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.full_name),
    );
  },

  unsubscribeBars: (subscriberUID) => {
    console.log(
      "[unsubscribeBars]: Method call with subscriberUID:",
      subscriberUID,
    );
    unsubscribeFromStream(subscriberUID);
  },
};
