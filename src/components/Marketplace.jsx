import { motion } from 'framer-motion'
import { MapPin, Tag, ArrowRight, ShieldCheck } from 'lucide-react'

const listings = [
  {
    name: 'Fresh Hydroponic Tomatoes',
    category: 'Vegetables',
    location: 'Nashik, Maharashtra',
    price: '₹32 / kg',
    badge: 'Organic Certified',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    stock: '500 kg available',
  },
  {
    name: 'Certified Hybrid Wheat Seeds',
    category: 'Seeds & Grain',
    location: 'Karnal, Haryana',
    price: '₹180 / kg',
    badge: 'Lab Certified',
    badgeColor: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    stock: '1,200 kg available',
  },
  {
    name: 'Smart Drip Irrigation Kit',
    category: 'Equipment',
    location: 'Pune, Maharashtra',
    price: '₹4,500 / unit',
    badge: '2-Year Warranty',
    badgeColor: 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    stock: '25 units in stock',
  },
  {
    name: 'Aromatic Basmati Rice (A-Grade)',
    category: 'Produce',
    location: 'Dehradun, Uttarakhand',
    price: '₹95 / kg',
    badge: 'Export Quality',
    badgeColor: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    stock: '2,000 kg lot',
  },
]

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-20 lg:py-28 bg-gray-50/70 dark:bg-[#131620] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-agri-600 dark:text-agri-400 mb-2 block">
            Direct Trade
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Fair Agricultural Marketplace
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Direct access to verified buyers, seed distributors, and precision farming equipment with transparent pricing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white dark:bg-[#181c26] rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 hover:border-agri-300 dark:hover:border-agri-700/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 leading-snug group-hover:text-agri-600 dark:group-hover:text-agri-400 transition-colors">
                  {item.name}
                </h3>

                {/* Location & Stock */}
                <div className="space-y-1.5 mb-5 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{item.stock}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-gray-400 dark:text-gray-500">Mandi Price</span>
                  <span className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {item.price}
                  </span>
                </div>

                <button className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-agri-700 dark:text-agri-300 bg-agri-50 dark:bg-agri-950/60 border border-agri-200 dark:border-agri-800/80 hover:bg-agri-600 hover:text-white dark:hover:bg-agri-600 dark:hover:text-white transition-all duration-200 cursor-pointer">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
