"use client"
import { useEffect, useState } from "react"
import LoginForm from "@/components/forms/loginV2"
import { MetaMaskProvider } from "@metamask/sdk-react"

export default function Login() {
  const [loginPath, setLoginPath] = useState("")
  useEffect(() => {
    const url = window.location.href
    setLoginPath(url)
  })
  return (
    <div>
      <h1 className="h1">Sign in to your account</h1>
        <MetaMaskProvider
          sdkOptions={{
            dappMetadata: {
              name: "CE app",
              url: loginPath,
            },
            infuraAPIKey: process.env.NEXT_PUBLIC_MM_INFURA_KEY,
          }}
        >
          <LoginForm />
        </MetaMaskProvider>
    </div>
  )
}
