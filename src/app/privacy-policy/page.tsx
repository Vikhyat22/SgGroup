import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy — SG Group',
  description: 'Privacy Policy for SG Group website. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Link
            href="/"
            className="inline-block font-poppins text-gold font-semibold text-sm hover:underline mb-6"
          >
            &larr; Back to Home
          </Link>
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl text-white">
            Privacy Policy
          </h1>
          <p className="font-inter text-white/60 text-sm mt-3">
            Last updated: March 2026
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-neutral max-w-none font-inter text-medium-gray text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">1. Introduction</h2>
            <p>
              SG Group (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>www.sggroup.info</strong>, including any related services and communications.
            </p>
            <p>
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any other details you voluntarily provide through our contact form.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use the website, including your IP address, browser type, pages visited, time spent, and referring URLs.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience. You can control cookies through your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your enquiries and provide customer support</li>
              <li>Improve and maintain our website and services</li>
              <li>Send relevant communications about our services (only if you have opted in)</li>
              <li>Analyse website usage and trends to enhance user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">4. Third-Party Services</h2>
            <p>
              We use third-party services to process contact form submissions (Web3Forms) and host our website. These services may collect and process data in accordance with their own privacy policies. We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are processed through Web3Forms and are subject to their data retention policies.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">6. Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="font-poppins font-bold text-xl text-charcoal mb-3">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
            <ul className="list-none space-y-1 mt-3">
              <li><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`} className="text-gold hover:underline">{COMPANY.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${COMPANY.phone}`} className="text-gold hover:underline">+91 {COMPANY.phone}</a></li>
              <li><strong>Address:</strong> {COMPANY.address}</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
