import { motion } from 'motion/react';
import { Mail, MessageCircle, Check, Copy, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('contactimhaseeb@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-surface/50 border-t border-border-color/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-6"
        >
          Let's connect
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-text-primary mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Whether you have a question or just want to say hi, my inbox is always open.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={copyEmail}
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-border-color rounded-sm hover:bg-bg transition-colors shadow-sm w-full sm:w-auto justify-center group"
          >
            <Mail size={16} className="text-text-secondary group-hover:text-text-primary transition-colors" />
            <span className="font-mono text-sm text-text-primary">contactimhaseeb@gmail.com</span>
            {copied ? <Check size={14} className="text-green-500 ml-2" /> : <Copy size={14} className="text-text-secondary ml-2 group-hover:text-text-primary transition-colors" />}
          </button>
          
          <a
            href="https://wa.me/923272119600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-surface border border-border-color rounded-sm hover:bg-bg transition-colors shadow-sm w-full sm:w-auto justify-center group"
          >
            <MessageCircle size={16} className="text-text-secondary group-hover:text-text-primary transition-colors" />
            <span className="font-medium text-sm text-text-primary">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
