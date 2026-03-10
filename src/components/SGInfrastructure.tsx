'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, HardHat, Zap, Settings, Mail } from 'lucide-react'
import Image from 'next/image'
import { INFRASTRUCTURE } from '@/lib/constants'

const ICONS = {
  building: Building2,
  'hard-hat': HardHat,
  zap: Zap,
  settings: Settings,
}

type IconKey = keyof typeof ICONS

export default function SGInfrastructure() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="sg-infrastructure"
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-light-gray transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="SG Infrastructure Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-64 sm:h-80 lg:h-96 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
            alt="SG Infrastructure — architectural engineering and building projects"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12">
            <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-2">
              Our Division
            </p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              {INFRASTRUCTURE.name}
            </h2>
            <p className="font-poppins font-medium text-base sm:text-lg text-white/80 italic">
              &ldquo;{INFRASTRUCTURE.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Sub-description */}
        <div className="text-center mb-16">
          <p className="font-inter text-medium-gray text-base max-w-2xl mx-auto leading-relaxed">
            Building world-class infrastructure across India with precision engineering, quality
            materials, and an unwavering commitment to safety and sustainability.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFRASTRUCTURE.services.map((service, index) => {
            const Icon = ICONS[service.icon as IconKey] ?? Building2
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-300"
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(20px)',
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-gold"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Number */}
                <div className="font-poppins font-bold text-4xl text-gray-100 group-hover:text-gold/20 transition-colors duration-300 mb-2 select-none" aria-hidden="true">
                  0{index + 1}
                </div>

                <h3 className="font-poppins font-bold text-lg text-charcoal mb-3 group-hover:text-charcoal">
                  {service.title}
                </h3>
                <p className="font-inter text-medium-gray text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Gold bottom border on hover */}
                <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gold transition-all duration-300 rounded-full" aria-hidden="true" />
              </div>
            )
          })}
        </div>

        {/* Contact Email */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-gold/40 rounded-xl px-6 py-4 transition-colors duration-200">
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
              <Mail size={18} className="text-gold" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="font-inter text-xs text-medium-gray uppercase tracking-wider">Contact</p>
              <a
                href={`mailto:${INFRASTRUCTURE.email}`}
                className="font-inter font-medium text-charcoal hover:text-gold transition-colors text-sm"
              >
                {INFRASTRUCTURE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
