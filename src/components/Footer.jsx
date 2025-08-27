import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center">
                <CrossIcon className="h-5 w-5 text-white/80" />
              </span>
              <span className="tracking-[0.2em] text-xs font-medium text-white/80">FOTTOKOGAE</span>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-sm">Join the private list for early access to releases, salons, and liturgical collaborations.</p>
          </div>

          <NewsletterForm />

          <div className="md:text-right text-sm text-white/60">
            <p>Paris — London — New York</p>
            <p className="mt-1">Concierge: concierge@fottokogae.com</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} FOTTOKOGAE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#manifesto" className="hover:text-white/80">Ethos</a>
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    alert(`Thank you. We will be in touch at ${email}.`);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="md:justify-self-center w-full max-w-md">
      <label htmlFor="email" className="sr-only">Email</label>
      <div className="flex items-center gap-2">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="w-full rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/20"
        />
        <button type="submit" className="shrink-0 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 active:bg-neutral-200 transition-colors">Join</button>
      </div>
    </form>
  );
}

function CrossIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3v18M6 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
