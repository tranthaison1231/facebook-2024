import { useState, forwardRef } from 'react'

import noImage from '@/assets/images/no-image.png'

interface ImageProps {
  src: string
  alt: string
  className?: string
  fallback?: string
  children?: React.ReactNode
}

function Image(
  { src, alt, className, children, fallback = noImage, ...props }: ImageProps,
  ref: React.Ref<HTMLImageElement>
) {
  const [fallbackSrc, setFallbackSrc] = useState('')
  const handleError = () => setFallbackSrc(fallback)
  return (
    <div className="relative">
      <img ref={ref} src={fallbackSrc || src} alt={alt} {...props} onError={handleError} className={className} />
      {children}
    </div>
  )
}

export default forwardRef(Image)
