export function AuroraBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* Le flou général appliqué à tout l'arrière-plan */}
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      {/* Les nouvelles bulles de couleur monochromes */}
      {/* Halo 1 : Un gris très sombre, presque noir */}
      <div className="absolute w-56 h-56 md:w-96 md:h-96 bg-neutral-500 rounded-full -top-16 -left-16 filter blur-3xl animate-blob animation-delay-2000 opacity-70"></div>
      
      {/* Halo 2 : Un autre gris sombre pour la texture */}
      <div className="absolute w-56 h-56 md:w-96 md:h-96 bg-slate-600 rounded-full -bottom-16 -right-16 filter blur-3xl animate-blob2 opacity-70"></div>

      {/* Halo 3 : Une "fumée" de blanc cassé très transparente */}
      <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-white/20 rounded-full top-1/4 left-1/4 filter blur-3xl animate-blob animation-delay-4000 opacity-60"></div>
      
      {/* Halo 4 : Une autre fumée blanche */}
      <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-white/50 rounded-full bottom-1/4 right-1/4 filter blur-3xl animate-blob2 animation-delay-6000 opacity-60"></div>

       {/* Halo 5 (plus petit) : Un gris pour la profondeur */}
       <div className="absolute w-32 h-32 md:w-56 md:h-56 bg-zinc-900 rounded-full bottom-8 left-1/2 filter blur-2xl animate-blob opacity-50"></div>
    </div>
  );
}