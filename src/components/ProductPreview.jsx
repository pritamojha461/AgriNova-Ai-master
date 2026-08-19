import { motion } from 'framer-motion'
import { Sprout, HeartPulse, BarChart3, Brain, ArrowUpRight } from 'lucide-react'

const cards = [
  {
    icon: Sprout,
    title: 'Crop Planning & Insight',
    value: 'Wheat — Rabi Season',
    description: 'Optimal sowing window detected: Nov 10–25. Soil moisture and nitrogen balanced.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    tag: 'Agronomy',
  },
  {
    icon: HeartPulse,
    title: 'Crop Health Diagnostics',
    value: '92% Health Index',
    description: 'No major fungal pathogen detected. Micro-nutrient top-up recommended for Zone B.',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10',
    tag: 'Sensors',
  },
  {
    icon: BarChart3,
    title: 'Market Pricing Snapshot',
    value: '₹2,450 / quintal',
    description: 'Average regional mandi price. Upward momentum of +3.2% observed this week.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    tag: 'Market',
  },
  {
    icon: Brain,
    title: 'AI Sell Recommendation',
    value: 'Hold for 5–7 Days',
    description: 'Regional demand curve indicates an anticipated 4–6% premium next Monday.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    tag: 'Prediction',
  },
]

export default function ProductPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0f1117] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-agri-600 dark:text-agri-400 mb-2 block">
            Integrated Command Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Your Entire Farm, At a Glance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A unified interface synchronizing real-time agronomic data, weather forecasts, market indexes, and AI guidance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white dark:bg-[#151922] rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 hover:border-agri-300 dark:hover:border-agri-700/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${card.bg}`}>
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-agri-600 dark:group-hover:text-agri-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="mt-3">
                <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {card.value}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
