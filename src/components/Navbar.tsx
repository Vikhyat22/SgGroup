'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-3 group"
            aria-label="SG Group - Home"
          >
            {/* SVG Triangle Logo */}
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              aria-hidden="true"
            >
              <polygon points="21,3 39,36 3,36" fill="#F2C811" />
              <polygon points="21,9 34,33 8,33" fill="#1A1A1A" />
              <text
                x="21"
                y="28"
                textAnchor="middle"
                fill="#F2C811"
                fontSize="9"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                SG
              </text>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-poppins font-bold text-xl text-charcoal tracking-wide">
                SG GROUP
              </span>
              <span className="text-[10px] text-medium-gray tracking-widest uppercase font-inter hidden sm:block">
                Legacy of Excellence
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScrollTo('home')}
              className="font-inter font-medium text-charcoal hover:text-gold transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="font-inter font-medium text-charcoal hover:text-gold transition-colors duration-200"
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 font-inter font-medium text-charcoal hover:text-gold transition-colors duration-200"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="py-2">
                    <button
                      onClick={() => handleScrollTo('sg-infrastructure')}
                      className="w-full text-left px-5 py-3 font-inter text-sm text-charcoal hover:bg-gold/10 hover:text-charcoal transition-colors duration-150 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      SG Infrastructure
                    </button>
                    <button
                      onClick={() => handleScrollTo('sg-enterprises')}
                      className="w-full text-left px-5 py-3 font-inter text-sm text-charcoal hover:bg-gold/10 hover:text-charcoal transition-colors duration-150 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      SG Enterprises
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleScrollTo('contact')}
              className="font-inter font-medium text-charcoal hover:text-gold transition-colors duration-200"
            >
              Contact
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="bg-gold hover:bg-gold-dark text-charcoal font-inter font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-in">
          <div className="px-4 py-4 flex flex-col gap-1">
            <button
              onClick={() => handleScrollTo('home')}
              className="text-left px-4 py-3 font-inter font-medium text-charcoal hover:bg-gold/10 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="text-left px-4 py-3 font-inter font-medium text-charcoal hover:bg-gold/10 rounded-lg transition-colors"
            >
              About
            </button>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full text-left px-4 py-3 font-inter font-medium text-charcoal hover:bg-gold/10 rounded-lg transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 border-l-2 border-gold/30 pl-4 flex flex-col gap-1">
                  <button
                    onClick={() => handleScrollTo('sg-infrastructure')}
                    className="text-left px-4 py-2.5 font-inter text-sm text-charcoal hover:bg-gold/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    SG Infrastructure
                  </button>
                  <button
                    onClick={() => handleScrollTo('sg-enterprises')}
                    className="text-left px-4 py-2.5 font-inter text-sm text-charcoal hover:bg-gold/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    SG Enterprises
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleScrollTo('contact')}
              className="text-left px-4 py-3 font-inter font-medium text-charcoal hover:bg-gold/10 rounded-lg transition-colors"
            >
              Contact
            </button>

            <div className="pt-2">
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full bg-gold hover:bg-gold-dark text-charcoal font-inter font-semibold px-5 py-3 rounded-lg transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
