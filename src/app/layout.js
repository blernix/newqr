import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "./components/AuroraBackground";
// 1. On importe le Toaster
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Killian Lecrut | Développeur Web Full-Stack",
  description: "Développeur Web Full-Stack spécialisé en React, Next.js et Node.js. Portfolio, LinkedIn, GitHub et contact professionnel.",
  keywords: ["Killian Lecrut", "Développeur Web", "Full-Stack", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Killian Lecrut" }],
  openGraph: {
    title: "Killian Lecrut | Développeur Web Full-Stack",
    description: "Développeur Web Full-Stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et contactez-moi.",
    type: "profile",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}