import React from 'react';
import { EvidenceLevel } from '../types';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  className?: string;
}

export function EvidenceBadge({ level, className = '' }: EvidenceBadgeProps) {
  const config = {
    robusta: {
      label: 'Evidencia robusta',
      tone: 'text-[#1E3A8A] bg-[#EEF2F6] border-[#D9E2EC]',
    },
    moderada: {
      label: 'Evidencia moderada',
      tone: 'text-[#2D4A3E] bg-[#F0F4F1] border-[#DCE5DF]',
    },
    emergente: {
      label: 'Evidencia emergente',
      tone: 'text-[#8A5A1A] bg-[#FAF5EB] border-[#EDE4D0]',
    },
    prudencial: {
      label: 'Recomendación prudencial',
      tone: 'text-[#6B4E3D] bg-[#F7F2EE] border-[#E8DDD5]',
    },
  }[level] || {
    label: level,
    tone: 'text-[#44403C] bg-[#F5F5F4] border-[#E7E5E4]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium border rounded ${config.tone} ${className}`}
    >
      {config.label}
    </span>
  );
}
