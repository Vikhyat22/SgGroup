import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SG Group – Legacy of Excellence, Empire of Vision',
  description:
    'SG Group is a diversified conglomerate with two powerful divisions: SG Infrastructure (Construction, Civil, Electric, Mechanical Works) and SG Enterprises (MRO Supplies, Packaging, Safety Gear, ESD Products).',
  keywords: 'SG Group, SG Infrastructure, SG Enterprises, construction, civil works, MRO supplies, Pune',
  authors: [{ name: 'SG Group', url: 'https://www.sggroup.info' }],
  openGraph: {
    title: 'SG Group – Legacy of Excellence, Empire of Vision',
    description:
      'SG Group is a diversified conglomerate with two powerful divisions: SG Infrastructure and SG Enterprises.',
    url: 'https://www.sggroup.info',
    siteName: 'SG Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SG Group – Legacy of Excellence, Empire of Vision',
    description:
      'SG Group — a diversified conglomerate with divisions in Infrastructure and Enterprises.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
