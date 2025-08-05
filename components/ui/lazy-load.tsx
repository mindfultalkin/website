import { Suspense } from 'react'

interface LazyLoadProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function LazyLoad({ children, fallback }: LazyLoadProps) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className="animate-pulse flex space-x-4 h-full w-full bg-gray-200 rounded" />
        )
      }
    >
      {children}
    </Suspense>
  )
}
