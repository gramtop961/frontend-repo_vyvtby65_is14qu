import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <motion.div style={{ y, opacity }} className="absolute inset-0 will-change-transform">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* dark glass gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-neutral-200 border border-white/10 shadow-sm">
            Boutique Travel Agency
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Journey beyond ordinary.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Curated escapes to the world's most captivating places. Designed with style, delivered with care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#destinations" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)]">
              Explore Destinations
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/15 hover:bg-white/15 transition">
              Plan Your Trip
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
