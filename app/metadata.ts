import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://mindfultalk.in'),
    title: {
        default: 'Mindfultalk - Expert Technical Writing & Instructional Design Services',
        template: '%s | Mindfultalk - Professional Communication Services'
    },
    description: 'Mindfultalk provides expert technical writing, instructional design, and business communication services. Transform complex information into clear, actionable content with our professional documentation and training solutions.',
    keywords: [
        'technical writing services',
        'instructional design company',
        'business communication experts',
        'corporate training solutions',
        'documentation services india',
        'learning solutions provider',
        'technical documentation',
        'content development',
        'professional writing services',
        'training material development',
        'e-learning solutions',
        'knowledge management',
        'business documentation',
        'technical content writing',
        'corporate communications'
    ],
    authors: [{ name: 'Mindfultalk' }],
    creator: 'Mindfultalk',
    publisher: 'Mindfultalk',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
        other: [
            {
                rel: 'apple-touch-icon',
                url: '/mindfultalk_logo_circle.png',
                sizes: '180x180'
            },
            {
                rel: 'icon',
                type: 'image/png',
                url: '/mindfultalk_logo_circle.png',
                sizes: '32x32'
            },
            {
                rel: 'icon',
                type: 'image/png',
                url: '/mindfultalk_logo_circle.png',
                sizes: '16x16'
            }
        ]
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
        minimumScale: 1,
        userScalable: true,
    },
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' }
    ],
    manifest: '/manifest.json',
    verification: {
        google: 'M_h02D_VLIFXIyJ4XPSYyLglM_BkK6h2ZO5L09YbX28',
        other: {
            'msvalidate.01': 'Add-your-bing-verification-code-here'
        }
    },
    category: 'business',
    classification: 'Business & Professional Services',
    openGraph: {
        type: 'website',
        siteName: 'Mindfultalk',
        title: 'Mindfultalk - Expert Technical Writing & Instructional Design Services',
        description: 'Transform your business communication with professional technical writing, instructional design, and documentation services. Clear, effective, and engaging content solutions.',
        url: 'https://mindfultalk.in',
        locale: 'en_IN',
        images: [
            {
                url: '/mindfultalk_logo.png',
                width: 1200,
                height: 630,
                alt: 'Mindfultalk - Professional Communication Services'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@mindfultalk',
        creator: '@mindfultalk',
        title: 'Mindfultalk - Expert Technical Writing & Instructional Design Services',
        description: 'Professional technical writing, instructional design, and business communication services for clear, effective content.',
        images: ['/mindfultalk_logo.png']
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://mindfultalk.in',
        languages: {
            'en-US': 'https://mindfultalk.in/en-us',
            'en-IN': 'https://mindfultalk.in'
        }
    },
    applicationName: 'Mindfultalk',
    referrer: 'origin-when-cross-origin',
    keywords: ['technical writing', 'instructional design', 'business communication', 'corporate training', 'documentation services', 'professional writing', 'content development', 'training solutions', 'e-learning design', 'business documentation', 'technical documentation', 'corporate communications', 'learning solutions', 'knowledge management', 'content strategy'],
    authors: [
        { name: 'Mindfultalk', url: 'https://mindfultalk.in' }
    ],
    generator: 'Next.js',
    other: {
        'msapplication-TileColor': '#ffffff',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'format-detection': 'telephone=no'
    }
}
