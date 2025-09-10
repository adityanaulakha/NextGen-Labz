import React from 'react'

function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-32" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-neutral-950 via-[#151515] to-neutral-950" />
      <div className="absolute inset-0 -z-10 opacity-[0.15] [background-image:radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.25),transparent_65%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 backdrop-blur-md px-6 sm:px-10 md:px-14 py-16 sm:py-20">
          <div className="absolute -inset-px rounded-[1.4rem] pointer-events-none border border-purple-500/0 [mask:linear-gradient(#000,#000)_padding-box,linear-gradient(#000,#000)] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:[background:linear-gradient(130deg,rgba(168,85,247,0.65),rgba(99,102,241,0.4),rgba(168,85,247,0.65))] before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition" />
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
            <div>
              <h2 id="final-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Let’s Build Something Great</span>
              </h2>
              <p className="mt-5 text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">Have a product to launch, modernize, or scale? We partner with founders & teams to design, engineer, and iterate with momentum—shipping work users actually feel.
              </p>
              <p className="mt-4 text-neutral-500 text-xs sm:text-sm max-w-lg">No bloated handoffs. Senior execution, tight feedback loops, measurable progress.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:justify-end">
              <a href="contact" className="group inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-9 py-4 text-sm font-medium text-white shadow shadow-purple-700/40 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900">
                Contact Us
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-40 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 -left-32 w-[520px] h-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
