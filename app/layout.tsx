import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gelagay.com'),
  title: 'Gelagay Business PLC | Water Testing & Laboratory Support',
  description:
    'Industrial water testing, laboratory equipment, reagents, testing kits, training, and technical services for water systems and laboratory operations.',
  keywords: [
    'Gelagay Business PLC',
    'water testing Ethiopia',
    'boiler water testing',
    'cooling tower water testing',
    'RO technical service',
    'wastewater testing',
    'water testing kits Ethiopia',
    'lab equipment Ethiopia',
    'laboratory reagents Ethiopia',
    'technical training Ethiopia',
    'quality control lab equipment',
  ],
  openGraph: {
    title: 'Gelagay Business PLC | Water Testing & Laboratory Support',
    description:
      'Water testing services, testing kits, laboratory equipment, reagents, training, and technical support for Ethiopian facilities.',
    images: ['/hero.png'],
    locale: 'en_US',
    siteName: 'Gelagay Business PLC',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
