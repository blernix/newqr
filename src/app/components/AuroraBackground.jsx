export function AuroraBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
      {/* Fumées qui montent du bas - Effet réaliste */}

      {/* Source de fumée en bas à gauche */}
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-white/40 rounded-[60%_40%_30%_70%] filter blur-[80px]"
           style={{ animation: 'smoke-rise 15s ease-in-out infinite' }}></div>

      <div className="absolute bottom-0 left-[15%] w-[250px] h-[250px] bg-white/35 rounded-[40%_60%_50%_50%] filter blur-[90px]"
           style={{ animation: 'smoke-rise-2 18s ease-in-out infinite 3s' }}></div>

      {/* Source de fumée au centre */}
      <div className="absolute bottom-0 left-[45%] w-[350px] h-[350px] bg-white/45 rounded-[50%_50%_40%_60%] filter blur-[100px]"
           style={{ animation: 'smoke-rise-3 20s ease-in-out infinite 1s' }}></div>

      <div className="absolute bottom-0 left-[50%] w-[280px] h-[280px] bg-white/30 rounded-[55%_45%_60%_40%] filter blur-[85px]"
           style={{ animation: 'smoke-rise 16s ease-in-out infinite 5s' }}></div>

      {/* Source de fumée en bas à droite */}
      <div className="absolute bottom-0 right-[10%] w-[320px] h-[320px] bg-white/38 rounded-[45%_55%_35%_65%] filter blur-[95px]"
           style={{ animation: 'smoke-rise-2 19s ease-in-out infinite 2s' }}></div>

      <div className="absolute bottom-0 right-[15%] w-[270px] h-[270px] bg-white/33 rounded-[60%_40%_55%_45%] filter blur-[88px]"
           style={{ animation: 'smoke-rise-3 17s ease-in-out infinite 4s' }}></div>

      {/* Fumée ambiante qui flotte doucement */}
      <div className="absolute top-[20%] left-[20%] w-[600px] h-[400px] bg-white/[0.06] rounded-[50%] filter blur-[150px]"
           style={{ animation: 'smoke-drift 25s ease-in-out infinite' }}></div>

      <div className="absolute top-[30%] right-[25%] w-[500px] h-[500px] bg-white/[0.05] rounded-[45%] filter blur-[140px]"
           style={{ animation: 'smoke-drift 30s ease-in-out infinite 10s' }}></div>

      {/* Grain texture pour effet premium */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </div>
  );
}