'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Globe, Instagram, MessageCircle } from 'lucide-react'
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
              <Image src="/logo.png" alt="SG Group Logo" width={120} height={48} className="h-10 md:h-12 w-auto" />
            </div>
            <p className="font-poppins font-medium text-gold text-sm italic mb-4">
              &ldquo;Legacy of Excellence, Empire of Vision&rdquo;
            </p>
            <p className="font-inter text-white/60 text-sm leading-relaxed">
              A diversified conglomerate driving excellence in infraastructure and enterprise
              solutions across India.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`https://${COMPANY.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                aria-label="Website"
              >
                <Globe size={16} className="text-white/50 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/sg_group_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white/50 group-hover:text-gold transition-colors" />
              </a>
              <a
                href={`https://wa.me/91${COMPANY.phone}?text=Hi%20SG%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-white/50 group-hover:text-gold transition-colors" />
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
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="space-y-2">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="block font-inter text-white/70 hover:text-gold text-sm transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                  <div>
                    <p className="font-inter text-white/30 text-[10px] uppercase tracking-wider">Infraastructure</p>
                    <a
                      href={`mailto:${INFRASTRUCTURE.email}`}
                      className="block font-inter text-white/50 hover:text-gold text-xs transition-colors"
                    >
                      {INFRASTRUCTURE.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-inter text-white/30 text-[10px] uppercase tracking-wider">Enterprises</p>
                    <a
                      href={`mailto:${ENTERPRISES.email}`}
                      className="block font-inter text-white/50 hover:text-gold text-xs transition-colors"
                    >
                      {ENTERPRISES.email}
                    </a>
                  </div>
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
          <div className="flex items-center gap-3 text-center sm:text-right">
            <Link
              href="/privacy-policy"
              className="font-inter text-white/40 hover:text-gold text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">&bull;</span>
            <p className="font-inter text-white/30 text-xs">
              SG Infraastructure &bull; SG Enterprises
            </p>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="border-t border-white/5">
        <p className="text-center py-4 font-inter text-white/25 text-xs tracking-wide flex items-center justify-center gap-1.5">
          <span className="inline-block w-3 h-[1px] bg-white/10" aria-hidden="true" />
          Crafted with
          <span className="text-gold text-[10px] leading-none" aria-hidden="true">&#9829;</span>
          by
          <a
            href="https://www.linkedin.com/in/vikhyat-gupta-401978257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-gold font-medium transition-colors duration-300 border-b border-dotted border-white/10 hover:border-gold/50 pb-[1px]"
          >
            Vikhyat Gupta
          </a>
          <span className="inline-block w-3 h-[1px] bg-white/10" aria-hidden="true" />
        </p>
      </div>
    </footer>
  )
}