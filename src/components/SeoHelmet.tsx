import { useEffect } from 'react';

interface SeoProps {
  title?: string;
  description?: string;
  type?: string;
  path?: string;
}

export function SeoHelmet({
  title,
  description = 'Infancia, adolescencia y tecnología sin alarmismo ni ingenuidad. Evidencia, recursos y criterios editoriales para acompañar entre los 6 y los 18 años.',
  type = 'website',
  path = '',
}: SeoProps) {
  const baseTitle = 'La generación que aprendió a preguntarle a una máquina';
  const fullTitle = title ? `${title} — ${baseTitle}` : baseTitle;
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
  const canonicalUrl = `${siteUrl}${path}`;

  useEffect(() => {
    // Document title
    document.title = fullTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // OpenGraph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [fullTitle, description, type, canonicalUrl]);

  return null;
}
