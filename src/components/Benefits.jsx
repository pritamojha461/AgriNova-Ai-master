import { motion } from 'framer-motion'
import { Brain, Store, Sprout, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'AI Predictive Models',
    description: 'Precision disease classification, yield forecasts, and soil condition analytics built on multi-spectral imaging.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Store,
    title: 'Direct Marketplace',
    description: 'Eliminate middlemen fees and trade produce with verified agricultural buyers and institutional grain merchants.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Sprout,
    title: 'Decision Support System',
    description: 'Real-time advisory on irrigation scheduling, fertilizer doses, and harvest timing tailored to micro-climates.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: HeartHandshake,
    title: 'Farmer-First Design',
    description: 'Zero complexity: intuitive mobile-optimized interfaces built for multi-lingual rural accessibility.',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/70 dark:bg-[#131620] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-agri-600 dark:text-agri-400 mb-2 block">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Why Agronomists Choose AgriNova AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Engineered from ground up to deliver tangible yield enhancements and fairer pricing for every harvest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-[#181c26] rounded-2xl p-6 border border-gray-200/70 dark:border-gray-800 hover:border-agri-400 dark:hover:border-agri-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${benefit.bg}`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
