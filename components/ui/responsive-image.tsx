import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps extends Omit<NextImageProps, 'width' | 'height'> {
  wrapperClassName?: string;
  displayWidth: number;
  displayHeight: number;
}

export default function ResponsiveImage({ 
  wrapperClassName, 
  className, 
  displayWidth,
  displayHeight,
  ...props 
}: ResponsiveImageProps) {
  return (
    <div className={cn('relative', wrapperClassName)} style={{ 
      width: displayWidth,
      height: displayHeight,
    }}>
      <NextImage
        className={cn('object-cover', className)}
        width={displayWidth}
        height={displayHeight}
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 8 5%22%3E%3C/svg%3E'/%3E%3C/svg%3E"
        quality={75}
        sizes={`${displayWidth}px`}
        priority={false}
        loading="lazy"
        {...props}
      />
    </div>
  )
}
