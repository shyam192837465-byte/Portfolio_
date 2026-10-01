export default function About({ theme }) {
  const educationList = [
    {
      degree: 'Bachelor of Engineering in Computer Science & Engineering',
      institution: 'Sri Shakthi Institute of Engineering and Technology',
      period: '2022 - 2026',
      score: 'CGPA: 7.72',
      badge: 'B.E. CSE',
      accent: 'from-primary-500 to-accent-cyan',
      description: 'Focused on Algorithms, Software Engineering, Database Management Systems, and Artificial Intelligence.',
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'K V Matric Higher Secondary School',
      period: '2021 - 2022',
      score: 'Percentage: 79.5%',
      badge: 'CBSE XII',
      accent: 'from-accent-cyan to-accent-violet',
      description: 'Major coursework in Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      degree: 'Secondary School Education (Class X)',
      institution: 'K V Matric Higher Secondary School',
      period: '2019 - 2020',
      score: 'Percentage: 81.6%',
      badge: 'CBSE X',
      accent: 'from-accent-violet to-primary-500',
      description: 'Graduated with Distinction in Science and Mathematics foundation.',
    },
  ]

  const highlights = [
    { title: 'Full Stack Engineering', desc: 'Crafting responsive frontends with React and scalable backends with Node.js & Python' },
    { title: 'AI & LLM Integration', desc: 'Leveraging Hugging Face APIs and microservices for smart user experiences' },
    { title: 'Database Architecture', desc: 'Designing performant schemas across MongoDB, SQL, Firebase, and Supabase' },
    { title: 'Clean Architecture', desc: 'Following software development best practices, modular code, and RBAC security' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-accent-cyan/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="eyebrow">About Me</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Passionate Developer Building{' '}
            <span className="gradient-text">Practical & Intelligent</span> Systems
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Turning complex technical problems into elegant, user-centric web applications and AI-driven platforms.
          </p>
        </div>

        {/* Top Split: Bio & Quick Overview */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Bio Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 reveal-up" data-delay="100">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-primary-500 animate-ping" />
              <span className={`text-xs font-mono uppercase tracking-wider ${theme === 'dark' ? 'text-primary-300' : 'text-primary-600'}`}>
                Engineering Profile
              </span>
            </div>

            <h3 className={`text-2xl sm:text-3xl font-display font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Hello! I'm <span className="gradient-text">Shyam G V</span>
            </h3>

            <p className={`text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              I am a Computer Science Engineering student with hands-on experience in web development, Python, JavaScript, REST APIs, and algorithmic problem-solving. My passion lies in building practical software, integrating intuitive frontend interfaces with high-performance backends and cutting-edge AI services.
            </p>

            <p className={`text-base leading-relaxed mb-8 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              Whether architecting full-stack web platforms with role-based access control or implementing LLM-powered test generators and real-time clinical notification pipelines, I am driven by writing clean, maintainable code and following software development best practices.
            </p>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-white/[0.03] border-white/[0.06] hover:border-primary-500/30'
                      : 'bg-gray-50 border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    <h4 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Shyam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn text-white group cursor-pointer"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Resume</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="#contact"
                className="ghost-btn cursor-pointer"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Education Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal-up" data-delay="200">
            <div className="flex items-center justify-between mb-2">
              <h3 className={`text-xl font-display font-bold flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Academic Background
              </h3>
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                theme === 'dark' ? 'bg-white/5 text-white/50' : 'bg-gray-100 text-gray-500'
              }`}>
                Education
              </span>
            </div>

            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 relative group overflow-hidden"
              >
                {/* Accent top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${edu.accent}`} />

                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold ${
                    theme === 'dark'
                      ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20'
                      : 'bg-primary-50 text-primary-700 border border-primary-200'
                  }`}>
                    {edu.badge}
                  </span>
                  <span className={`text-xs font-mono ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                    {edu.period}
                  </span>
                </div>

                <h4 className={`text-base font-bold mb-1 leading-snug ${
                  theme === 'dark' ? 'text-white group-hover:text-primary-300' : 'text-gray-900 group-hover:text-primary-600'
                } transition-colors`}>
                  {edu.degree}
                </h4>

                <p className={`text-sm mb-3 font-medium ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {edu.institution}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] dark:border-white/[0.08]">
                  <span className="text-xs font-mono text-accent-cyan font-semibold">
                    {edu.score}
                  </span>
                  <span className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
