import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sggroup.info'),
  title: 'SG Group',
  description:
    'SG Group is a diversified conglomerate with two powerful divisions: SG Infraastructure (Construction, Civil, Electric, Mechanical Works) and SG Enterprises (MRO Supplies, Packaging, Safety Gear, ESD Products).',
  keywords: 'SG Group, SG Infraastructure, SG Enterprises, construction, civil works, electric works, mechanical works, earth movers, builders developers, MRO supplies, packaging material, safety gear PPE, ESD products, industrial hardware, industrial warehouse, Pune, Maharashtra, India',
  authors: [{ name: 'SG Group', url: 'https://www.sggroup.info' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'SG Group – Legacy of Excellence, Empire of Vision',
    description:
      'SG Group is a diversified conglomerate with two powerful divisions: SG Infraastructure and SG Enterprises.',
    url: 'https://www.sggroup.info',
    siteName: 'SG Group',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'SG Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SG Group – Legacy of Excellence, Empire of Vision',
    description:
      'SG Group — a diversified conglomerate with divisions in Infraastructure and Enterprises.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#1A1A1A',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SG Group',
  url: 'https://www.sggroup.info',
  logo: 'https://www.sggroup.info/logo.png',
  description:
    'SG Group is a diversified conglomerate with two powerful divisions: SG Infraastructure and SG Enterprises.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '201, Gurukul Apartment, Aaple Ghar Society',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411014',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9637261513',
    contactType: 'customer service',
    email: 'connect.sggroup@gmail.com',
  },
  sameAs: ['https://www.sggroup.info'],
  foundingDate: '2024',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '100+' },
  subOrganization: [
    {
      '@type': 'Organization',
      name: 'SG Infraastructure',
      email: 'sg.infraastructure@gmail.com',
      description: 'Construction, Civil Works, Electric Works, Mechanical Works, Earth Movers, Builders & Developers',
    },
    {
      '@type': 'Organization',
      name: 'SG Enterprises',
      email: 'sg.enterprises1513@gmail.com',
      description: 'MRO Supplies, Packaging Material, Safety Gear & PPE, ESD Products, Industrial Hardware, Industrial Warehouse',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1A1A1A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
