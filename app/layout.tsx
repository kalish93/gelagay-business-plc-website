import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gelagay.com'),
  title: 'Gelagay Business PLC | Supply, Distribution & Advisory Solutions',
  description:
    'Ethiopian business supply, distribution, sourcing, and advisory company with current specialization in chemical products and chemical-use consultation.',
  keywords: [
    'Gelagay Business PLC',
    'business supply Ethiopia',
    'distribution company Ethiopia',
    'business advisory Ethiopia',
    'chemical consultation Ethiopia',
    'chemical supplier Ethiopia',
    'industrial chemicals',
    'laboratory chemicals',
    'agricultural chemicals',
    'chemical distribution Addis Ababa',
  ],
  openGraph: {
    title: 'Gelagay Business PLC | Supply, Distribution & Advisory Solutions',
    description:
      'Business supply, sourcing, distribution, and advisory services with current expertise in chemical products and safe chemical use.',
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
