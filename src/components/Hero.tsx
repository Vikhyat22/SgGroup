'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/components/Logo'

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
      {/* Background Photo */}
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
        alt="Construction site aerial view"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/65 to-charcoal/85"
        aria-hidden="true"
      />

      {/* World Map Watermark Background */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <svg
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <g fill="#F2C811">
            {/* North America */}
            <path d="M120,80 L200,70 L230,90 L250,130 L240,170 L210,190 L180,180 L150,160 L120,140 L100,120 Z" />
            <path d="M100,120 L120,140 L130,180 L110,220 L90,230 L70,210 L75,170 L80,140 Z" />
            {/* South America */}
            <path d="M150,230 L190,210 L210,240 L220,290 L210,340 L190,380 L170,400 L150,380 L140,340 L130,290 L140,250 Z" />
            {/* Europe */}
            <path d="M460,60 L510,50 L540,70 L550,100 L530,120 L500,130 L470,120 L450,100 Z" />
            <path d="M500,130 L540,120 L570,140 L580,170 L560,185 L530,175 L510,155 Z" />
            {/* Africa */}
            <path d="M480,170 L530,155 L570,170 L590,220 L600,280 L590,340 L570,380 L540,400 L510,390 L490,360 L470,300 L465,240 Z" />
            {/* Asia */}
            <path d="M580,60 L700,40 L800,50 L850,80 L870,120 L860,150 L820,160 L780,150 L750,170 L720,180 L690,170 L660,150 L630,130 L600,100 L580,80 Z" />
            <path d="M750,170 L820,160 L860,190 L880,230 L870,270 L840,290 L800,280 L760,250 L740,210 Z" />
            {/* Australia */}
            <path d="M820,340 L890,320 L940,340 L960,380 L950,420 L920,440 L880,440 L850,420 L830,390 L810,360 Z" />
          </g>
        </svg>
      </div>

      {/* Gold accent line */}
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
        {/* Logo — prominent display */}
        <div className="flex justify-center mb-6">
          <Logo width={90} height={99} className="drop-shadow-2xl" />
        </div>

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
        <p className="font-poppins font-medium text-xl sm:text-2xl md:text-3xl text-white/80 mb-4 uppercase tracking-widest">
          Legacy of Excellence · Empire of Vision
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gold/40" aria-hidden="true" />
          <div className="w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
          <div className="h-px w-16 bg-gold/40" aria-hidden="true" />
        </div>

        {/* Sub Description */}
        <p className="font-inter text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Two powerful divisions — <strong className="text-white/80">SG Infrastructure</strong> &amp;
          <strong className="text-white/80"> SG Enterprises</strong> — delivering excellence across
          construction, supply chain, and industrial solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('sg-infrastructure')}
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
