import React from 'react'

function About() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 lg:py-40 w-full overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#171717] via-[#131313] to-[#151515]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-4xl w-full">
            <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-6">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight break-words">
              <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Crafting Digital Excellence</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-3xl">
              We're a tight-knit team of designers, engineers, and strategists who believe great products come from deep collaboration and relentless attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-[#121212] to-neutral-950" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center w-full">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight break-words mb-6">
                Our Story
              </h2>
              <div className="prose prose-neutral prose-invert max-w-none">
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Founded in 2020, NextGen Labz emerged from a simple observation: most digital agencies either excel at beautiful design or robust engineering, but rarely both. We set out to bridge that gap.
                </p>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  What started as a small collective of friends has grown into a distributed team of senior specialists, each bringing years of experience from top-tier companies and successful startups.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Today, we partner with ambitious teams to turn complex problems into elegant solutions that users love and businesses depend on.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 via-neutral-900 to-neutral-950 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.1),transparent_70%)]" />
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6 sm:gap-8">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
                      <div className="text-sm text-neutral-400">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">25+</div>
                      <div className="text-sm text-neutral-400">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9</div>
                      <div className="text-sm text-neutral-400">Client Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2">3</div>
                      <div className="text-sm text-neutral-400">Years Strong</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[#131313]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-3xl mb-16 sm:mb-20 w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight break-words mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">What Drives Us</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">
              Our values aren't just wall art—they guide every decision, every line of code, and every pixel we craft.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {[
              {
                title: 'Quality Over Quantity',
                desc: 'We believe in shipping fewer, better things. Every project gets our full attention and senior-level execution.',
                icon: '✨'
              },
              {
                title: 'Transparent Communication',
                desc: 'No black boxes or radio silence. You will always know where things stand and what is happening next.',
                icon: '💬'
              },
              {
                title: 'User-Centered Design',
                desc: 'Beautiful interfaces mean nothing if they do not solve real problems. We design for humans, not awards.',
                icon: '👥'
              },
              {
                title: 'Technical Excellence',
                desc: 'Fast, secure, scalable. We build things that work today and adapt to tomorrow\'s challenges.',
                icon: '⚡'
              },
              {
                title: 'Continuous Learning',
                desc: 'Technology evolves fast. We stay curious, experiment constantly, and bring fresh perspectives to every project.',
                icon: '🚀'
              },
              {
                title: 'Partnership Mindset',
                desc: 'We\'re not just vendors—we\'re invested in your success and treat your goals as our own.',
                icon: '🤝'
              }
            ].map((value, i) => (
              <div key={i} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors">
                <div className="relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-6 flex flex-col">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_65%)]" />
                  <div className="relative">
                    <div className="text-2xl mb-4">{value.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3 break-words">{value.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-neutral-950 via-[#151515] to-neutral-950" />
        <div className="absolute inset-0 -z-10 opacity-[0.15] [background-image:radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.35),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight break-words mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-8 py-4 text-sm font-medium text-white shadow shadow-purple-700/40 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-950">
                Get In Touch
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
              <a href="/quote" className="inline-flex items-center justify-center rounded-full border border-neutral-700/60 hover:border-purple-400/60 bg-neutral-900/40 hover:bg-neutral-800/60 px-8 py-4 text-sm font-medium text-neutral-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-purple-500/40">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
