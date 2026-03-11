'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
      aria-label="Hero Section"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%231A1A1A' width='1' height='1'/%3E%3C/svg%3E"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="https://video.wixstatic.com/video/c837a6_ae4f4741c31844bfba715de2983231fd/1080p/mp4/file.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90"
        aria-hidden="true"
      />

      {/* Gold accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gold"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
          <span className="text-gold font-inter text-sm font-medium tracking-wider uppercase">
            A Diversified Conglomerate
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-poppins font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
          SG{' '}
          <span className="text-gold relative">
            GROUP
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-poppins font-medium text-xl sm:text-2xl md:text-3xl text-white/80 mb-4">
          Legacy of Excellence, Empire of Vision
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold/40" aria-hidden="true" />
          <div className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
          <div className="h-px w-16 bg-gold/40" aria-hidden="true" />
        </div>

        {/* Sub Description */}
        <p className="font-inter text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Two powerful divisions — <strong className="text-white/80">SG Infraastructure</strong> &
          <strong className="text-white/80"> SG Enterprises</strong> — delivering excellence across
          construction, supply chain, and industrial solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('sg-infraastructure')}
            className="bg-gold hover:bg-gold-dark text-charcoal font-poppins font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto"
          >
            Explore Our Services
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border-2 border-white/40 hover:border-gold text-white hover:text-gold font-poppins font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto backdrop-blur-sm"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="mt-16 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors duration-200 mx-auto"
          aria-label="Scroll to About section"
        >
          <span className="font-inter text-xs uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}
