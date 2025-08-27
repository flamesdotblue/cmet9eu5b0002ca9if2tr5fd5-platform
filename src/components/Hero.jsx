import React from 'react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(255,255,255,0.35) 15px, transparent 16px), repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(255,255,255,0.35) 15px, transparent 16px)'
        }} />
        <div className="absolute -right-24 -top-24 w-[36rem] h-[36rem] opacity-[0.07]">
          <CopticMedallion />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-xs text-white/60 mb-6">Fruit of the Tree of Knowledge of Good and Evil</p>
          <h1 className="text-4xl sm:text-6xl leading-[1.05] font-medium">
            FOTTOKOGAE
            <span className="block text-white/70 text-base sm:text-xl mt-4 font-normal">
              A high luxury house where sacred silhouettes and modern minimalism entwine.
            </span>
          </h1>
          <div className="mt-10 flex items-center gap-4">
            <a href="#collections" className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-100 active:bg-neutral-200 transition-colors">Explore Collections</a>
            <a href="#manifesto" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors">Read Manifesto</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CopticMedallion() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="100" />
        <g>
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const x1 = 200 + Math.cos(a) * 100;
            const y1 = 200 + Math.sin(a) * 100;
            const x2 = 200 + Math.cos(a) * 180;
            const y2 = 200 + Math.sin(a) * 180;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        <g>
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI) / 6;
            const x = 200 + Math.cos(a) * 140;
            const y = 200 + Math.sin(a) * 140;
            return <path key={i} d={`M ${x} ${y} l 8 -8 m -16 0 l 8 8`} />;
          })}
        </g>
        <path d="M200 120v160M120 200h160" />
      </g>
    </svg>
  );
}
