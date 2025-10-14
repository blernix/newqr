// Génération automatique du sitemap pour le SEO
// Ce fichier est lu par Next.js et génère automatiquement sitemap.xml

export default function sitemap() {
  const baseUrl = 'https://contact.killian-lecrut.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
