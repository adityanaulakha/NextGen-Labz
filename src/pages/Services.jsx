import React from 'react'
import useSEO from '../hooks/useSEO'

// Simple services data to render consistent cards
const SERVICES = [
  {
    title: 'Web Development',
    desc: 'Fast, scalable websites & web apps using modern stacks (React, Vite, performant architectures).'
  },
  {
    title: 'UI / UX & Design',
    desc: 'User-centered interface & experience design focusing on clarity, accessibility and conversion.'
  },
  {
    title: 'Automation & AI',
    desc: 'Workflow automation, AI assisted tooling, integrations that reduce manual overhead.'
  },
  {
    title: 'Digital Marketing',
    desc: 'Acquisition & growth foundations: tracking-ready landing pages, content structure & analytics.'
  },
  {
    title: 'Digital Maintenance',
    desc: 'Ongoing updates, security patches, performance tuning & reliability monitoring.'
  },
  {
    title: 'Photography',
    desc: 'High-impact visuals for brand, product and campaigns (optimization-ready outputs).'
  },
  {
    title: 'Video Production',
    desc: 'Short-form and promotional video assets aligned with brand narrative and channel format.'
  },
  {
    title: 'Consulting',
    desc: 'Product & technical advisory: roadmap validation, architecture reviews, growth enablement.'
  },
  {
    title: 'DevOps',
    desc: 'Deployment pipelines, observability and scalable infrastructure practices.'
  }
]

export default function Services() {
  useSEO({
    title: 'Services | NextGen Labz Digital Product & Growth Capabilities',
    description: 'Explore NextGen Labz services: web development, UI/UX design, automation & AI, digital marketing, maintenance, media production, consulting & DevOps.',
    keywords: 'NextGen Labz services, web development, UI UX, automation AI, DevOps, digital marketing, maintenance, consulting',
    canonical: 'https://www.nextgenlabz.studio/services',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'NextGen Labz Services',
        'url': 'https://www.nextgenlabz.studio/services'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': SERVICES.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.title,
          description: s.desc
        }))
      }
    ]
  })

  return (
    <div className="bg-[#171717] text-white min-h-screen pt-24 w-full overflow-hidden">
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-5">Our Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
            Capabilities That
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Power Your Product
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            A multidisciplinary stack enabling faster iteration, cleaner execution and measurable growth.
          </p>
        </div>
      </section>

      <main className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <div key={service.title} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors">
                <div className="relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-6 flex flex-col">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_65%)]" />
                  <div className="relative flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-500/10 ring-1 ring-purple-400/30 flex items-center justify-center text-xs font-semibold text-purple-300 shadow-inner shadow-purple-800/40">
                      {(i+1).toString().padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                        {service.title}
                        <span className="h-1 w-1 rounded-full bg-purple-400/70 inline-block" />
                      </h2>
                    </div>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-neutral-400 flex-1">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">Need Something Custom?</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">We often combine these tracks into integrated delivery squads. If you have a unique challenge, we can scope a hybrid engagement tailored to outcomes—not just output.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25">
                Request a Quote
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-neutral-600/40 hover:border-purple-500/50 bg-neutral-800/30 hover:bg-neutral-700/40 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-200">
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
