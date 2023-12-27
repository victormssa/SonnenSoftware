import HeroMain from "@/components/heroMain/HeroMain";
import AboutPricing from "@/components/aboutPricing/AboutPricing";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import {DefaultSeo} from 'next-seo';

const Home: React.FC = () => {
  return (
    <main className="w-screen h-auto">
    <DefaultSeo
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
/>

      <HeroMain />
      <a href="#final" className="fixed z-10 bottom-4 right-4 bg-red-600 text-white p-3 rounded-md hover:bg-red-600 hover:text-black transition duration-600 ease-in-out">
          <AiOutlineArrowDown size={"2rem"}/>
        </a>
        <a href="https://wa.me/557196184966" target="_blank" className="fixed z-10 bottom-20 right-4 bg-green-600 text-white p-3 rounded-md hover:bg-green-600 hover:text-black transition duration-600 ease-in-out">
          <IoLogoWhatsapp size={"2rem"}/>
        </a>
      <AboutPricing/>
    </main>
  );
};

export default Home;
