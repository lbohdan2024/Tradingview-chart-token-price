import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Providers } from "./providers"
import { TokenProvider } from "./(pages)/trading/TokenContext"
import { SearchProvider } from "./context/SearchContext"

import { siteConfig } from "@/config/site"
import AuthHeader from "@/components/header-auth"
import { ToastProvider } from "./context/ToastContext"
import Script from "next/script"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
  },
}
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
       {/* Google Analytics Script */}
      <Script
        strategy="beforeInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-30LVG9BH2W`}
      />
      <Script strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-30LVG9BH2W');
        `}
      </Script>
      <meta
        name="google-site-verification"
        content="37rt3aoUat38kaSdjF7r_nhMUH2wo48mr5pKUTZw0fk"
      />

      {/* Google Tag Manager */}
      <Script strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWTXSWQC');`}</Script>
      {/* End Google Tag Manager */}
      </head>
      <body className="dark">
        <Suspense fallback={<div>Loading...</div>}>
        <ToastProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <TokenProvider>
              <SearchProvider>
                <AuthHeader />
                <main className="main-container">{children}</main>
               
              </SearchProvider>
            </TokenProvider>
          </Providers>
          </ToastProvider>
        </Suspense>
      </body>
    </html>
  )
}
