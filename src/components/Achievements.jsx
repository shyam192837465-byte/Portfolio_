export default function Achievements({ theme }) {
  const achievements = [
    {
      title: 'LeetCode 50-Day Badge',
      category: 'Competitive Programming & Problem Solving',
      icon: '🏆',
      stat: '50+ Days',
      color: 'from-amber-500 to-orange-500',
      badge: 'Algorithm Mastery',
      description:
        'Successfully completed the rigorous 50-Day LeetCode coding challenge, demonstrating unwavering consistency in algorithmic thinking, data structures, and optimal time-space complexity design.',
      details: [
        'Solved diverse problems covering Arrays, Hash Maps, Dynamic Programming, and Graph Traversals',
        'Consistently refined code execution benchmarks and space-complexity trade-offs',
        'Demonstrated disciplined daily problem-solving regimen',
      ],
      linkText: 'View LeetCode Profile',
      linkUrl: 'https://leetcode.com',
    },
    {
      title: 'EASA College Hackathon – AI Innovation',
      category: 'Hackathon & Rapid Prototyping',
      icon: '⚡',
      stat: 'AI Finalist',
      color: 'from-primary-500 to-accent-cyan',
      badge: 'Hackathon Project',
      description:
        'Participated in the EASA College Hackathon and engineered an AI-powered project from ideation to functioning demo, demonstrating rapid software development, problem-solving, and team orchestration.',
      details: [
        'Formulated and built a real-time AI solution addressing pressing workflow bottlenecks',
        'Integrated machine learning endpoints with a responsive frontend dashboard within 24 hours',
        'Pitched architecture and live demonstration to an expert industry evaluation panel',
      ],
      linkText: 'Project Repository',
      linkUrl: 'https://github.com',
    },
    {
      title: 'Engineering Academic Distinction',
      category: 'B.E. Computer Science & Engineering',
      icon: '🎓',
      stat: '7.72 CGPA',
      color: 'from-accent-violet to-purple-600',
      badge: 'Academic Record',
      description:
        'Maintained high academic standing at Sri Shakthi Institute of Engineering and Technology, paired with 81.6% in CBSE Secondary and 79.5% in CBSE Higher Secondary examinations.',
      details: [
        'Top coursework marks in Object-Oriented Programming, Operating Systems, and DBMS',
        'Applied theoretical computing concepts directly to production-grade applications',
        'Active member of department technical symposiums and peer coding circles',
      ],
      linkText: 'Verified Credential',
      linkUrl: '#about',
    },
  ]

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-accent-cyan/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="eyebrow">Milestones & Honors</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Recognitions & <span className="gradient-text">Coding Badges</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Milestones validating algorithmic dedication, technical innovation under hackathon pressure, and academic foundation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 group flex flex-col justify-between relative overflow-hidden reveal-up hover:scale-[1.02] transition-all duration-300"
              data-delay={index * 150}
            >
              {/* Top ambient color bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

              <div>
                {/* Header Icon & Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-3xl shadow-glow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-sm font-mono font-bold px-3 py-1 rounded-full border ${
                    theme === 'dark'
                      ? 'bg-white/[0.05] border-white/10 text-accent-cyan'
                      : 'bg-primary-50 border-primary-200 text-primary-700'
                  }`}>
                    {item.stat}
                  </span>
                </div>

                <span className={`text-xs font-mono uppercase tracking-wider block mb-2 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {item.category}
                </span>

                <h3 className={`text-xl font-display font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-white/70' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>

                {/* Bullet details */}
                <div className="space-y-2 mb-6">
                  {item.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="text-accent-cyan font-bold mt-0.5">✓</span>
                      <span className={theme === 'dark' ? 'text-white/60' : 'text-gray-600'}>
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="pt-4 border-t border-white/[0.08] dark:border-white/[0.08]">
                <a
                  href={item.linkUrl}
                  target={item.linkUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    theme === 'dark' ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700'
                  }`}
                >
                  <span>{item.linkText}</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
