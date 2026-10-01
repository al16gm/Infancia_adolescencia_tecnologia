# La generación que aprendió a preguntarle a una máquina

> **Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad.**
> *Rigor por debajo. Sencillez por encima.*
> *Criterio antes que control.*

Plataforma web de la obra editorial y repositorio vivo de criterios, evidencia científica, herramientas familiares y protocolos urgentes para acompañar a niños y adolescentes entre los 6 y los 18 años.

---

## 1. Requisitos y stack técnico

- **Framework:** React 19 + TypeScript + Vite 8
- **Enrutamiento:** React Router DOM v7
- **Estilos:** Tailwind CSS v4 (con tipografía editorial Newsreader + Plus Jakarta Sans + JetBrains Mono)
- **Iconografía:** Lucide React
- **Almacenamiento del formulario:** Capa abstracta con soporte directo para Supabase (REST API sin dependencias propietarias) y modo de desarrollo local automático con `localStorage`.

---

## 2. Desarrollo local

Clona el repositorio e instala las dependencias:

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno (opcional en desarrollo)
cp .env.example .env

# 3. Iniciar el servidor de desarrollo en http://localhost:3000
npm run dev
```

---

## 3. Build de producción

Para compilar el proyecto optimizado para despliegue:

```bash
npm run build
```

Los archivos estáticos generados se ubicarán en `/dist`. Puedes previsualizar el bundle generado con:

```bash
npm run preview
```

---

## 4. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:

| Variable | Descripción | Valor por defecto / Ejemplo |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Dominio canónico del sitio para SEO y OpenGraph | `https://lageneracionqueaprendio.com` |
| `VITE_SUPABASE_URL` | URL del proyecto Supabase (opcional para desarrollo) | `https://xyzcompany.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Clave pública anónima de Supabase | `eyJhbGciOi...` |

> **Modo desarrollo local:** Si no configuras las credenciales de Supabase en `.env`, el formulario de interés por el libro **sigue funcionando perfectamente**: almacena los registros de prueba en el almacenamiento local del navegador (`localStorage`) y muestra un mensaje informativo en la consola, permitiendo probar el flujo completo sin requerir una cuenta en la nube.

---

## 5. Configuración de Supabase (Formulario del libro)

Para guardar en producción las direcciones de correo de las personas interesadas en recibir el aviso de disponibilidad:

1. Crea un proyecto gratuito en [supabase.com](https://supabase.com).
2. Ve a la pestaña **SQL Editor** y ejecuta el siguiente script para crear la tabla `book_interest` y configurar las directivas de seguridad **RLS (Row Level Security)**.

### SQL para tabla `book_interest` y RLS

```sql
-- 1. Crear la tabla book_interest
CREATE TABLE IF NOT EXISTS public.book_interest (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE public.book_interest ENABLE ROW LEVEL SECURITY;

-- 3. Política de inserción anónima: el frontend SOLO puede insertar registros
CREATE POLICY "Permitir inserción pública anónima"
ON public.book_interest
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Seguridad estricta: NO se crea política de SELECT, UPDATE o DELETE para 'anon'
-- Esto garantiza que desde la web nadie pueda listar los correos ni leer datos de otros usuarios.
```

3. Copia la URL del proyecto (`Project URL`) y la clave pública `anon public` desde **Project Settings > API**.
4. Pégalas en las variables de entorno de tu proveedor de hosting:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

---

## 6. Arquitectura del proyecto

```text
/
├── public/                 # Archivos públicos estáticos (robots.txt, sitemap.xml)
├── src/
│   ├── components/         # Componentes modulares reutilizables
│   │   ├── AgeBands.tsx            # Bloque de progresión 6-9, 10-13, 14-18
│   │   ├── BookCTA.tsx             # Llamada al libro (modal trigger)
│   │   ├── BookInterestForm.tsx    # Formulario validado con aviso a menores
│   │   ├── BookInterestModal.tsx   # Modal de disponibilidad ("Todavía no está disponible")
│   │   ├── Breadcrumbs.tsx         # Migas de pan accesibles
│   │   ├── EmergencyBanner.tsx     # Aviso de auxilio 112
│   │   ├── EmptyState.tsx          # Estados vacíos limpios
│   │   ├── EvidenceBadge.tsx       # Etiquetas tonales de evidencia (no semáforo)
│   │   ├── EvidenceCard.tsx        # Tarjeta de estudio científico
│   │   ├── Footer.tsx              # Pie editorial
│   │   ├── Header.tsx              # Cabecera con Top Bar Contract y menú móvil
│   │   ├── KnownUnknownBlock.tsx   # Bloque Qué sabemos vs Qué no sabemos
│   │   ├── LastReviewed.tsx        # Indicador de fecha de auditoría editorial
│   │   ├── PrintButton.tsx         # Botón de impresión limpia
│   │   ├── ResourceCard.tsx        # Tarjetas de herramientas
│   │   ├── SearchModal.tsx         # Buscador global cliente indexado
│   │   ├── SeoHelmet.tsx           # Gestor de metadatos SEO y OpenGraph
│   │   ├── ShareButton.tsx         # Compartir con Web Share API y portapapeles
│   │   ├── SourceLink.tsx          # Enlaces a fuentes sin romper
│   │   ├── TopicCard.tsx           # Tarjeta temática de los 11 ámbitos
│   │   └── UpdateCard.tsx          # Tarjeta de actualización del libro
│   ├── context/
│   │   └── BookModalContext.tsx    # Contexto global para abrir el modal desde cualquier botón
│   ├── data/               # Contenido editorial estructurado (separado de UI)
│   │   ├── evidence.ts             # Corpus de evidencia y fichas metodológicas
│   │   ├── helpLines.ts            # Teléfonos oficiales verificados en España
│   │   ├── resources.ts            # Recursos y herramientas
│   │   ├── topics.ts               # Los 11 temas con todo el copy editorial
│   │   └── updates.ts              # Historial de cambios posteriores al libro impreso
│   ├── lib/
│   │   ├── search.ts               # Motor de búsqueda client-side multipropósito
│   │   └── storage.ts              # Adaptador desacoplado para Supabase / localStorage
│   ├── pages/              # Vistas de rutas
│   │   ├── AboutPage.tsx           # Sobre el proyecto y manifiesto
│   │   ├── AiGuidePage.tsx         # Guía rápida de IA (Tutor antes que autor)
│   │   ├── BookInterestPage.tsx    # Página independiente de disponibilidad (/libro/avisame)
│   │   ├── BookPage.tsx            # Presentación de la obra y estructura en 7 partes
│   │   ├── ContactPage.tsx         # Formulario de contacto editorial con aviso de urgencia
│   │   ├── DigitalAgreementPage.tsx# Acuerdo digital para casa (imprimible)
│   │   ├── EvidenceDetailPage.tsx  # Ficha técnica pormenorizada de estudio
│   │   ├── EvidenceIndexPage.tsx   # Repositorio de evidencia con filtros y buscador
│   │   ├── HelpPage.tsx            # Ayuda inmediata en España (click-to-call)
│   │   ├── HomePage.tsx            # Portada editorial completa
│   │   ├── MethodologyPage.tsx     # Cómo evaluamos la evidencia científica
│   │   ├── NotFoundPage.tsx        # Error 404 sobrio
│   │   ├── PrivacyPage.tsx         # Política de privacidad RGPD con placeholders legales
│   │   ├── ProtocolsPage.tsx       # Protocolos de intervención paso a paso
│   │   ├── ResourcesIndexPage.tsx  # Directorio de recursos
│   │   ├── TopicDetailPage.tsx     # Ficha de tema con las 5 preguntas y evidencia
│   │   ├── TopicsIndexPage.tsx     # Índice de los 11 temas
│   │   ├── UpdateDetailPage.tsx    # Ficha comparativa de actualización
│   │   └── UpdatesIndexPage.tsx    # Capa viva del libro
│   ├── types/              # Interfaces TypeScript estrictas
│   │   └── index.ts
│   ├── App.tsx             # Enrutador principal y layout
│   ├── index.css           # Configuración Tailwind CSS v4 y estilos de impresión
│   └── main.tsx            # Punto de entrada de React
```

---

## 7. Guía de edición de contenidos

Todo el texto editorial está rigurosamente separado de los componentes React:

### Cómo añadir o editar un Tema
Edita `src/data/topics.ts`. Cada entrada incluye:
- `slug`: Identificador en la URL (ej. `/temas/redes-sociales`).
- `title`, `subtitle`, `editorialKicker`, `intro`.
- `fiveQuestions`: (Opcional) preguntas clave para calibrar el uso.
- `whatWeKnow`: Lista de puntos con evidencia sólida.
- `whatWeDontKnow`: Puntos en los que todavía hay incertidumbre científica.
- `recommendations`: Recomendaciones prudenciales para familias y centros.
- `ageGuidance`: Matices para 6–9, 10–13 y 14–18 años.
- `evidenceIds`: Enlace a las fichas de evidencia correspondientes.
- `bookChapter`: Referencia al capítulo del libro.

### Cómo añadir o actualizar una ficha de Evidencia
Edita `src/data/evidence.ts`. Cada ficha requiere:
- `evidenceLevel`: `'robusta'` | `'moderada'` | `'emergente'` | `'prudencial'`.
- `placeholder`: `true` si es una referencia en fase de carga previa a la impresión definitiva.
- `whatItStudied`, `mainFindings`, `limitations`, `usedFor`.

### Cómo añadir una Actualización
Edita `src/data/updates.ts`. Especifica el área temática, qué cambió, el estado previo y el nuevo estado consolidado. Si la lista se vacía, la interfaz muestra de forma elegante el estado de línea base fijado a **1 de octubre de 2026**.

### Cómo actualizar el directorio de Ayuda
Edita `src/data/helpLines.ts`. Los números están formateados para permitir llamada táctil directa en smartphones (`tel:017`). **Nunca inventes URLs**: solo incluye el campo `officialUrl` cuando se trate de un dominio institucional verificado de organismos públicos.

### Cómo completar los datos legales
En `src/pages/PrivacyPage.tsx` y `src/components/Footer.tsx`, sustituye los placeholders claramente marcados:
- `[RESPONSABLE LEGAL]`
- `[EMAIL DE PRIVACIDAD]`
- `[DOMINIO]`
- `[PROVEEDOR DE ALOJAMIENTO]`
- `[AUTOR / RESPONSABLE]`

---

## 8. Despliegue en producción

La aplicación compila a ficheros estáticos HTML/JS/CSS puros que pueden alojarse en cualquier servidor o CDN contemporáneo:

### Vercel / Netlify / Cloudflare Pages
1. Conecta el repositorio de GitHub.
2. Comando de build: `npm run build`
3. Directorio de salida: `dist`
4. Añade las variables de entorno en el panel del proveedor.

Para servidores tradicionales (Nginx / Apache), asegúrate de redirigir todas las peticiones a `index.html` para permitir el enrutamiento client-side de React Router:

```nginx
# Ejemplo para Nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

## 9. Exportar a GitHub

Para publicar este código en tu cuenta de GitHub:

```bash
# 1. Inicializar git si no lo está
git init

# 2. Añadir todos los ficheros
git add .

# 3. Crear el commit inicial
git commit -m "feat: versión inicial completa de La generación que aprendió a preguntarle a una máquina"

# 4. Vincular con tu repositorio remoto
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 5. Subir a GitHub
git push -u origin main
```

---

## 10. Licencia y derechos

© 2026 [AUTOR / RESPONSABLE]. Todos los derechos reservados.
Queda prohibida la reproducción no autorizada de los textos de la obra editorial.
