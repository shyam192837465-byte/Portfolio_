import { useState } from 'react'

const skillCategories = [
  { id: 'all', label: 'All Tech' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ai-web', label: 'AI & Full Stack' },
  { id: 'databases', label: 'Databases' },
  { id: 'tools-core', label: 'Core & Tools' },
]

const skillsData = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: '90%', experience: 'Advanced', icon: '⚛️', desc: 'Component architecture, Hooks, Context, State Management' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: '92%', experience: 'Advanced', icon: '⚡', desc: 'Async/Await, Promises, Closures, DOM manipulation' },
  { name: 'HTML5 & CSS3', category: 'frontend', level: '95%', experience: 'Expert', icon: '🎨', desc: 'Semantic layouts, Flexbox, Grid, Responsive Design' },
  { name: 'Tailwind CSS', category: 'frontend', level: '90%', experience: 'Advanced', icon: '🌊', desc: 'Modern utility-first styling, Glassmorphism, Responsive design' },
  { name: 'UI/UX Implementation', category: 'frontend', level: '88%', experience: 'Proficient', icon: '✨', desc: 'Awwwards micro-interactions, accessibility, motion design' },

  // Backend
  { name: 'Python', category: 'backend', level: '92%', experience: 'Advanced', icon: '🐍', desc: 'Object-Oriented Programming, scripting, backend logic' },
  { name: 'Node.js', category: 'backend', level: '86%', experience: 'Proficient', icon: '🟢', desc: 'Event loop, server-side asynchronous JavaScript' },
  { name: 'Express.js', category: 'backend', level: '88%', experience: 'Proficient', icon: '🚂', desc: 'Middleware, RESTful routing, authentication pipelines' },
  { name: 'FastAPI', category: 'backend', level: '84%', experience: 'Proficient', icon: '🚀', desc: 'High-performance asynchronous Python API endpoints' },
  { name: 'REST APIs & CRUD', category: 'backend', level: '94%', experience: 'Expert', icon: '🔌', desc: 'API architecture, error handling, status codes, integration' },

  // AI & Web
  { name: 'Hugging Face LLM API', category: 'ai-web', level: '88%', experience: 'Proficient', icon: '🤗', desc: 'Model inference, automated test creation, prompt integration' },
  { name: 'Flask Microservices', category: 'ai-web', level: '86%', experience: 'Proficient', icon: '🧪', desc: 'AI service decoupling, lightweight endpoint orchestration' },
  { name: 'Frontend-Backend Sync', category: 'ai-web', level: '92%', experience: 'Advanced', icon: '🔄', desc: 'Seamless data flow, error boundaries, state sync' },
  { name: 'AI API Integration', category: 'ai-web', level: '90%', experience: 'Advanced', icon: '🤖', desc: 'Integrating generative AI, mock exams, student study helpers' },

  // Databases
  { name: 'MongoDB', category: 'databases', level: '88%', experience: 'Proficient', icon: '🍃', desc: 'Mongoose schemas, aggregation pipelines, document modeling' },
  { name: 'Firebase Firestore', category: 'databases', level: '90%', experience: 'Advanced', icon: '🔥', desc: 'Real-time document sync, FCM cloud messaging, security rules' },
  { name: 'SQL & MySQL', category: 'databases', level: '85%', experience: 'Proficient', icon: '🐬', desc: 'Relational schema design, complex joins, indexing' },
  { name: 'Supabase', category: 'databases', level: '86%', experience: 'Proficient', icon: '⚡', desc: 'PostgreSQL backend-as-a-service, Row-Level Security, Auth' },

  // Tools & Core
  { name: 'Data Structures & Algorithms', category: 'tools-core', level: '88%', experience: 'LeetCode 50+', icon: '🧠', desc: 'Problem solving, time/space complexity optimization' },
  { name: 'Git & GitHub', category: 'tools-core', level: '90%', experience: 'Advanced', icon: '🐙', desc: 'Branching, PRs, version control workflows, collaboration' },
  { name: 'VS Code & Antigravity', category: 'tools-core', level: '95%', experience: 'Expert', icon: '💻', desc: 'Advanced developer workflows, agentic AI coding' },
  { name: 'Postman & Testing', category: 'tools-core', level: '88%', experience: 'Proficient', icon: '📮', desc: 'API payload testing, endpoint debugging, verification' },
]

export default function Skills({ theme }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-violet/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-up">
          <span className="eyebrow">Technical Competencies</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My Tech Arsenal & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Categorized technical skills honed through hands-on full-stack development, AI platform architecture, and competitive algorithmic problem solving.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 reveal-up" data-delay="100">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass border border-white/[0.08]">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-cyan text-white shadow-glow-sm'
                    : theme === 'dark'
                      ? 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm transition-all outline-none ${
                theme === 'dark'
                  ? 'bg-white/[0.04] border border-white/[0.08] text-white focus:border-primary-500/50'
                  : 'bg-white border border-gray-200 text-gray-900 focus:border-primary-500 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-5 group hover:scale-[1.02] transition-transform duration-300 reveal-up"
              data-delay={index * 50}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-xl p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] group-hover:border-primary-500/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h3>
              </div>
              <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
              No skills match "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
