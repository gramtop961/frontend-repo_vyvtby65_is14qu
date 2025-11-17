import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 backdrop-blur-md text-gray-700 shadow-sm">
            Boutique Travel Agency
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Journey beyond ordinary.
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Curated escapes to the world's most captivating places. Designed with style, delivered with care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#destinations" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-900/10">
              Explore Destinations
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md text-gray-900 font-medium border border-gray-300 hover:bg-white transition">
              Plan Your Trip
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
