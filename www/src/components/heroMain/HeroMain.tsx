"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import storeImage from "./../../../public/assets/images/storeImage.jpg";
import optimizationImage from "./../../../public/assets/images/optimizationImage.jpg";
import solutionImage from "./../../../public/assets/images/solutionImage.jpg";
import appImage from "./../../../public/assets/images/appImage.jpg";
import { AiFillHtml5 } from "react-icons/ai";
import {PiAppWindowFill} from "react-icons/pi"
import {FaWrench} from "react-icons/fa"
import {BsBagPlusFill} from "react-icons/bs"


const HeroMain = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const texts = ["Website", "Aplicativo", "Sistema", "Futuro"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (

      <section className="bg-zinc-900">
      <Image
        src="/assets/images/background_red.png"
        alt="Preload"
        className="hidden"
        onLoad={handleImageLoad}
        width={6990}
        height={2501}
      />
        <section
          className="w-full bg-center bg-no-repeat bg-cover h-[94rem] md:h-[60rem] lg:h-[60rem] border-b-4 border-red-500 lg:pt-0 pt-0"
          style={{
            backgroundImage: `url(${imageLoaded ? '/assets/images/background_red.png' : '/assets/images/background_red-transformed.png'})`,
          }}
        >
          <div className="flex flex-col items-center justify-center w-full h-full ">
            <section className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-white md:text-4xl lg:text-4xl mb-1">
              Desenvolva seu <br />{" "}
              <span className="text-red-600">
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={texts[currentTextIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {texts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              conosco.
            </h3>
              <h2 className="text-md font-semibold text-white md:text-lg lg:text-lg mb-5">
                Solicite um <span className="text-red-600">orçamento</span>, sem
                compromisso.
              </h2>
              <Link
                href="/contato"
                className="px-2 py-1 md:px-3 md:py-2 lg:px-3 lg:py-2 duration-200 text-white hover:bg-red-600 hover:text-black font-black border-2 border-red-600 mr-4 rounded-md"
              >
                CLIQUE E SOLICITE
              </Link>
            </section>
            <section className="z-10 w-full">
              <div className="w-full py-10 mx-auto">
                <h3 className="text-xl font-semibold md:text-3xl lg:text-3xl text-white lg:ml-40 ml-10">
                  <span className="font-bold text-4xl">Bem vindo,</span> <br/>o que podemos fazer por <span className="text-red-600">você </span>?
                </h3>

                <div className="mt-4 xl:mt-4 lg:flex lg:items-center w-full border-y-2 border-red-600 p-4 backdrop-blur-md bg-red-900/20 shadow-xl">
                  <div className="grid w-full grid-cols-1 gap-8 xl:gap-16 md:grid-cols-4 lg:px-20 px-0">
                    <Link
                      className="w-full bg-center bg-[length:350px_250px] h-full rounded-md filter hover:bg-[length:400px_300px] bg-[url('/assets/images/storeImage.jpg')] transition-all duration-150"
                      href="/sobre/desenvolvimento_sites"
                    >
                    <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                      <span className="inline-block p-3 rounded-xl text-white bg-red-600">
                        <AiFillHtml5 size="1.5em" />
                      </span>
                      <h1 className="text-xl font-semibold text-white drop-shadow-2xl">
                        Desenvolvimento de Sites
                      </h1>
                      <p className="text-white font-semibold  drop-shadow-2xl">
                        Criamos sites de alto desempenho, com foco em
                        carregamentos rápidos e SEO.
                      </p>
                      <span className="mt-3 text-red-600 font-semibold inline-flex items-center">
                        Saiba mais
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </span>
                      </div>
                    </Link>
        
                    <Link className=" w-full bg-center bg-[length:450px_300px] h-full rounded-md filter hover:bg-[length:500px_350px] bg-[url('/assets/images/appImage.jpg')] transition-all duration-150" href="/sobre/desenvolvimento_apps">
                    <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                      <span className="inline-block p-3 rounded-xl text-white bg-red-600">
                      <PiAppWindowFill size='1.5em'/>
                      </span>
                      <h1 className="text-xl font-semibold text-white drop-shadow-2xl">
                        Desenvolvimento de Apps
                      </h1>
                      <p className=" font-semibold text-white drop-shadow-2xl">
                      Desenvolvemos apps mobile e desktop que se destacam pela usabilidade e inovação.
                      </p>
                      <span
                      className="mt-3 text-red-600 font-semibold inline-flex items-center"
                    >
                      Saiba mais
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    </div>
                    </Link>
        
                    <Link className="w-full bg-center bg-[length:450px_300px] h-full rounded-md filter  hover:bg-[length:500px_350px] bg-[url('/assets/images/optimizationImage.jpg')] transition-all duration-150" href="/sobre/otimizacao_sistemas">
                    <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                      <span className="inline-block p-3  rounded-xl text-white bg-red-600">
                      <FaWrench size='1.5em'/>
                      </span>
                      <h1 className="text-xl font-semibold text-white drop-shadow-2xl">
                        Otimização de Sistemas
                      </h1>
                      <p className="font-semibold text-white drop-shadow-2xl">
                      Aprimoramos sistemas para máxima eficiência, priorizando desempenho e usabilidade.
                      </p>
                      <span
                      className="mt-3 text-red-600 font-semibold inline-flex items-center"
                    >
                      Saiba mais
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    </div>
                    </Link>
                    <Link className="w-full bg-center bg-[length:450px_300px] h-full rounded-md filter hover:bg-[length:500px_350px] bg-[url('/assets/images/solutionImage.jpg')] transition-all duration-150 bg-no-repeat" href="/sobre/solucoes_personalizadas">
                    <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                      <span className="inline-block p-3  rounded-xl text-white bg-red-600">
                      <BsBagPlusFill size='1.5em'/>
                      </span>
                      <h1 className="text-xl font-semibold  text-white drop-shadow-2xl">
                        Soluções Personalizadas
                      </h1>
                      <p className=" font-semibold text-white drop-shadow-2xl">
                      Oferecemos soluções em vendas que impulsionam a eficiência e a usabilidade do seu negócio.
                      </p>
                      <span
                      className="mt-3 text-red-600 font-semibold inline-flex items-center"
                    >
                      Saiba mais
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
  );
};

export default HeroMain;
