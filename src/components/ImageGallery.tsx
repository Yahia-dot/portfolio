import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons'

interface ImageGalleryProps {
  images: string[]
  projectTitle: string
  isOpen: boolean
  initialIndex: number
  onClose: () => void
}

export function ImageGallery({ images, projectTitle, isOpen, initialIndex, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Update current index when initial index changes
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors p-2 bg-black/40 backdrop-blur-md rounded-full"
        aria-label="Close gallery"
      >
        <CloseIcon />
      </button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full text-lg font-mono">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md hover:bg-amber-500 text-white hover:text-wood-900 p-4 rounded-full transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-10 h-10" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md hover:bg-amber-500 text-white hover:text-wood-900 p-4 rounded-full transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-10 h-10" />
          </button>
        </>
      )}

      {/* Main Image */}
      <div className="relative max-w-7xl max-h-[90vh] px-4">
        <img
          src={images[currentIndex]}
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-4xl">
          <div className="bg-black/60 backdrop-blur-md rounded-full p-3">
            <div className="flex gap-3 overflow-x-auto max-w-150 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-amber-500 scale-110'
                      : 'border-white/30 hover:border-amber-400/50'
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
        </div>
      )}
    </div>
  )
}