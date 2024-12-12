const axios = require("axios");
const Decimal = require("decimal.js");

async function tokenAgeInfoAll(token_id, coin_name) {
  const token_id_dex_obj = {};
  

  try {
    let token_name = "",
      token_symbol = "",
      token_age = "",
      chain_id = "",
      token_fdv = "",
      token_price_usd = "",
      price_change_1_hour = "",
      price_change_24_hour = "",
      liquidity = "",
      price_change_5M = "",
      price_change_6_hour = "",
      dex_id = "",
      token_price_usd_org = "",
      liquidity_org = "",
      token_fdv_org = "",
      volume_24h_usd = "",
      chain_img = "";

    const url = `https://api.dexscreener.com/latest/dex/tokens/${token_id}`;
    const resp = await axios.get(url);
    const resp_json = resp.data;

    if (!resp_json.pairs) resp_json.pairs = [];

    if (resp_json.pairs.length > 0) {
      const baseToken = resp_json.pairs[0].baseToken || {};
      const quoteToken = resp_json.pairs[0].quoteToken || {};
      token_name = baseToken.name || "";
      token_symbol = baseToken.symbol || "";
      // token_id = (baseToken.address && !baseToken.address.startsWith('0x')) ? baseToken.address : token_id;
      if (baseToken.address && !baseToken.address.startsWith('0x')) {
        if (baseToken.address.toLowerCase() === token_id.toLowerCase()) {
          token_id = baseToken.address;
        } else if (quoteToken.address.toLowerCase() === token_id.toLowerCase()) {
          token_id = quoteToken.address;
          token_name = quoteToken.name || "";
          token_symbol = quoteToken.symbol || "";
        }
      }
      volume_24h_usd = shortPrice(resp_json.pairs[0].volume?.h24 || 0);
      chain_id = resp_json.pairs[0].chainId || "";
      token_fdv = shortPrice(resp_json.pairs[0].fdv || "");
      token_fdv_org = resp_json.pairs[0].fdv || "";

      token_price_usd = decimalValue(resp_json.pairs[0].priceUsd || 0);
      token_price_usd_org = resp_json.pairs[0].priceUsd || "";

      const priceChange = resp_json.pairs[0].priceChange || {};
      price_change_5M = priceChange.m5 || "";
      price_change_1_hour = priceChange.h1 || "";
      price_change_6_hour = priceChange.h6 || "";
      price_change_24_hour = priceChange.h24 || "";

      const pairCreatedAt = resp_json.pairs[0].pairCreatedAt || 0;
      const current_datetime = new Date();
      const created_date = new Date(pairCreatedAt);
      const days_difference =
        current_datetime.getTime() - created_date.getTime();
      
      token_age = dateTimeConversion(days_difference);

      liquidity_org = resp_json.pairs[0].liquidity?.usd || "";
      liquidity = shortPrice(liquidity_org);
    } else {
      const gecko_try = await getGekkoTerminalMetadata(token_id, coin_name);
      token_name = "";
      token_symbol = "";
      token_age = "";
      chain_id = "";
      token_fdv = gecko_try.fdv || "";
      token_price_usd = gecko_try.price_usd || "";
      price_change_1_hour = gecko_try.h1 || "";
      price_change_24_hour = gecko_try.h24 || "";
      liquidity = gecko_try.liquidity || "";
      price_change_5M = gecko_try.m5 || "";
      price_change_6_hour = gecko_try.h6 || "";
      token_price_usd_org = gecko_try.price_usd || "";
      liquidity_org = "";
      token_fdv_org = "";
    }
    token_id_dex_obj["token_id"] = token_id;
    token_id_dex_obj["token_name"] = token_name;
    token_id_dex_obj["token_symbol"] = token_symbol;
    token_id_dex_obj["token_age"] = token_age;
    token_id_dex_obj["chain_id"] = chain_id;
    token_id_dex_obj["token_fdv"] = token_fdv;
    token_id_dex_obj["token_price_usd"] = token_price_usd;
    token_id_dex_obj["price_change_1_hour"] = price_change_1_hour;
    token_id_dex_obj["price_change_24_hour"] = price_change_24_hour;
    token_id_dex_obj["liquidity"] = liquidity;
    token_id_dex_obj["liquidity_org"] = liquidity_org;
    token_id_dex_obj["token_fdv_org"] = token_fdv_org;
    token_id_dex_obj["price_change_5M"] = price_change_5M;
    token_id_dex_obj["dex_id"] = dex_id;
    token_id_dex_obj["price_change_6_hour"] = price_change_6_hour;
    token_id_dex_obj["token_price_usd_org"] = token_price_usd_org;
    
    token_id_dex_obj["volume_24h_usd"] = volume_24h_usd;
    token_id_dex_obj["chain_img"] = chain_img;

    try {
      websiteLink = resp_json.pairs[0].info.websites[0].url;
      resp_json.pairs[0].info.socials.forEach((link) => {
        if (link.type === "telegram") {
          telegramLink = link.url;
        }
        if (link.type === "twitter") {
          twitterLink = link.url;
        }
      });

      token_id_dex_obj["socials"] = {
        website_link: websiteLink,
        telegram_link: telegramLink,
        twitter_link: twitterLink,
      };
    } catch (e) {
      console.log(`Error in socials call: ${e}`);
      token_id_dex_obj["socials"] = {
        website_link: "",
        telegram_link: "",
        twitter_link: "",
      };
    }
  } catch (e) {
    console.log(`Error in Dexscreener API call: ${e}`);
  }
  return token_id_dex_obj;
}

// Helper functions that need to be defined in TSX:
function shortPrice(price) {
  try {
    if (typeof price === "string") {
      price = parseFloat(price.replace(/,/g, ""));
    } else if (price instanceof Decimal) {
      price = parseFloat(price.toString());
    }

    if (price === 0) {
      return 0;
    }
    if (!price || isNaN(price)) {
      return "";
    }

    let status = 0;
    if (price.toString().includes("-")) {
      price = parseFloat(price.toString().replace("-", ""));
      status = 1;
    }

    const suffixes = {
      1e6: "M",
      1e9: "B",
      1e12: "T",
    };
    const suffix_k = 1e3;
    const suffix_T = 1e12;
    const suffix_B = 1e9;
    const suffix_M = 1e6;
    const suffix_Q = 1e15;

    let modified_price;
    if (price >= suffix_Q) {
      modified_price = `${(price / suffix_Q).toFixed(2)}Q`;
    } else if (price >= suffix_T) {
      modified_price = `${(price / suffix_T).toFixed(2)}T`;
    } else if (price >= suffix_B) {
      modified_price = `${(price / suffix_B).toFixed(2)}B`;
    } else if (price >= suffix_M) {
      modified_price = `${(price / suffix_M).toFixed(2)}M`;
    } else if (price >= suffix_k) {
      modified_price = `${(price / suffix_k).toFixed(2)}K`;
    } else {
      modified_price = price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    if (status === 1) {
      modified_price = `-${modified_price}`;
    }
    return modified_price;
  } catch (e) {
    console.error(e);
    return price;
  }
}

function decimalValue(number, sellVal = false) {
  if (typeof number === "string") {
    number = parseFloat(number);
  }

  if (typeof number !== "number" || isNaN(number)) {
    console.error("Invalid input: Expected a number.", number);
    return "";
  }

  let value = number;
  try {
    if (number > 0.001) {
      if (sellVal) {
        if (number > 1) {
          value = number.toLocaleString(undefined, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          });
        } else {
          value = number.toLocaleString(undefined, {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          });
        }
      } else {
        value = number.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        });
      }
    } else if (number < 0) {
      value = number.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      });
    } else if (number !== 0) {
      const subscriptDict = {
        0: "₀",
        1: "₁",
        2: "₂",
        3: "₃",
        4: "₄",
        5: "₅",
        6: "₆",
        7: "₇",
        8: "₈",
        9: "₉",
      };
      const digits = number.toPrecision(30).split(".")[1] || "";
      const zerosCount = digits.length - digits.replace(/^0+/, "").length;
      let nonZero = "";
      for (const digit of digits) {
        if (nonZero.length >= 3) break;
        if (digit !== "0") {
          nonZero += digit;
        }
      }
      const subscriptInteger = zerosCount
        .toString()
        .split("")
        .map((digit) => subscriptDict[digit])
        .join("");
      value = `0.${subscriptInteger}${nonZero}`;
    }
  } catch (e) {
    console.error(`Error in decimalValue: ${e}`);
  }
  return value;
}

function dateTimeConversion(daysDifference) {
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const millisecondsInHour = 1000 * 60 * 60;
  const millisecondsInMinute = 1000 * 60;

  const daysAgo = Math.floor(daysDifference / millisecondsInDay);
  const hoursAgo = Math.floor(
    (daysDifference % millisecondsInDay) / millisecondsInHour,
  );
  const minutesAgo = Math.floor(
    (daysDifference % millisecondsInHour) / millisecondsInMinute,
  );

  if (daysAgo === 0) {
    if (hoursAgo === 0) {
      return `${minutesAgo} mins ago`;
    } else {
      return `${hoursAgo} hrs, ${minutesAgo} mins ago`;
    }
  } else {
    return `${daysAgo} days, ${hoursAgo} hrs, ${minutesAgo} mins ago`;
  }
}

function dateTimeConversion1(daysDifference) {
  if (daysDifference) {
    const timeMatch = daysDifference.match(
      /^\s*(\d+)\s*days\s*(\d+):(\d+):(\d+)\.(\d+)\s*$/,
    );

    if (timeMatch) {
      const daysAgo = parseInt(timeMatch[1]);
      const hoursAgo = parseInt(timeMatch[2]);
      const minutesAgo = parseInt(timeMatch[3]);
      // const seconds = parseInt(timeMatch[4]);
      // const milliseconds = parseInt(timeMatch[5]);

      let date;

      if (daysAgo === 0) {
        if (hoursAgo === 0) {
          date = `${minutesAgo} mins ago`;
        } else {
          date = `${hoursAgo} hrs, ${minutesAgo} mins ago`;
        }
      } else {
        date = `${daysAgo} days, ${hoursAgo} hrs, ${minutesAgo} mins ago`;
      }

      return date;
    }
  }

  return null;
}

async function getGekkoTerminalMetadata(token_id, coin_name) {
  // Implement your API call logic here
  return {
    fdv: "",
    price_usd: "",
    h1: "",
    h24: "",
    liquidity: "",
    m5: "",
    h6: "",
    volume_24: "",
  };
}

module.exports = { tokenAgeInfoAll };
