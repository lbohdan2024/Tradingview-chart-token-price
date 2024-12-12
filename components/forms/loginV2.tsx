"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@nextui-org/button"
import { Eye, EyeOff } from "react-feather"
import * as Yup from "yup"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"

import { JwtPayload } from "jsonwebtoken"
import SpinnerLoading from "../spinnerLoading"

import FormInput from "./input/input"
import FormButton from "./button/button"

import apiClient from "@/app/utils/api/interceptor"
import { paths } from "@/config/config"
import { useToken } from "@/app/(pages)/trading/TokenContext"
import { Spinner } from "@nextui-org/react"
import { jwtDecode } from "jwt-decode"
import { useSDK } from "@metamask/sdk-react";


const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required")
    .email("Please enter a valid email"),
  password: Yup.string().required("Required"),
})

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [pageloading, setPageLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isExtensionError, setExtensionError] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const { tokenData, setTokenLoading } = useToken()
  const [showMmMsg, setShowMmMsg] = useState(false)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const { sdk } = useSDK();
  const [extensionErroMessage, setExtensionErrorMessage] = useState("Wallet Login Failed!")
  const [providerType, setProviderType] = useState("Wallet")
  const connectMetaMask = async () => {
    setProviderType("MetaMask")
    setLoading(true)
    setShowMmMsg(true)
    setExtensionError(false)
    const available = await sdk?.extensionActive
    
    try {
      if(!available){
        setLoading(false)
        setShowMmMsg(false)
        setExtensionError(true)
        setExtensionErrorMessage("Please install Metamask")
        return
      }
      const accounts = await sdk?.connect();
      
      if(!accounts){
        setLoading(false)
        setShowMmMsg(false)
        setExtensionError(true)
        return
      }
      const account = accounts?.[0]
      console.log("Connected account: ", account)
      const nonce = await handleProviderLogin("metamask", account)
      const nonce_msg = `Signing the message will prove that you own the account.Signing with nonce: ${nonce}`
      if (!nonce) {
        setExtensionErrorMessage("Failed to retrieve nonce!")
        throw new Error("Failed to retrieve nonce.")
      }

      try {
        const signature = await sdk?.connectAndSign({
          msg: nonce_msg,
        })
        console.log(signature)
        if (!signature) {
          setExtensionErrorMessage("Signature Verification Failed!")
          throw new Error("Failed to sign message.")
        }
        const response = await fetch(`${baseUrl}/verify-signature-eth/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet_address: account,
            signature,
            nonce_msg,
          }),
        })
  
        if (!response.ok) {
          setExtensionErrorMessage("Signature Verification2 Failed!")
          throw new Error("Login failed. Please try again.")
        }
  
        const data = await response.json()
  
        try {
          const decodedToken = jwtDecode(data.access) as JwtPayload & {
            wallet_created?: boolean
          }
          const wallet_created = decodedToken?.wallet_created || ""
          console.log("Wallet Address Exists:", wallet_created)
          localStorage.setItem("wallet_address", wallet_created.toString())
          localStorage.setItem("accessToken", data.access)
          localStorage.setItem("refreshToken", data.refresh)
          localStorage.setItem("chain", "eth")
          setTokenLoading(true)
          console.log("tokenData", tokenData)
          setLoading(false)
          setShowMmMsg(false)
          const walletAddressExists = wallet_created
          const redirectUrl = walletAddressExists
            ? "/trading/eth?search=0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee&chain=eth&token_name=Neiro&token_symbol=Neiro"
            : "/walletlogin"
          router.push(redirectUrl)
        } catch (error) {
          console.error("Error decoding JWT:", error)
        }
      } catch (err) {
        console.error(err)
        setExtensionErrorMessage("User denied signature request!")
        setExtensionError(true)
        setLoading(false)
        setShowMmMsg(false)
        throw err
      }
      
    } catch (error: any) {
      console.error("Error during MetaMask login:", error)
      setExtensionErrorMessage("Error during MetaMask login!")
      setExtensionError(true)
      setLoading(false)
      setShowMmMsg(false)

      if (error.code === -32002) {
        await sdk?.disconnect()
        setExtensionErrorMessage("MetaMask closed. Please reload.")
      } else if (error.code === 4001) {
        setExtensionErrorMessage("MetaMask request was denied.")
      } else {
        setExtensionErrorMessage(error.message || "An unexpected error occurred.")
      }
    }finally{
      setLoading(false)
      setShowMmMsg(false)
    }
  }

  const handlePhantomLogin = async () => {
    setProviderType("Phantom")
    setShowMmMsg(true)
    setLoading(true)
    setExtensionError(false)
    try {
      const providerType = "phantom"
      const provider = window.solana

      if (!provider?.isPhantom) {
        setExtensionError(true)
        setExtensionErrorMessage("Please install phantom")

        return
      }
      if (provider) {
        // Connect to Phantom Wallet
        const resp = await provider.connect()
        const walletAddress = provider.publicKey?.toString()

        // Step 1: Request a nonce from the server
        const nonceResponse = await fetch(`${baseUrl}/nonce/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ providerType, walletAddress }),
        })

        const { nonce } = await nonceResponse.json()

        console.log("Received nonce:", nonce)

        // Step 2: Sign the nonce using Phantom
        const message = `Signing the message will prove that you own the account.Signing with nonce: ${nonce}`
        const encodedMessage = new TextEncoder().encode(message)
        const signedMessage = await provider.signMessage(encodedMessage)

        const signature = signedMessage.signature
        const signatureBase64 = btoa(
          String.fromCharCode.apply(null, Array.from(signature)),
        )
        const publicKey = provider.publicKey?.toBase58()

        // Step 3: Verify the signature on the server
        const verifyResponse = await fetch(`${baseUrl}/verify-signature-sol/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet_address: walletAddress,
            signed_message: signatureBase64,
            public_key: publicKey,
          }),
        })

        if (!verifyResponse.ok) {
          throw new Error("Login failed")
        }
        // localStorage.clear()
        const data = await verifyResponse.json()
        try {
          const decodedToken = jwtDecode(data.access) as JwtPayload & {
            wallet_created?: boolean
          }
          const wallet_created = decodedToken?.wallet_created || ""
          console.log("Wallet Address Exists:", wallet_created)
          localStorage.setItem("wallet_address", wallet_created.toString())
          localStorage.setItem("accessToken", data.access)
          localStorage.setItem("refreshToken", data.refresh)
          localStorage.setItem("chain", "sol")
          setTokenLoading(true)
          console.log("tokenData", tokenData)
          setLoading(false)
          setShowMmMsg(false)
          // const walletAddressExists = wallet_created
          const redirectUrl = wallet_created
            ? "/trading/sol?search=7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr&chain=sol&token_name=POPCAT&token_symbol=POPCAT"
            : "/walletlogin"
          // const redirectUrl ="/walletlogin"
          router.push(redirectUrl)
        } catch (error) {
          console.error("Error decoding JWT:", error)
        }
      }
    } catch (error) {
      console.error("Error during Phantom login:", error)
      setShowMmMsg(false)
      setExtensionError(true)
      setLoading(false)
      setShowMmMsg(false)
    }
    finally{
      setLoading(false)
      setShowMmMsg(false)
      // setExtensionError(false)
    }
  }

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem("accessToken") || ""
      const refreshToken = localStorage.getItem("refreshToken") || ""

      if (!accessToken || !refreshToken) {
        setPageLoading(false)
        router.replace("/login")

        return
      }

      setPageLoading(true)
      setLoading(true)

      try {
        const isValid = await isValidToken(accessToken, refreshToken)

        if (isValid) {
          const chain = localStorage.getItem("chain")
          const eth = localStorage.getItem("eth_tokenId")
          const sol = localStorage.getItem("sol_tokenId")
          const tokenName = localStorage.getItem("tokenName")
          const tokenSymbol = localStorage.getItem("tokenSymbol")

          let url

          if (chain === "eth") {
            url = `/trading/eth?search=${eth}&chain=eth&token_name=${tokenName}&token_symbol=${tokenSymbol}`
          } else if (chain === "sol") {
            url = `/trading/sol?search=${sol}&chain=sol&token_name=${tokenName}&token_symbol=${tokenSymbol}`
          }

          if (url) {
            router.replace(url)
          }
        } else {
          router.replace("/login")
        }
      } catch (error) {
        console.error("Error validating token:", error)

        router.replace("/login")
      } finally {
        setPageLoading(false)
        setLoading(false)
      }
    }

    checkToken()
  }, [router])

  const handleLogin = async (username: string, password: string) => {
    setIsError(false)

    try {
      const response = await fetch(`${baseUrl}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }
      // localStorage.clear()
      const data = await response.json()

      localStorage.setItem("accessToken", data.access)
      localStorage.setItem("refreshToken", data.refresh)
      let chain = "eth"

      setTokenLoading(true)
      localStorage.setItem("chain", chain)
      //router.push(`/trading/${chain}`)
      router.push(`/trading/eth`)
    } catch (error) {
      setIsError(true)
      console.error("Error during login:", error)
      setLoading(false)
    }
  }

  const handleProviderLogin = async (
    providerType: string,
    walletAddress: string,
  ) => {
    try {
      // Fetch the nonce from the server
      const getNonce = await fetch(`${baseUrl}/nonce/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ providerType, walletAddress }),
      })

      // Check if the response is okay
      if (!getNonce.ok) {
        console.error("Failed to fetch nonce")

        return
      }

      // Parse the JSON response
      const nonceResponse = await getNonce.json()
      const nonce = nonceResponse?.nonce

      // Log the nonce for debugging
      console.log("Received nonce:", nonce)

      return nonce
    } catch (error) {
      console.error("Error during provider login:", error)
    }
  }

  async function isValidToken(accessToken: string, refreshToken: string) {
    try {
      const response = await apiClient.post(
        paths.validate_token,
        {
          accessToken,
          refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      if (response.data) {
        if (response.data?.message.includes("valid")) {
          return true
        }

        return false
      } else {
        return false
      }
    } catch (error) {
      console.error("Token validation error:", error)

      return false
    }
  }

  return (
    <React.Fragment>
      {loading && <SpinnerLoading pageLoading={false} />}
      {loading && showMmMsg ? (
        <h2 className="text-center text-primary">Signing in with {providerType}</h2>
      ) : null}
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleLogin(values.username, values.password)
          setLoading(true)
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className="form-vertical auth-form" onSubmit={handleSubmit}>
            <FormInput
              errorMessage={
                errors.username && touched.username ? (
                  <>{errors.username}</>
                ) : null
              }
              isInvalid={!!(errors.username && touched.username)}
              label="Your Email"
              labelPlacement="outside"
              name="username"
              placeholder="Username"
              size="sm"
              value={values.username}
              variant="bordered"
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormInput
              endContent={
                <Button
                  isIconOnly
                  className="password-toggle h-5 w-auto min-w-0 p-0"
                  variant="light"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeOff className="text-xl text-default-400 pointer-events-none" />
                  ) : (
                    <Eye className="text-xl text-default-400 pointer-events-none" />
                  )}
                </Button>
              }
              errorMessage={
                errors.password && touched.password ? (
                  <>{errors.password}</>
                ) : null
              }
              isInvalid={!!errors.password && touched.password}
              label="Password"
              name="password"
              placeholder="Enter your password"
              size="sm"
              type={isVisible ? "text" : "password"}
              value={values.password}
              variant="bordered"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className="text-end">
              <Link
                className="text-sm font-normal hover:underline text-primary-400"
                href={paths.reset_password}
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              {isError && (
                <p className="text-danger text-end">Invalid Credentials!</p>
              )}
              {isExtensionError && (
                <p className="text-danger text-end">{extensionErroMessage}</p>
              )}
              <div className="flex items-center space-x-4">
                <FormButton className="mr-2" color="primary" type="submit">
                  Sign In
                </FormButton>
                {!loading && !showMmMsg ? (
                  <>
                    <Image
                      alt=""
                      className="cursor-pointer mr-2"
                      height={25}
                      src="/images/metamask-logo.png"
                      width={25}
                      onClick={connectMetaMask}
                    />
                    <Image
                      alt=""
                      className="cursor-pointer rounded-full"
                      height={25}
                      src="/images/phantom-logo.svg"
                      width={25}
                      onClick={handlePhantomLogin}
                    />
                  </>
                ) : (
                  <Spinner size="sm" />
                )}
              </div>
            </div>
            <p className="text-sm font-light text-primary-400">
              Don't have an account yet?{" "}
              <Link className="font-semibold" href={paths.signup}>
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
