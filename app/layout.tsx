import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from 'next/script'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mindfultalk.in'),
  title: {
    default: "Mindfultalk - Turn Knowledge into Clear Communication",
    template: "%s | Mindfultalk"
  },
  description: "We help businesses turn complex knowledge into clear, actionable communication. From technical writing to instructional design, we make expertise accessible.",
  keywords: ["technical writing", "instructional design", "business communication", "corporate training", "documentation", "knowledge management"],
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Mindfultalk - Turn Knowledge into Clear Communication',
    description: 'We help businesses turn complex knowledge into clear, actionable communication. From technical writing to instructional design, we make expertise accessible.',
    url: 'https://mindfultalk.in',
    siteName: 'Mindfultalk',
    images: [
      {
        url: '/mindfultalk_logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindfultalk - Turn Knowledge into Clear Communication',
    description: 'We help businesses turn complex knowledge into clear, actionable communication.',
    images: ['/mindfultalk_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
