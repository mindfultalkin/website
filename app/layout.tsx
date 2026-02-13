import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Partytown } from "@builder.io/partytown/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://mindfultalk.in"),
  title: {
    default: "Mindfultalk - Turn Knowledge into Clear Communication",
    template: "%s | Mindfultalk",
  },
  description:
    "We help businesses turn complex knowledge into clear, actionable communication.",
  keywords: [
    "technical writing",
    "instructional design",
    "business communication",
    "corporate training",
    "documentation",
    "knowledge management",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Mindfultalk - Turn Knowledge into Clear Communication",
    description:
      "We help businesses turn complex knowledge into clear, actionable communication.",
    url: "https://mindfultalk.in",
    siteName: "Mindfultalk",
    images: [
      {
        url: "/mindfultalk_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindfultalk - Turn Knowledge into Clear Communication",
    description:
      "We help businesses turn complex knowledge into clear communication.",
    images: ["/mindfultalk_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Initialize Partytown safely */}
        <Partytown forward={["dataLayer.push"]} />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z3VC83WC0W"
          strategy="lazyOnload"
          type="text/partytown"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          type="text/partytown"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3VC83WC0W', {
              send_page_view: false,
              transport_type: 'beacon'
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
