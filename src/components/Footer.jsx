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

          {/* Social Links & Back to top button */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shyam192837465-byte"
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/[0.04] border-white/[0.1] text-white/70 hover:text-white hover:border-primary-400'
                  : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-primary-600 hover:border-primary-400'
              }`}
              title="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shyam-g-v-36765a3b1/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/[0.04] border-white/[0.1] text-white/70 hover:text-white hover:border-primary-400'
                  : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-primary-600 hover:border-primary-400'
              }`}
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/Shyam1423/"
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white/[0.04] border-white/[0.1] text-white/70 hover:text-white hover:border-primary-400'
                  : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-primary-600 hover:border-primary-400'
              }`}
              title="LeetCode Profile"
            >
              <span className="font-mono font-bold text-xs tracking-tighter">LC</span>
            </a>
            <button
              onClick={scrollToTop}
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 cursor-pointer ${
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
