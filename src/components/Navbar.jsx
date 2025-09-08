import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
  <header className="sticky top-0 z-50 bg-[#171717]/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src="/Logo-White1.png" alt="NextGen Labz Logo" className="h-9 w-auto" />
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li>
              <a href="#quote" className="inline-flex items-center gap-1 rounded-full bg-purple-600 px-5 py-2 text-white shadow-sm shadow-purple-600/40 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition">Get Quote</a>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-controls="mobile-nav"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className={`h-6 w-6 transition-all ${open ? 'scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            <svg className={`h-6 w-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div id="mobile-nav" className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col gap-2 pb-4 pt-2 text-sm font-medium text-neutral-300">
            <li><a onClick={() => setOpen(false)} href="#" className="block rounded px-3 py-2 hover:bg-neutral-800">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about" className="block rounded px-3 py-2 hover:bg-neutral-800">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact" className="block rounded px-3 py-2 hover:bg-neutral-800">Contact</a></li>
            <li><a onClick={() => setOpen(false)} href="#quote" className="block rounded px-3 py-2 hover:bg-neutral-800">Get Quote</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
