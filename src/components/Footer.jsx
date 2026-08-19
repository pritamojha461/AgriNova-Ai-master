import { Leaf, Mail, Phone, MapPin, Heart } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Farm Diagnostics', href: '#insights' },
    { label: 'Fair Marketplace', href: '#marketplace' },
    { label: 'Telemetry Dashboards', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  Solutions: [
    { label: 'Crop Advisory', href: '#insights' },
    { label: 'Weather Alerts', href: '#insights' },
    { label: 'Mandi Price Index', href: '#marketplace' },
    { label: 'Certified Seeds', href: '#marketplace' },
  ],
  Company: [
    { label: 'About AgriNova', href: '#about' },
    { label: 'Research & AI Models', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer id="about" className="bg-[#0b0d13] text-gray-400 pt-16 pb-12 border-t border-gray-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-agri-600">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="tracking-tight">AgriNova AI</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empowering farmers with AI-driven crop diagnostics, micro-climate weather telemetry, and direct agricultural marketplace discovery.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>AI Models Online</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Live Mandi Feed Active</span>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AgriNova AI. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for sustainable agriculture</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
