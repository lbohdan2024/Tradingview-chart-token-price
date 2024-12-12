"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import SpinnerLoading from "@/components/spinnerLoading"

export default function NotFound() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem("accessToken")

    if (!token) {
      router.replace("/login")
    } else {
      router.replace("/trading/eth")
    }
  }, [router])

  return isLoading ? <SpinnerLoading pageLoading={true} /> : null
}
