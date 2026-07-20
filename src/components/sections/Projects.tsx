import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PROJECTS } from '../../data';

function ProjectCard({ project, i }: { project: typeof PROJECTS[0]; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="border border-border-color p-6 bg-surface rounded-lg flex flex-col justify-between shadow-sm hover:border-accent/30 transition-colors h-full"
      >
        <div>
          <div 
            className="flex justify-between items-start mb-2 gap-4"
            style={{ transform: "translateZ(30px)" }}
          >
            <h4 className="text-lg font-medium">{project.title}</h4>
            {i === 0 && <span className="text-[10px] bg-bg px-2 py-0.5 rounded text-text-secondary shrink-0">LATEST</span>}
          </div>
          <p 
            className="text-sm text-text-secondary leading-snug mb-6"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.desc}
          </p>
        </div>
        
        <div 
          className="mt-4 flex items-center justify-between"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <span key={tech} className="text-[10px] font-mono text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent font-medium border-b border-accent/20 hover:border-accent transition-colors flex shrink-0"
          >
            GitHub ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-12"
        >
          Selected Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/haseebjaved4212"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border-color text-text-primary bg-surface text-sm font-medium rounded-sm hover:bg-bg transition-all shadow-sm"
          >
            Explore More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
