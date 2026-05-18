import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DAX — Cinematic Digital Experience',
  description:
    'A creative technology studio from Argentina. We engineer cinematic digital experiences where code meets emotion, and software becomes art.',
  keywords: ['creative technology', 'digital experience', 'cinematic design', 'immersive interfaces', 'Argentina'],
  openGraph: {
    title: 'DAX — Cinematic Digital Experience',
    description: 'We design digital worlds that feel like the future.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
