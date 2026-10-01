import { useEffect, useRef, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'React.js Developer',
  'Python Developer',
  'AI/ML Enthusiast',
  'Problem Solver',
]

export default function Hero({ theme }) {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const photoRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole]
    let timeout

    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length - 1))
        }, 40)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 200)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  // 3D tilt effect on photo
  useEffect(() => {
    const el = photoRef.current
    if (!el) return

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    }

    const onMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden hero-gradient-bg"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-500/10 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-cyan/10 blur-[100px] animate-float-slower" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-accent-violet/10 blur-[80px] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8" style={{ animation: 'slideUp 0.8s 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-green-500/10 border border-green-500/25 text-green-400'
                  : 'bg-green-100 border border-green-300 text-green-700'
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Open to Opportunities
              </span>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-white/5 border border-white/10 text-white/60'
                  : 'bg-gray-100 border border-gray-200 text-gray-600'
              }`}>
                📍 India
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-display font-black tracking-[-0.04em] leading-[0.9] mb-6"
              style={{ animation: 'slideUp 0.8s 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}
            >
              <span className={`block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Shyam
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl gradient-text">
                G V
              </span>
            </h1>

            {/* Typewriter Role */}
            <div
              className="mb-8"
              style={{ animation: 'slideUp 0.8s 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}
            >
              <p className={`text-base lg:text-lg mb-4 max-w-lg text-balance ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                Computer Science Engineer building impactful web applications and AI-powered solutions.
              </p>
              <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-white/[0.05] border border-white/[0.1]'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className={`font-mono text-sm ${theme === 'dark' ? 'text-primary-300' : 'text-primary-600'}`}>
                  {displayText}
                  <span className="animate-pulse ml-0.5 text-primary-400">|</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 mb-10"
              style={{ animation: 'slideUp 0.8s 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}
            >
              <a href="#projects" className="magnetic-btn text-white">
                <span>Explore Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="ghost-btn">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-10"
              style={{ animation: 'slideUp 0.8s 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}
            >
              {[
                { value: '5+', label: 'Projects Built' },
                { value: '50+', label: 'LeetCode Problems' },
                { value: '7.72', label: 'CGPA' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className={`text-2xl sm:text-3xl font-display font-black tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </span>
                  <span className={`text-xs font-medium mt-1 ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            style={{ animation: 'slideUp 0.8s 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards', opacity: 0 }}
          >
            <div className="relative">
              {/* Glow rings */}
              <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-primary-500/20 via-accent-cyan/20 to-accent-violet/20 blur-2xl animate-glow-pulse" />
              <div className="absolute inset-[-10px] rounded-full border-2 border-primary-500/10 animate-spin-slow" />

              {/* Orbiting dots */}
              <div className="absolute inset-[-30px] animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-glow-sm" />
              </div>
              <div className="absolute inset-[-30px] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-cyan shadow-glow-cyan" />
              </div>

              {/* Photo container */}
              <div
                ref={photoRef}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden tilt-card"
                style={{ transition: 'transform 0.15s ease-out' }}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary-500 via-accent-cyan to-accent-violet">
                  <div className={`w-full h-full rounded-full overflow-hidden ${theme === 'dark' ? 'bg-dark-950' : 'bg-gray-50'}`}>
                    <img
                      src="/images/profile.jpg"
                      alt="Shyam G V - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" style={{ animation: 'fadeIn 1s 1.5s forwards', opacity: 0 }}>
          <span className={`text-xs font-mono uppercase tracking-widest ${theme === 'dark' ? 'text-white/30' : 'text-gray-400'}`}>
            Scroll
          </span>
          <div className="scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
