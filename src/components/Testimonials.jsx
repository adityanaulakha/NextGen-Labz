import React from 'react'
import arcwaveLogo from '../assets/clients/arcwave.svg'
import fluxgridLogo from '../assets/clients/fluxgrid.svg'
import nimbusLogo from '../assets/clients/nimbus.svg'

// Three curated testimonials with photos & real logo assets
const testimonials = [
  {
    quote: 'They moved from concept to polished MVP in weeks—communication and craftsmanship were stellar the whole way.',
    author: 'Sarah Mitchell',
    role: 'Product Lead',
    company: 'ArcWave',
    logo: arcwaveLogo,
    photo: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=256&q=60'
  },
  {
    quote: 'Rare mix of design sensitivity and deep engineering rigor. Our performance metrics jumped without redesign compromises.',
    author: 'Leon Ortega',
    role: 'CTO',
    company: 'FluxGrid',
    logo: fluxgridLogo,
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=256&q=60'
  },
  {
    quote: 'Felt like an extension of our internal team. Fast iterations, proactive problem solving, zero drama.',
    author: 'Emily Zhao',
    role: 'Founder',
    company: 'Nimbus Labs',
    logo: nimbusLogo,
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=60'
  }
]

const clientLogos = [
  { name: 'ArcWave', logo: arcwaveLogo },
  { name: 'FluxGrid', logo: fluxgridLogo },
  { name: 'Nimbus Labs', logo: nimbusLogo }
]

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 -z-20 bg-[#121212]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">Client feedback & logos</h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">A few words from teams who trusted us to design, build, and refine their products.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors"
            >
              <div className="relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-6 flex flex-col">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_20%_25%,rgba(168,85,247,0.18),transparent_65%)]" />
                <div className="flex items-start gap-4 flex-1">
                  <div className="relative h-14 w-14">
                    <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-white/10 shadow shadow-black/40">
                      <img src={t.photo} alt={t.author} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <img src={t.logo} alt={t.company + ' logo'} className="h-6 w-6 object-contain absolute -bottom-1 -right-1 rounded-md ring-1 ring-white/15 bg-neutral-900/90 p-0.5" />
                  </div>
                  <blockquote className="text-sm sm:text-[15px] leading-relaxed text-neutral-300 relative">
                    <span className="block text-purple-400/80 text-lg leading-none mb-2">“</span>
                    {t.quote}
                    <span className="block text-purple-400/80 text-lg leading-none mt-2">”</span>
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex flex-col text-xs sm:text-sm">
                  <span className="font-medium text-neutral-200">{t.author}</span>
                  <span className="text-neutral-500">{t.role} · {t.company}</span>
                </figcaption>
                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-white/5 group-hover:ring-purple-400/30 transition" />
              </div>
            </figure>
          ))}
        </div>

        {/* Logos Row */}
        <div className="mt-20">
          <p className="text-[11px] tracking-wider uppercase text-neutral-500 font-medium mb-5">Featured partners</p>
          <div className="flex flex-wrap gap-5 sm:gap-8">
            {clientLogos.map((c,i) => (
              <div key={i} className="inline-flex items-center gap-3 rounded-xl bg-neutral-900/60 ring-1 ring-neutral-700/50 px-4 py-2.5 hover:ring-purple-400/40 transition">
                <img src={c.logo} alt={c.name + ' logo'} className="h-8 w-8 rounded-md object-contain" loading="lazy" />
                <span className="text-sm font-medium text-neutral-300">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
