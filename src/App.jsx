import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Destinations from './components/Destinations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-400/30 selection:text-cyan-200">
      <Navbar />
      <main className="relative">
        {/* Ambient aurora backdrop */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
          <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/10 to-blue-600/20 animate-pulse [animation-duration:6s]" />
        </div>
        <Hero />
        <Features />
        <Destinations />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 bg-neutral-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Aether Travel. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
