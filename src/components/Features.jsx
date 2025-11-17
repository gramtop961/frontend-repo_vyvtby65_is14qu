import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe2, Map, Hotel, Camera, Calendar, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'

const features = [
  { icon: Globe2, title: 'Global Access', desc: 'Handpicked locales across 60+ countries with insider perks.' },
  { icon: Map, title: 'Tailored Itineraries', desc: 'Elegant, efficient plans designed around your taste.' },
  { icon: Hotel, title: 'Stays with Soul', desc: 'Design hotels, riads, villas—curated for character.' },
  { icon: Camera, title: 'Signature Experiences', desc: 'Private guides, sunrise shoots, chef tables and more.' },
  { icon: Calendar, title: 'Concierge on Call', desc: 'From last‑minute changes to special touches—handled.' },
  { icon: ShieldCheck, title: 'Trusted & Secure', desc: 'Transparent pricing, protected payments, verified providers.' },
]

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.3])

  return (
    <section id="experiences" ref={ref} className="relative py-24 bg-neutral-950">
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(1200px_400px_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Crafted journeys. Effortless planning.
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_80px_-20px_rgba(56,189,248,0.25)] transition overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                {f.icon && <f.icon className="h-6 w-6" />}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
