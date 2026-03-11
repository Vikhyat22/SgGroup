'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Target, Eye, Compass } from 'lucide-react'

const PILLARS = [
  {
    icon: Target,
    keyword: 'PRECISION',
    heading: 'We Measure Twice',
    description:
      'Every project is engineered with meticulous planning and zero-tolerance for compromise — because details define legacies.',
  },
  {
    icon: Eye,
    keyword: 'VISION',
    heading: 'We See Further',
    description:
      'We don\'t just meet today\'s needs. We anticipate tomorrow\'s challenges and build solutions that stand the test of time.',
  },
  {
    icon: Compass,
    keyword: 'INTEGRITY',
    heading: 'We Stand Behind It',
    description:
      'Transparent processes, honest timelines, and a handshake that means something — trust is the foundation we never cut corners on.',
  },
]

const ROTATING_WORDS = ['Skylines', 'Futures', 'Trust', 'Legacies']

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
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="max-w-prose">
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
                <strong className="text-charcoal">SG Infraastructure</strong> shapes tomorrow&apos;s
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
                GST Compliant
              </span>
              <span className="bg-gold/10 text-charcoal font-inter font-medium text-sm px-4 py-2 rounded-full border border-gold/20">
                MSME Registered
              </span>
              <span className="bg-gold/10 text-charcoal font-inter font-medium text-sm px-4 py-2 rounded-full border border-gold/20">
                Pan India Presence
              </span>
              <span className="bg-gold/10 text-charcoal font-inter font-medium text-sm px-4 py-2 rounded-full border border-gold/20">
                Trusted Since 2024
              </span>
            </div>
          </div>

          {/* Right - Section Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '2084/1772' }}>
                <Image
                  src="https://static.wixstatic.com/media/c837a6_eb05560eb8764160936d511f9cb1af73~mv2.jpg/v1/fill/w_2084,h_1772,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_eb05560eb8764160936d511f9cb1af73~mv2.jpg"
                  alt="SG Group headquarters and team — diversified conglomerate in Pune, Maharashtra"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

        {/* The SG Promise */}
        <div className="mt-20">
          {/* Rotating headline */}
          <div className="text-center mb-14">
            <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              The SG Promise
            </p>
            <h3 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal">
              We Don&apos;t Just Build.{' '}
              <span className="relative inline-block text-gold">
                <span className="invisible">Legacies.</span>
                {ROTATING_WORDS.map((word) => (
                  <span key={word} className="rotating-word">
                    {word}.
                  </span>
                ))}
              </span>
            </h3>
          </div>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.keyword}
                  className="glow-border group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 transition-all duration-500 cursor-default"
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? undefined : 'translateY(30px)',
                  }}
                >
                  {/* Icon + Keyword */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-charcoal group-hover:bg-gold flex items-center justify-center transition-colors duration-300">
                      <Icon
                        size={22}
                        className="text-gold group-hover:text-charcoal transition-colors duration-300"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="font-poppins font-bold text-xs tracking-[0.25em] text-gold/60 group-hover:text-gold transition-colors duration-300 uppercase">
                      {pillar.keyword}
                    </span>
                  </div>

                  {/* Heading */}
                  <h4 className="font-poppins font-bold text-xl text-charcoal mb-3">
                    {pillar.heading}
                  </h4>

                  {/* Description */}
                  <p className="font-inter text-medium-gray text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Animated bottom line */}
                  <div
                    className="mt-6 h-0.5 w-0 group-hover:w-full bg-gold rounded-full transition-all duration-500"
                    aria-hidden="true"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
