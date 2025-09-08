import React from 'react'

function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="mt-32 border-t border-neutral-800/70 bg-[#141414] text-neutral-400">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<img src="/Logo-White1.png" alt="NextGen Labz Logo" className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-[1.03]" />
						<p className="mt-4 text-sm leading-relaxed max-w-xs">Crafting reliable, scalable & user‑obsessed digital products. Strategy → design → build → iterate.</p>
						<div className="mt-5 flex gap-3">
							<a href="#" aria-label="Twitter" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-neutral-300 hover:text-white transition" rel="noopener noreferrer">
								<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.57-2.46.67a4.28 4.28 0 0 0 1.88-2.37 8.56 8.56 0 0 1-2.72 1.05 4.26 4.26 0 0 0-7.3 3.88A12.1 12.1 0 0 1 3.16 4.9a4.25 4.25 0 0 0 1.32 5.68 4.2 4.2 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.7 8.7 0 0 0 24 5.3a8.52 8.52 0 0 1-2.54.7Z" /></svg>
							</a>
							<a href="#" aria-label="GitHub" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-neutral-300 hover:text-white transition" rel="noopener noreferrer">
								<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 2.87-.39c.97 0 1.94.13 2.86.39 2.2-1.48 3.15-1.17 3.15-1.17.63 1.59.24 2.76.12 3.05.73.8 1.16 1.82 1.16 3.07 0 4.4-2.69 5.38-5.25 5.66.42.36.8 1.06.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" clipRule="evenodd"/></svg>
							</a>
							<a href="#" aria-label="LinkedIn" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-neutral-300 hover:text-white transition" rel="noopener noreferrer">
								<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h3.96V21H3V9.75Zm7.41 0H14v1.53h.05c.55-1.04 1.89-2.13 3.89-2.13 4.16 0 4.93 2.74 4.93 6.3V21h-3.96v-4.77c0-1.14-.02-2.6-1.59-2.6-1.6 0-1.84 1.24-1.84 2.52V21h-3.96V9.75Z"/></svg>
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-neutral-200 font-medium tracking-wide text-sm">PRODUCT</h4>
						<ul className="mt-4 space-y-2 text-sm">
							<li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
							<li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
							<li><a href="#about" className="hover:text-white transition-colors">About</a></li>
							<li><a href="#quote" className="hover:text-white transition-colors">Get a Quote</a></li>
						</ul>
					</div>

						<div>
						<h4 className="text-neutral-200 font-medium tracking-wide text-sm">RESOURCES</h4>
						<ul className="mt-4 space-y-2 text-sm">
							<li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Brand Assets</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Support</a></li>
						</ul>
					</div>

					<div>
						<h4 className="text-neutral-200 font-medium tracking-wide text-sm">STAY UPDATED</h4>
						<p className="mt-4 text-sm max-w-xs">Join our monthly digest of product insights & release notes. No spam.</p>
						<form onSubmit={e=>e.preventDefault()} className="mt-5 flex flex-col sm:flex-row gap-3">
							<input type="email" required placeholder="Email address" className="flex-1 rounded-md bg-neutral-900/60 border border-neutral-700/70 px-3 py-2 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-neutral-500" />
							<button className="inline-flex justify-center rounded-md bg-purple-600 hover:bg-purple-500 px-5 py-2 text-sm font-medium text-white shadow shadow-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#141414] transition">Subscribe</button>
						</form>
						<p className="mt-2 text-[11px] text-neutral-500">We respect your privacy. Unsubscribe anytime.</p>
					</div>
				</div>
				<div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between border-t border-neutral-800/70 pt-8">
					<p className="text-xs">© {year} NextGen Labz. All rights reserved.</p>
					<div className="flex gap-6 text-xs">
						<a href="#" className="hover:text-white transition-colors">Privacy</a>
						<a href="#" className="hover:text-white transition-colors">Terms</a>
						<a href="#" className="hover:text-white transition-colors">Cookies</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
