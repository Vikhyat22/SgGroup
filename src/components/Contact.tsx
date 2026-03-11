'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General',
    message: '',
    website: '',
  })
  const successRef = useRef<HTMLDivElement>(null)

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

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const getAccessKey = (subject: string) => {
    const keys: Record<string, string | undefined> = {
      General: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_GENERAL,
      Infraastructure: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_INFRAASTRUCTURE,
      Enterprises: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_ENTERPRISES,
    }
    return keys[subject] || keys.General
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (form.website) return
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstErrorField = document.getElementById(Object.keys(newErrors)[0])
      firstErrorField?.focus()
      return
    }
    setErrors({})
    setSubmitError('')
    setSubmitting(true)

    try {
      const accessKey = getAccessKey(form.subject)
      if (!accessKey) {
        setSubmitError('Contact form is not configured yet.')
        return
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Enquiry — ${form.subject === 'General' ? 'SG Group' : `SG ${form.subject}`}`,
          from_name: 'SG Group Website',
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          division: form.subject,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!data.success) {
        setSubmitError('Failed to send message. Please try again.')
        return
      }
      setSubmitted(true)
      setTimeout(() => successRef.current?.focus(), 100)
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-20 lg:py-28 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="Contact SG Group"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4 gold-underline gold-underline-center">
            Contact Us
          </h2>
          <p className="font-inter text-medium-gray text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            Have a project in mind or need our services? Reach out to us and we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="flex flex-col items-center justify-center h-full text-center py-12 outline-none"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-charcoal mb-3">
                  Message Sent!
                </h3>
                <p className="font-inter text-medium-gray">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', phone: '', subject: 'General', message: '', website: '' })
                  }}
                  className="mt-6 text-gold font-inter font-medium hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-inter text-sm font-medium text-charcoal mb-1.5"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 border rounded-xl font-inter text-sm text-charcoal bg-light-gray placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors ${
                        errors.name ? 'border-red-400' : 'border-gray-200'
                      }`}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-500 font-inter">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-inter text-sm font-medium text-charcoal mb-1.5"
                    >
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 border rounded-xl font-inter text-sm text-charcoal bg-light-gray placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors ${
                        errors.email ? 'border-red-400' : 'border-gray-200'
                      }`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500 font-inter">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-inter text-sm font-medium text-charcoal mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9637261513"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-sm text-charcoal bg-light-gray placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-inter text-sm font-medium text-charcoal mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-sm text-charcoal bg-light-gray focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="General">General Enquiry</option>
                    <option value="Infraastructure">SG Infraastructure</option>
                    <option value="Enterprises">SG Enterprises</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-inter text-sm font-medium text-charcoal mb-1.5"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project or requirement..."
                    className={`w-full px-4 py-3 border rounded-xl font-inter text-sm text-charcoal bg-light-gray placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-none ${
                      errors.message ? 'border-red-400' : 'border-gray-200'
                    }`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-500 font-inter">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot — hidden from real users */}
                <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600 font-inter" role="alert">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold hover:bg-gold-dark text-charcoal font-poppins font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              <div className="flex items-start gap-4 bg-light-gray rounded-2xl p-5 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-inter text-xs text-medium-gray uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="font-poppins font-semibold text-charcoal hover:text-gold transition-colors text-base"
                  >
                    +91 {COMPANY.phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/91${COMPANY.phone}?text=Hi%20SG%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-green-50 rounded-2xl p-5 border border-green-100 hover:border-green-300 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <MessageCircle size={20} className="text-green-600" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-inter text-xs text-medium-gray uppercase tracking-wider mb-1">
                    WhatsApp
                  </p>
                  <p className="font-poppins font-semibold text-charcoal group-hover:text-green-600 transition-colors text-base">
                    Chat with us
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-light-gray rounded-2xl p-5 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-inter text-xs text-medium-gray uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-poppins font-semibold text-charcoal hover:text-gold transition-colors text-sm"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-light-gray rounded-2xl p-5 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-inter text-xs text-medium-gray uppercase tracking-wider mb-1">
                    Address
                  </p>
                  <p className="font-inter text-sm text-charcoal leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 flex-1 min-h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d73.9478902!3d18.5652112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e004468b6d%3A0xf3f2e8d347d33149!2sGurukul%20Complex%20Aple%20Ghar%20Society%20Lane%2013!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SG Group Office Location - Gurukul Complex, Aple Ghar Society Lane 13, Pune"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
