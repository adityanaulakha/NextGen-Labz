import React from 'react'
import useSEO from '../hooks/useSEO'
// Import team images
import adityaImage from '../assets/team/aditya.jpg'
import harshImage from '../assets/team/harsh.jpg'
import vaishnavImage from '../assets/team/vaishnav.jpg'

function About() {
  useSEO({
    title: 'About NextGen Labz | Founders, Vision & Values',
    description: 'Learn about NextGen Labz – a freelance digital product studio founded in 2025. Meet the founders and discover our mission, journey, and values in design, engineering & innovation.',
    keywords: 'About NextGen Labz, founders, digital product studio, mission, values, 2025 startup, design engineering team',
    canonical: 'https://www.nextgenlabz.studio/about',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'About NextGen Labz',
        'url': 'https://www.nextgenlabz.studio/about',
        'description': 'About NextGen Labz – founders, mission and core values of our freelance digital product studio.'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'NextGen Labz',
        'url': 'https://www.nextgenlabz.studio',
        'foundingDate': '2025',
        'founder': [
          { '@type': 'Person', 'name': 'Aditya Naulakha' },
          { '@type': 'Person', 'name': 'Vaishnav P Ramesh' },
          { '@type': 'Person', 'name': 'Harshvardhan Gupta' }
        ]
      }
    ]
  })
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-28 sm:py-32 lg:py-40 w-full overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#171717] via-[#131313] to-[#151515]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-5xl w-full">
            <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-6">About NextGen Labz</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight break-words mb-8">
              <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">We Turn Ideas Into </span>
              <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Digital Reality</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-4xl mb-8">
              Born from the vision to bridge the gap between stunning design and robust engineering, NextGen Labz (also known as NextGenLabz or Next Gen Labz) crafts digital experiences that don't just look good—they perform exceptionally and scale with business ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25">
                <span>Get Started</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#team" className="inline-flex items-center justify-center px-8 py-4 border border-neutral-600/40 hover:border-purple-500/50 bg-neutral-800/30 hover:bg-neutral-700/40 text-neutral-300 hover:text-white font-semibold rounded-xl transition-all duration-200">
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-neutral-950 via-[#0f0f0f] to-neutral-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 w-full">
            <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-6">The Visionaries</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight break-words mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Meet Our Founders</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              The creative minds and technical wizards who founded NextGen Labz with a shared vision of revolutionizing digital experiences.
            </p>
          </div>
          
          <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            {/* Founder 1 - Aditya */}
            <div className="group relative">
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/50 hover:via-neutral-800/10 hover:to-purple-900/30 transition-all duration-500">
                <div className="relative h-full rounded-3xl bg-neutral-950/80 backdrop-blur-sm p-8 flex flex-col text-center">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.2),transparent_70%)] rounded-3xl" />
                  <div className="relative">
                    {/* Profile Image with enhanced styling */}
                    <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/30 to-purple-600/30 p-[3px] group-hover:from-purple-400/40 group-hover:to-purple-600/40 transition-all duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 ring-1 ring-white/10">
                        <img 
                          src={adityaImage} 
                          alt="Aditya Naulakha" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Name & Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">Aditya Naulakha</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full mb-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-300 font-semibold text-sm">Founder</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                      Strategic visionary and business architect. Transforms complex challenges into innovative solutions that drive sustainable growth and market disruption.
                    </p>
                    
                    {/* Enhanced Skills/Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Strategy</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Leadership</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 - Vaishnav */}
            <div className="group relative">
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/50 hover:via-neutral-800/10 hover:to-purple-900/30 transition-all duration-500">
                <div className="relative h-full rounded-3xl bg-neutral-950/80 backdrop-blur-sm p-8 flex flex-col text-center">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.2),transparent_70%)] rounded-3xl" />
                  <div className="relative">
                    {/* Profile Image with enhanced styling */}
                    <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/30 to-purple-600/30 p-[3px] group-hover:from-purple-400/40 group-hover:to-purple-600/40 transition-all duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 ring-1 ring-white/10">
                        <img 
                          src={vaishnavImage} 
                          alt="Vaishnav P Ramesh" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Name & Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">Vaishnav P Ramesh</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full mb-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-300 font-semibold text-sm">Founder</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                      Technical mastermind and system architect. Builds robust, scalable platforms that power digital transformation and deliver exceptional performance.
                    </p>
                    
                    {/* Enhanced Skills/Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Full Stack</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">DevOps</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 3 - Harsh */}
            <div className="group relative md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0">
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/50 hover:via-neutral-800/10 hover:to-purple-900/30 transition-all duration-500">
                <div className="relative h-full rounded-3xl bg-neutral-950/80 backdrop-blur-sm p-8 flex flex-col text-center">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.2),transparent_70%)] rounded-3xl" />
                  <div className="relative">
                    {/* Profile Image with enhanced styling */}
                    <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/30 to-purple-600/30 p-[3px] group-hover:from-purple-400/40 group-hover:to-purple-600/40 transition-all duration-500">
                      <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 ring-1 ring-white/10">
                        <img 
                          src={harshImage} 
                          alt="Harshvardhan Gupta" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Name & Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">Harshvardhan Gupta</h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full mb-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-300 font-semibold text-sm">Founder</span>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                      Creative genius and brand storyteller. Designs immersive digital experiences that captivate users and create lasting emotional connections.
                    </p>
                    
                    {/* Enhanced Skills/Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">UI/UX</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Branding</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500/15 to-purple-600/15 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium hover:from-purple-500/25 hover:to-purple-600/25 transition-all">Creative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders Impact Stats */}
          <div className="mt-20 text-center">
            <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple-500/5 via-neutral-900/30 to-purple-600/5 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">Together, We're Building the Future</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="group">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">3</div>
                  <div className="text-sm text-neutral-300 font-medium">Visionary Founders</div>
                </div>
                <div className="group">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
                  <div className="text-sm text-neutral-300 font-medium">Combined Experience</div>
                </div>
                <div className="group">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">∞</div>
                  <div className="text-sm text-neutral-300 font-medium">Creative Possibilities</div>
                </div>
                <div className="group">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">2025</div>
                  <div className="text-sm text-neutral-300 font-medium">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950 via-[#121212] to-neutral-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="grid gap-16 lg:gap-20 lg:grid-cols-2 items-center w-full">
            <div className="w-full">
              <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-6">Our Journey</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight break-words mb-8">
                <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">The Story Behind </span>
                <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">NextGen Labz</span>
              </h2>
              <div className="prose prose-neutral prose-invert max-w-none space-y-6">
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Founded in 2025, NextGen Labz was born from a bold vision: to revolutionize how businesses approach digital transformation in an increasingly connected world. Discover what we offer across design, engineering, automation and growth on our <a href="/services" className="text-purple-300 underline decoration-dotted hover:text-purple-200 transition-colors">services page</a>.
                </p>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Our founding team recognized that the digital landscape was evolving rapidly, yet many agencies were still using outdated approaches. We set out to bridge that gap with fresh perspectives, cutting-edge technology, and innovative solutions.
                </p>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Today, we're not just building websites and apps—we're crafting digital experiences that define the next generation of business success.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/20 via-neutral-900/90 to-neutral-950 p-8 sm:p-10 border border-purple-500/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.15),transparent_70%)]" />
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">Our Impact in Numbers</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">50+</div>
                      <div className="text-sm text-neutral-300 font-medium">Projects Delivered</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">25+</div>
                      <div className="text-sm text-neutral-300 font-medium">Happy Clients</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">4.9</div>
                      <div className="text-sm text-neutral-300 font-medium">Client Rating</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">2025</div>
                      <div className="text-sm text-neutral-300 font-medium">Founded</div>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl border border-purple-500/20">
                    <p className="text-center text-purple-200 font-semibold text-sm">
                      🚀 "Innovation isn't just what we do—it's who we are."
                    </p>
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
