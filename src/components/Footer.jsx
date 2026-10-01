import { useState, useEffect } from 'react'

const currentYear = new Date().getFullYear()

export default function Footer({ theme }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format time in Indian Standard Time (IST)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setTime(new Intl.DateTimeFormat('en-IN', options).format(now))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className={`relative pt-16 pb-12 border-t ${
      theme === 'dark' ? 'bg-dark-950/80 border-white/[0.08]' : 'bg-white border-gray-200'
    } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06] dark:border-white/[0.06]">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-3 mb-2 group">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-accent-cyan flex items-center justify-center font-display font-black text-white text-lg shadow-glow-sm group-hover:scale-105 transition-transform">
                S
              </span>
              <span className={`text-xl font-display font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Shyam <span className="gradient-text">G V</span>
              </span>
            </a>
            <p className={`text-xs max-w-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
              Computer Science Engineer building next-gen web applications, AI microservices, and reliable architectures.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                  theme === 'dark' ? 'text-white/60 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 hover:scale-105 cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/[0.04] border-white/[0.1] text-white hover:bg-white/[0.08] hover:border-primary-400'
                : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
            }`}
            title="Back to Top"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Bottom Status & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono">
          {/* Live Indian Standard Time */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}>
              India (IST):
            </span>
            <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {time || 'Loading time...'}
            </span>
          </div>

          {/* Copyright */}
          <div className={theme === 'dark' ? 'text-white/40' : 'text-gray-400'}>
            © {currentYear} Shyam G V. All rights reserved.
          </div>

          {/* Tagline */}
          <div className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}>
            Engineered with <span className="text-red-400">♥</span> using React, Tailwind & Vite
          </div>
        </div>
      </div>
    </footer>
  )
}
