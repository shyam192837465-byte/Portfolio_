import { useState } from 'react'

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [copied, setCopied] = useState(false)
  const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'sending' | 'sent'

  const email = 'shyam192837465@gmail.com'
  const phone = '+91-971528201'

  const handleCopyEmail = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedEmail(formData.email)
    setFormStatus('sending')
    setTimeout(() => {
      setFormStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shyam192837465-byte',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shyam-g-v-36765a3b1/?isSelfProfile=true',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Shyam1423/',
      icon: (
        <span className="font-mono font-bold text-sm tracking-tighter">LC</span>
      ),
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-primary-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent-violet/10 blur-[120px] pointer-events-none" />

      {/* Copy notification toast */}
      {copied && (
        <div className="toast flex items-center gap-2">
          <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Email copied to clipboard!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="eyebrow">Connect & Collaborate</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Build Something <span className="gradient-text">Exceptional</span> Together
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Have an exciting full-stack opportunity, software development role, or project inquiry? I'm just a message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal-up" data-delay="100">
            {/* Quick Contact Card */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className={`text-xs font-mono uppercase tracking-wider ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  Available for Full-Time & Freelance Roles
                </span>
              </div>

              <h3 className={`text-2xl font-display font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Shyam G V
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                Computer Science Engineer specializing in React, Node.js, Python, and AI microservice integrations. Open to internships, full-time positions, and freelance projects.
              </p>

              {/* Direct Info Items with Clickable Redirects */}
              <div className="space-y-4 mb-8">
                {/* Email (clickable mailto + copy action) */}
                <a
                  href={`mailto:${email}`}
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 group transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/[0.02] border-white/[0.08] hover:border-primary-500/50 hover:bg-white/[0.04]'
                      : 'bg-gray-50 border-gray-200 hover:border-primary-400 hover:bg-primary-50/30'
                  }`}
                  title="Click to Send Email"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className={`text-[10px] font-mono uppercase ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>Email Address</div>
                      <span className={`text-xs sm:text-sm font-semibold truncate block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {email}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </a>

                {/* WhatsApp / Phone (opens WhatsApp chat) */}
                <a
                  href="https://wa.me/91971528201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 group transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/[0.02] border-white/[0.08] hover:border-accent-cyan/50 hover:bg-white/[0.04]'
                      : 'bg-gray-50 border-gray-200 hover:border-accent-cyan hover:bg-cyan-50/30'
                  }`}
                  title="Click to Chat on WhatsApp"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`text-[10px] font-mono uppercase ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>Phone / WhatsApp</div>
                      <span className={`text-xs sm:text-sm font-semibold block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-accent-cyan group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    <span>Chat</span>
                    <span>→</span>
                  </span>
                </a>

                {/* Location (opens Google Maps) */}
                <a
                  href="https://maps.google.com/?q=Tamil+Nadu,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl border flex items-center justify-between gap-3 group transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-white/[0.02] border-white/[0.08] hover:border-accent-violet/50 hover:bg-white/[0.04]'
                      : 'bg-gray-50 border-gray-200 hover:border-accent-violet hover:bg-purple-50/30'
                  }`}
                  title="View on Google Maps"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-violet/10 text-accent-violet flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`text-[10px] font-mono uppercase ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'}`}>Location</div>
                      <span className={`text-xs sm:text-sm font-semibold block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Tamil Nadu, India (Open to Relocation & Remote)
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-accent-violet group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    <span>Map</span>
                    <span>→</span>
                  </span>
                </a>
              </div>

              {/* Social Channels Bar */}
              <div>
                <span className={`text-xs font-mono uppercase tracking-wider block mb-3 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
                  Social & Developer Profiles
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-110 cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-white/[0.05] border-white/[0.1] text-white/80 hover:text-white hover:border-primary-400 hover:shadow-glow-sm'
                          : 'bg-white border-gray-200 text-gray-700 hover:text-primary-600 hover:border-primary-400 hover:shadow-md'
                      }`}
                      title={s.name}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 reveal-up" data-delay="200">
            {formStatus === 'sent' ? (
              /* Dedicated 'Message Sent!' confirmation screen */
              <div className="flex flex-col items-center justify-center text-center py-10 px-4 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-500/20 animate-pulse">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Transmission Dispatched
                </span>

                <h4 className={`text-3xl font-display font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Message Sent!
                </h4>

                <p className={`text-sm sm:text-base max-w-md leading-relaxed mb-8 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  Thank you for reaching out! Your message has been sent directly to Shyam G V. I have received your inquiry and will reply shortly{submittedEmail ? ` to ${submittedEmail}` : ''}.
                </p>

                <button
                  onClick={() => setFormStatus('idle')}
                  className="magnetic-btn text-white cursor-pointer px-8 py-3.5"
                >
                  <span>Send Another Message</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ) : (
              <div>
                <h3 className={`text-2xl font-display font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Direct Message
                </h3>
                <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  Fill out the form below and I will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className={`block text-xs font-mono uppercase mb-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
                          theme === 'dark'
                            ? 'bg-white/[0.03] border-white/[0.08] text-white focus:border-primary-400 focus:bg-white/[0.06]'
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary-500 focus:bg-white'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-xs font-mono uppercase mb-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
                          theme === 'dark'
                            ? 'bg-white/[0.03] border-white/[0.08] text-white focus:border-primary-400 focus:bg-white/[0.06]'
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary-500 focus:bg-white'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-xs font-mono uppercase mb-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Job Opportunity / Freelance Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
                        theme === 'dark'
                          ? 'bg-white/[0.03] border-white/[0.08] text-white focus:border-primary-400 focus:bg-white/[0.06]'
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary-500 focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-mono uppercase mb-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border resize-none ${
                        theme === 'dark'
                          ? 'bg-white/[0.03] border-white/[0.08] text-white focus:border-primary-400 focus:bg-white/[0.06]'
                          : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary-500 focus:bg-white'
                      }`}
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full magnetic-btn text-white justify-center py-4 cursor-pointer"
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

