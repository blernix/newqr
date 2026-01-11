"use client";

import { UserPlus } from 'lucide-react';

export default function AddContactButton() {
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
      className="group bg-[#1A1A1A] p-6 hover:bg-[#1F1F1F] transition-colors duration-300"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border border-[#2A2A2A] flex items-center justify-center text-[#0066FF] group-hover:border-[#0066FF] transition-colors">
          <UserPlus size={20} />
        </div>
        <span className="text-[#FAFAFA] font-light text-sm text-center">
          Contact
        </span>
      </div>
    </button>
  );
}
