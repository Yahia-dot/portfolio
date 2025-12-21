import { useState } from 'react'
import { motion } from 'framer-motion'
import resumePDF from '@/assets/YahiaAlaliCVSwe..pdf'
import { MailIcon, MapPinIcon, SendIcon, DownloadIcon } from './icons'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/xldqlypk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        // Reset form
        ;(e.target as HTMLFormElement).reset()
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setIsSubmitting(false)
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Heading with gradient */}
            <motion.h2
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's{' '}
              <span className="text-amber-400">Connect</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-wood-200 max-w-md leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities, creative ideas, or
              potential collaborations.
            </motion.p>

            {/* Contact Info Cards */}
            <motion.div
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Email Card */}
              <motion.div
                className="bg-black/20 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center gap-4 group hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500 flex items-center justify-center transition-all duration-300">
                  <div className="text-amber-400">
                    <MailIcon />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-wood-400 font-medium">Email</p>
                  <a
                    href="mailto:yahia.alali.96@gmail.com"
                    className="text-wood-100 hover:text-amber-400 transition-colors"
                  >
                    yahia.alali.96@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                className="bg-black/20 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center gap-4 group hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500 flex items-center justify-center transition-all duration-300">
                  <div className="text-amber-400">
                    <MapPinIcon />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-wood-400 font-medium">Location</p>
                  <p className="text-wood-100">Jönköping, Sweden</p>
                </div>
              </motion.div>

              {/* Resume Download Card */}
              <motion.a
                href={resumePDF}
                download="Yahia_Alali_Resume.pdf"
                className="bg-black/20 backdrop-blur-sm border border-white/10 p-4 rounded-lg flex items-center gap-4 group hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-500 flex items-center justify-center transition-all duration-300">
                  <div className="text-amber-400">
                    <DownloadIcon />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-wood-400 font-medium">Resume</p>
                  <p className="text-wood-100 hover:text-amber-400 transition-colors">
                    Download CV
                  </p>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-black/20 backdrop-blur-sm border border-white/10 p-8 rounded-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-amber-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 text-white placeholder:text-wood-400"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-amber-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 text-white placeholder:text-wood-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-amber-200"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 text-white placeholder:text-wood-400"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-amber-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 text-white placeholder:text-wood-400 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-amber-500 text-wood-900 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-wood-900/30 border-t-wood-900 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                  <p className="text-green-400 font-medium">Message sent successfully!</p>
                  <p className="text-green-300/70 text-sm mt-1">I'll get back to you as soon as possible.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center">
                  <p className="text-red-400 font-medium">Failed to send message</p>
                  <p className="text-red-300/70 text-sm mt-1">Please try again later or contact me directly via email.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
