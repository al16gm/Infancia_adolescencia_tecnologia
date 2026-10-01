import React from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  label?: string;
  className?: string;
}

export function PrintButton({
  label = 'Imprimir / Guardar en PDF',
  className = '',
}: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#44403C] bg-[#F5F2EB] hover:bg-[#EAE4D9] border border-[#DDD5C7] rounded transition-colors no-print focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917] ${className}`}
      title="Abre el cuadro de diálogo de impresión para guardar o imprimir"
    >
      <Printer className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
