import { motion } from 'framer-motion'

const destinations = [
  { name: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d7?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Marrakech, Morocco', img: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Amalfi, Italy', img: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f48?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1518544801976-3e188bcf7c73?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Reykjavik, Iceland', img: 'https://images.unsplash.com/photo-1500043357865-c6b8827edf3f?q=80&w=1400&auto=format&fit=crop' },
]

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Iconic places, elevated stays.
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl group shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <img src={d.img} alt={d.name} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-900/20 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 mix-blend-overlay bg-[radial-gradient(600px_200px_at_80%_120%,rgba(56,189,248,0.25),transparent)]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <p className="text-white font-medium drop-shadow">{d.name}</p>
                <a href="#contact" className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/15 hover:bg-white/15">Plan</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
