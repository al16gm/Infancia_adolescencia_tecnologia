import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, CheckSquare, Sparkles, PhoneCall } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourceCardProps {
  resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.category) {
      case 'protocolo':
        return <FileText className="w-4 h-4 text-[#9A3412]" aria-hidden="true" />;
      case 'herramienta':
        return <CheckSquare className="w-4 h-4 text-[#2D4A3E]" aria-hidden="true" />;
      case 'guía':
        return <Sparkles className="w-4 h-4 text-[#1E3A8A]" aria-hidden="true" />;
      case 'ayuda':
        return <PhoneCall className="w-4 h-4 text-[#9A3412]" aria-hidden="true" />;
      default:
        return <FileText className="w-4 h-4 text-[#57534E]" aria-hidden="true" />;
    }
  };

  return (
    <article className="group flex flex-col justify-between p-6 bg-[#FFFFFF] border border-[#E7E2DA] rounded transition-all hover:border-[#C8BFB0] hover:shadow-xs">
      <div>
        <div className="flex items-center justify-between text-xs text-[#78716C] mb-3">
          <div className="flex items-center gap-1.5 uppercase font-medium tracking-wider text-[11px]">
            {getIcon()}
            <span>{resource.category}</span>
          </div>
          {resource.readTime && <span>{resource.readTime}</span>}
        </div>

        <h3 className="text-lg font-serif font-semibold text-[#1C1917] group-hover:text-[#9A3412] transition-colors leading-snug mb-2">
          <Link to={resource.href} className="focus-visible:outline-2 focus-visible:outline-[#9A3412]">
            {resource.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
          {resource.description}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-[#F2ECE1]">
        <Link
          to={resource.href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] group-hover:text-[#9A3412] transition-colors"
        >
          <span>Abrir recurso</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
