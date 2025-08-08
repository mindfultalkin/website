import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { Partytown } from '@builder.io/partytown/react'
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
      <head>
        <Partytown
          forward={['dataLayer.push']}
        />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://www.mindfultalk.in" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload critical CSS */}
        <link 
          rel="preload" 
          href="/css/931b179cff3131dc.css" 
          as="style"
        />
        <link 
          rel="preload" 
          href="/css/fc6e52fa606dade6.css" 
          as="style"
        />
        <style>{`
          /* Critical CSS */
          body {
            background-attachment: fixed;
            background-image: radial-gradient(circle at 20% 80%, rgba(244, 140, 4, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(8, 148, 180, 0.05) 0%, transparent 50%);
          }
        `}</style>
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z3VC83WC0W"
        strategy="lazyOnload"
        type="text/partytown"
        defer
      />
      <Script 
        id="google-analytics" 
        strategy="lazyOnload"
        type="text/partytown"
        defer
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z3VC83WC0W', {
            send_page_view: false,  // Defer page view tracking
            transport_type: 'beacon'
          });
        `}
      </Script>
      {/* suppressHydrationWarning avoids mismatches from extensions injecting attributes */}
      <body className={inter.className} suppressHydrationWarning>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize CSS loading
              const preloadedStyles = document.querySelectorAll('link[rel="preload"][as="style"]');
              preloadedStyles.forEach(link => {
                link.rel = 'stylesheet';
              });
            `,
          }}
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  )
}
