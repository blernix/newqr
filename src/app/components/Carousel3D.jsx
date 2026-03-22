"use client";

import { Briefcase, Instagram, Linkedin, Send, Bitcoin, Copy, Github, Mail, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';
import AddContactButton from './AddContactButton';

const professionalLinks = [
  {
    title: 'Mon agence',
    description: 'Découvrez mes services',
    icon: <Briefcase size={24} />,
    url: 'https://killian-lecrut.com/',
  },
  {
    title: 'LinkedIn',
    description: 'Mon profil professionnel',
    icon: <Linkedin size={24} />,
    url: 'https://www.linkedin.com/in/killian-lecrut-a80336176/',
  },
  {
    title: 'GitHub',
    description: 'Mes projets open source',
    icon: <Github size={24} />,
    url: 'https://github.com/blernix',
  },
  {
    title: 'Contact',
    description: 'Envoyez-moi un email',
    icon: <Mail size={24} />,
    url: 'mailto:killian.lecrut@gmail.com',
  },
];

const personalLinks = [
  {
    title: 'Instagram',
    icon: <Instagram size={20} />,
    url: 'https://www.instagram.com/lct_kiki/',
  },
  {
    title: 'PayPal',
    icon: <Send size={20} />,
    url: 'https://www.paypal.com/paypalme/webcreater',
  },
  {
    title: 'Stripe',
    icon: <CreditCard size={20} />,
    url: 'https://buy.stripe.com/3cI9ATcwL8pEeskbUE2sM02',
  },
  {
    title: 'BTC',
    icon: <Bitcoin size={20} />,
    isCrypto: true,
    address: 'bc1qhdj09ms9gehzkrt5vs7cv66k4pakh4l4qdnup0',
  },
  {
    title: 'ETH',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid" className="fill-current"><path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z M127.962 312.187l-1.586 1.92v92.23l1.586 10.66 127.96-212.32z"/></svg>,
    isCrypto: true,
    address: '0x6957a72016c295081Ae1f5f831889CCa0bF16263',
  },
];

export function Carousel3D() {
  const handleCopy = (address, title) => {
    navigator.clipboard.writeText(address).then(() => {
      toast.success(`Adresse ${title} copiée !`, {
        style: {
          background: '#0066FF',
          color: '#FFFFFF',
          border: '1px solid #0066FF',
        },
      });
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }).catch(() => {
      toast.error("Erreur lors de la copie.");
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#0A0A0A]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      {/* Blue accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0066FF]" />

      <div className="relative z-10 w-full max-w-2xl mx-auto space-y-12">

        {/* Header Profile */}
        <div className="text-center space-y-8">
          {/* Avatar Swiss Clean Dark */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto border-4 border-[#2A2A2A] bg-[#1A1A1A] p-1 transition-all duration-300 hover:border-[#0066FF]">
              <img
                src="/profil-killian.png"
                alt="Killian Lecrut"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Nom et Titre */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-light tracking-[-0.02em] text-[#FAFAFA]">
              Killian Lecrut
            </h1>
            <div className="inline-block px-4 py-1 border border-[#2A2A2A] bg-[#1A1A1A]">
              <p className="text-sm text-[#999999] uppercase tracking-[0.2em] font-medium">
                Développeur Web Full-Stack
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#999999] max-w-md mx-auto leading-relaxed font-light">
            Passionné par le développement web moderne. Spécialisé en React, Next.js et Node.js.
            Créateur d'expériences digitales innovantes.
          </p>
        </div>

        {/* Liens Professionnels */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-[#2A2A2A]">
            <h2 className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              Professionnel
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A2A]">
            {professionalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1A1A1A] p-8 hover:bg-[#1F1F1F] transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#0066FF] transition-colors">
                    <div className="text-[#0066FF]">
                      {link.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#FAFAFA] font-light text-lg mb-1">
                      {link.title}
                    </h3>
                    <p className="text-[#999999] text-sm font-light truncate">
                      {link.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-[#0066FF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Liens Personnels / Donations */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-[#2A2A2A]">
            <h2 className="text-xs font-medium text-[#666666] uppercase tracking-[0.2em]">
              Autres
            </h2>
          </div>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-[#2A2A2A]">
            {/* Bouton Ajouter Contact */}
            <AddContactButton />

            {personalLinks.map((link, i) => (
              link.isCrypto ? (
                <button
                  key={i}
                  onClick={() => handleCopy(link.address, link.title)}
                  className="group bg-[#1A1A1A] p-6 hover:bg-[#1F1F1F] transition-colors duration-300"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#0066FF] group-hover:border-[#0066FF] transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-[#FAFAFA] font-light text-sm">
                      {link.title}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#999999] group-hover:text-[#0066FF] transition-colors">
                      <Copy size={10} />
                      <span>Copier</span>
                    </div>
                  </div>
                </button>
              ) : (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#1A1A1A] p-6 hover:bg-[#1F1F1F] transition-colors duration-300"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#0066FF] group-hover:border-[#0066FF] transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-[#FAFAFA] font-light text-sm">
                      {link.title}
                    </span>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-[#2A2A2A]">
          <p className="text-[#666666] text-sm font-light">
            © 2025 Killian Lecrut • Tous droits réservés
          </p>
        </div>
      </div>
    </div>
  );
}