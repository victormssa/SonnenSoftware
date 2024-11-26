import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AuthProvider } from "../components/authContext/AuthContext";
import "../style/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import CookieBanner from "@/components/cookieBanner/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Script from "next/script";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sonnen Software",
    template: "%s | Sonnen Software",
  },
  description:
    "Sonnen Software - Desenvolvendo Soluções Digitais! Inovação, elegância e funcionalidade para marcar sua presença online.",
  keywords: [
    "Desenvolvimento de Software",
    "Software",
    "Sonnen",
    "React",
    "Next.js",
    "Mobile",
    "Desktop",
  ],
  openGraph: {
    title: "Sonnen Software",
    description:
      "Sonnen Software - Desenvolvendo Soluções Digitais! Inovação, elegância e funcionalidade para marcar sua presença online.",
    url: "https://www.sonnensoftware.com",
    siteName: "Sonnen Software",
    images: [
      {
        url: "https://raw.githubusercontent.com/victormssa/images/main/openGraph.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
          />
          <meta name="google-adsense-account" content="ca-pub-7538236551068646"></meta>
          <link rel="icon" href="/favicon.ico" sizes="any" />

          {/* Google Tag Manager */}
          <Script id="gtm" strategy="afterInteractive">
            {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window, document, 'script', 'dataLayer', 'GTM-NNL5ZWDN');
        `}
          </Script>
         {/* <Script id="clarity-analytics" strategy="afterInteractive">
            {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "onevjwgns6");
        `}
          </Script>*/}
        </head>
        <body className={poppins.className}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NNL5ZWDN"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <CookieBanner />
          <Header />
          {children}
          <a
            href="#final"
            className="fixed z-10 bottom-4 right-4 bg-red-600 text-white p-3 rounded-md hover:bg-red-600 hover:text-black transition duration-600 ease-in-out"
          >
            <AiOutlineArrowDown size={"2rem"} />
          </a>
          <a
            href="https://wa.me/557196184966"
            target="_blank"
            className="fixed z-10 bottom-20 right-4 bg-green-600 text-white p-3 rounded-md hover:bg-green-600 hover:text-black transition duration-600 ease-in-out"
          >
            <IoLogoWhatsapp size={"2rem"} />
          </a>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </AuthProvider>
  );
}
