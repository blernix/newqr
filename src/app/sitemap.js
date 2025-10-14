// Génération automatique du sitemap pour le SEO
// Ce fichier est lu par Next.js et génère automatiquement sitemap.xml

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://contact.killian-lecrut.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
