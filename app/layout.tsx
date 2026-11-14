import type { Metadata, Viewport } from 'next'
import { Fraunces, Hanken_Grotesk, Michroma } from 'next/font/google'
import './globals.css'

// A soft, slightly odd serif for the big words, in the spirit of a painted paperback cover.
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--font-fraunces',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
})

// Wide, squared capitals for captions and coordinates.
const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-michroma',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-journey.vercel.app'),
  title: 'Omar Alhalawani — Computer Systems Engineer',
  description:
    'Computer Systems Engineering student at Carleton University working across ASIC verification, RTL, embedded hardware, and research instrumentation.',
  keywords: [
    'Omar Alhalawani',
    'computer systems engineer',
    'ASIC verification',
    'RTL design',
    'embedded systems',
    'Carleton University',
    'Ottawa',
    'developer portfolio',
    'CTF',
  ],
  authors: [{ name: 'Omar Alhalawani', url: 'https://github.com/Omar-Alhalawani' }],
  creator: 'Omar Alhalawani',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Omar Alhalawani — Computer Systems Engineer',
    description:
      'Computer Systems Engineering student working across ASIC verification, RTL, embedded hardware, and research instrumentation.',
    url: 'https://portfolio-journey.vercel.app',
    siteName: 'Omar Alhalawani',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Alhalawani — Computer Systems Engineer',
    description:
      'Computer Systems Engineering student working across ASIC verification, RTL, embedded hardware, and research instrumentation.',
  },
}

export const viewport: Viewport = {
  themeColor: '#071b1c',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable} ${michroma.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
