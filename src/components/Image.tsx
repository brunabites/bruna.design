import { shimmer, toBase64 } from '@/utils/image-shimmer';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface InternalImageProps extends ImageProps {
  caption?: string;
}

export default function InternalImage({
  width,
  height,
  alt,
  caption,
  ...rest
}: InternalImageProps) {
  return (
  <div className="full-width">
    <figure className="inner-bleed items-center justify-center not-prose">
        <Image
          className="rounded-md transition duration-300 ease-in-out bg-slate-200"
          layout="raw"
          alt={alt}
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          {...rest}
        />
      <figcaption className="pt-2 text-sm text-center text-slate-500">
        {caption}
      </figcaption>
    </figure>
  </div>
  );
}
