import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  index: number;
}

export function TopicCard({ topic, index }: TopicCardProps) {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article className="group flex flex-col justify-between p-6 sm:p-7 bg-[#FFFFFF] border border-[#E7E2DA] rounded transition-all hover:border-[#C8BFB0] hover:shadow-xs">
      <div>
        <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#8C827A] mb-3">
          <span>{formattedIndex}</span>
          <span className="text-[11px] text-[#A89F95] font-sans">
            {topic.bookChapter}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#1C1917] group-hover:text-[#9A3412] transition-colors leading-snug tracking-tight mb-2">
          {topic.title}
        </h3>

        <p className="text-xs font-medium text-[#78716C] mb-3 italic">
          {topic.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
          {topic.intro}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-[#F2ECE1] flex items-center justify-between">
        <span className="text-xs text-[#8C827A]">
          {topic.whatWeKnow.length} puntos de evidencia
        </span>
        <Link
          to={`/temas/${topic.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] group-hover:text-[#9A3412] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
          aria-label={`Explorar tema: ${topic.title}`}
        >
          <span>Explorar</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
