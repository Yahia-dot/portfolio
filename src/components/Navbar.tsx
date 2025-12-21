import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Hamburger Menu Icon
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
)

// Close Icon
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
)

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false)

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return(
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/30 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end gap-6 list-none">
          <li>
            <button
              onClick={() => handleLinkClick('hero')}
              className="text-white text-sm font-medium hover:text-amber-400 hover:bg-white/10 hover:backdrop-blur-sm px-3 py-2 rounded-lg transition-all duration-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLinkClick('projects')}
              className="text-white text-sm font-medium hover:text-amber-400 hover:bg-white/10 hover:backdrop-blur-sm px-3 py-2 rounded-lg transition-all duration-300"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLinkClick('contact')}
              className="text-white text-sm font-medium hover:text-amber-400 hover:bg-white/10 hover:backdrop-blur-sm px-3 py-2 rounded-lg transition-all duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-amber-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden">
            <ul className="flex flex-col list-none">
              <li>
                <button
                  onClick={() => handleLinkClick('hero')}
                  className="w-full text-left text-white text-sm font-medium hover:text-amber-400 hover:bg-white/10 px-4 py-3 transition-all duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('projects')}
                  className="w-full text-left text-white text-sm font-medium hover:text-amber-400 hover:bg-white/10 px-4 py-3 transition-all duration-300 border-t border-white/10"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full text-left text-white text-sm font-medium hover:text-amber-400 hover:bg-white/10 px-4 py-3 transition-all duration-300 border-t border-white/10"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}