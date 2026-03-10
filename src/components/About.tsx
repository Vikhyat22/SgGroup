'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { STATS } from '@/lib/constants'

function CounterItem({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number
  suffix: string
  label: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div className="text-center">
      <div className="font-poppins font-bold text-4xl sm:text-5xl text-charcoal mb-2">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="font-inter text-medium-gray text-sm sm:text-base">{label}</div>
    </div>
  )
}

export default function About() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="About SG Group"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 gold-underline">
              About SG Group
            </h2>
            <div className="mt-8 space-y-5 font-inter text-medium-gray text-base lg:text-lg leading-relaxed">
              <p>
                <strong className="text-charcoal">SG Group</strong> is a diversified conglomerate
                headquartered in Pune, Maharashtra, built on a foundation of trust, quality, and
                innovation. We bring together two powerful divisions under one visionary umbrella.
              </p>
              <p>
                <strong className="text-charcoal">SG Infrastructure</strong> shapes tomorrow&apos;s
                skyline through world-class construction and civil engineering, while{' '}
                <strong className="text-charcoal">SG Enterprises</strong> ensures industrial
                excellence through premium MRO supplies, packaging materials, safety gear, and ESD
                products.
              </p>
              <p>
                Guided by our tagline — <em className="text-charcoal font-medium">&ldquo;Legacy of Excellence, Empire of Vision&rdquo;</em> — we
                are committed to delivering sustainable value to our clients, partners, and
                communities.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-gold/10 text-charcoal font-inter font-medium text-sm px-4 py-2 rounded-full border border-gold/20">
                ISO Certified
              </span>
              <span className="bg-gold/10 text-charcoal font-inter font-medium text-sm px-4 py-2 rounded-full border border-gold/20">
                Pan India Presence
              </span>
              <span className="bg-gold/10 text-charcoal font-inter font-medium text-sm px-4 py-2 rounded-full border border-gold/20">
                Trusted Since 2014
              </span>
            </div>
          </div>

          {/* Right - Section Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '2084/1772' }}>
                <Image
                  src="https://static.wixstatic.com/media/c837a6_eb05560eb8764160936d511f9cb1af73~mv2.jpg/v1/fill/w_2084,h_1772,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_eb05560eb8764160936d511f9cb1af73~mv2.jpg"
                  alt="SG Group About"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 grid grid-cols-4 gap-1.5" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 grid grid-cols-4 gap-1.5" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-light-gray rounded-2xl p-8 sm:p-10">
          {STATS.map((stat) => (
            <CounterItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
