import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ParticleCanvas from './components/ParticleCanvas'
import ReadingProgress from './components/ReadingProgress'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'light'
    }
    return 'light'
  })
  const [isLoading, setIsLoading] = useState(true)

  useScrollReveal()
  useSmoothScroll()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')

    // Loading screen
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-[10000] flex items-center justify-center ${theme === 'dark' ? 'bg-dark-950' : 'bg-white'}`}>
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 animate-ping" />
            <div className="absolute inset-2 rounded-full border-2 border-t-primary-500 border-r-primary-500 border-b-transparent border-l-transparent animate-spin" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan animate-pulse" />
          </div>
          <div className="flex items-center gap-1">
            {'SHYAM'.split('').map((char, i) => (
              <span
                key={i}
                className="text-2xl font-display font-bold gradient-text"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0, animation: `fadeIn 0.5s ${i * 0.1}s forwards` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-950 text-white' : 'light bg-gray-50 text-gray-900'} min-h-screen relative transition-colors duration-500`}>
      <CustomCursor />
      <ParticleCanvas theme={theme} />
      <ReadingProgress />
      <div className="grain-overlay" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-[2]">
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Achievements theme={theme} />
        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  )
}

export default App
