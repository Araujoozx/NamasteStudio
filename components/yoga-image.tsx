'use client'

import Image from "next/image"

interface YogaImageProps {
  src: string
  alt: string
  fallbackImage: string
}

export default function YogaImage({ src, alt, fallbackImage }: YogaImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 hover:scale-110"
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = fallbackImage
      }}
    />
  )
} 