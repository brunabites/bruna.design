import React from 'react';

interface TooltipProps {
  link?: string;
  content?: string;
  title?: string;
}

export default function Tooltip({
  link,
  content
}: TooltipProps) {
  return (
    

    <span className="group relative underline decoration-2 decoration-slate-100 underline-offset-4 cursor-help">
        {link}
        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-teal-300 px-2 py-1 text-sm text-slate-900 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-teal-300 before:content-[''] group-hover:opacity-100">
            {content}
        </span>
    </span>

  );
}
