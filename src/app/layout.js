import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "./components/AuroraBackground";
// 1. On importe le Toaster
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Killian Lecrut | Contact & Projets",
  description: "Retrouvez tous mes liens : portfolio, LinkedIn, GitHub et autres réseaux. Une carte de visite interactive pour me contacter et découvrir mon travail.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* 2. On ajoute le composant Toaster ici */}
        <Toaster position="top-center" />
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}