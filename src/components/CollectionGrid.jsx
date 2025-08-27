import React from 'react';

const items = [
  {
    title: 'Genesis Coat',
    image:
      'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1920&auto=format&fit=crop',
    blurb: 'Double-faced wool in onyx with hand-finished icon stitching.'
  },
  {
    title: 'Seraphim Gown',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1920&auto=format&fit=crop',
    blurb: 'Silk column with cathedral drape and luminous sheen.'
  },
  {
    title: 'Eden Boots',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1920&auto=format&fit=crop',
    blurb: 'Italian leather, beveled arch, relic hardware.'
  },
  {
    title: 'Apocrypha Bag',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1920&auto=format&fit=crop',
    blurb: 'Structured calfskin with carved cross clasp.'
  }
];

export default function CollectionGrid() {
  return (
    <section id="collections" className="relative py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium">Collections</h2>
            <p className="text-white/60 mt-2 max-w-2xl">Monochrome palettes, sacred geometry, and couture craftsmanship defined by modern restraint.</p>
          </div>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.3em] text-white/50">Edition I</span>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-medium tracking-wide">{item.title}</h3>
                <p className="text-xs text-white/60 mt-1">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
