import { shimmer, toBase64 } from '@/utils/image-shimmer';
import Image, { ImageProps } from 'next/image';
import React from 'react';

interface ExternalImageProps extends ImageProps {
  caption?: string;
}

export default function ExternalImage({
  width,
  height,
  alt,
  caption,
  ...rest
}: ExternalImageProps) {
  return (
    
    // <figure className="flex flex-col items-center justify-center not-prose">
    //   <span className="border rounded-md image-container">
    //     <Image
    //       objectFit="cover"
    //       objectPosition="center center"
    //       alt={alt}
    //       width={width}
    //       height={height}
    //       placeholder="blur"
    //       blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
    //       {...rest}
    //     />
    //   </span>
    //   <figcaption className="pt-0 text-sm text-center text-gray-500">
    //     {caption}
    //   </figcaption>
    // </figure>

    <div>
    <figure className="items-center justify-center not-prose">
        <Image
          className="full-width rounded-md"
          layout="raw"
          alt={alt}
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          {...rest}
        />
      <figcaption className="pt-2 text-sm text-center text-gray-500">
        {caption}
      </figcaption>
    </figure>
  </div>

  );
}
