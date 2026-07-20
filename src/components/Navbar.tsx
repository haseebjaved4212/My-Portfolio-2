import { useState, useEffect } from 'react';
import { Moon, Sun, TerminalSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navbar({ onTerminalToggle }: { onTerminalToggle: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 h-20 flex items-center ${
        scrolled ? 'bg-surface/80 backdrop-blur-md border-b border-border-color/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl w-full mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight uppercase">
          Haseeb Javed
        </a>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <a href="#about" className="hover:text-text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4 border-l border-border-color pl-4 md:pl-6">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-border-color/30 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={onTerminalToggle}
              className="text-xs border border-border-color px-3 py-1 rounded-full bg-text-primary text-bg hover:bg-text-primary/90 transition-colors font-medium flex items-center gap-2"
              aria-label="Open terminal"
            >
              Terminal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
