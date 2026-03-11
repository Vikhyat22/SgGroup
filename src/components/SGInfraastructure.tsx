'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Building2, HardHat, Zap, Settings, Truck, Landmark, Mail } from 'lucide-react'
import { INFRASTRUCTURE } from '@/lib/constants'

const ICONS = {
  building: Building2,
  'hard-hat': HardHat,
  zap: Zap,
  settings: Settings,
  truck: Truck,
  landmark: Landmark,
}

type IconKey = keyof typeof ICONS

export default function SGInfraastructure() {
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
      id="sg-infraastructure"
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-light-gray transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="SG Infraastructure Services"
    >
      <div className="site-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Division
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 gold-underline gold-underline-center">
            {INFRASTRUCTURE.name}
          </h2>
          <div className="h-1 w-0" aria-hidden="true" />
          <p className="font-poppins font-medium text-lg sm:text-xl text-medium-gray mt-6">
            &ldquo;{INFRASTRUCTURE.tagline}&rdquo;
          </p>
          <p className="font-inter text-medium-gray text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Building world-class infraastructure across India with precision engineering, quality
            materials, and an unwavering commitment to safety and sustainability.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mb-12 relative w-full h-64 sm:h-80 xl:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://static.wixstatic.com/media/c837a6_a656204e75b84246a3f517833decf462~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-157284152.jpg"
            alt="SG Infraastructure construction and civil engineering projects in Pune, India"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-8">
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
