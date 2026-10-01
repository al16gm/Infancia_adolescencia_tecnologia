import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHelmet } from '../components/SeoHelmet';
import { AlertCircle, Shield, Check } from 'lucide-react';

export function PrivacyPage() {
  // Check if essential legal placeholders are still pending
  const hasPlaceholders = true; // In V1 templates, remains true until filled

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <SeoHelmet
        title="Política de privacidad"
        description="Información sobre el tratamiento de datos personales para el aviso de disponibilidad del libro y derechos del usuario según RGPD."
        path="/privacidad"
      />

      <Breadcrumbs items={[{ label: 'Política de privacidad' }]} />

      {/* Development Banner: Essential legal placeholders */}
      {hasPlaceholders && (
        <div className="p-4 bg-[#FFFBEB] border-l-4 border-[#D97706] rounded-r text-[#92400E] text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#D97706]" />
          <div>
            <strong className="font-semibold text-[#78350F]">Aviso de configuración legal:</strong>{' '}
            Completar información legal antes de producción. Los campos entre corchetes corresponden a datos de la entidad jurídica o responsable que deben ser fijados antes del lanzamiento definitivo.
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-[#E8E2D7] pb-6">
        <div className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
          Marco de protección de datos (RGPD)
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#1C1917] tracking-tight leading-tight mb-3">
          Política de privacidad
        </h1>
        <p className="text-xs sm:text-sm text-[#78716C]">
          Última actualización: 1 de octubre de 2026.
        </p>
      </header>

      {/* Main Privacy Text */}
      <div className="bg-[#FFFFFF] border border-[#E7E2DA] rounded p-6 sm:p-8 space-y-8 text-xs sm:text-sm text-[#44403C] leading-relaxed">
        {/* 1. Responsable del tratamiento */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            1. Responsable del tratamiento
          </h2>
          <p>
            El responsable del tratamiento de los datos recogidos en este sitio web es:{' '}
            <code className="bg-[#FAF3EB] px-2 py-0.5 rounded text-[#9A3412] font-mono font-semibold">
              [RESPONSABLE LEGAL]
            </code>
            , con domicilio en{' '}
            <code className="bg-[#FAF3EB] px-2 py-0.5 rounded text-[#9A3412] font-mono">
              [DIRECCIÓN POSTAL DEL RESPONSABLE]
            </code>{' '}
            y correo electrónico de contacto para cuestiones de protección de datos:{' '}
            <code className="bg-[#FAF3EB] px-2 py-0.5 rounded text-[#9A3412] font-mono font-semibold">
              [EMAIL DE PRIVACIDAD]
            </code>
            , accesible a través del dominio web{' '}
            <code className="bg-[#FAF3EB] px-2 py-0.5 rounded text-[#9A3412] font-mono">
              [DOMINIO]
            </code>
            .
          </p>
        </section>

        {/* 2. Qué datos recoge el formulario del libro */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            2. Qué datos recoge el formulario de interés por el libro
          </h2>
          <p>
            El formulario de disponibilidad del libro recoge exclusivamente los siguientes campos:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-[#1C1917]">
            <li><strong>Dirección de correo electrónico</strong> (facilitada por el propio usuario).</li>
            <li><strong>Comentario u opinión breve</strong> sobre la impresión general que le genera el proyecto editorial.</li>
            <li><strong>Fecha y hora del registro</strong> (timestamp técnico de inserción).</li>
          </ul>
          <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D7] rounded text-xs text-[#57534E]">
            <strong>Minimización estricta de datos:</strong> No solicitamos ni almacenamos nombre, apellidos, dirección física, número de teléfono, profesión ni datos personales o sensibles referentes a menores de edad.
          </div>
        </section>

        {/* 3. Finalidad del tratamiento */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            3. Finalidad del tratamiento
          </h2>
          <p>
            La única finalidad del tratamiento de estos datos es remitir un aviso por correo electrónico al usuario en el momento exacto en que el libro <em>La generación que aprendió a preguntarle a una máquina</em> se encuentre disponible para su adquisición o descarga.
          </p>
          <p>
            Los datos no se emplearán para el envío de boletines publicitarios periódicos, newsletters automáticas, publicidad de terceros ni perfilado comercial algorítmico.
          </p>
        </section>

        {/* 4. Base jurídica del tratamiento */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            4. Base jurídica
          </h2>
          <p>
            La base jurídica que legitima el tratamiento es el <strong>consentimiento explícito, libre e informado</strong> otorgado por el propio usuario al marcar activamente la casilla obligatoria del formulario (artículo 6.1.a del RGPD). El usuario tiene derecho a retirar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo.
          </p>
        </section>

        {/* 5. Conservación de los datos */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            5. Plazo de conservación
          </h2>
          <p>
            Los datos se conservarán exclusivamente hasta que se envíe la comunicación sobre la publicación del libro, momento en el cual serán eliminados o bloqueados conforme a las obligaciones legales de prescripción, o bien hasta que el interesado solicite expresamente su supresión previa.
          </p>
        </section>

        {/* 6. Proveedores y transferencias internacionales */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            6. Proveedores de servicios (Encargados de tratamiento)
          </h2>
          <p>
            Para el alojamiento de la web y el almacenamiento técnico de la base de datos se emplean servicios prestados por{' '}
            <code className="bg-[#FAF3EB] px-2 py-0.5 rounded text-[#9A3412] font-mono">
              [PROVEEDOR DE ALOJAMIENTO]
            </code>
            , garantizando que el almacenamiento cumple con las cláusulas contractuales tipo de la Unión Europea y el Reglamento General de Protección de Datos.
          </p>
        </section>

        {/* 7. Derechos del usuario */}
        <section className="space-y-2">
          <h2 className="text-base font-serif font-semibold text-[#1C1917]">
            7. Derechos del usuario
          </h2>
          <p>
            De conformidad con la normativa europea, puedes ejercer tus derechos de:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2 text-[#1C1917]">
            <li><strong>Acceso:</strong> conocer si estamos tratando tus datos y cuáles.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión («derecho al olvido»):</strong> solicitar la eliminación definitiva de tu dirección de correo electrónico de nuestros registros.</li>
            <li><strong>Limitación del tratamiento y Oposición:</strong> solicitar que suspendamos temporalmente el uso de tus datos.</li>
          </ul>
          <p className="pt-1">
            Para ejercer cualquiera de estos derechos, basta con enviar un mensaje indicando tu petición al correo electrónico{' '}
            <code className="bg-[#FAF3EB] px-2 py-0.5 rounded text-[#9A3412] font-mono">
              [EMAIL DE PRIVACIDAD]
            </code>
            . Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#1E3A8A] underline">www.aepd.es</a> si consideras que tus derechos no han sido debidamente atendidos.
          </p>
        </section>
      </div>
    </div>
  );
}
