import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "./components/AuroraBackground";
import { Toaster } from "react-hot-toast";
import PersonSchema from "./components/PersonSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://contact.killian-lecrut.com"),
  title: "Killian Lecrut | Développeur Web Full-Stack - Contact & Liens",
  description: "Développeur Web Full-Stack spécialisé en React, Next.js et Node.js. Retrouvez tous mes liens professionnels : portfolio, LinkedIn, GitHub et contact.",
  keywords: [
    "Killian Lecrut",
    "Développeur Web",
    "Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Contact",
    "Agence Web",
  ],
  authors: [{ name: "Killian Lecrut" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Killian Lecrut | Développeur Web Full-Stack",
    description: "Développeur Web Full-Stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et contactez-moi.",
    url: 'https://contact.killian-lecrut.com',
    siteName: 'Killian Lecrut - Contact & Liens',
    images: [
      {
        url: '/logoK.png',
        width: 1200,
        height: 630,
        alt: "Killian Lecrut - Développeur Web Full-Stack",
      },
    ],
    locale: 'fr_FR',
    type: "profile",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Killian Lecrut | Développeur Web Full-Stack',
    description: 'Développeur Web Full-Stack spécialisé en React, Next.js et Node.js. Portfolio, LinkedIn, GitHub et contact.',
    images: ['/logoK.png'],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <PersonSchema />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" />
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}