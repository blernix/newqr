export default function PersonSchema() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://contact.killian-lecrut.com/#person',
    name: 'Killian Lecrut',
    givenName: 'Killian',
    familyName: 'Lecrut',
    jobTitle: 'Développeur Web Full-Stack',
    description: 'Développeur Web Full-Stack spécialisé en React, Next.js et Node.js. Créateur d\'expériences digitales innovantes.',
    url: 'https://contact.killian-lecrut.com',
    email: 'killian.lecrut@gmail.com',
    telephone: '+33641970383',

    // Lien vers ton agence
    worksFor: {
      '@type': 'ProfessionalService',
      '@id': 'https://killian-lecrut.com#organization',
      name: 'Agence Killian Lecrut',
      url: 'https://killian-lecrut.com',
      description: 'Agence web spécialisée dans la création de sites internet et d\'applications web sur-mesure.',
    },

    // Image de profil (à ajouter si tu as une photo)
    image: 'https://contact.killian-lecrut.com/logoK.png',

    // Tous tes liens sociaux et professionnels
    sameAs: [
      'https://www.linkedin.com/in/killian-lecrut-a80336176/',
      'https://github.com/blernix',
      'https://www.instagram.com/lct_kiki/',
      'https://killian-lecrut.com/',
      'https://www.malt.fr/profile/killianlecrut',
      'https://fr.fiverr.com/sellers/killianlecrut/',
    ],

    // Connaissances techniques (pour SEO)
    knowsAbout: [
      'Développement Web',
      'React',
      'Next.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Full-Stack Development',
      'Web Design',
      'UI/UX',
    ],

    // Adresse (si tu veux la mettre publique)
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melun',
      postalCode: '77000',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
