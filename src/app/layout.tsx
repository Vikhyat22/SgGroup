import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const GA_ID = 'G-KCLYF8ZQ29'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

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
  manifest: '/site.webmanifest',
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
    streetAddress: '201, Gurukul Complex, Aaple Ghar Society',
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
  sameAs: ['https://www.sggroup.info', 'https://www.instagram.com/sg_group_official'],
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
