import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DAX — Ingeniería estratégica para empresas que escalan',
  description:
    'Diseñamos y construimos los microservicios, pipelines de IA y bases vectoriales que tu empresa necesita para crecer sin multiplicar headcount.',
  openGraph: {
    title: 'DAX — Ingeniería estratégica para empresas que escalan',
    description: 'We design digital worlds that feel like the future.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
