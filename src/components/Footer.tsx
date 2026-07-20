import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="h-16 border-t border-border-color flex items-center justify-between bg-surface shrink-0">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] text-center md:text-left">
          &copy; {year} Haseeb Javed. Built with React & Vite
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
          <a href="https://github.com/haseebjaved4212" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/haseeb-javed-0332b3341/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Haseebjaved4212" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-text-secondary hover:text-text-primary transition-colors">
            X (Twitter)
          </a>
          
          <div className="hidden md:block h-4 w-px bg-border-color"></div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] font-medium text-text-secondary uppercase tracking-wider">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
