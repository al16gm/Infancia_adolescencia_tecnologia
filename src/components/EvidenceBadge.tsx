import React from 'react';
import { EvidenceLevel, SourceRole, evidenceLevelLabels, sourceRoleLabels } from '../data/evidence';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  sourceRole?: SourceRole;
  className?: string;
}

export function EvidenceBadge({ level, sourceRole, className = '' }: EvidenceBadgeProps) {
  if (level) {
    const config = {
      robusta: {
        label: evidenceLevelLabels.robusta,
        tone: 'text-[#1E3A8A] bg-[#EEF2F6] border-[#D9E2EC]',
      },
      moderada: {
        label: evidenceLevelLabels.moderada,
        tone: 'text-[#2D4A3E] bg-[#F0F4F1] border-[#DCE5DF]',
      },
      emergente: {
        label: evidenceLevelLabels.emergente,
        tone: 'text-[#8A5A1A] bg-[#FAF5EB] border-[#EDE4D0]',
      },
      prudencial: {
        label: evidenceLevelLabels.prudencial,
        tone: 'text-[#6B4E3D] bg-[#F7F2EE] border-[#E8DDD5]',
      },
    }[level];

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium border rounded ${config.tone} ${className}`}>
        {config.label}
      </span>
    );
  }

  // If level is null, use sourceRole
  const role = sourceRole || 'academic';
  const roleConfig = {
    academic: {
      label: sourceRoleLabels.academic,
      tone: 'text-[#334155] bg-[#F1F5F9] border-[#E2E8F0]',
    },
    official_data: {
      label: sourceRoleLabels.official_data,
      tone: 'text-[#0F766E] bg-[#F0FDFA] border-[#CCFBF1]',
    },
    policy: {
      label: sourceRoleLabels.policy,
      tone: 'text-[#4338CA] bg-[#EEF2FF] border-[#E0E7FF]',
    },
    guidance: {
      label: sourceRoleLabels.guidance,
      tone: 'text-[#57534E] bg-[#F5F5F4] border-[#E7E5E4]',
    },
    safety_resource: {
      label: sourceRoleLabels.safety_resource,
      tone: 'text-[#9A3412] bg-[#FFF7ED] border-[#FFEDD5]',
    },
    contextual: {
      label: sourceRoleLabels.contextual,
      tone: 'text-[#713F12] bg-[#FEFCE8] border-[#FEF08A]',
    },
  }[role] || {
    label: sourceRoleLabels[role] || 'Fuente documental',
    tone: 'text-[#44403C] bg-[#F5F5F4] border-[#E7E5E4]',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium border rounded ${roleConfig.tone} ${className}`}>
      {roleConfig.label}
    </span>
  );
}
