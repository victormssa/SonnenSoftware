import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import {DefaultSeo} from 'next-seo';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sonnen Software',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>    <DefaultSeo
  title="Sonnen Software"
  description="SonnenSoftware - Desenvolvendo Soluções Digitais! 🚀🌐 Inovação, elegância e funcionalidade para marcar sua presença online. 💻✨"
  openGraph={{
    type: 'website',
    locale: 'en_IE',
    url: 'https://sonnensoftware.com/',
    siteName: 'Sonnen Software',
    images: [
      {
        url: 'https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/logoSonnen.png',
        width: 1200,
        height: 630,
        alt: 'Texto Alternativo da Imagem',
      },
    ],
  }}
  twitter={{
    handle: '@handle',
    site: '@sonnensoftware',
    cardType: 'summary_large_image',
  }}
/><Header/>{children}<Footer/><Analytics /><SpeedInsights /></body>
    </html>
  )
}
