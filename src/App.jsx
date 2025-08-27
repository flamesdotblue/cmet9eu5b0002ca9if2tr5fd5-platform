import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <CollectionGrid />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}
