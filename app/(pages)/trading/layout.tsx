"use client"
import SearchContext from "@/app/context/SearchContext"
import { usePathname } from "next/navigation"
import React, { Suspense, useContext, useEffect, useState } from "react"
import { TradingLayoutProps } from "../../../config/interface"
import "./layout.css"

export default function TradingLayout({ children, data }: TradingLayoutProps) {
  const pathname = usePathname()
  const context = useContext(SearchContext)
  const { searchResponse, isTopSearchLoading } = context
  const [chainName, setChainName] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleSidebar = () => {
    setIsMinimized((prevState) => !prevState)
  }

  useEffect(() => {
    if (pathname.includes("trading/sol")) {
      setChainName("sol")
    } else if (pathname.includes("trading/eth")) {
      setChainName("eth")
    }
  })

  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
          <div className="main-content"> {children}</div>
      </Suspense>
    </React.Fragment>
  )
}
