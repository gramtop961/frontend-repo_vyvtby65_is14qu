import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Tell us how you like to travel.
        </motion.h2>
        <p className="mt-4 text-gray-600">
          Share your dream dates, style and budget. Our specialists craft a perfect plan and handle everything end‑to‑end.
        </p>
        <form className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          <input className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Name" />
          <input className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email" />
          <input className="sm:col-span-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Where to?" />
          <textarea className="sm:col-span-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tell us more..." rows={4} />
          <button type="button" className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-900/10">
            Get a custom itinerary
          </button>
        </form>
      </div>
    </section>
  )
}
