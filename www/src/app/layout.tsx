import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../style/globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import CookieBanner from '@/components/cookieBanner/CookieBanner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

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
        url: 'https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/openGraph.png',
        width: 1200,
        height: 630,
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}><CookieBanner /><Header />{children}<a href="#final" className="fixed z-10 bottom-4 right-4 bg-red-600 text-white p-3 rounded-md hover:bg-red-600 hover:text-black transition duration-600 ease-in-out">
        <AiOutlineArrowDown size={"2rem"} />
      </a>
        <a href="https://wa.me/557196184966" target="_blank" className="fixed z-10 bottom-20 right-4 bg-green-600 text-white p-3 rounded-md hover:bg-green-600 hover:text-black transition duration-600 ease-in-out">
          <IoLogoWhatsapp size={"2rem"} />
        </a><Footer /><Analytics /><SpeedInsights /></body>
    </html>
  )
}