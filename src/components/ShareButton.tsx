import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
}

export function ShareButton({
  title = 'La generación que aprendió a preguntarle a una máquina',
  text = 'Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad.',
  url,
  className = '',
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('No se pudo copiar el enlace:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#57534E] hover:text-[#1C1917] bg-[#F7F4EE] hover:bg-[#EBE5DA] border border-[#E0D8CB] rounded transition-colors no-print focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917] ${className}`}
      aria-label="Compartir esta página"
      title="Compartir o copiar enlace"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-[#2D4A3E]" aria-hidden="true" />
          <span className="text-[#2D4A3E] font-medium">Enlace copiado</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Compartir</span>
        </>
      )}
    </button>
  );
}
