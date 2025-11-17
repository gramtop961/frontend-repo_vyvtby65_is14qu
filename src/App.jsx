import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Destinations from './components/Destinations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Destinations />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Aether Travel. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
