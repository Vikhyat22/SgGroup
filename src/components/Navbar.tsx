'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_SECTIONS = ['home', 'about', 'sg-infraastructure', 'sg-enterprises', 'contact']

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-1px' }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileMenuOpen(false)
        setMobileServicesOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [])

  const isActive = (id: string) => activeSection === id
  const isServicesActive = activeSection === 'sg-infraastructure' || activeSection === 'sg-enterprises'

  const navLinkClass = (id: string) =>
    `font-inter font-medium transition-colors duration-200 ${
      isActive(id) ? 'text-gold' : 'text-white hover:text-gold'
    }`

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold focus:text-charcoal focus:px-4 focus:py-2 focus:rounded-lg focus:font-poppins focus:font-semibold focus:text-sm focus:shadow-lg"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal backdrop-blur-md shadow-lg shadow-black/10 border-b border-gold/20'
            : 'bg-gradient-to-b from-charcoal/70 to-transparent backdrop-blur-[2px]'
        }`}
      >
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo('home')}
            className="flex items-center group"
            aria-label="SG Group - Home"
          >
            <Image src="/logo.png" alt="SG Group Logo" width={120} height={48} className="h-10 md:h-12 w-auto flex-shrink-0" priority />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScrollTo('home')}
              className={navLinkClass('home')}
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className={navLinkClass('about')}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 font-inter font-medium transition-colors duration-200 ${
                  isServicesActive ? 'text-gold' : 'text-white hover:text-gold'
                }`}
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-charcoal rounded-xl shadow-xl border border-white/10 overflow-hidden z-50">
                  <div className="py-2">
                    <button
                      onClick={() => handleScrollTo('sg-infraastructure')}
                      className="w-full text-left px-5 py-3 font-inter text-sm text-white hover:bg-gold/10 hover:text-gold transition-colors duration-150 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      SG Infraastructure
                    </button>
                    <button
                      onClick={() => handleScrollTo('sg-enterprises')}
                      className="w-full text-left px-5 py-3 font-inter text-sm text-white hover:bg-gold/10 hover:text-gold transition-colors duration-150 flex items-center gap-2"
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
              className={navLinkClass('contact')}
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
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10 shadow-lg animate-slide-in">
          <div className="px-4 py-4 flex flex-col gap-1">
            <button
              onClick={() => handleScrollTo('home')}
              className="text-left px-4 py-3 font-inter font-medium text-white hover:bg-gold/10 rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="text-left px-4 py-3 font-inter font-medium text-white hover:bg-gold/10 rounded-lg transition-colors"
            >
              About
            </button>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="w-full text-left px-4 py-3 font-inter font-medium text-white hover:bg-gold/10 rounded-lg transition-colors flex items-center justify-between"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 border-l-2 border-gold/20 pl-4 flex flex-col gap-1">
                  <button
                    onClick={() => handleScrollTo('sg-infraastructure')}
                    className="text-left px-4 py-2.5 font-inter text-sm text-white hover:bg-gold/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    SG Infraastructure
                  </button>
                  <button
                    onClick={() => handleScrollTo('sg-enterprises')}
                    className="text-left px-4 py-2.5 font-inter text-sm text-white hover:bg-gold/10 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    SG Enterprises
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleScrollTo('contact')}
              className="text-left px-4 py-3 font-inter font-medium text-white hover:bg-gold/10 rounded-lg transition-colors"
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
    </>
  )
}