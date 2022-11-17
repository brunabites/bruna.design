import React from 'react';

export default function LocalVideo({
     src,
     title
    }: { src: string; title: string }) {
  
return (
    <div className="text-center text-white h-auto md:h-full w-full md:w-auto">
        <video playsInline 
        className="rounded"
        aria-label={title}
        src={src}
        />
    </div>
  );
}