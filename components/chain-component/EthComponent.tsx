"use client"
import dynamic from "next/dynamic"
import React, { useEffect, useState, useContext, useRef, useMemo } from "react"

import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "@/public/static/charting_library/charting_library"
import { useSearch } from "@/app/context/SearchContext"
const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  symbol: "WETHUSD",
  interval: "5" as ResolutionString,
  library_path: "/static/charting_library/",
  // charts_storage_url: "http://saveload.tradingview.com",
  charts_storage_api_version: "1.1",
  enabled_features: [
    "saveload_separate_drawings_storage",
    "side_toolbar_in_fullscreen_mode",
    "header_in_fullscreen_mode",
    "header_fullscreen_button",
    "save_chart_properties_to_local_storage",
    "use_localstorage_for_settings",
    "study_templates"
  ],
  load_last_chart: true,
  client_id: "tradingview.com",
  user_id: "public_user_id",
  auto_save_delay: 3,
  autosize: false,
  debug: false,
  theme: "dark",
  fullscreen: false,
  overrides: {
    "paneProperties.background": "#000001",
    "paneProperties.backgroundType": "solid",
  },
  locale: "en",
  time_frames: [
    //{ text: "5y", resolution: "1W" as ResolutionString },
    //{ text: "1y", resolution: "1W" as ResolutionString },
    //{ text: "6m", resolution: "120" as ResolutionString },
    { text: "3m", resolution: "60" as ResolutionString },
    { text: "1m", resolution: "30" as ResolutionString },
    { text: "5d", resolution: "5" as ResolutionString },
    { text: "1d", resolution: "1" as ResolutionString },
  ],
  custom_formatters: {
    priceFormatterFactory: (symbolInfo, minTick) => {
      if (symbolInfo === null) {
        return null
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

const TVChartContainer = React.memo(
  dynamic(
    () =>
      import("@/components/TVChartContainer").then(
        (mod) => mod.TVChartContainer,
      ),
    { ssr: false },
  ) as React.ComponentType<Partial<ChartingLibraryWidgetOptions>>,
)

export default function EthComponent() {
  const { searchResponse } = useSearch()
  const widgetProps = { ...defaultWidgetProps, searchResponse }

  return (
    <div className="page-section-gap">
      <TVChartContainer {...widgetProps} />
    </div>
  )
}
