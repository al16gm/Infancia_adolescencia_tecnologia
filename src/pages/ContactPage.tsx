import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { AlertTriangle, CheckCircle2, Send, PhoneCall, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [motive, setMotive] = useState('Corrección o error');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const motives = [
    'Corrección o error',
    'Fuente o estudio bibliográfico',
    'Prensa o medios de comunicación',
    'Colaboración institucional o escolar',
    'Otro motivo editorial',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate sending through contact adapter (can be plugged into Supabase or mailer)
    setTimeout(() => {
      console.info('[Contacto] Mensaje preparado para envío:', { name, email, motive, message });
      setStatus('success');
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <SeoHelmet
        title="Contacto editorial"
        description="Contacto con el equipo editorial de La generación que aprendió a preguntarle a una máquina: aportación de fuentes, correcciones y colaboraciones."
        path="/contacto"
      />

      <Breadcrumbs items={[{ label: 'Contacto' }]} />

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-6">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
          Canal de comunicación institucional
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-3">
          Contacto con el equipo editorial
        </h1>
        <p className="text-base text-[#57534E] leading-relaxed">
          Para sugerir un estudio científico, señalar una errata, proponer colaboraciones pedagógicas o solicitudes de prensa.
        </p>
      </header>

      {/* Critical Urgent Notice */}
      <div className="p-4 sm:p-5 bg-[#FAF3F0] border-l-4 border-[#9A3412] rounded-r flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#9A3412] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            <strong className="text-[#1C1917]">Para situaciones personales urgentes:</strong> no utilices este formulario. Este buzón tiene fines editoriales y no está atendido las 24 horas por personal médico o policial.
          </div>
        </div>
        <Link
          to="/ayuda"
          className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#9A3412] hover:bg-[#7E2A0E] text-white text-xs font-semibold rounded transition-colors whitespace-nowrap"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Ir a Ayuda inmediata</span>
        </Link>
      </div>

      {/* Form */}
      <div className="bg-[#FFFFFF] border border-[#D6CEBE] rounded p-6 sm:p-8 shadow-xs">
        {status === 'success' ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-[#2D4A3E] mx-auto" />
            <h2 className="text-lg font-serif font-semibold text-[#1C1917]">
              Mensaje recibido
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
              Gracias por ponerte en contacto. Revisaremos tu mensaje o sugerencia editorial con la debida atención.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setMessage('');
                  setName('');
                  setEmail('');
                }}
                className="text-xs font-medium text-[#1C1917] underline underline-offset-2 hover:text-[#9A3412]"
              >
                Enviar otro mensaje
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-[#292524] mb-1">
                  Nombre o firma <span className="text-[#9A3412]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-[#292524] mb-1">
                  Correo electrónico <span className="text-[#9A3412]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-motive" className="block text-xs font-medium text-[#292524] mb-1">
                Motivo de contacto <span className="text-[#9A3412]">*</span>
              </label>
              <select
                id="contact-motive"
                value={motive}
                onChange={(e) => setMotive(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917]"
              >
                {motives.map((m, idx) => (
                  <option key={idx} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-[#292524] mb-1">
                Mensaje <span className="text-[#9A3412]">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe aquí tu consulta o aportación..."
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#1C1917] resize-y"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar consulta</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
