import { ReactNode } from "react";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SwitchProps, useSwitch } from "@nextui-org/switch";

export interface Props {
  isMinimized: boolean
  toggleSidebar: () => void
}

export interface SelectedState {
  watchlistTab: string
  priceChangeInterval: string
  trendingTab: string
}

export interface tokenInfoData {
  token_info_dex?: Array<any>;
  token_info?: any;
  result: any;
  token_name: string;
  token_symbol: string;
  token_age: string;
  chain_id: number;
  token_fdv: string;
  token_price_usd: string | null;
  price_change_1_hour: string;
  price_change_24_hour: string;
  liquidity: string;
  liquidity_org: number;
  token_fdv_org: number;
  price_change_5M: string;
  dex_id: string;
  price_change_6_hour: string;
  token_price_usd_org: string;
  volume_24h_usd: string;
  uniswap_version: string | null;
  pool_address: string;
  pair_name: string;
  token_id: string;
  chain_name: string;
  twitter: string;
  telegram: string;
  website: string;
  tokenage: string;
}

export interface Item {
  key: string;
  label: string;
}

export interface ItemsProps {
  items?: Item[];
  data?: tokenInfoData | null;
}

export interface GoPlusSecurity {
  key: string;
  label: string;
}

export interface Tweet {
  tweet: string;
  account_name: string;
  account_url: string;
  created_datetime: string;
}

export interface TokenInfoDataBird {
  token_id: string;
  token_name: string;
  token_symbol: string;
  token_age: string;
  chain_id: string;
  token_fdv: string;
  token_fdv_org: string;
  token_price_usd: string;
  price_change_1_hour: string;
  price_change_24_hour: string;
  price_change_5M: string;
  price_change_6_hour: string;
  token_price_usd_org: string;
  liquidity: string;
  liquidity_org: string;
  dex_id: string;
  volume_24h_usd: string;
  socials?: {
    [key: string]: any;
  };
  chain_img: string;
}

export interface AutocompleteItemPropsBird extends TokenInfoDataBird {}

export interface TokenInfoData {
  token_info_dex?: Array<any>;
  result: any;
  token_name: string;
  token_symbol: string;
  token_age: string;
  chain_id: number;
  token_fdv: string;
  token_price_usd: string | null;
  price_change_1_hour: string;
  price_change_24_hour: string;
  liquidity: string;
  liquidity_org: number;
  token_fdv_org: number;
  price_change_5M: string;
  dex_id: string;
  price_change_6_hour: string;
  token_price_usd_org: string;
  volume_24h_usd: string;
  uniswap_version: string | null;
  pool_address: string;
  pair_name: string;
}

export interface TradingLayoutProps {
  children?: React.ReactNode;
  data?: TokenInfoData | null;
}

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export interface SearchContextType {
  searchResponse: any;
  setSearchResponse: React.Dispatch<React.SetStateAction<any>>;
}

export interface SearchProviderProps {
  children: ReactNode;
}
export interface Errors {
  walletName?: string;
  chain?: string;
}

export interface SummaryComponentProps {
  summaryInput: {
    token_id: string;
    chain: string;
    pool_address: string;
    token_age: string;
    priceUsd: string;
  };
  transactionsData: Transaction[];
}
export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export interface Wallet {
  default: boolean | undefined;
  t_wallet_id: string;
  t_wallet_name: string;
  t_wallet_address: string;
  type: string;
  exported: boolean;
  balance_eth: string;
  balance_sol: string;
}
export interface ExportWalletProps {
  walletAddress: string;
  walletId: string;
  subOrgId: string;
  chain: string;
}

export interface ErrorWallet {
  chain?: string;
  sendingwallet?: string;
  receivingWallets?: string;
  tokenType?: string;
  enter_amount?: string;
}

export interface CreateSubOrgData {
  subOrgName: string;
  walletName: string;
  user_name: string;
  email: string;
  appUrl: string;
}
export interface Point {
  time: number;
  price?: number;
  tn_time?: string;
}

export interface Mark {
  id: number;
  time: number;
  color: string;
  text: string[];
  label: string;
  labelFontColor: string;
  minSize: number;
}

export interface Transaction {
  created_at: string;
  tn_type: "BUY" | "SELL";
  price_usd: string;
  token_qty: string;
  tn_usd: string;
  Maker: string;
  transaction_hash: string;
  raw_created_at: string;
  raw_price_usd: number;
}

export interface SwapHistory {
  Address: string;
  tn_time: string;
  tn_value: string;
  buy_price: string;
  buy_token: string;
  sell_price: string;
  sell_token: string;
  id: string;
  chain: string;
  sell_value: string;
  buy_token_id: string;
  sell_token_id: string;
  Buy_Token_name: string;
  Sell_Token_name: string;
}
export interface Position {
  TokenName: string;
  token_id: string;
  balance_qty: string;
  position: number | string;
  price_up_down: number;
  realized_pnl: number;
  unrealized_pnl: number;
  icon: string;
  token_symbol: string;
  balance_qty_raw: string;
  price_up_down_raw: number;
  realized_pnl_raw: number;
  unrealized_pnl_raw: number;
  amount: string;
  balance: string;
  balance_raw: string;
}

export interface Tweet {
  tweet: string;
  account_name: string;
  account_url: string;
  created_datetime: string;
}

export interface PositionSolana {
  TokenName: string;
  token_id: string;
  balance_qty: string;
  position: number | string;
  price_pct_chg: number;
  realized_pnl: number;
  unrealized_pnl: number;
  icon: string;
  token_symbol: string;
  balance_qty_raw: string;
  price_pct_chg_raw: number;
  realized_pnl_raw: number;
  unrealized_pnl_raw: number;
  amount: string;
  balance: string;
  balance_raw: string;
}

export interface PathsTrans {
  transaction: string;
  transaction_solana: string;
}

export interface ApiResponse {
  data: {
    data: any[];
    recordsTotal: number;
  };
}

export interface TokenInfo {
  walletId: string;
  price_usd: string;
  tokenId: string;
}

export interface ApiResponsePosition<T> {
  data: {
    response_data1: T;
    response_data_all: T;
    response_data_filter: T;
    data: T;
    recordsTotal: number;
    rounded_realized_pnl_sum_all: string;
    rounded_un_realized_pnl_sum_all: string;
    rounded_realized_pnl_sum: string;
    rounded_un_realized_pnl_sum: string;
    position_sum: string;
    rounded_realized_pnl_sum_filter: string;
    rounded_un_realized_pnl_sum_filter: string;
    position_sum_filter : string
  };
}

export interface TokenInfoSwap {
  walletId: string;
  tokenId: string;
}

export interface ApiResponseSwap<T> {
  data: {
    data: T;
  };
}

export interface TradingButtonProps {
  chain: string;
  activeTab: string;
  isBuyActive: string;
  isBuyActiveReceive: string;
  isSellActive: string;
  slippage: string;
  isPriorityActive: string;
  priorityApi: boolean;
  priorityApiRes: {};
  priorityPrice: number;
  priorityPricedisplay: number;
  sellSendValue: {
    send: string;
    receive: number;
    send_qty: number;
  };
  copied: boolean;
  tokenData: any;
  isFetching: boolean;
  data: any;
  walletAddress: string;
}

export interface SendPrice {
  send: string;
  receive: number;
  send_qty: number;
}

export interface SellValue {
  eth: string;
  trump: string;
}

export interface PositionProgress {
  Address: string;
  tn_time: string;
  tn_value: string;
  buy_price: string;
  buy_token: string;
  sell_price: string;
  sell_token: string;
  id: string;
  chain: string;
  sell_value: string;
}
export interface Holders {
  address: string;
  token_balance: string;
  token_balanceUSD: string;
  total_balance: number | string;
  rank: string;
  EXP: string;
  percentage: string;
  address_label: string;
  pct_change_12h: string;
  pct_change_4h: string;
  pct_change_1h: string;
}

export interface PortfolioInterface {
  chain: string;
  change_pct_1h: number;
  change_pct_24h: number;
  change_pct_30d: number;
  liquidity: string;
  marketCap: string;
  price_1h: string;
  token_age: string;
  token_id: string;
  token_name: string;
  token_symbol: string;
  volume24: number;
  chain_raw: string;
  price_1h_raw: number;
  marketCap_raw: number;
  liquidity_raw: number;
  change_pct_1h_raw: number;
  change_pct_30h_raw: number;
  change_pct_24h_raw: number;
  volume24_raw: number;
}

export interface settings {
  slippage: string;
  defaultSlippage: boolean;
  buyAmount: string;
  expiration: string;
  expirationValue: string;
  defaultGas: string;
  defaultAntiMEV: boolean;
  defaultAutoApproval: boolean;
  // maxSellTax: string;
  // maxLiquidityPull: string;
  // defaultMaxBuyTax: string;
  defaultBribeAmount: string;
}

export interface positionWallets {
  TokenName: string;
  token_id: string;
  balance_qty: string;
  position: number | string;
  price_pct_chg: number;
  realized_pnl: number;
  unrealized_pnl: number;
  icon: string;
  token_symbol: string;
  balance_qty_raw: string;
  price_pct_chg_raw: number;
  realized_pnl_raw: number;
  unrealized_pnl_raw: number;
  amount: string;
  balance: string;
  balance_raw: string;
}

export interface tradeWallets {
  created_at: string;
  tn_type: "BUY" | "SELL";
  price_usd: string;
  token_qty: string;
  tn_usd: string;
  Maker: string;
  transaction_hash: string;
  raw_created_at: string;
  raw_price_usd: number;
  icon: string;
  token_id: string;
  chain: string;
  symbol: string;
}
// {'chain': 'sol', 'change_pct_1h': 0.0, 'change_pct_24h': 0.0, 'change_pct_30d': 0.0, 'liquidity': '601.62K', 'marketCap': '639.29M', 'price_1h': 0.0799109011013, 'token_age': 103, 'token_id': 'U4SiDvMFgCkB87oZM98sEmS5Wh2Wafb8yCbV8JCjUSy', 'token_name': 'Cristiano Ronaldo Fan Token', 'token_symbol': 'CR7', 'volume24': '0'}
export interface NewLaunchTokenProps {
  filterName: string;
  displayName: string;
  subName?: string;
}

export interface DiscoverChartProps {
  chain: string // Explicitly define the type of 'chain' as a string
  isMinimized: any
}

export interface walletInfo {
  chain: string
  balance: number
  isMinimized?: boolean;
}
