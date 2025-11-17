import { motion } from 'framer-motion'
import { Globe2, Map, Hotel, Camera, Calendar, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Globe2, title: 'Global Access', desc: 'Handpicked locales across 60+ countries with insider perks.' },
  { icon: Map, title: 'Tailored Itineraries', desc: 'Elegant, efficient plans designed around your taste.' },
  { icon: Hotel, title: 'Stays with Soul', desc: 'Design hotels, riads, villas—curated for character.' },
  { icon: Camera, title: 'Signature Experiences', desc: 'Private guides, sunrise shoots, chef tables and more.' },
  { icon: Calendar, title: 'Concierge on Call', desc: 'From last‑minute changes to special touches—handled.' },
  { icon: ShieldCheck, title: 'Trusted & Secure', desc: 'Transparent pricing, protected payments, verified providers.' },
]

export default function Features() {
  return (
    <section id="experiences" className="relative py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
        >
          Crafted journeys. Effortless planning.
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 blur-2xl" />
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-md">
                {f.icon && <f.icon className="h-6 w-6" />}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
