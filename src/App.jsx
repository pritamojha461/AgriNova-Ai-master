import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductPreview from './components/ProductPreview'
import Benefits from './components/Benefits'
import Insights from './components/Insights'
import Marketplace from './components/Marketplace'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1117] text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-agri-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Benefits />
        <Insights />
        <Marketplace />
        <HowItWorks />

        {/* Final CTA Section */}
        <section id="cta" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-agri-800 via-agri-900 to-emerald-950 text-white">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-agri-200 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Join 50,000+ Progressive Farmers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Make Your Next Farming Decision Smarter.
            </h2>
            <p className="mt-5 text-agri-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Experience the power of real-time agronomic insights combined with direct marketplace access. Zero upfront software cost.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#home"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-agri-900 hover:bg-agri-50 px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-black/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Started with AgriNova AI</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#marketplace"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200"
              >
                <span>Browse Marketplace</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
