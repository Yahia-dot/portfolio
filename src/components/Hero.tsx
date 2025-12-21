import { motion } from 'framer-motion'
import backgroundImage from '@/assets/working-at-night.jpg'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from './icons'

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return(
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Yahia Alali
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-amber-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Software Engineer
        </motion.p>

        {/* Social Media Buttons */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { href: "https://github.com/Yahia-dot", label: "Visit my GitHub profile", Icon: GitHubIcon },
            { href: "https://www.linkedin.com/in/yahia-alali-93b497348", label: "Visit my LinkedIn profile", Icon: LinkedInIcon },
            { href: "mailto:yahia.alali.96@gmail.com", label: "Send me an email", Icon: MailIcon }
          ].map(({ href, label, Icon }, index) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith('http') ? "_blank" : undefined}
              rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-amber-500 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-white transition-colors duration-300 group-hover:text-wood-900">
                <Icon />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <button onClick={scrollToProjects} className="cursor-pointer group">
          <div className="flex flex-col items-center gap-2 text-white/80 group-hover:text-amber-400 transition-colors">
            <motion.span
              className="text-sm font-mono drop-shadow-md"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              scroll down!
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDownIcon />
            </motion.div>
          </div>
        </button>
      </motion.div>
    </section>
  )
}
