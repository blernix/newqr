"use client";

import { UserPlus } from 'lucide-react';

export default function AddContactButton({ isVisible, delay }) {
  const handleAddContact = () => {
    // Le fichier .vcf fonctionne sur iOS et Android
    const link = document.createElement('a');
    link.href = '/killian-lecrut.vcf';
    link.download = 'killian-lecrut.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleAddContact}
      className={`group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105 scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      <div className="relative flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <UserPlus size={20} />
        </div>
        <span className="text-white font-medium text-sm text-center">
          Contact
        </span>
      </div>
    </button>
  );
}
