import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { BackToTop } from "@/components/back-to-top"
import { AutoColorTheme } from "@/components/color-theme"

export const metadata: Metadata = {
  title: "John Roy Geralde",
  description: "This is a modern, customizable smart home dashboard built with Next.js, React, and Tailwind CSS. It provides a beautiful interface to monitor and control smart home devices, view statistics, manage user profiles, and more.",
  generator: "John Roy Geralde",
  icons: {
    icon: "/images/portfolio.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Put font variables and antialiasing on html so they apply before hydration.
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      // Ensure a default brand so color theming is active before hydration.
      data-brand="blue"
    >
      <body className="font-sans">
        <ThemeProvider>
          <Suspense fallback={null}>
            <AutoColorTheme />
            {children}
            <BackToTop />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
