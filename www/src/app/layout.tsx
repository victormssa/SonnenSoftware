import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import CookieBanner from '../components/cookieBanner/CookieBanner';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sonnen Software',
    template: '%s | Sonnen Software'
  },
  description: 'Sonnen Software - Desenvolvendo Soluções Digitais! 🚀🌐 Inovação, elegância e funcionalidade para marcar sua presença online. 💻✨',
  keywords: ['Desenvolvimento de Software', 'Software', 'Sonnen', 'React', 'Next.js', 'Mobile', 'Desktop'],
  openGraph: {
    title: 'Sonnen Software',
    description: 'Sonnen Software - Desenvolvendo Soluções Digitais! 🚀🌐 Inovação, elegância e funcionalidade para marcar sua presença online. 💻✨',
    url: 'https://sonnensoftware.com',
    siteName: 'Sonnen Software',
    images: [
      {
        url: 'https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/logoSonnen.png',
        width: '3604px',
        height: '1108px',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}><CookieBanner /><Header />{children}<Footer/><Analytics /><SpeedInsights /></body>
    </html>
  )
}
