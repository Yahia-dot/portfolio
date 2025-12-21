import type { Project } from '@/types/project'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ArrowIcon } from './icons'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${project.id}`)
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      onClick={handleClick}
      className={`group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-wood-900">
        {project.images && project.images.length > 0 && !imageError ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-400/50">
            <span className="text-6xl">📁</span>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-amber-500 text-wood-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Featured
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 pb-4">
        {/* Title & Year */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-amber-200/60 text-sm font-mono">{project.year}</span>
        </div>

        {/* Role & Duration */}
        <div className="flex gap-4 mb-4 text-xs text-wood-300">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {project.role}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {project.duration}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-amber-500/10 text-amber-300 rounded-md border border-amber-500/20 font-mono"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-xs text-amber-400/60 font-mono">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

      </div>

      {/* Arrow Icon in Top Right Corner */}
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm border-2 border-amber-400 group-hover:border-amber-500 rounded-full flex items-center justify-center text-amber-400 shadow-lg transition-all duration-300"
        whileHover={{ rotate: 45, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowIcon />
      </motion.div>
    </motion.div>
  )
}