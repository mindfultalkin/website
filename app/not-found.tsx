import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - Mindfultalk',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="max-w-xl p-8 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
