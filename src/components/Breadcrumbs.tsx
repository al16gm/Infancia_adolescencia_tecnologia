import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Ruta de navegación"
      className={`text-xs text-[#78716C] mb-6 flex flex-wrap items-center gap-1.5 ${className}`}
    >
      <Link
        to="/"
        className="hover:text-[#1C1917] transition-colors underline-offset-2 hover:underline"
      >
        Inicio
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#A8A29E] shrink-0" aria-hidden="true" />
            {isLast || !item.href ? (
              <span className="text-[#1C1917] font-medium truncate max-w-[260px] sm:max-w-none" aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-[#1C1917] transition-colors underline-offset-2 hover:underline truncate max-w-[200px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
