import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
      let current = 'hero'
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150) {
          current = section.id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-dark-950/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/10'
            : 'py-5 bg-transparent'
        } ${theme === 'light' ? 'light' : ''}`}
        style={theme === 'light' && scrolled ? { background: 'rgba(249,250,251,0.85)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-white font-display font-bold text-sm">SG</span>
            </div>
            <span className={`font-display font-bold text-lg tracking-tight hidden sm:block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Shyam<span className="gradient-text ml-0.5">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link text-xs ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-track"
              aria-label="Toggle theme"
            >
              <div className="theme-toggle-thumb" />
              <span className="absolute left-[6px] top-1/2 -translate-y-1/2 text-xs">
                {theme === 'dark' ? '🌙' : ''}
              </span>
              <span className="absolute right-[6px] top-1/2 -translate-y-1/2 text-xs">
                {theme === 'light' ? '☀️' : ''}
              </span>
            </button>

            {/* Resume button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex magnetic-btn text-white text-xs"
            >
              <span>Let's Connect</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center glass"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className={`mobile-nav-overlay ${theme === 'light' ? 'light' : ''}`}>
          <button
            onClick={() => setMobileOpen(false)}
            className={`absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link"
                style={{ animation: `slideUp 0.5s ${i * 0.08}s cubic-bezier(0.22, 1, 0.36, 1) forwards`, opacity: 0 }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
