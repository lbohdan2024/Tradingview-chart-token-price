const paths = {
  login: "/login/",
  refresh_token: "/token/refresh/",
  validate_token: "/validate-token/",
  token_info: "/token_info_api/",
  reset_password: "",
  signup: "",
  ChainIdDataFeed: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr",
  sellbuy_pints: "/sellbuyPoints/",
  add_live_candle: "/addLiveCandles/",
  dexUrl: "https://api.dexscreener.com/latest/dex/tokens/",
  BoboTokenName: "Bobo the bear",
  DefaultTokenName: "POPCAT",
 
} as const;

type ApiPaths = (typeof paths)[keyof typeof paths]

export { paths }
export type { ApiPaths }
