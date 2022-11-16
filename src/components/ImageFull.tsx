import { shimmer, toBase64 } from '@/utils/image-shimmer';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface FullImageProps extends ImageProps {
  caption?: string;
}

export default function FullImage({
  width,
  height,
  alt,
  caption,
  ...rest
}: FullImageProps) {
  return (
    <div className="container">
      <figure className="items-center justify-center not-prose">
          <Image
            className="full-width rounded-md"
            layout="raw"
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiwAAABXRUJQVlA4TCAAAAAvBYACEA8wgAM4gPMf8FDUthEb67j1LISL6H9QdflciQ=="
            {...rest}
          />
        <figcaption className="pt-2 text-sm text-center text-gray-500">
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}

