import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen dark:mix-blend-lighten animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6"
        >
          Building <span className="italic font-serif">AI-powered</span> products across web & mobile.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
        >
          Full-stack developer specializing in React, Next.js, and Python. Architecting automation systems and expanding the boundaries of AI/ML integration.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="px-6 py-3 bg-text-primary text-bg rounded-sm text-sm font-medium hover:bg-text-primary/90 transition-all shadow-sm w-full sm:w-auto text-center">
            View Projects
          </a>
          <a href="/Haseeb_Javed_Resume.pdf" download className="px-6 py-3 bg-surface text-text-primary border border-border-color rounded-sm text-sm font-medium hover:bg-border-color/50 transition-all w-full sm:w-auto text-center flex items-center justify-center">
            Resume.pdf
          </a>
        </motion.div>
      </div>
    </section>
  );
}
