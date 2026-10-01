import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SourceLinkProps {
  title: string;
  url?: string;
  doi?: string;
  className?: string;
}

export function SourceLink({ title, url, doi, className = '' }: SourceLinkProps) {
  const targetUrl = url || (doi ? `https://doi.org/${doi}` : undefined);

  if (!targetUrl) {
    return (
      <span className={`text-xs text-[#57534E] italic ${className}`}>
        {title}
      </span>
    );
  }

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-xs text-[#1E3A8A] hover:underline underline-offset-2 ${className}`}
      title={`Abrir fuente original: ${title}`}
    >
      <span>{title}</span>
      <ExternalLink className="w-3 h-3 text-[#1E3A8A] shrink-0" aria-hidden="true" />
    </a>
  );
}
