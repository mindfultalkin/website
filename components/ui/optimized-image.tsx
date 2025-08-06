import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ImageProps extends NextImageProps {
  wrapperClassName?: string
}

export default function Image({ wrapperClassName, className, ...props }: ImageProps) {
  return (
    <div className={cn('relative', wrapperClassName)}>
      <NextImage
        className={cn('object-cover', className)}
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 5%22%3E%3C/svg%3E'/%3E%3C/svg%3E"
        quality={75}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        priority={false}
        loading="lazy"
        {...props}
      />
    </div>
  )
}
