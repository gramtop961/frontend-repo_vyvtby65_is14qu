import { useState, useEffect } from 'react'
import { Menu, Plane, Phone, Search } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
            <Plane className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">Aether Travel</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#destinations" className="text-gray-700 hover:text-gray-900">Destinations</a>
          <a href="#experiences" className="text-gray-700 hover:text-gray-900">Experiences</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition">
            <Search className="h-4 w-4" />
            Search trips
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            <Phone className="h-4 w-4" />
            Help
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  )
}
