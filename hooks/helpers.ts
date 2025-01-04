import axios from "axios";
import apiClient from "@/app/utils/api/interceptor";
import { paths } from "@/config/config";
export const intervals: { [key: string]: string } = {
  "1": "1m",
  "3": "3m",
  "5": "5m",
  "15": "15m",
  "30": "30m",
  "60": "1h",
  "120": "2h",
  "240": "4h",
  "360": "6h",
  "480": "8h",
  "720": "12h",
  D: "1d",
  "1D": "1d",
  "3D": "3d",
  W: "1w",
  "1W": "1w",
  M: "1M",
  "1M": "1M",
};

// Make requests to CryptoCompare API
export async function makeApiRequest(getBarQuery: string, codexAPI: string) {
  try {
    const url = "https://graph.defined.fi/graphql";

    const headers = {
      "Content-type": "application/json",
      Authorization: codexAPI,
    };
    const data = {
      query: getBarQuery,
    };
    const response = await axios.post(url, data, { headers });

    return response.data;
  } catch (error: Error | any) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

export function formatBars(response: any) {
  const data = response.data;
  if (data && data.getBars) {
    var df = data.getBars;


    let dfArray = df.c.map((cValue: number, index: number) => ({
      c: cValue,
      v: df.v[index],
      h: df.h[index],
      l: df.l[index],
      o: df.o[index],
      t: df.t[index],
      s: df.s[index],
    }));

    // Filter the array to remove rows where either c or v is null
    // dfArray = dfArray.filter((row: any) => row.v !== null && row.c !== null && row.v > 0);

    // If needed, convert the filtered array back to the original structure
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
}

// Generate a symbol ID from a pair of the coins
export function generateSymbol(
  exchange: string,
  fromSymbol: string,
  toSymbol: string,
) {
  const short = `${fromSymbol}/${toSymbol}`;
  return {
    short,
    full: `${exchange}:${short}`,
  };
}

export function parseFullSymbol(fullSymbol: string) {
  const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);
  if (!match) {
    return null;
  }

  return {
    exchange: match[1],
    fromSymbol: match[2],
    toSymbol: match[3],
  };
}

export const checkInterval = (interval: string) => !!intervals[interval];

export async function getMarksFunc(walletId: string, tokenId: string) {
  try {
    const response = await apiClient.get(paths.sellbuy_pints, {
    
      params: { token_id: tokenId, wallet_id: walletId },
    });

    if (response) {
      return response.data;
    } else {
      console.log("I'm from chart module error");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function liveData(
  resolution: string,
  tokenId: string,
  lastCandleTime: string,
  lastCandleClosePrice: string,
) {

  try {
    const response = await apiClient.get(
      paths.add_live_candle, {
        params: { 
          token_id: tokenId, 
          resolution: resolution, 
          time: lastCandleTime, 
          last_close_price:lastCandleClosePrice 
        },
      }
    );
    
    if (response) {
      return response.data;
    } else {
      console.log("I'm from chart live update");
      return {};
    }
  } catch (error) {
    console.error(error);
  }
}

export async function savingTrendLine(requestData: string) {
  try {
    const response = await apiClient.get(paths.alertSavings, {
    
      params: requestData,
    });

    if (response) {
      return response.data;
    } else {
      console.log("I'm from chart module error");
    }
  } catch (error) {
    console.error(error);
  }
}

export const isObjectEmpty = (objectName: object) => {
  return Object.keys(objectName).length === 0
}
