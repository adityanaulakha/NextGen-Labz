import React from 'react'

function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="mt-32 border-t border-neutral-800/70 bg-[#141414] text-neutral-400">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<h3 className="text-white font-semibold text-lg tracking-tight">NextGen Labz</h3>
						<p className="mt-4 text-sm leading-relaxed max-w-xs">We craft performant digital products with a focus on usability, polish, and scalability. Design, engineering, and iteration in one tight loop.</p>
						<div className="mt-5 flex gap-3">
							{['twitter','github','linkedin'].map(icon => (
								<a key={icon} href="#" aria-label={icon} className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-neutral-300 hover:text-white transition text-sm font-medium">
									{icon[0].toUpperCase()}
								</a>
							))}
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
