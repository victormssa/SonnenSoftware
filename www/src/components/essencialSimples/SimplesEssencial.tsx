"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import networkImg from "../../../public/assets/images/network.png";
import globe from "../../../public/assets/images/globe.png";
import webdesign from "../../../public/assets/images/webdesign.png";
import { IoIosColorPalette } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosTabletPortrait } from "react-icons/io";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineServer } from "react-icons/hi2";
import { CiBoxes } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

import Accordion from "../accordion/accordion";

const questionsPage1 = [
  {
    question: "O que é um site estático?",
    answer:
      "Sites estáticos exibem conteúdo pré-definido e permanecem inalterados, proporcionando uma experiência consistente aos visitantes.",
  },
  {
    question: "É possivel adicionar funcionalidades ao meu site nesse plano?",
    answer:
      "Neste plano, as demais funcionalidades não estão incluindas por padrão.  Porém, oferecemos a flexibilidade de adicionar um número ilimitado de funcionalidades consideradas estáticas, personalizando assim o serviço de acordo com suas necessidades específicas.",
  },
  {
    question: "Quais minhas vantagem ao escolher o Plano Essencial Simples",
    answer:
      "Oferecemos um site moderno mas simples, de fácil manutenção, barato e rápido para usuários que não tem a necessidade de um projeto completo.",
  },
  {
    question: "Manutenção está incluida no pacote?",
    answer:
      "Após o periodo de garantia oferecida pela Sonnen Software, fica a cargo do usuário a sua manutenção. Precisa de manutenção? Confira nossos serviços!",
  },
];

const SimplesEssencial = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["presença online.", "agilidade.", "acessibilidade."];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  const renderText = () => {
    if (textIndex === texts.length - 1) {
      return (
        <motion.span
          key={texts[textIndex]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
        >
          {texts[textIndex]}
        </motion.span>
      );
    } else {
      return (
        <motion.span
          key={texts[textIndex]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
        >
          {texts[textIndex]}
        </motion.span>
      );
    }
  };

  const currentText = texts[textIndex];

  return (
    <div className="w-screen h-cover flex flex-col  text-white  ">
      <section
        className="w-full h-full bg-center bg-cover "
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/bg__essential__simples.jpg")`,
        }}
      >
        <div className="py-28 px-40 bg-[#000000]/80">
          <section className="flex-1 flex flex-col items-center justify-center ">
            <h3 className="text-dark text-center text-3xl font-semibold lg:text-4xl">
              Essencial & Simples
            </h3>
          </section>

          <section className="flex-1 ">
            <p className="mt-8 mb-8 lg:mt-10 xl:mt-6 lg:ms-20 text-center text-lg ">
              Nosso Plano Essencial representa a escolha ideal para aqueles que
              buscam{" "}
              <span
                className="text-red-600"
                style={{ display: "inline-block" }}
              >
                {renderText()}
              </span>
              <br />
              Perfeita para pequenos negócios, profissionais autônomos e
              projetos pessoais.
            </p>

            
            <section className="flex justify-center text-justify mx-auto text-[.8em] lg:flex-row flex-col pr-10 pl-10">
              <div className="lg:w-1/2 lg:me-20 lg:ms-30">
                <ul className="list-none space-y-3">
                  <li className="space-y-3 p-6 border rounded-xl border-red-500 backdrop-blur-sm bg-zinc-800/60">
                    <span className="inline-block p-3 bg-red-500 rounded-full">
                      <IoIosColorPalette size="2rem " />
                    </span>

                    <h2 className="text-2xl font-semibold capitalize text-white">
                      Interface Moderna
                    </h2>

                    <p className="text-gray-300 text-lg">
                      Design refinado e elegante, cuidadosamente desenvolvido
                      para refletir a identidade visual distintiva da sua marca.
                    </p>
                  </li>
                  <li className="space-y-3 p-6 border rounded-xl border-red-500 backdrop-blur-sm bg-zinc-800/60">
                    <span className="inline-block p-3 bg-red-500 rounded-full">
                      <IoDocumentTextOutline size="2rem " />
                    </span>

                    <h2 className="text-2xl font-semibold capitalize text-white">
                      Layout Informativo
                    </h2>

                    <p className="text-gray-300 text-lg">
                      Ideal para destacar seus serviços, histórico, contatos e
                      demais informações relevantes, proporciona uma
                      apresentação completa e impactante.
                    </p>
                  </li>
                  
                  <li className="space-y-3 p-6 border rounded-xl border-red-500 backdrop-blur-sm bg-zinc-800/60">
                    <span className="inline-block p-3 bg-red-500 rounded-full">
                      <IoIosTabletPortrait size="2rem " />
                    </span>

                    <h2 className="text-2xl font-semibold capitalize text-white">
                      Responsividade Completa
                    </h2>

                    <p className="text-gray-300 text-lg">
                    Garante responsividade em dispositivos móveis, assegura
                      uma experiência de usuário perfeita em qualquer
                      plataforma independente de tamanho.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/2 lg:me-20 lg:ms-30">
              <ul className="list-none space-y-3">
              <li className="space-y-3 p-6 border rounded-xl border-red-500 backdrop-blur-sm bg-zinc-800/60">
                    <span className="inline-block p-3 bg-red-500 rounded-full">
                      <AiOutlineDashboard size="2rem " />
                    </span>

                    <h2 className="text-2xl font-semibold capitalize text-white">
                      SEO Revisado
                    </h2>

                    <p className="text-gray-300 text-lg">
                    Otimizações de SEO para aumentar a visibilidade
                      online e melhorar o posicionamento nos motores de busca.
                    </p>
                  </li>
                  <li className="space-y-3 p-6 border rounded-xl border-red-500 backdrop-blur-sm bg-zinc-800/60">
                    <span className="inline-block p-3 bg-red-500 rounded-full">
                      <HiOutlineServer size="2rem " />
                    </span>

                    <h2 className="text-2xl font-semibold capitalize text-white">
                      Hospedagem Incluída
                    </h2>

                    <p className="text-gray-300 text-lg">
                    Hospedagem segura, confiável e escalável, oferecendo a garantia de
                      que seu site estará disponível para seus
                      visitantes com praticidade e confiabilidade.
                    </p>
                  </li>
                  <li className="space-y-3 p-6 border rounded-xl border-red-500 backdrop-blur-sm bg-zinc-800/60">
                    <span className="inline-block p-3 bg-red-500 rounded-full">
                      <CiBoxes size="2rem " />
                    </span>

                    <h2 className="text-2xl font-semibold capitalize text-white">
                      Valor Especial
                    </h2>

                    <p className="text-gray-300 text-lg">
                    Pacote com um valor único, que proporciona solução abrangente
                      e acessível para suas necessidades online com as melhores tecnologias do mercado.
                    </p>
                  </li>
                  
                </ul>
              </div>
            </section>
            <div className="flex text-sm font-semibold absolute left-4 mt-20">
              <h6 className="me-2">WEB</h6>
              <Image
                src={globe}
                className="me-2 w-5 h-auto"
                alt="Web developer"
              ></Image>
              <h6 className="me-2">DESIGN</h6>
              <Image
                src={webdesign}
                className="me-2 w-5 h-auto"
                alt="Web design"
              ></Image>
            </div>
          </section>
        </div>
      </section>
      {/*SECTION FAQ */}
      <section className="w-screen bottom-0 h-auto text-gray-600 body-font border-t-[0.08rem] border-[#0000002e] bg-gradient-to-tr from-red-600 to-rose-800">
        <h3 className="text-start text-white text-3xl font-semibold ms-3 mt-1">
          FAQ
        </h3>
        <div className=" mt-1">
          <Accordion questions={questionsPage1} />
        </div>
      </section>
    </div>
  );
};

export default SimplesEssencial;
