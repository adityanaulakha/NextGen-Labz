import { useState, useCallback } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import SplitText from '../components/SplitText'

// Import local SVG assets
import n8nIcon from '../assets/carousel/n8n.svg';
import canvaIcon from '../assets/carousel/canva.svg';
import tailwindIcon from '../assets/carousel/tailwindcss.svg';
import figmaIcon from '../assets/carousel/figma.svg';
import nextjsIcon from '../assets/carousel/nextdotjs.svg';
import vercelIcon from '../assets/carousel/vercel.svg';
import instagramIcon from '../assets/carousel/instagram.svg';
import premiereIcon from '../assets/carousel/premierepro.svg';
import photoshopIcon from '../assets/carousel/photoshop.svg';

function LandingPage() {
    const [subVisible, setSubVisible] = useState(false)
    const handleAnimationComplete = useCallback(() => {
        // Guard so we don't trigger state twice (which can cause re-renders that might rebuild splits)
        setSubVisible(prev => (prev ? prev : true))
    }, [])

    return (
        <>
        <main className="px-4 md:px-8 py-28 text-left text-neutral-200 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="flex-1 max-w-4xl">
                            <SplitText
                                text="Crafting Digital Experiences"
                                className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
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
                                    className="mt-6 text-2xl sm:text-3xl font-medium text-neutral-400"
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
                    <p className="mt-8 text-lg leading-relaxed text-neutral-400 max-w-2xl">
                        We help brands and startups turn ambitious ideas into beautiful, performant products. From rapid prototypes to full-scale platforms, our multidisciplinary team blends strategy, design, and engineering to ship work that matters.
                    </p>
                    <p className="mt-4 text-neutral-500 max-w-2xl">
                        Need a partner for your next launch or a fresh iteration of your existing product? Let’s collaborate and build something users love.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#quote" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-8 py-3 text-sm font-medium text-white shadow shadow-purple-700/30 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#171717]">Get a Quote</a>
                        <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-neutral-700 hover:border-purple-500 hover:text-white px-8 py-3 text-sm font-medium text-neutral-300 transition focus:outline-none focus:ring-2 focus:ring-purple-500/60">View Projects</a>
                    </div>
                </div>
                {/* Lottie animation */}
                <div className="w-full lg:w-[420px] xl:w-[480px] flex justify-center lg:justify-end">
                    <div className="w-72 sm:w-80 lg:w-full aspect-square">
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
        <section id="why-us" className="relative py-32">
            {/* layered background */}
            <div className="absolute inset-0 -z-20 bg-[#131313]" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/5" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:70px_70px]" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[780px] h-[780px] rounded-full bg-purple-600/15 blur-3xl opacity-40" />
            <div className="px-4 md:px-8 max-w-7xl mx-auto relative">
                <div className="mb-20 max-w-4xl">
                    <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-6">Our Edge</span>
                    <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                        <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">Why choose us</span>
                    </h2>
                    <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed">We blend strategy, design craft, and engineering depth into a single velocity layer. Lean squads, senior ownership, and obsessive detail mean you ship faster—with quality that compounds.</p>
                </div>
                <div className="grid gap-8 md:gap-10 md:grid-cols-2 xl:grid-cols-4">
                    {[
                        {title:'Expert ownership',desc:'No junior pass‑offs or blind spots—just accountable specialists who understand product nuance.'},
                        {title:'Fast iteration cadence',desc:'Prototype → validate → refine. Lean cycles reduce waste and surface signal earlier.'},
                        {title:'Quality as default',desc:'Stable, measurable foundations (accessibility, performance, resilience) before growth layers.'},
                        {title:'Communication that scales',desc:'Async-first updates, clear artifacts, and predictable rhythms that respect your time.'},
                    ].map((f,i)=>(
                        <div key={i} className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-neutral-700/30 via-neutral-800/10 to-neutral-900/40 hover:from-purple-500/40 hover:via-neutral-800/10 hover:to-purple-900/20 transition-colors">
                            <div className="relative h-full rounded-2xl bg-neutral-950/70 backdrop-blur-sm p-6 flex flex-col">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.18),transparent_65%)]" />
                                <div className="relative flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-500/10 ring-1 ring-purple-400/30 flex items-center justify-center text-[13px] font-semibold text-purple-300 shadow-inner shadow-purple-800/40">
                                        {('0'+(i+1)).slice(-2)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                                            {f.title}
                                            <span className="h-1 w-1 rounded-full bg-purple-400/70 inline-block" />
                                        </h3>
                                    </div>
                                </div>
                                <p className="relative mt-5 text-sm leading-relaxed text-neutral-400 flex-1">{f.desc}</p>
                                <div className="relative mt-6">
                                    <div className="inline-flex items-center text-[11px] font-medium tracking-wide text-purple-300/80 group-hover:text-purple-200 transition">
                                        Learn more
                                        <svg className="ml-1.5 h-3.5 w-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h8M8 4l4 4-4 4"/></svg>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-[15px] ring-1 ring-white/5 group-hover:ring-purple-400/30 transition" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 flex flex-col gap-6 sm:flex-row sm:items-center justify-between">
                    <p className="text-sm text-neutral-500 max-w-xl">Not just a feature factory. We partner to shape, pressure test, and accelerate what you bring to market.</p>
                    <a href="#quote" className="inline-flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-500 px-7 py-3 text-xs font-medium text-white shadow shadow-purple-700/30 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#131313]">
                        Start a conversation
                        <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        </section>
        
        {/* Technologies Carousel */}
        <section className="py-20 overflow-hidden">
            <div className="px-4 md:px-8 max-w-7xl mx-auto mb-12">
                <div className="text-center">
                    <span className="inline-block text-[11px] font-medium tracking-[0.35em] uppercase text-purple-300/70 mb-4">Our Stack</span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">Technologies we love</h2>
                </div>
            </div>
            
            {/* Auto-sliding carousel */}
            <div className="relative">
                <div className="flex animate-scroll">
                    {/* First set of tech icons */}
                    <div className="flex flex-shrink-0 items-center gap-12 px-6">
                        {[
                            { 
                                name: 'GitHub', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                ), 
                                color: 'from-[#333333] to-[#000000]' 
                            },
                            { 
                                name: 'Linux', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.669 0-3.55 2.264-3.55 4.41 0 1.343.5 2.895-1.051 4.49-1.848 1.901-3.398 4.867-2.845 8.232-.571.486-.357 1.471-.907 1.917C2.322 20.565 2.6 24 5.16 24c1.623 0 1.999-1.304 1.999-1.304s-1.001 2.304 2.085 2.304c3.086 0 2.085-2.304 2.085-2.304s.376 1.304 1.999 1.304c2.56 0 2.838-3.435 1.253-4.951zm-7.461-8.048c-.202-.488-.635-.605-.679-.728-.018-.05.024-.133.024-.133s.027.107.134.133c.317.076.547-.07.547-.07s.607 1.111.607 1.111l-.633-.313zm2.541.728c-.044.123-.477.24-.679.728l-.633.313s.29-1.035.607-1.111c.107-.026.134-.133.134-.133s.042.083.024.133c.571.486.547.07.547.07z"/>
                                    </svg>
                                ), 
                                color: 'from-[#FCC624] to-[#E6AC00]' 
                            },
                            { 
                                name: 'CSS', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                    </svg>
                                ), 
                                color: 'from-[#264de4] to-[#1e3fb8]' 
                            },
                            { 
                                name: 'TypeScript', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.213.776.213 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                                    </svg>
                                ), 
                                color: 'from-[#3178C6] to-[#235A97]' 
                            },
                            { 
                                name: 'Python', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                                    </svg>
                                ), 
                                color: 'from-[#3776ab] to-[#2d5aa0]' 
                            },
                            { 
                                name: 'HTML', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                    </svg>
                                ), 
                                color: 'from-[#e34c26] to-[#f06529]' 
                            },
                            { 
                                name: 'Node.js', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.324,6.825,2.324,6.921v10.15c0,0.097,0.053,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.889V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                                    </svg>
                                ), 
                                color: 'from-[#68A063] to-[#417E38]' 
                            },
                            { 
                                name: 'n8n', 
                                icon: <img src={n8nIcon} alt="n8n" className="w-8 h-8" />, 
                                color: 'from-[#EA4B71] to-[#D63384]' 
                            },
                            { 
                                name: 'Canva', 
                                icon: <img src={canvaIcon} alt="Canva" className="w-8 h-8" />, 
                                color: 'from-[#00C4CC] to-[#7C3AED]' 
                            },
                            { 
                                name: 'Tailwind CSS', 
                                icon: <img src={tailwindIcon} alt="Tailwind CSS" className="w-8 h-8" />, 
                                color: 'from-[#06B6D4] to-[#0891B2]' 
                            },
                            { 
                                name: 'Figma', 
                                icon: <img src={figmaIcon} alt="Figma" className="w-8 h-8" />, 
                                color: 'from-[#F24E1E] to-[#A259FF]' 
                            },
                            { 
                                name: 'React', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.45-.572.905-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.87.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.45.572-.895 1.095-1.36 1.56-.465-.467-.91-.988-1.36-1.56z"/>
                                    </svg>
                                ), 
                                color: 'from-[#61DAFB] to-[#21A5C4]' 
                            },
                            { 
                                name: 'Next.js', 
                                icon: <img src={nextjsIcon} alt="Next.js" className="w-8 h-8" />, 
                                color: 'from-[#000000] to-[#ffffff]' 
                            },
                            { 
                                name: 'Vercel', 
                                icon: <img src={vercelIcon} alt="Vercel" className="w-8 h-8" />, 
                                color: 'from-[#000000] to-[#333333]' 
                            },
                            { 
                                name: 'Instagram', 
                                icon: <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />, 
                                color: 'from-[#E4405F] to-[#FFDC80]' 
                            },
                            { 
                                name: 'Premiere Pro', 
                                icon: <img src={premiereIcon} alt="Premiere Pro" className="w-8 h-8" />, 
                                color: 'from-[#9999FF] to-[#6666CC]' 
                            },
                            { 
                                name: 'Photoshop', 
                                icon: <img src={photoshopIcon} alt="Photoshop" className="w-8 h-8" />, 
                                color: 'from-[#31A8FF] to-[#0078D4]' 
                            }
                        ].map((tech, i) => (
                            <div key={i} className="group flex flex-col items-center gap-3 min-w-[80px]">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {tech.icon}
                                </div>
                                <span className="text-xs text-neutral-400 group-hover:text-white transition-colors text-center font-medium">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Duplicate set for seamless loop */}
                    <div className="flex flex-shrink-0 items-center gap-12 px-6">
                        {[
                            { 
                                name: 'GitHub', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                ), 
                                color: 'from-[#333333] to-[#000000]' 
                            },
                            { 
                                name: 'Linux', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.669 0-3.55 2.264-3.55 4.41 0 1.343.5 2.895-1.051 4.49-1.848 1.901-3.398 4.867-2.845 8.232-.571.486-.357 1.471-.907 1.917C2.322 20.565 2.6 24 5.16 24c1.623 0 1.999-1.304 1.999-1.304s-1.001 2.304 2.085 2.304c3.086 0 2.085-2.304 2.085-2.304s.376 1.304 1.999 1.304c2.56 0 2.838-3.435 1.253-4.951zm-7.461-8.048c-.202-.488-.635-.605-.679-.728-.018-.05.024-.133.024-.133s.027.107.134.133c.317.076.547-.07.547-.07s.607 1.111.607 1.111l-.633-.313zm2.541.728c-.044.123-.477.24-.679.728l-.633.313s.29-1.035.607-1.111c.107-.026.134-.133.134-.133s.042.083.024.133c.571.486.547.07.547.07z"/>
                                    </svg>
                                ), 
                                color: 'from-[#FCC624] to-[#E6AC00]' 
                            },
                            { 
                                name: 'CSS', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                    </svg>
                                ), 
                                color: 'from-[#264de4] to-[#1e3fb8]' 
                            },
                            { 
                                name: 'TypeScript', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.213.776.213 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                                    </svg>
                                ), 
                                color: 'from-[#3178C6] to-[#235A97]' 
                            },
                            { 
                                name: 'Python', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                                    </svg>
                                ), 
                                color: 'from-[#3776ab] to-[#2d5aa0]' 
                            },
                            { 
                                name: 'HTML', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                    </svg>
                                ), 
                                color: 'from-[#e34c26] to-[#f06529]' 
                            },
                            { 
                                name: 'Node.js', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.324,6.825,2.324,6.921v10.15c0,0.097,0.053,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.889V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                                    </svg>
                                ), 
                                color: 'from-[#68A063] to-[#417E38]' 
                            },
                            { 
                                name: 'n8n', 
                                icon: <img src={n8nIcon} alt="n8n" className="w-8 h-8" />, 
                                color: 'from-[#EA4B71] to-[#D63384]' 
                            },
                            { 
                                name: 'Canva', 
                                icon: <img src={canvaIcon} alt="Canva" className="w-8 h-8" />, 
                                color: 'from-[#00C4CC] to-[#7C3AED]' 
                            },
                            { 
                                name: 'Tailwind CSS', 
                                icon: <img src={tailwindIcon} alt="Tailwind CSS" className="w-8 h-8" />, 
                                color: 'from-[#06B6D4] to-[#0891B2]' 
                            },
                            { 
                                name: 'Figma', 
                                icon: <img src={figmaIcon} alt="Figma" className="w-8 h-8" />, 
                                color: 'from-[#F24E1E] to-[#A259FF]' 
                            },
                            { 
                                name: 'React', 
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.45-.572.905-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.87.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.45.572-.895 1.095-1.36 1.56-.465-.467-.91-.988-1.36-1.56z"/>
                                    </svg>
                                ), 
                                color: 'from-[#61DAFB] to-[#21A5C4]' 
                            },
                            { 
                                name: 'Next.js', 
                                icon: <img src={nextjsIcon} alt="Next.js" className="w-8 h-8" />, 
                                color: 'from-[#000000] to-[#ffffff]' 
                            },
                            { 
                                name: 'Vercel', 
                                icon: <img src={vercelIcon} alt="Vercel" className="w-8 h-8" />, 
                                color: 'from-[#000000] to-[#333333]' 
                            },
                            { 
                                name: 'Instagram', 
                                icon: <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />, 
                                color: 'from-[#E4405F] to-[#FFDC80]' 
                            },
                            { 
                                name: 'Premiere Pro', 
                                icon: <img src={premiereIcon} alt="Premiere Pro" className="w-8 h-8" />, 
                                color: 'from-[#9999FF] to-[#6666CC]' 
                            },
                            { 
                                name: 'Photoshop', 
                                icon: <img src={photoshopIcon} alt="Photoshop" className="w-8 h-8" />, 
                                color: 'from-[#31A8FF] to-[#0078D4]' 
                            }
                        ].map((tech, i) => (
                            <div key={`dup-${i}`} className="group flex flex-col items-center gap-3 min-w-[80px]">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {tech.icon}
                                </div>
                                <span className="text-xs text-neutral-400 group-hover:text-white transition-colors text-center font-medium">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default LandingPage;
