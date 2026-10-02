import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import {
  getBookInterestSubmissions,
  deleteBookInterestSubmission,
  triggerCsvDownload,
  saveBookInterest,
} from '../lib/storage';
import { BookInterestSubmission } from '../types';
import {
  Download,
  Copy,
  Check,
  Trash2,
  Mail,
  Calendar,
  MessageSquare,
  Search,
  ShieldCheck,
  RefreshCw,
  PlusCircle,
  HelpCircle,
} from 'lucide-react';

export function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<BookInterestSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [copied, setCopied] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  const loadData = () => {
    setSubmissions(getBookInterestSubmissions());
  };

  useEffect(() => {
    loadData();
  }, []);

  const filtered = submissions.filter(
    (item) =>
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopyEmails = () => {
    const emails = submissions.map((s) => s.email).join(', ');
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleExportCsv = () => {
    triggerCsvDownload(submissions, `interesados-libro-${new Date().toISOString().slice(0, 10)}.csv`);
  };

  const handleDelete = (idOrIndex: string | number) => {
    if (window.confirm('¿Seguro que deseas eliminar este registro de prueba?')) {
      deleteBookInterestSubmission(idOrIndex);
      loadData();
    }
  };

  const handleCreateTest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !newComment) return;
    await saveBookInterest({ email: newEmail, comment: newComment });
    setNewEmail('');
    setNewComment('');
    setShowAddModal(false);
    loadData();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-left">
      <SeoHelmet
        title="Panel de Registros — Lectores interesados"
        description="Consulta y descarga la lista de personas que han solicitado aviso de disponibilidad del libro."
        path="/admin"
      />

      <Breadcrumbs
        items={[
          { label: 'El libro', href: '/libro' },
          { label: 'Panel de autor: Registros de interesados' },
        ]}
      />

      {/* Header */}
      <div className="border-b border-[#E8E2D7] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Área del autor y edición</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#1C1917] tracking-tight">
            Personas interesadas en el libro
          </h1>
          <p className="text-sm text-[#57534E] mt-1">
            Lectores que han dejado su correo y primeras impresiones para recibir el aviso de publicación.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={loadData}
            title="Refrescar lista"
            className="p-2.5 text-xs text-[#57534E] hover:text-[#1C1917] bg-[#FFFFFF] border border-[#DDD5C7] rounded hover:bg-[#F5EFE6] transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setShowHelp(!showHelp)}
            className="px-3 py-2 text-xs text-[#57534E] hover:text-[#1C1917] bg-[#FFFFFF] border border-[#DDD5C7] rounded hover:bg-[#F5EFE6] inline-flex items-center gap-1.5 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>¿Dónde se guardan?</span>
          </button>

          <button
            type="button"
            onClick={handleCopyEmails}
            disabled={submissions.length === 0}
            className="px-3.5 py-2 text-xs font-medium text-[#1C1917] bg-[#FFFFFF] border border-[#DDD5C7] rounded hover:bg-[#F5EFE6] inline-flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#2D4A3E]" />
                <span className="text-[#2D4A3E]">¡Copiados!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#78716C]" />
                <span>Copiar correos</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleExportCsv}
            disabled={submissions.length === 0}
            className="px-4 py-2 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333333] rounded inline-flex items-center gap-1.5 transition-colors shadow-xs disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar CSV (Excel)</span>
          </button>
        </div>
      </div>

      {/* Informational Callout: ¿Dónde se guardan los datos? */}
      {showHelp && (
        <div className="p-5 bg-[#FAF5F0] border border-[#E7DFD5] rounded text-xs sm:text-sm text-[#44403C] space-y-3">
          <h3 className="font-serif font-semibold text-base text-[#1C1917]">
            ¿Dónde se registra y cómo funciona la información?
          </h3>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>Almacenamiento de consulta directa:</strong> Cada vez que alguien envía el formulario en la web, el correo y su comentario se guardan en el almacenamiento estructurado y quedan accesibles al instante en este panel.
            </li>
            <li>
              <strong>Descarga en un clic (Excel / CSV):</strong> Al pulsar en <em>«Descargar CSV (Excel)»</em>, obtienes un archivo con codificación UTF-8 listo para importar en Microsoft Excel, Google Sheets o cualquier gestor de listas de correo (Mailchimp, Brevo, Gmail).
            </li>
            <li>
              <strong>Persistencia y sincronización externa:</strong> Si deseas que los registros se sincronicen además en tiempo real con una hoja de cálculo de Google Sheets o con Supabase, la aplicación ya incluye los adaptadores listos a través de las variables <code className="bg-[#EFEAE2] px-1 py-0.5 rounded font-mono text-xs">VITE_WEBHOOK_URL</code> o <code className="bg-[#EFEAE2] px-1 py-0.5 rounded font-mono text-xs">VITE_SUPABASE_URL</code>.
            </li>
          </ul>
        </div>
      )}

      {/* Stats and Filter bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-[#FFFFFF] border border-[#E7E2DA] rounded">
          <div className="text-xs uppercase tracking-wider text-[#78716C] font-semibold">
            Total interesados
          </div>
          <div className="text-3xl font-serif font-semibold text-[#1C1917] mt-1">
            {submissions.length}
          </div>
        </div>

        <div className="sm:col-span-2 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por correo o comentario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-[#FFFFFF] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#1C1917]"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2.5 text-xs font-medium text-[#1C1917] bg-[#F2EDE4] hover:bg-[#E5DFD4] rounded inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Añadir registro manual</span>
          </button>
        </div>
      </div>

      {/* Add Manual Modal */}
      {showAddModal && (
        <div className="p-5 bg-[#FFFFFF] border-2 border-[#1C1917] rounded space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-semibold text-base text-[#1C1917]">
              Añadir registro manual o de prueba
            </h3>
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="text-xs text-[#78716C] hover:text-[#1C1917]"
            >
              Cancelar
            </button>
          </div>
          <form onSubmit={handleCreateTest} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-[#44403C] mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                required
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#1C1917]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#44403C] mb-1">
                Comentario / Impresión
              </label>
              <textarea
                required
                rows={2}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Impresión sobre el proyecto editorial..."
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF8F5] border border-[#DDD5C7] rounded focus:outline-none focus:border-[#1C1917]"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium text-white bg-[#1C1917] hover:bg-[#333] rounded transition-colors"
            >
              Guardar registro
            </button>
          </form>
        </div>
      )}

      {/* Table or Empty State */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center bg-[#FFFFFF] border border-[#E7E2DA] rounded space-y-3">
          <Mail className="w-8 h-8 text-[#9A3412] mx-auto opacity-70" />
          <h3 className="font-serif text-lg font-medium text-[#1C1917]">
            {searchTerm ? 'No se han encontrado coincidencias' : 'Todavía no hay registros'}
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto">
            {searchTerm
              ? 'Prueba con otro término de búsqueda.'
              : 'Cuando los visitantes utilicen el formulario de aviso en la web, sus correos y opiniones aparecerán aquí inmediatamente.'}
          </p>
        </div>
      ) : (
        <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D7] bg-[#FAF8F5] text-[#57534E]">
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">
                    Fecha / Hora
                  </th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">
                    Correo electrónico
                  </th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">
                    Comentario / Impresión del lector
                  </th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider text-right">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2ECE1]">
                {filtered.map((item, idx) => {
                  const dateFormatted = new Date(item.createdAt).toLocaleString('es-ES', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  });

                  return (
                    <tr key={item.id || idx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                      <td className="py-3.5 px-4 text-xs text-[#78716C] whitespace-nowrap align-top">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 shrink-0 text-[#9A3412]" />
                          <span>{dateFormatted}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-[#1C1917] whitespace-nowrap align-top">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 shrink-0 text-[#78716C]" />
                          <a
                            href={`mailto:${item.email}`}
                            className="hover:underline text-[#1C1917]"
                          >
                            {item.email}
                          </a>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-[#44403C] leading-relaxed align-top">
                        <div className="flex items-start gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 shrink-0 text-[#78716C] mt-0.5" />
                          <p className="text-xs sm:text-sm break-words whitespace-pre-wrap">
                            {item.comment}
                          </p>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right align-top whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id || idx)}
                          title="Eliminar registro"
                          className="p-1.5 text-[#78716C] hover:text-[#9A3412] hover:bg-[#FAF3F0] rounded transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
