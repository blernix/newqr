export function AuroraBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Overlay subtil pour adoucir le fond */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Bulles de couleur subtiles et professionnelles */}
      {/* Halo 1 : Bleu profond */}
      <div className="absolute w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-500/20 rounded-full -top-32 -left-32 filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Halo 2 : Violet profond */}
      <div className="absolute w-96 h-96 md:w-[600px] md:h-[600px] bg-purple-500/20 rounded-full -bottom-32 -right-32 filter blur-3xl animate-blob2"></div>

      {/* Halo 3 : Cyan subtil */}
      <div className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-cyan-500/15 rounded-full top-1/3 right-1/4 filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Halo 4 : Rose subtil */}
      <div className="absolute w-64 h-64 md:w-[450px] md:h-[450px] bg-pink-500/10 rounded-full bottom-1/3 left-1/3 filter blur-3xl animate-blob2 animation-delay-6000"></div>

      {/* Grain texture pour effet premium */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </div>
  );
}