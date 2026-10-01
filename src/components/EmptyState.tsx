import React from 'react';
import { SearchX, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  icon?: 'search' | 'document';
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionText,
  actionHref,
  icon = 'document',
  className = '',
}: EmptyStateProps) {
  const IconComponent = icon === 'search' ? SearchX : FileText;

  return (
    <div
      className={`border border-[#E5DFD5] bg-[#FBF9F6] rounded p-8 sm:p-12 text-center max-w-xl mx-auto my-8 ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#EFEAE1] flex items-center justify-center mx-auto mb-4 text-[#78716C]">
        <IconComponent className="w-5 h-5" aria-hidden="true" />
      </div>
      <h3 className="text-base sm:text-lg font-serif font-medium text-[#1C1917] mb-2">{title}</h3>
      <p className="text-sm text-[#57534E] leading-relaxed mb-6 max-w-md mx-auto">{description}</p>
      {actionText && actionHref && (
        <Link
          to={actionHref}
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#1C1917] bg-[#EDE6DA] hover:bg-[#DFD6C6] rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
        >
          {actionText}
        </Link>
      )}
    </div>
  );
}
