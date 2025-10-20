import Image from 'next/image'

interface BlogImageProps {
  src?: string
  alt?: string
}

export default function BlogImage({ src, alt }: BlogImageProps) {
  if (!src) return null

  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt || ''}
        width={800}
        height={450}
        className="rounded-xl border border-white/10 w-full h-auto"
        priority={false}
      />
      {alt && (
        <figcaption className="text-sm text-foreground-secondary text-center mt-2 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  )
}
