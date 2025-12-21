import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProjectById } from '@/data'
import { Navbar, ImageGallery } from '@/components'
import { ChevronLeftIcon, ChevronRightIcon, BackIcon } from '@/components/icons'

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = id ? getProjectById(id) : undefined
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryStartIndex, setGalleryStartIndex] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-amber-500 text-wood-900 rounded-lg hover:bg-amber-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Back Button */}
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 group transition-colors"
          >
            <BackIcon />
            <span className="font-medium">Back to Projects</span>
          </button>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-400">{project.title}</h1>
              {project.featured && (
                <span className="bg-amber-500 text-wood-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Featured
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-lg md:text-xl text-wood-200 mb-4 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-wood-300">
                <span className="text-wood-400">Role:</span>
                <span className="text-amber-300 font-medium">{project.role}</span>
              </div>
              <div className="flex items-center gap-2 text-wood-300">
                <span className="text-wood-400">Year:</span>
                <span className="text-amber-300 font-mono">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-wood-300">
                <span className="text-wood-400">Duration:</span>
                <span className="text-amber-300 font-mono">{project.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="px-6 mb-12">
          <div className="container mx-auto max-w-6xl">
            <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group">
              {/* Main Image */}
              <div
                className="relative aspect-video cursor-pointer"
                onClick={() => {
                  setGalleryStartIndex(currentImageIndex)
                  setIsGalleryOpen(true)
                }}
              >
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlays for Buttons */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md hover:bg-amber-500 text-white hover:text-wood-900 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md hover:bg-amber-500 text-white hover:text-wood-900 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-mono">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {project.images.length > 1 && (
                <div className="bg-black/30 backdrop-blur-sm p-4">
                  <div className="flex gap-3 overflow-x-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? 'border-amber-500 scale-105'
                            : 'border-white/20 hover:border-amber-400/50'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-amber-400 mb-4">About This Project</h2>
                <p className="text-wood-100 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Key Highlights */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-amber-400 mb-6">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                      <span className="text-wood-100">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm bg-amber-500/10 text-amber-300 rounded-lg border border-amber-500/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-4">Links</h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-3 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-wood-900 border border-amber-500/30 hover:border-amber-500 rounded-lg font-medium transition-all text-center"
                      >
                        View Live Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all text-center"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Lightbox */}
      <ImageGallery
        images={project.images}
        projectTitle={project.title}
        isOpen={isGalleryOpen}
        initialIndex={galleryStartIndex}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  )
}
