import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}><Header/>{children}<Footer/><Analytics /><SpeedInsights /></body>
    </html>
  )
}
