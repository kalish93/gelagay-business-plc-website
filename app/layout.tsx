import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gelagay.et'),
  title: 'Gelagay Business PLC | Chemical Supply Solutions',
  description:
    'Trusted supplier of industrial, agricultural, laboratory, and commercial chemicals across Ethiopia. High-quality products with reliable distribution services.',
  keywords: [
    'Gelagay Business PLC',
    'chemical supplier Ethiopia',
    'industrial chemicals',
    'laboratory chemicals',
    'agricultural chemicals',
    'chemical distribution Addis Ababa',
  ],
  openGraph: {
    title: 'Gelagay Business PLC | Chemical Supply Solutions',
    description:
      'High-quality chemical products and reliable distribution services for Ethiopian industry, agriculture, laboratories, and business.',
    images: ['/hero.png'],
    locale: 'en_US',
    siteName: 'Gelagay Business PLC',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
