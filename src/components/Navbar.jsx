import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="relative inline-flex h-6 w-6 items-center justify-center">
              <CrossIcon className="h-5 w-5 text-white/90 group-hover:text-white transition-colors" />
            </span>
            <span className="tracking-[0.2em] text-sm font-medium text-white/90 group-hover:text-white">FOTTOKOGAE</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#collections" className="text-white/70 hover:text-white transition-colors">Collections</a>
            <a href="#manifesto" className="text-white/70 hover:text-white transition-colors">Manifesto</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function CrossIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3v18M6 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
