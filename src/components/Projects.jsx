import { useState } from 'react'

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'web', label: 'Web Apps' },
]

const projectsData = [
  {
    id: 'saranya-dental',
    title: 'Saranya Dental Clinic Web Platform',
    category: ['fullstack', 'web'],
    badge: 'Production Client',
    tagline: 'Real-time patient appointment booking & FCM push notifications',
    imageGradient: 'from-cyan-600 via-teal-600 to-emerald-800',
    icon: '🦷',
    techStack: [
      'JavaScript',
      'Node.js',
      'Firebase Firestore',
      'Firebase Cloud Messaging (FCM)',
      'Vercel',
      'Tailwind CSS',
      'REST APIs',
    ],
    description:
      'Full-stack patient booking platform processing real-time clinic appointments with automated push notifications directly to administrative devices. Deployed on serverless cloud architecture with high-converting responsive design.',
    highlights: [
      'Engineered and deployed a full-stack booking system using JavaScript, Node.js, and Firebase Firestore for zero-latency patient updates.',
      'Integrated Firebase Cloud Messaging (FCM) to trigger automated push notifications to clinic staff upon appointment reservation.',
      'Architected a serverless deployment pipeline on Vercel resulting in 99.9% uptime and lightning-fast worldwide TTFB.',
      'Designed responsive UI with intuitive mobile date-time pickers, interactive confirmation states, and appointment management dashboards.',
    ],
    demoUrl: 'https://sdc-pied-iota.vercel.app/',
    metrics: [
      { label: 'Cloud Uptime', value: '99.9%' },
      { label: 'Alert Dispatch', value: 'Instant' },
      { label: 'Stack', value: 'Serverless' },
    ],
  },
  {
    id: 'mock-ai',
    title: 'Mock AI – AI-Powered Examination & Assessment Platform',
    category: ['fullstack', 'ai'],
    badge: 'Featured Project',
    tagline: 'Automated test generation & doubt resolution via Hugging Face LLMs',
    imageGradient: 'from-blue-600 via-indigo-600 to-purple-800',
    icon: '🤖',
    techStack: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Python (Flask)',
      'Hugging Face LLM API',
      'Chart.js',
      'Tailwind CSS',
    ],
    description:
      'A full-stack automated examination and assessment platform supporting role-based access control (RBAC) for Students and Administrators. Integrates Hugging Face LLM APIs and Python microservices for real-time exam generation and doubt-solving.',
    highlights: [
      'Architected end-to-end examination platform with role-based access control (RBAC) isolating Student exam portals from Admin test-authoring suites.',
      'Decoupled AI services using Python (Flask) microservices and Hugging Face LLM APIs to generate high-quality MCQs instantly from syllabus topics.',
      'Built an intelligent interactive study assistant for real-time student doubt-solving during review phases.',
      'Implemented bank-grade authentication with JWT tokens and bcrypt password hashing over Express.js RESTful routes.',
      'Visualized multi-dimensional student performance metrics (department, year, and individual) via custom interactive Chart.js dashboards.',
    ],
    metrics: [
      { label: 'MCQ Generation', value: '< 2.5s' },
      { label: 'Security', value: 'JWT + RBAC' },
      { label: 'Analytics', value: 'Chart.js' },
    ],
  },
  {
    id: 'ai-forensight',
    title: 'AI ForenSight – Deepfake & Digital Forensics Analysis',
    category: ['ai', 'fullstack'],
    badge: 'AI Research Project',
    tagline: 'Multi-modal digital media forensics & synthetic manipulation detection',
    imageGradient: 'from-purple-700 via-pink-600 to-rose-700',
    icon: '🔍',
    techStack: [
      'Python',
      'FastAPI',
      'PyTorch / OpenCV',
      'React.js',
      'Tailwind CSS',
      'Vite',
      'Docker',
    ],
    description:
      'A deep learning forensics suite designed to uncover manipulated facial imagery, AI-generated synthetic media, and spliced metadata with explainable probability heatmaps.',
    highlights: [
      'Implemented convolutional and vision transformer models to detect subtle deepfake frequency artifacts in images and videos.',
      'Built high-performance asynchronous analysis endpoints with Python FastAPI and background task queues.',
      'Created an interactive web console allowing users to inspect forensic heatmaps, confidence intervals, and metadata authenticity.',
      'Applied robust error handling and file validation to process high-resolution media seamlessly.',
    ],
    metrics: [
      { label: 'Accuracy', value: '94.2%' },
      { label: 'Inference', value: 'Async GPU' },
      { label: 'Format', value: 'Images/Video' },
    ],
  },
  {
    id: 'supabase-realtime',
    title: 'Supabase Real-Time Collaborative Workspace',
    category: ['fullstack', 'web'],
    badge: 'Modern Web Stack',
    tagline: 'Reactive state sync with PostgreSQL & Row-Level Security',
    imageGradient: 'from-emerald-600 via-teal-700 to-indigo-800',
    icon: '⚡',
    techStack: [
      'TypeScript',
      'React.js',
      'Supabase',
      'PostgreSQL',
      'Tailwind CSS',
      'Vite',
    ],
    description:
      'Collaborative real-time application with instant data synchronization across concurrent clients, fine-grained Row-Level Security (RLS) policies, and enterprise schema management.',
    highlights: [
      'Engineered live collaborative data tables that synchronize instantly across browser sessions via Supabase WebSockets.',
      'Designed PostgreSQL schemas with custom triggers, functions, and strict Row-Level Security policies to safeguard user records.',
      'Implemented optimistic UI updates ensuring zero perceived latency during active editing sessions.',
      'Built fully typed API interfaces in TypeScript to prevent runtime data mismatches.',
    ],
    metrics: [
      { label: 'Latency', value: '< 50ms' },
      { label: 'Security', value: 'Postgres RLS' },
      { label: 'Language', value: 'TypeScript' },
    ],
  },
]

export default function Projects({ theme }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true
    return proj.category.includes(activeCategory)
  })

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-up">
          <span className="eyebrow">Portfolio & Systems</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Work & <span className="gradient-text">Engineering Feats</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Explore projects demonstrating full-stack engineering, AI/LLM integration, microservices, and serverless architectures.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 reveal-up" data-delay="100">
          <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-2xl glass border border-white/[0.08]">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
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
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card group flex flex-col justify-between overflow-hidden cursor-pointer reveal-up"
              data-delay={idx * 150}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Header Banner with Visual Mockup */}
              <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                {/* Background decorative patterns */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                {/* Top Badge & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/40 text-white backdrop-blur-md border border-white/20">
                    {project.badge}
                  </span>
                  <span className="text-3xl filter drop-shadow-md">
                    {project.icon}
                  </span>
                </div>

                {/* Bottom Banner Title */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                    {project.title.split('–')[0]}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold backdrop-blur-md border border-white/30 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Architecture Details</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span className="text-primary-400 font-bold mt-0.5">•</span>
                        <span className={theme === 'dark' ? 'text-white/80' : 'text-gray-700'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Stack + Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                          theme === 'dark'
                            ? 'bg-white/[0.03] border-white/[0.08] text-white/60'
                            : 'bg-gray-100 border-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className={`text-[11px] font-mono px-2 py-1 rounded-md ${
                        theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                      }`}>
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] dark:border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                            theme === 'dark' ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Preview</span>
                        </a>
                      ) : (
                        <span className={`text-xs font-mono flex items-center gap-1.5 ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400/60" />
                          <span>Architecture & Deep Dive</span>
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-primary-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Details</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border ${
              theme === 'dark' ? 'bg-dark-900 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedProject.icon}</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30">
                {selectedProject.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">
              {selectedProject.title}
            </h3>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
              {selectedProject.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {selectedProject.metrics.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-2xl border text-center ${
                    theme === 'dark' ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-lg font-bold font-display gradient-text">{m.value}</div>
                  <div className={`text-[11px] font-mono uppercase ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* In-depth Contributions */}
            <div className="mb-8">
              <h4 className="text-sm font-mono uppercase tracking-wider text-primary-400 mb-4">
                Architecture & Engineering Features
              </h4>
              <div className="space-y-3">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h4 className={`text-xs font-mono uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                Technologies & Microservices
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3 py-1.5 rounded-xl border ${
                      theme === 'dark' ? 'bg-white/[0.05] border-white/[0.1] text-white/80' : 'bg-gray-100 border-gray-300 text-gray-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08] dark:border-white/[0.08]">
              {selectedProject.demoUrl ? (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn text-white"
                >
                  <span>Open Live Project</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span className={`text-xs font-mono ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                    Verified Architecture & Technical Specifications
                  </span>
                </div>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="ghost-btn text-xs py-2.5 px-5 cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
