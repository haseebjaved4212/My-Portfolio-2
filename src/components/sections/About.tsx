import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-8">About Me</h2>
          <div className="text-lg md:text-xl text-text-secondary leading-relaxed space-y-6">
            <p>
              I am a full-stack developer with a focus on modern architectures and scalable systems.
            </p>
            <p>
              My expertise spans the entire stack—from building highly interactive interfaces using React, Next.js, and Three.js, to engineering robust backend services with Django, FastAPI, Flask, and Nest.js. I have a strong interest in AI-powered systems and automation, building intelligent features into everyday products.
            </p>
            <p>
              I am currently expanding my knowledge in AI/ML to better integrate advanced models and autonomous agents into production environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
