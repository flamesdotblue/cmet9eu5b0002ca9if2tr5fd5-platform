import React from 'react';

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3 text-white/60">
          <SmallCross />
          <span className="uppercase tracking-[0.35em] text-xs">Manifesto</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-medium leading-tight">Between Innocence and Knowing</h3>
        <div className="mt-6 space-y-5 text-white/75 leading-relaxed">
          <p>
            FOTTOKOGAE stands for Fruit of the Tree of Knowledge of Good and Evil. It is an homage—not an imitation—to sacred traditions. We craft garments that live in the tension between light and shadow, restraint and revelation.
          </p>
          <p>
            Our visual language embraces gothic line, coptic emblem, and the purity of modern form. Opulent materials are tempered by monastic silhouettes. Every seam is a whispered psalm; every edge, a reliquary.
          </p>
          <p>
            We believe luxury is quiet. It is felt in the weight of a wool, the hush of silk, the integrity of time. We refuse the ordinary. We dress the procession.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/60">
          <Badge>Atelier Made</Badge>
          <Badge>Responsible Sourcing</Badge>
          <Badge>Limited Editions</Badge>
        </div>
      </div>
    </section>
  );
}

function SmallCross() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
      <path d="M10 3v14M4 8h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-3 py-1 text-xs tracking-wide">{children}</span>
  );
}
