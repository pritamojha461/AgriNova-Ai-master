import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartPulse, CloudSun, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react'

const insights = [
  {
    id: 'crop-health',
    tab: 'Crop Diagnostics',
    icon: HeartPulse,
    title: 'Wheat Field — Zone A (Rabi Season)',
    metric: '92%',
    metricLabel: 'Crop Health Index',
    details: [
      'No pathogen or blight activity detected in current satellite pass.',
      'Soil nitrogen level: 240 kg/ha (slight deficit, recommended top-dress within 48h).',
      'Vegetative Stage: Active tillering (Day 35 of 120). Expected canopy density: 88%.',
    ],
    status: 'Optimal',
    statusType: 'success',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    metricBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    borderColor: 'border-emerald-200 dark:border-emerald-800/60',
  },
  {
    id: 'weather',
    tab: 'Weather & Irrigation',
    icon: CloudSun,
    title: 'Micro-Climate Telemetry — North Zone',
    metric: '28°C',
    metricLabel: 'Mean Field Temp',
    details: [
      'Relative humidity: 62% with gentle 12 km/h NW breeze.',
      'Zero precipitations expected across upcoming 5-day forecast.',
      'Ideal conditions for controlled drip fertigation cycle tomorrow morning.',
    ],
    status: 'Clear Window',
    statusType: 'info',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    metricBg: 'bg-blue-50 dark:bg-blue-950/50',
    borderColor: 'border-blue-200 dark:border-blue-800/60',
  },
  {
    id: 'market',
    tab: 'Mandi Market Trends',
    icon: TrendingUp,
    title: 'Regional Grain Index — Wheat Spot Price',
    metric: '+3.2%',
    metricLabel: '7-Day Price Delta',
    details: [
      'Current average mandi price: ₹2,450 / quintal (up from ₹2,374).',
      'Arrival volume in major northern mandis down 14% — sustaining strong price support.',
      'AI recommendation: Hold remaining lot for 5–7 days before executing bulk contract.',
    ],
    status: 'Bullish',
    statusType: 'purple',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    metricBg: 'bg-purple-50 dark:bg-purple-950/50',
    borderColor: 'border-purple-200 dark:border-purple-800/60',
  },
]

export default function Insights() {
  const [activeTab, setActiveTab] = useState(0)
  const active = insights[activeTab]

  return (
    <section id="insights" className="py-20 lg:py-28 bg-white dark:bg-[#0f1117] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-agri-600 dark:text-agri-400 mb-2 block">
            Intelligence Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Live Agricultural AI Insights
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Switch between dynamic analysis streams powered by soil sensors, remote sensing, and real-time mandi API feeds.
          </p>
        </motion.div>

        {/* Tab switchers */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {insights.map((insight, i) => {
            const isSelected = activeTab === i
            return (
              <button
                key={insight.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-agri-700 dark:bg-agri-600 text-white shadow-md shadow-agri-700/20'
                    : 'bg-gray-100 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <insight.icon className="w-4 h-4" />
                <span>{insight.tab}</span>
              </button>
            )
          })}
        </div>

        {/* Active Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto bg-white dark:bg-[#151922] rounded-2xl border border-gray-200/80 dark:border-gray-800 p-7 sm:p-9 shadow-xl shadow-gray-200/40 dark:shadow-black/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-xl ${active.bg}`}>
                  <active.icon className={`w-6 h-6 ${active.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl">
                    {active.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Status:
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {active.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`text-center sm:text-right px-5 py-3 rounded-xl ${active.metricBg} border ${active.borderColor}`}>
                <p className={`text-2xl sm:text-3xl font-extrabold ${active.color}`}>
                  {active.metric}
                </p>
                <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-0.5">
                  {active.metricLabel}
                </p>
              </div>
            </div>

            {/* Insight bullets */}
            <div className="mt-6 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Key Observations & Advisory
              </h4>
              <ul className="space-y-3">
                {active.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50/60 dark:bg-gray-800/40 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-agri-600 dark:text-agri-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
