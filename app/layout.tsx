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
import Script from "next/script"

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://johnroygeralde.vercel.app")

const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: "John Roy Geralde",
  description:
    "A web site regarding John Roy Geralde, Senior Software Engineer, Fullstack Web Developer, Odoo Developer",
  applicationName: "Job Portfolio",
  generator: "John Roy Geralde",
  authors: [{ name: "John Roy Geralde" }],
  creator: "John Roy Geralde",
  icons: {
    icon: [{ url: "/images/portfolio.png", type: "image/png" }],
    shortcut: "/images/portfolio.png",
    apple: "/images/portfolio.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "John Roy Geralde",
    description:
    "A web site regarding John Roy Geralde, Senior Software Engineer, Fullstack Web Developer, Odoo Developer",
    siteName: "John Roy Geralde",
    locale: "en_US",
    images: [
      {
        url: "/images/portfolio.png",
        width: 512,
        height: 512,
        alt: "John Roy Geralde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Roy Geralde",
    description:
    "A web site regarding John Roy Geralde, Senior Software Engineer, Fullstack Web Developer, Odoo Developer",
    images: ["/images/portfolio.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}/#website`,
        url: canonicalUrl,
        name: "Software Engineer, Fullstack Web Developer, Odoo Developer",
        description: metadata.description,
        inLanguage: "en",
        publisher: {
          "@type": "Person",
          name: "John Roy Geralde",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        url: canonicalUrl,
        name: "Software Engineer, Fullstack Web Developer, Odoo Developer",
        description: metadata.description,
        isPartOf: { "@id": `${canonicalUrl}/#website` },
        inLanguage: "en",
      },
    ],
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Put font variables and antialiasing on html so they apply before hydration.
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      // Ensure a default brand so color theming is active before hydration.
      data-brand="blue"
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CBQQW5VFDF"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CBQQW5VFDF');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
