import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from 'next/script'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mindfultalk - Turn Knowledge into Clear Communication",
  description:
    "We help businesses turn complex knowledge into clear, actionable communication. From technical writing to instructional design, we make expertise accessible.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2BNGCYDFBC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2BNGCYDFBC');
        `}
      </Script>
      {/* suppressHydrationWarning avoids mismatches from extensions injecting attributes */}
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
