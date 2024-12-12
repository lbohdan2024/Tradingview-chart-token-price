import axios from "axios";

// Make requests to CryptoCompare API
export async function makeApiRequest({ getBarQuery }) {
  try {
    const url = "https://graph.defined.fi/graphql";
    const headers = {
      "Content-type": "application/json",
      Authorization: "1ce137f114bd2bfe811fa7dd31941ad1f33a0ef2",
    };
    const data = {
      query: getBarQuery,
    };
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

export function formatBars(response) {
  const data = response.data;
  console.log("✌️data --->", data);
  if (data && data.getBars) {
    var df = data.getBars;
    console.log("✌️df --->", typeof df);

    // Remove rows with null/undefined values in 'v' and 'c'
    // df = df.filter((row) => row.v !== null && row.c !== null);

    let dfArray = df.c.map((cValue, index) => ({
      c: cValue,
      v: df.v[index],
      h: df.h[index],
      l: df.l[index],
      o: df.o[index],
      t: df.t[index],
      s: df.s[index],
    }));

    // Filter the array to remove rows where either c or v is null
    dfArray = dfArray.filter((row) => row.v !== null && row.c !== null);

    // If needed, convert the filtered array back to the original structure
    df = {
      c: dfArray.map((row) => row.c),
      v: dfArray.map((row) => row.v),
      h: dfArray.map((row) => row.h),
      l: dfArray.map((row) => row.l),
      o: dfArray.map((row) => row.o),
      t: dfArray.map((row) => row.t),
      s: dfArray.map((row) => row.s),
    };

    // Select only specific columns and rename them
    // df = df.map((row) => ({
    //   close: row.c,
    //   high: row.h,
    //   low: row.l,
    //   open: row.o,
    //   time: DateTime.fromSeconds(row.t).toMillis() / 1000,
    //   volume: row.v,
    // }));
    df = df.t.map((t, index) => ({
      close: df.c[index],
      high: df.h[index],
      low: df.l[index],
      open: df.o[index],
      time: t, // Assuming time in seconds; no need to divide by 1000
      volume: df.v[index],
      status: "ok", // Assuming you may want to keep 's' field.
    }));
  } else {
    df = [];
  }
  return df;
}

// Generate a symbol ID from a pair of the coins
export function generateSymbol(exchange, fromSymbol, toSymbol) {
  const short = `${fromSymbol}/${toSymbol}`;
  return {
    short,
    full: `${exchange}:${short}`,
  };
}

export function parseFullSymbol(fullSymbol) {
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
