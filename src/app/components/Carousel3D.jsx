"use client";

import { Briefcase, Instagram, Linkedin, Send, Bitcoin, Copy, Github, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const professionalLinks = [
  {
    title: 'Mon agence',
    description: 'Découvrez mes services',
    icon: <Briefcase size={24} />,
    url: 'https://killian-lecrut.com/',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'LinkedIn',
    description: 'Mon profil professionnel',
    icon: <Linkedin size={24} />,
    url: 'https://www.linkedin.com/in/killian-lecrut-a80336176/',
    color: 'from-blue-600 to-blue-700'
  },
  {
    title: 'GitHub',
    description: 'Mes projets open source',
    icon: <Github size={24} />,
    url: 'https://github.com/blernix',
    color: 'from-gray-700 to-gray-900'
  },
  {
    title: 'Contact',
    description: 'Envoyez-moi un email',
    icon: <Mail size={24} />,
    url: 'mailto:killian.lecrut@gmail.com',
    color: 'from-purple-500 to-pink-500'
  },
];

const personalLinks = [
  {
    title: 'Instagram',
    icon: <Instagram size={20} />,
    url: 'https://www.instagram.com/lct_kiki/',
    color: 'from-pink-500 to-orange-500'
  },
  {
    title: 'PayPal',
    icon: <Send size={20} />,
    url: 'https://www.paypal.com/paypalme/webcreater',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'BTC',
    icon: <Bitcoin size={20} />,
    isCrypto: true,
    address: 'bc1qhdj09ms9gehzkrt5vs7cv66k4pakh4l4qdnup0',
    color: 'from-orange-400 to-yellow-500'
  },
  {
    title: 'ETH',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid" className="fill-current"><path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z M127.962 312.187l-1.586 1.92v92.23l1.586 10.66 127.96-212.32z"/></svg>,
    isCrypto: true,
    address: '0x6957a72016c295081Ae1f5f831889CCa0bF16263',
    color: 'from-purple-400 to-indigo-500'
  },
];

export function Carousel3D() {
  const handleCopy = (address, title) => {
    navigator.clipboard.writeText(address).then(() => {
      toast.success(`Adresse ${title} copiée !`);
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }).catch(() => {
      toast.error("Erreur lors de la copie.");
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-fadeIn">

        {/* Header Profile */}
        <div className="text-center space-y-4">
          {/* Avatar avec effet glassmorphism */}
          <div className="relative inline-block group">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl ring-4 ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-4xl font-bold text-white">
                KL
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white/20"></div>
          </div>

          {/* Nom et Titre */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              Killian Lecrut
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium">
              Développeur Web Full-Stack
            </p>
          </div>

          {/* Bio */}
          <p className="text-white/70 max-w-md mx-auto leading-relaxed">
            Passionné par le développement web moderne. Spécialisé en React, Next.js et Node.js.
            Créateur d'expériences digitales innovantes.
          </p>
        </div>

        {/* Liens Professionnels */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider px-2">
            Professionnel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {professionalLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Gradient background au hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-0.5 group-hover:translate-x-1 transition-transform duration-300">
                      {link.title}
                    </h3>
                    <p className="text-white/60 text-sm truncate">
                      {link.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Liens Personnels / Donations */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider px-2">
            Autres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {personalLinks.map((link, i) => (
              link.isCrypto ? (
                <button
                  key={i}
                  onClick={() => handleCopy(link.address, link.title)}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {link.icon}
                    </div>
                    <span className="text-white font-medium text-sm">
                      {link.title}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-white/50 group-hover:text-white/80 transition-colors">
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
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className="relative flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {link.icon}
                    </div>
                    <span className="text-white font-medium text-sm">
                      {link.title}
                    </span>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white/40 text-sm pt-4">
          © 2025 Killian Lecrut • Tous droits réservés
        </p>
      </div>
    </div>
  );
}