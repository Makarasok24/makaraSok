import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import TeachingBand from './components/TeachingBand';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Background from './components/Background';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './lib/useScrollReveal';

export function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#work"
        className="sr-only rounded-pill bg-cobalt px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Capabilities />
        <TeachingBand />
        <Skills />
        <Experience />
        <Background />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
