'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Wrench, Package, Shield, Cpu, Mail } from 'lucide-react'
import { ENTERPRISES } from '@/lib/constants'

const ICONS = {
  wrench: Wrench,
  package: Package,
  shield: Shield,
  cpu: Cpu,
}

type IconKey = keyof typeof ICONS

export default function SGEnterprises() {
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
      id="sg-enterprises"
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="SG Enterprises Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Division
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 gold-underline gold-underline-center">
            {ENTERPRISES.name}
          </h2>
          <p className="font-poppins font-medium text-lg sm:text-xl text-medium-gray mt-6">
            &ldquo;{ENTERPRISES.tagline}&rdquo;
          </p>
          <p className="font-inter text-medium-gray text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Supplying premium industrial and commercial products from trusted manufacturers,
            ensuring quality, safety, and reliability for every business need.
          </p>
        </div>

        {/* Banner Images */}
        <div className="mb-12 grid sm:grid-cols-2 gap-6">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://static.wixstatic.com/media/c837a6_47223d00a4af4c01bde4b5a6b06ea3ad~mv2.jpg/v1/fill/w_1042,h_2224,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_47223d00a4af4c01bde4b5a6b06ea3ad~mv2.jpg"
              alt="SG Enterprises"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://static.wixstatic.com/media/c837a6_069649aec1074db192a4cd263d81a897~mv2.jpg/v1/fill/w_980,h_2076,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_069649aec1074db192a4cd263d81a897~mv2.jpg"
              alt="SG Enterprises Products"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTERPRISES.services.map((service, index) => {
            const Icon = ICONS[service.icon as IconKey] ?? Wrench
            return (
              <div
                key={service.title}
                className="group bg-light-gray rounded-2xl p-7 border border-gray-100 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-300"
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(20px)',
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-charcoal group-hover:bg-gold flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-gold group-hover:text-charcoal transition-colors duration-300"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Number */}
                <div className="font-poppins font-bold text-4xl text-gray-200 group-hover:text-gold/30 transition-colors duration-300 mb-2 select-none" aria-hidden="true">
                  0{index + 1}
                </div>

                <h3 className="font-poppins font-bold text-lg text-charcoal mb-3">
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
          <div className="inline-flex items-center gap-3 bg-light-gray border border-gray-200 hover:border-gold/40 rounded-xl px-6 py-4 transition-colors duration-200">
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
              <Mail size={18} className="text-gold" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="font-inter text-xs text-medium-gray uppercase tracking-wider">Contact</p>
              <a
                href={`mailto:${ENTERPRISES.email}`}
                className="font-inter font-medium text-charcoal hover:text-gold transition-colors text-sm"
              >
                {ENTERPRISES.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
