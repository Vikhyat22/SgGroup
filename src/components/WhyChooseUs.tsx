'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  CheckCircle,
  Clock,
  Users,
  Tag,
  Heart,
  Lightbulb,
} from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const ICONS = {
  'check-circle': CheckCircle,
  clock: Clock,
  users: Users,
  tag: Tag,
  heart: Heart,
  lightbulb: Lightbulb,
}

type IconKey = keyof typeof ICONS

export default function WhyChooseUs() {
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
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-light-gray transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="Why Choose SG Group"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Advantages
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 gold-underline gold-underline-center">
            Why Choose Us
          </h2>
          <p className="font-inter text-medium-gray text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            We combine industry expertise, proven processes, and a customer-first mindset to deliver
            results that exceed expectations — every single time.
          </p>
        </div>

        {/* Visual Element */}
        <div className="mb-12 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://static.wixstatic.com/media/c837a6_136f489b41d445c38ff79f772d719210~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_136f489b41d445c38ff79f772d719210~mv2.jpg"
            alt="Why Choose SG Group"
            fill
            className="object-cover"
          />
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon as IconKey] ?? CheckCircle
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 transition-all duration-300"
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'none' : 'translateY(20px)',
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-gold"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-medium-gray text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
