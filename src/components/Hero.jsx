import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Sprout, TrendingUp, ShoppingCart, Sparkles, ShieldCheck } from 'lucide-react'

const previewStats = [
  { icon: Sprout, label: 'Crop Health', value: '92%', change: '+4% this week', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: TrendingUp, label: 'Market Price', value: '₹48/kg', change: 'Wheat Rabi', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10' },
  { icon: BarChart3, label: 'AI Score', value: '8.4/10', change: 'Optimal yield', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10' },
  { icon: ShoppingCart, label: 'Active Listings', value: '24', change: 'Verified buyers', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10' },
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-b from-agri-50/70 via-white to-white dark:from-[#0f1117] dark:via-[#131620] dark:to-[#0f1117] transition-colors duration-300">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-agri-500/10 dark:bg-agri-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-400/10 dark:bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          {/* Left Column: Heading & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-100/80 dark:bg-agri-950/60 border border-agri-200 dark:border-agri-800/80 text-agri-800 dark:text-agri-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-600 dark:bg-agri-400"></span>
              </span>
              <span>Next-Gen Agricultural Intelligence</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
              Grow Smarter.{' '}
              <span className="bg-gradient-to-r from-agri-600 to-emerald-500 bg-clip-text text-transparent">
                Sell Better.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AgriNova AI combines precision crop diagnostics with a fair agricultural marketplace, empowering farmers with real-time agronomic insights and direct buyer connections.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#marketplace"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-agri-700 to-emerald-600 hover:from-agri-800 hover:to-emerald-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-agri-700/25 hover:shadow-xl hover:shadow-agri-700/35 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700/80 shadow-sm transition-all duration-200"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="mt-10 pt-8 border-t border-gray-200/70 dark:border-gray-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-agri-600 dark:text-agri-400" />
                <span>Verified Agricultural Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Multi-Crop AI Models</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 mt-12 lg:mt-0"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gray-200/80 via-gray-100/50 to-transparent dark:from-gray-700/60 dark:via-gray-800/30 dark:to-transparent shadow-2xl shadow-gray-400/10 dark:shadow-black/40">
              <div className="bg-white dark:bg-[#151922] rounded-[15px] border border-gray-100 dark:border-gray-800/90 p-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 ml-1">
                      Farm Health Telemetry
                    </span>
                  </div>
                  <span className="text-[11px] font-medium bg-agri-100 dark:bg-agri-950 text-agri-700 dark:text-agri-400 px-2.5 py-0.5 rounded-full border border-agri-200 dark:border-agri-900">
                    Live Feed
                  </span>
                </div>

                {/* Metric Grid */}
                <div className="grid grid-cols-2 gap-3.5 mt-5">
                  {previewStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gray-50/80 dark:bg-gray-800/50 hover:bg-gray-100/70 dark:hover:bg-gray-800/80 rounded-xl p-4 border border-gray-100 dark:border-gray-700/60 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${stat.bg}`}>
                          <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action summary bar */}
                <div className="mt-5 p-3.5 rounded-xl bg-agri-50/60 dark:bg-agri-950/30 border border-agri-100 dark:border-agri-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Recommendation: Optimal harvesting in 5 days
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-agri-700 dark:text-agri-400 cursor-pointer hover:underline">
                    View
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
