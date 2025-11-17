import { useState, useEffect } from 'react'
import { Menu, Plane, Phone, Search } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-neutral-900/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
            <Plane className="h-5 w-5" />
          </div>
          <span className="font-semibold text-white">Aether Travel</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#destinations" className="text-neutral-300 hover:text-white transition">Destinations</a>
          <a href="#experiences" className="text-neutral-300 hover:text-white transition">Experiences</a>
          <a href="#about" className="text-neutral-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-neutral-300 hover:text-white transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/15 transition border border-white/10">
            <Search className="h-4 w-4" />
            Search trips
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/15 text-neutral-200 hover:bg-white/10 transition">
            <Phone className="h-4 w-4" />
            Help
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
            <Menu className="h-5 w-5 text-neutral-200" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            <a href="#destinations" className="text-neutral-300 hover:text-white">Destinations</a>
            <a href="#experiences" className="text-neutral-300 hover:text-white">Experiences</a>
            <a href="#about" className="text-neutral-300 hover:text-white">About</a>
            <a href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
