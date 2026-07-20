import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { PROJECTS, SKILLS } from '../data';

type HistoryItem = {
  type: 'input' | 'output';
  text: React.ReactNode;
};

export function Terminal({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="flex flex-col gap-1">
            <span>Available commands:</span>
            <span className="text-gray-400">help     - Lists available commands</span>
            <span className="text-gray-400">about    - Short bio</span>
            <span className="text-gray-400">skills   - Lists tech stack</span>
            <span className="text-gray-400">projects - Lists projects</span>
            <span className="text-gray-400">contact  - Shows contact info</span>
            <span className="text-gray-400">resume   - Triggers resume download</span>
            <span className="text-gray-400">whoami   - Short one-liner</span>
            <span className="text-gray-400">clear    - Clears the terminal output</span>
          </div>
        );
        break;
      case 'about':
        output = 'Full-stack developer focusing on React/Next.js/Three.js/TypeScript frontend and Django/FastAPI/Flask/Nest.js backend, currently expanding into AI/ML.';
        break;
      case 'skills':
        output = (
          <div className="flex flex-col gap-2 mt-2">
            <div><span className="text-blue-400">Frontend:</span> {SKILLS.Frontend.join(', ')}</div>
            <div><span className="text-green-400">Backend:</span> {SKILLS.Backend.join(', ')}</div>
            <div><span className="text-yellow-400">Databases:</span> {SKILLS.Databases.join(', ')}</div>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="flex flex-col gap-2 mt-2">
            {PROJECTS.map((p, i) => (
              <div key={i}>
                <span className="text-purple-400">{p.title}</span> - {p.tech.join(', ')}
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = 'Email: contactimhaseeb@gmail.com | GitHub: haseebjaved4212 | X: Haseebjaved4212';
        break;
      case 'whoami':
        output = 'Haseeb Javed - Full-stack developer & AI enthusiast.';
        break;
      case 'resume':
        const a = document.createElement('a');
        a.href = '/Haseeb_Javed_Resume.pdf';
        a.download = 'Haseeb_Javed_Resume.pdf';
        a.click();
        output = 'Downloading resume...';
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        output = `Command not found: ${trimmedCmd}. Type "help" for available commands.`;
    }

    setHistory(prev => [...prev, { type: 'input', text: `> ${cmd}` }, { type: 'output', text: output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-6 right-6 w-[90vw] max-w-[450px] h-[400px] bg-[#14171A] rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col font-mono text-[12px] text-[#F2F2F0]"
    >
      <div className="h-8 bg-[#22262B] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <div className="ml-4 text-[10px] text-[#9BA1A6] font-mono uppercase tracking-widest">haseeb --session</div>
        </div>
        <button onClick={onClose} className="text-[#9BA1A6] hover:text-white transition-colors">
          <X size={14} />
        </button>
      </div>
      
      <div 
        className="flex-1 p-6 overflow-y-auto leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex flex-col gap-2">
          {history.map((item, i) => (
            <div key={i} className={item.type === 'input' ? 'text-gray-300' : 'text-white'}>
              {item.text}
            </div>
          ))}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[#5B8DEF]">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-[#F2F2F0] font-mono"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={endRef} />
        </div>
      </div>
    </motion.div>
  );
}
