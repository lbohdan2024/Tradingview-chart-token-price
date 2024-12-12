"use client"

import { createContext, useContext, useState } from "react"

const TokenContext = createContext()

export const TokenProvider = ({ children }) => {
  const [tokenData, setTokenData] = useState({})
  const [isTokenLoading, setTokenLoading] = useState(true)
  const [summaryDataTweet, setSummaryDataTweet] = useState()
  const [tokenMarketData, setTokenMarketData] = useState()
  const [transactionsData, setTransactionsData] = useState({})
  const [pricePercentage, setPricePercentage] = useState()
  const [isTransaction, setIsTransaction] = useState(false)
  const [iswatchlistLoad, setIsWatchlist] = useState(false)
  const [isRemovewatchlistLoad, setIsRemoveWatchlist] = useState(false)
  const [positionData, setPositionData] = useState(false)

  return (
    <TokenContext.Provider
      value={{
        tokenData,
        setTokenData,
        isTokenLoading,
        setTokenLoading,
        summaryDataTweet,
        setSummaryDataTweet,
        tokenMarketData,
        setTokenMarketData,
        transactionsData,
        setTransactionsData,
        pricePercentage,
        setPricePercentage,
        isTransaction,
        setIsTransaction,
        setIsWatchlist,
        iswatchlistLoad,
        setIsRemoveWatchlist,
        isRemovewatchlistLoad,
        positionData,
        setPositionData,
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}

export const useToken = () => useContext(TokenContext)
