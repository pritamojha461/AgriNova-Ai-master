import { motion } from 'framer-motion'
import { UserPlus, Brain, Compass, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Configure Your Farm Profile',
    description: 'Enter your land coordinates, soil type, and current seasonal crop cycles for localized telemetry.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Receive Real-Time AI Diagnostics',
    description: 'Get automated disease scans, irrigation advisories, and predictive yield forecasts tailored to your parcel.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Trade Directly on Marketplace',
    description: 'Lock in fair mandi contracts, purchase certified seeds, and connect with vetted institutional buyers.',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white dark:bg-[#0f1117] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-agri-600 dark:text-agri-400 mb-2 block">
            Step-By-Step
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            How AgriNova AI Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From plot registration to harvest monetization in three frictionless steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-agri-200 via-emerald-200 to-purple-200 dark:from-agri-900 dark:via-emerald-900 dark:to-purple-900 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative z-10 text-center flex flex-col items-center bg-white dark:bg-[#151922] p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${step.bg} border border-gray-100 dark:border-gray-800 shadow-sm`}>
                <step.icon className={`w-7 h-7 ${step.color}`} />
              </div>
              <span className="text-xs font-extrabold tracking-widest text-agri-600 dark:text-agri-400 uppercase">
                STEP {step.number}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
