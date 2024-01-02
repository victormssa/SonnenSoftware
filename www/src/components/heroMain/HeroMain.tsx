"use client";
import Link from "next/link";
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
  const texts = ["Website", "Aplicativo", "Sistema", "Futuro"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);
  return (

      <section
        className="w-full bg-center bg-no-repeat bg-cover h-[90rem] md:h-[48rem] lg:h-[48rem] border-b-4 border-red-600"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/background_red.png)",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full  pt-28">
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
              className="px-2 py-1 md:px-3 md:py-2 lg:px-3 lg:py-2 duration-200 text-white hover:bg-red-600 hover:text-black dark:hover:text-black font-black border-2 border-red-600 mr-4 rounded-md"
            >
              CLIQUE E SOLICITE AGORA
            </Link>
          </section>
          <section className="">
            <div className="container px-6 py-10 mx-auto">
              <h3 className="text-xl font-medium text-white md:text-3xl lg:text-3xl dark:text-white">
                O que nós fazemos, por{" "}
                <span className="font-black text-red-600">você</span>?
              </h3>

              <div className="">
                <span className="inline-block w-40 h-1 bg-red-600 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-red-600 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-red-600 rounded-full"></span>
              </div>
              <div className="mt-4 xl:mt-4 lg:flex lg:items-center">
                <div className="grid w-full grid-cols-1 gap-8 xl:gap-16 md:grid-cols-4">
                  <Link
                    className="w-full bg-center bg-[length:350px_250px] h-full rounded-md filter hover:bg-[length:400px_300px] transition-all duration-150"
                    style={{ backgroundImage: `url(https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/storeImage.jpg)` }}
                    href="/sobre/desenvolvimento_sites"
                  >
                  <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                    <span className="inline-block p-3 text-red-500 bg-white rounded-xl dark:text-white dark:bg-red-500">
                      <AiFillHtml5 size="1.5em" />
                    </span>

                    <h1 className="text-xl font-semibold text-white dark:text-white dark:drop-shadow-2xl">
                      Desenvolvimento de Sites
                    </h1>

                    <p className="text-white font-semibold dark:text-white dark:drop-shadow-2xl">
                      Criamos sites de alto desempenho, com foco em
                      carregamentos rápidos e SEO.
                    </p>
                    <span className="mt-3 text-red-500 font-semibold inline-flex items-center">
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
                  
                  <Link className=" w-full bg-center bg-[length:450px_300px] h-full rounded-md filter hover:bg-[length:500px_350px] transition-all duration-150" style={{backgroundImage: `url(https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/appImage.jpg)`}} href="/sobre/desenvolvimento_app">
                  <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                    <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl dark:text-white dark:bg-red-500">
                    <PiAppWindowFill size='1.5em'/>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white dark:drop-shadow-2xl">
                      Desenvolvimento de Apps
                    </h1>

                    <p className="text-red-500 font-semibold dark:text-white dark:drop-shadow-2xl">
                    Desenvolvemos apps mobile e desktop que se destacam pela usabilidade e inovação.
                    </p>
                    <span
                    className="mt-3 text-red-500 font-semibold inline-flex items-center"
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
                  
                  <Link className="w-full bg-center bg-[length:450px_300px] h-full rounded-md filter  hover:bg-[length:500px_350px] transition-all duration-150" style={{backgroundImage: `url(https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/optimizationImage.jpg)`}} href="/sobre/otimizacao_sistemas">
                  <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                    <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl dark:text-white dark:bg-red-500">
                    <FaWrench size='1.5em'/>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white dark:drop-shadow-2xl">
                      Otimização de Sistemas
                    </h1>

                    <p className="text-red-500 font-semibold dark:text-white dark:drop-shadow-2xl">
                    Aprimoramos sistemas para máxima eficiência, priorizando desempenho e usabilidade.
                    </p>
                    <span
                    className="mt-3 text-red-500 font-semibold inline-flex items-center"
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
                  <Link className="w-full bg-center bg-[length:450px_300px] h-full rounded-md filter hover:bg-[length:500px_350px] transition-all duration-150 bg-no-repeat" style={{backgroundImage: `url(https://raw.githubusercontent.com/victormssa/SonnenSoftware/main/www/public/assets/images/solutionImage.jpg)`}} href="/sobre/solucoes_personalizadas">
                  <div className="space-y-3 w-full h-full px-2 py-2 rounded-md bg-[#000000]/80">
                    <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl dark:text-white dark:bg-red-500">
                    <BsBagPlusFill size='1.5em'/>
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white dark:drop-shadow-2xl">
                      Soluções Personalizadas
                    </h1>

                    <p className="text-red-500 font-semibold dark:text-white dark:drop-shadow-2xl">
                    Oferecemos soluções em vendas que impulsionam a eficiência e a usabilidade do seu negócio.
                    </p>
                    <span
                    className="mt-3 text-red-500 font-semibold inline-flex items-center"
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
  );
};

export default HeroMain;
