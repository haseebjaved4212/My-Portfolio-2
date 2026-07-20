/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { Terminal } from './components/Terminal';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <ThemeProvider>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar onTerminalToggle={() => setTerminalOpen(!terminalOpen)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
      </div>
    </ThemeProvider>
  );
}
