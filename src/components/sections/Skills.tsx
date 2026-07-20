import { motion } from 'motion/react';
import { SKILLS } from '../../data';

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-surface/50 border-y border-border-color/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-12"
        >
          Core Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-border-color rounded text-[11px] bg-surface text-text-primary hover:bg-border-color/20 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
