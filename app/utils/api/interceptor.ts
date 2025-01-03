import axios from "axios"

import { paths } from "@/config/config"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken")

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`
  } else {
    handleLogout()
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    try {
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const refreshToken = localStorage.getItem("refreshToken")

        if (refreshToken) {
          try {
            const { data } = await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}${paths.refresh_token}`,
              {
                refresh: refreshToken,
              },
            )

            localStorage.setItem("accessToken", data.access)
            document.cookie = `accessToken=${data.access}; path=/; secure; samesite=strict`
            document.cookie = `refreshToken=${data.refresh}; path=/; secure; samesite=strict`
            originalRequest.headers["Authorization"] = `Bearer ${data.access}`

            return apiClient(originalRequest)
          } catch (err) {
            console.error("Refresh token is invalid, logging out...")
            handleLogout()
          }
        }
      } else if (error.response && error.response.status == 404) {
        return null
      } else if (originalRequest._retry) {
        window.location.href = "/login"
      }
    } catch (err) {
      // handleLogout()
      console.log("Error in interceptor", err)
    }

    return Promise.reject(error)
  },
)

export const handleLogout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter() // Hook is usable only inside components

  // const abortControllerRef = useRef(new AbortController())
  // abortControllerRef.current.abort()
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
  // router.replace("/login") // Programmatic navigation
  window.location.href = "/login"
}

export default apiClient
