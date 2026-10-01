import { useState } from 'react'

const experienceData = [
  {
    role: 'Full-Stack Developer (Freelance)',
    organization: 'Saranya Dental Clinic Web Platform',
    period: '2024 - Present',
    location: 'Remote / Tamil Nadu, India',
    type: 'Freelance Project',
    summary: 'Architected, engineered, and deployed a production-ready patient appointment booking platform processing real-time clinic requests with automated notifications.',
    highlights: [
      'Engineered & Deployed a full-stack appointment booking platform using JavaScript, Node.js, and Firebase Firestore to process real-time patient requests seamlessly.',
      'Integrated Push Notifications via Firebase Cloud Messaging (FCM) to automate instant booking alerts directly to clinic administration, reducing manual triage time.',
      'Designed a high-conversion, responsive UI with custom CSS animations, optimizing serverless cloud architecture on Netlify for 99.9% uptime and rapid page loads.',
      'Created administrative dashboard with real-time status management for accepting, rescheduling, and archiving patient appointments.',
    ],
    techStack: ['JavaScript', 'Node.js', 'Firebase Firestore', 'Firebase Cloud Messaging (FCM)', 'Netlify', 'Tailwind CSS', 'Serverless'],
    stats: [
      { label: 'Booking Time', value: '< 30s' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Alert Latency', value: 'Instant' },
    ],
  },
  {
    role: 'AI & Full-Stack Systems Developer',
    organization: 'Sri Shakthi Institute of Engineering and Technology',
    period: '2023 - 2024',
    location: 'Coimbatore, India',
    type: 'Academic & Project Engineering',
    summary: 'Engineered comprehensive AI-integrated platforms, microservice architectures, and algorithms as part of degree coursework and hackathons.',
    highlights: [
      'Designed role-based access control (RBAC) systems separating Student examination sessions from Administrator curriculum management.',
      'Integrated Hugging Face Large Language Model APIs with Python (Flask) microservices for automated question synthesis and real-time query resolution.',
      'Engineered secure authentication workflows featuring JSON Web Tokens (JWT) and bcrypt password hashing with RESTful endpoints.',
      'Built multi-dimensional performance tracking dashboards using Chart.js to visually benchmark student learning progression.',
    ],
    techStack: ['Python', 'Flask', 'Hugging Face API', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    stats: [
      { label: 'Architecture', value: 'Microservices' },
      { label: 'Auth Standard', value: 'JWT + RBAC' },
      { label: 'AI Engine', value: 'Hugging Face' },
    ],
  },
]

export default function Experience({ theme }) {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="eyebrow">Career & Engineering</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Practical Experience & <span className="gradient-text">Deliverables</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Real-world web engineering solutions delivered for healthcare clients and institutional academic platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline spine */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-10">
            {experienceData.map((exp, index) => {
              const isExpanded = expandedIndex === index

              return (
                <div
                  key={index}
                  className="relative md:pl-16 reveal-up"
                  data-delay={index * 150}
                >
                  {/* Timeline Dot for desktop */}
                  <div className="hidden md:flex absolute left-0 top-6 -translate-x-1/2 w-12 h-12 rounded-2xl items-center justify-center bg-dark-900 border border-primary-500/30 shadow-glow-sm z-10">
                    <span className="w-4 h-4 rounded-lg bg-gradient-to-tr from-primary-500 to-accent-cyan animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <div className={`glass-card p-6 sm:p-8 transition-all duration-300 border ${
                    isExpanded
                      ? theme === 'dark'
                        ? 'border-primary-500/40 shadow-glow-sm bg-white/[0.05]'
                        : 'border-primary-400 bg-white shadow-lg'
                      : ''
                  }`}>
                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full ${
                            theme === 'dark' ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20' : 'bg-primary-50 text-primary-700 border border-primary-200'
                          }`}>
                            {exp.type}
                          </span>
                          <span className={`text-xs font-mono ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>
                            {exp.location}
                          </span>
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-display font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.role}
                        </h3>
                        <p className={`text-sm sm:text-base font-semibold ${
                          theme === 'dark' ? 'text-accent-cyan' : 'text-primary-600'
                        }`}>
                          {exp.organization}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between">
                        <span className={`text-xs sm:text-sm font-mono font-medium px-3 py-1 rounded-xl ${
                          theme === 'dark' ? 'bg-white/[0.05] text-white/70' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {exp.period}
                        </span>
                        <button
                          onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                          className={`mt-2 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                            theme === 'dark' ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'
                          }`}
                        >
                          <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                          <svg className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className={`text-sm leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      {exp.summary}
                    </p>

                    {/* Collapsible Detailed Highlights */}
                    {isExpanded && (
                      <div className="space-y-3 mb-6 pt-4 border-t border-white/[0.08] dark:border-white/[0.08] animate-fadeIn">
                        <h4 className={`text-xs font-mono uppercase tracking-wider ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                          Key Contributions & Achievements:
                        </h4>
                        {exp.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                            <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                              {h}
                            </p>
                          </div>
                        ))}

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-3 gap-3 pt-3">
                          {exp.stats.map((st, i) => (
                            <div
                              key={i}
                              className={`p-3 rounded-xl border text-center ${
                                theme === 'dark' ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-gray-50 border-gray-200'
                              }`}
                            >
                              <div className="text-sm sm:text-base font-bold font-display gradient-text">
                                {st.value}
                              </div>
                              <div className={`text-[10px] font-mono uppercase ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'}`}>
                                {st.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs font-mono px-3 py-1 rounded-lg border ${
                            theme === 'dark'
                              ? 'bg-white/[0.03] border-white/[0.08] text-white/70'
                              : 'bg-gray-100 border-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
