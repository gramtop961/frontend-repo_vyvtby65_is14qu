import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-neutral-950">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Tell us how you like to travel.
        </motion.h2>
        <p className="mt-4 text-neutral-300">
          Share your dream dates, style and budget. Our specialists craft a perfect plan and handle everything end‑to‑end.
        </p>
        <form className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          <input className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
          <input className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
          <input className="sm:col-span-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Where to?" />
          <textarea className="sm:col-span-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell us more..." rows={4} />
          <button type="button" className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)]">
            Get a custom itinerary
          </button>
        </form>
      </div>
    </section>
  )
}
