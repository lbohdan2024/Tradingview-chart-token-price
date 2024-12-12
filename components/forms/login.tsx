"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import { Eye, EyeOff } from "react-feather"
import * as Yup from "yup"
import { Form, Formik } from "formik"
import { useRouter } from "next/navigation"

import SpinnerLoading from "../spinnerLoading"

import FormInput from "./input/input"
import FormButton from "./button/button"

import apiClient from "@/app/utils/api/interceptor"
import { paths } from "@/config/config"
import { useToken } from "@/app/(pages)/trading/TokenContext"

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
  const toggleVisibility = () => setIsVisible(!isVisible)
  const { setTokenLoading } = useToken()

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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

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
      router.push(`/trading/${chain}`)
    } catch (error) {
      setIsError(true)
      console.error("Error during login:", error)
      setLoading(false)
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
              <FormButton color="primary" type="submit">
                Sign In
              </FormButton>
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
