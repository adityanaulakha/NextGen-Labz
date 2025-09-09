import { useState, useCallback } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import SplitText from '../components/SplitText'

// Carousel image assets (only files that exist in /src/assets/carousel)
import TechCarousel from '../components/TechCarousel';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

function LandingPage() {
    const [subVisible, setSubVisible] = useState(false)
    const handleAnimationComplete = useCallback(() => {
        // Guard so we don't trigger state twice (which can cause re-renders that might rebuild splits)
        setSubVisible(prev => (prev ? prev : true))
    }, [])

    return (
        <>
        <div className="w-full min-h-screen overflow-hidden">
        <main id="main-content" className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-28 text-left text-neutral-200 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full">
                <div className="flex-1 max-w-full lg:max-w-4xl w-full">
                            <SplitText
                                text="Crafting Digital Experiences"
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] sm:leading-[1.08] lg:leading-[1.05] tracking-tight break-words w-full"
                                delay={80}
                                duration={0.55}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 60 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.15}
                                rootMargin="-120px"
                                textAlign="left"
                                tag="h1"
                                onLetterAnimationComplete={handleAnimationComplete}
                                highlightWords={['Digital']}
                                highlightClass="text-purple-500"
                            />
                            {subVisible && (
                                <SplitText
                                    text="Design. Develop. Iterate. Repeat."
                                    className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl font-medium text-neutral-400"
                                    delay={60}
                                    duration={0.45}
                                    ease="power3.out"
                                    splitType="words"
                                    from={{ opacity: 0, y: 30 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.2}
                                    rootMargin="-100px"
                                    textAlign="left"
                                    tag="h2"
                                    highlightWords={['Design.', 'Iterate.']}
                                    highlightClass="text-purple-400"
                                />
                            )}
                    <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-neutral-400 max-w-2xl">
                        We help brands and startups turn ambitious ideas into beautiful, performant products. From rapid prototypes to full-scale platforms, our multidisciplinary team blends strategy, design, and engineering to ship work that matters.
                    </p>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl">
                        Need a partner for your next launch or a fresh iteration of your existing product? Let's collaborate and build something users love.
                    </p>
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
                        <a href="#quote" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-6 sm:px-8 py-3 text-sm font-medium text-white shadow shadow-purple-700/30 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#171717]">Get a Quote</a>
                        <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-neutral-700 hover:border-purple-500 hover:text-white px-6 sm:px-8 py-3 text-sm font-medium text-neutral-300 transition focus:outline-none focus:ring-2 focus:ring-purple-500/60">View Projects</a>
                    </div>
                </div>
                {/* Lottie animation */}
                <div className="w-full lg:w-[400px] xl:w-[450px] flex justify-center lg:justify-end mt-10 lg:mt-0 flex-shrink-0">
                    <div className="w-56 sm:w-64 md:w-72 lg:w-full aspect-square max-w-full">
                        <DotLottieReact
                            src="https://lottie.host/2bd3b91a-1920-4ca4-9491-3d469030b5cd/FK5Z2r3aZI.lottie"
                            loop
                            autoplay
                            className="w-full h-full"
                            />
                    </div>
                </div>
            </div>
        </main>
        {/* Why Choose Us Section */}
        <section id="why-us" className="relative py-20 sm:py-24 lg:py-32 w-full overflow-hidden">
            {/* layered background */}
            <div className="absolute inset-0 -z-20 bg-[#131313]" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/5" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:70px_70px]" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] lg:w-[780px] lg:h-[780px] rounded-full bg-purple-600/15 blur-3xl opacity-40" />
            <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative w-full">
                <div className="mb-16 sm:mb-20 max-w-4xl w-full">
                    <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-4 sm:mb-6">Our Edge</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight break-words">
                        <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Why choose us</span>
                    </h2>
                    <p className="mt-4 sm:mt-6 text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">We blend strategy, design craft, and engineering depth into a single velocity layer. Lean squads, senior ownership, and obsessive detail mean you ship faster—with quality that compounds.</p>
                </div>
                <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
                    {[
                        {title:'Expert ownership',desc:'No junior pass‑offs or blind spots—just accountable specialists who understand product nuance.'},
                        {title:'Fast iteration cadence',desc:'Prototype → validate → refine. Lean cycles reduce waste and surface signal earlier.'},
                        {title:'Quality as default',desc:'Stable, measurable foundations (accessibility, performance, resilience) before growth layers.'},
                        {title:'Communication that scales',desc:'Async-first updates, clear artifacts, and predictable rhythms that respect your time.'},
                    ].map((f,i)=>(
                        <div key={i} className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors">
                            <div className="relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-5 sm:p-6 flex flex-col">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_65%)]" />
                                <div className="relative flex items-start gap-3 sm:gap-4">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-500/10 ring-1 ring-purple-400/30 flex items-center justify-center text-xs sm:text-[13px] font-semibold text-purple-300 shadow-inner shadow-purple-800/40">
                                        {('0'+(i+1)).slice(-2)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight flex items-center gap-2">
                                            {f.title}
                                            <span className="h-1 w-1 rounded-full bg-purple-400/70 inline-block" />
                                        </h3>
                                    </div>
                                </div>
                                <p className="relative mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-neutral-400 flex-1">{f.desc}</p>
                                <div className="relative mt-5 sm:mt-6">
                                    <div className="inline-flex items-center text-[10px] sm:text-[11px] font-medium tracking-wide text-purple-300/80 group-hover:text-purple-200 transition">
                                        Learn more
                                        <svg className="ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h8M8 4l4 4-4 4"/></svg>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-white/5 group-hover:ring-purple-400/30 transition" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 sm:mt-20 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center justify-between w-full">
                    <p className="text-xs sm:text-sm text-neutral-500 max-w-xl">Not just a feature factory. We partner to shape, pressure test, and accelerate what you bring to market.</p>
                    <a href="#quote" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-6 sm:px-7 py-3 text-xs font-medium text-white shadow shadow-purple-700/30 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#131313] self-start lg:self-auto flex-shrink-0">
                        Start a conversation
                        <svg className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        </section>
        
        {/* Technologies Carousel */}
        <section className="py-20 w-full overflow-hidden">
            <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-12 w-full">
                <div className="text-center w-full">
                    <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-3 sm:mb-4">Our Stack</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white break-words">Technologies we love</h2>
                </div>
            </div>
            <TechCarousel speed={55} />
        </section>

        {/* Services Preview */}
        <ServicesPreview />

        {/* Testimonials */}
        <Testimonials />

        {/* Final Call To Action */}
        <FinalCTA />
        </div>
        </>
    )
}

export default LandingPage;
