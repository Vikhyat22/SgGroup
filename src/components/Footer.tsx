'use client'

import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { COMPANY, INFRASTRUCTURE, ENTERPRISES } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'SG Infraastructure', id: 'sg-infraastructure' },
    { label: 'SG Enterprises', id: 'sg-enterprises' },
    { label: 'Contact', id: 'contact' },
  ]

  const scrollTo = (id: string) => {
    if (typeof window === 'undefined') return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      {/* Gold accent line */}
      <div className="h-1 w-full bg-gold" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-5">
              <img src="/logo.png" alt="SG Group Logo" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="font-poppins font-medium text-gold text-sm italic mb-4">
              &ldquo;Legacy of Excellence, Empire of Vision&rdquo;
            </p>
            <p className="font-inter text-white/60 text-sm leading-relaxed">
              A diversified conglomerate driving excellence in infraastructure and enterprise
              solutions across India.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Globe size={14} className="text-gold" aria-hidden="true" />
              <a
                href={`https://${COMPANY.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-white/60 hover:text-gold text-sm transition-colors"
              >
                {COMPANY.website}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="font-poppins font-bold text-base text-white mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" aria-hidden="true" />
            </h3>
            <ul className="space-y-3 mt-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.id)
                    }}
                    className="font-inter text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-200"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-base text-white mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" aria-hidden="true" />
            </h3>
            <ul className="space-y-4 mt-2">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="font-inter text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    +91 {COMPANY.phone}
                  </a>
                  <p className="font-inter text-white/40 text-xs mt-0.5">{COMPANY.contactPerson}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="space-y-1">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="block font-inter text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                  <a
                    href={`mailto:${INFRASTRUCTURE.email}`}
                    className="block font-inter text-white/50 hover:text-gold text-xs transition-colors"
                  >
                    {INFRASTRUCTURE.email}
                  </a>
                  <a
                    href={`mailto:${ENTERPRISES.email}`}
                    className="block font-inter text-white/50 hover:text-gold text-xs transition-colors"
                  >
                    {ENTERPRISES.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="font-inter text-white/60 text-sm leading-relaxed">
                  {COMPANY.address}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/40 text-sm text-center sm:text-left">
            &copy; {year} SG Group. All Rights Reserved.
          </p>
          <p className="font-inter text-white/30 text-xs text-center sm:text-right">
            SG Infraastructure &bull; SG Enterprises
          </p>
        </div>
      </div>
    </footer>
  )
}