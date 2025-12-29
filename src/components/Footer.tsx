import { GitHubIcon, LinkedInIcon } from './icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Yahia-dot',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yahia-alali-93b497348',
      ariaLabel: 'Visit my LinkedIn profile',
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Section */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-wood-300 text-sm">
              © {currentYear} Yahia Alali
            </p>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center gap-4 order-1 md:order-2">
            <a
              href={socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks[0].ariaLabel}
              className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-amber-500 group"
            >
              <div className="text-white transition-colors duration-300 group-hover:text-wood-900">
                <GitHubIcon />
              </div>
            </a>
            <a
              href={socialLinks[1].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLinks[1].ariaLabel}
              className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-amber-500 group"
            >
              <div className="text-white transition-colors duration-300 group-hover:text-wood-900">
                <LinkedInIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
