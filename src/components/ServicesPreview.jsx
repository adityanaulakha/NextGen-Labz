import React from 'react';

const categories = [
  {
    title: 'Web Development',
    tag: '🌐',
    blurb: 'Modern, fast, scalable web solutions.',
    items: [
      'Portfolio Websites',
      'Business Websites (Static / Dynamic)',
      'Landing Pages',
      'E‑Commerce Stores',
      'Web Apps (React / Next.js / Node.js)'
    ],
    gradient: 'from-purple-500/20 via-purple-400/10 to-purple-900/10'
  },
  {
    title: 'UI / UX & Design',
    tag: '🎨',
    blurb: 'Human-centered, conversion‑minded visuals.',
    items: [
      'Wireframing & Prototyping',
      'Website & App UI/UX',
      'Branding & Logo Design',
      'Graphic Design Assets'
    ],
    gradient: 'from-fuchsia-500/20 via-pink-400/10 to-indigo-900/10'
  },
  {
    title: 'Automation & AI',
    tag: '⚙️',
    blurb: 'Scale operations with smart systems.',
    items: [
      'Workflow Automation (Zapier / n8n / Make)',
      'AI Chatbots (Web / WhatsApp)',
      'Custom AI Integrations'
    ],
    gradient: 'from-amber-400/25 via-yellow-300/10 to-orange-900/10'
  },
  {
    title: 'Digital Marketing',
    tag: '📢',
    blurb: 'Acquisition & brand growth strategies.',
    items: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'Paid Advertising (Google / Meta)'
    ],
    gradient: 'from-sky-500/25 via-blue-400/10 to-blue-900/10'
  },
  {
    title: 'Digital Maintenance',
    tag: '🛠️',
    blurb: 'Keep digital products secure & healthy.',
    items: [
      'Site Maintenance & Updates',
      'Bug Fixes & Performance',
      'Security & Backups'
    ],
    gradient: 'from-teal-500/25 via-emerald-400/10 to-emerald-900/10'
  },
  {
    title: 'Photography',
    tag: '📸',
    blurb: 'Visual narratives that elevate brands.',
    items: [
      'Corporate & Product Shoots',
      'Event Coverage',
      'Lifestyle & Branding Shoots'
    ],
    gradient: 'from-rose-500/25 via-rose-400/10 to-rose-900/10'
  },
  {
    title: 'Video Production',
    tag: '🎥',
    blurb: 'High-impact motion for engagement.',
    items: [
      'Promotional & Explainer Videos',
      'Event Highlights & Aftermovies',
      'Social Media Reels & Ads'
    ],
    gradient: 'from-indigo-500/25 via-indigo-400/10 to-indigo-900/10'
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-3xl mb-14 sm:mb-20 w-full">
          <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-5">Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight break-words">
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">What we deliver</span>
          </h2>
          <p className="mt-5 text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">A multi‑disciplinary stack designed to launch, grow, and sustain digital products. Start focused or plug in end‑to‑end.</p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
          {categories.map((cat, i) => (
            <div key={cat.title} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors">
              <div className={`relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-5 sm:p-6 flex flex-col overflow-hidden`}>                
                <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-70 blur-3xl transition duration-700`} />
                <div className="relative flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-500/10 ring-1 ring-purple-400/30 flex items-center justify-center text-lg select-none">
                    {cat.tag}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                      {cat.title}
                      <span className="h-1 w-1 rounded-full bg-purple-400/70 inline-block" />
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">{cat.blurb}</p>
                  </div>
                </div>
                <ul className="relative mt-5 sm:mt-6 space-y-2 text-[11px] sm:text-xs font-medium text-neutral-300 flex-1">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow shadow-purple-800/40" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button className="inline-flex items-center text-[10px] font-medium tracking-wide text-purple-300/80 group-hover:text-purple-200 transition focus:outline-none focus:ring-2 focus:ring-purple-500/40 rounded px-1 py-1">
                    Learn more
                    <svg className="ml-1.5 h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h8M8 4l4 4-4 4"/></svg>
                  </button>
                  <span className="text-[10px] text-neutral-500">{('0' + (i+1)).slice(-2)}</span>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-white/5 group-hover:ring-purple-400/30 transition" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-20 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 w-full">
          <p className="text-xs sm:text-sm text-neutral-500 max-w-xl">Need a tailored bundle? We can combine design, engineering, automation, and growth into a single engagement.</p>
          <a href="quote" className="inline-flex items-center rounded-full bg-purple-600 hover:bg-purple-500 px-6 py-3 text-xs font-medium text-white shadow shadow-purple-700/30 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-950 w-fit flex-shrink-0">
            Start a project
            <svg className="ml-2 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
