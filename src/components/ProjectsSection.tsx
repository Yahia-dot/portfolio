import { motion } from 'framer-motion'
import { projects } from '@/data'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return(
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main heading with gradient on "Built" */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Projects I've{' '}
          <span className="text-amber-400">Built</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg text-wood-200 mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A showcase of my recent work spanning full-stack development, AI integration,
          and cloud architecture.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
