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
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
        >
          Iconic places, elevated stays.
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl group shadow-sm"
            >
              <img src={d.img} alt={d.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <p className="text-white font-medium drop-shadow">{d.name}</p>
                <a href="#contact" className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-gray-900 text-sm font-medium hover:bg-white">Plan</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
