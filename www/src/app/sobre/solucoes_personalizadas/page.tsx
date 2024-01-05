"use client";
import Image from "next/image";
import React, { useState } from "react";
import testeSvg from "../../../../public/assets/images/teste.svg";

import { MdOutlineSecurity } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaBrush } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";

const SolucoesPersonalizadas = () => {
  const modulesData = [
    {
      icon: <MdOutlineSecurity />,
      title: "Módulo de Segurança Avançada",
      type: "Módulo Premium",
      description: "Fortaleça a integridade dos seus dados por meio de nosso avançado módulo de segurança, assegurando um ambiente confiável e protegido contra ameaças.",
      link: "#",
    },
    {
      icon: <BsFillClipboard2DataFill />,
      title: "Módulo de Análise de Dados",
      type: "Módulo Premium",
      description: "Aprimore a capacidade de decisão de sua organização com nosso módulo avançado de análise de dados, fornecendo insights estratégicos cruciais para o sucesso empresarial.",
      link: "#",
    },
    {
      icon: <MdIntegrationInstructions />,
      title: "Módulo de Integração de Sistemas",
      type: "Módulo Premium",
      description: "Simplifique e otimize operações complexas com nosso módulo de integração de sistemas, garantindo uma eficiência operacional sem precedentes.",
      link: "#",
    },
    {
      icon: <FaBrush />,
      title: "Módulo de Personalização Avançada",
      type: "Módulo Premium",
      description: "Adapte a interface de sua aplicação de maneira sofisticada e precisa com nosso módulo de personalização avançada, atendendo às exigências específicas de sua operação.",
      link: "#",
    },
    {
      icon: <FaShoppingBasket />,
      title: "Módulo de E-commerce Avançado",
      type: "Módulo Premium",
      description: "Potencialize sua presença online com nosso Módulo de E-commerce Avançado. Oferecendo recursos robustos, desde a gestão eficiente de inventário até a otimização da jornada do cliente, proporcionamos uma experiência de compra excepcional e impulsionamos suas operações comerciais para o sucesso.",
      link: "#",
    },
    {
      icon: <IoIosPaper />,
      title: "Módulo de Relatórios Personalizados",
      type: "Módulo Premium",
      description: "Acesse informações detalhadas e personalizadas de maneira instantânea com nosso módulo de relatórios personalizados, permitindo uma análise profunda e estratégica dos dados.",
      link: "#",
    },
  ];
  return (
    <main>
      <section className=" bg-zinc-900">
        <div className="container px-6 pt-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-4">
                  Afinal, o que é uma <br /> solução{" "}
                  <span className="text-red-500 ">Personalizada</span>?
                </h1>

                <p className="mt-3 text-gray-400 text-left">
                  Na Sonnen Software, reconhecemos que destacar de maneira
                  perceptível as funcionalidades de uma aplicação é crucial não
                  apenas para a satisfação mútua, mas também para capacitar o
                  cliente a compreender e personalizar sua aplicação ideal. Com
                  nossos módulos de funcionalidades, oferecemos suporte integral
                  durante o desenvolvimento, garantindo eficiência e
                  conveniência na busca por soluções personalizadas.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  Assine agora
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <Image
                className="w-full h-full lg:max-w-3xl"
                src={testeSvg}
                width={1920}
                height={1080}
                alt="Catalogue.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-900">
        <div className="container px-6 pb-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Explore os nossos <br /> Incríveis{" "}
            <span className="underline decoration-red-500">Módulos</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Descubra a excelência dos nossos módulos, projetados para oferecer
            uma experiência única.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {modulesData.map((module, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center align-middle">
                  <span className="inline-block p-3 text-red-500 bg-red-100 rounded-full dark:text-white dark:bg-red-500 text-xl">
                    {module.icon}
                  </span>
                  <p className="text-white font-semibold bg-red-600 w-auto h-auto py-2 px-3 rounded-xl">{module.type}</p>
                </div>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  {module.title}
                </h1>
                <p className="text-gray-500 dark:text-gray-300">
                  {module.description}
                </p>
                <a
                  href={module.link}
                  className="inline-flex items-center -mx-1 text-sm text-red-500 capitalize transition-colors duration-300 transform dark:text-red-400 hover:underline hover:text-red-600 dark:hover:text-red-500"
                >
                  <span className="mx-1">saiba mais</span>
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolucoesPersonalizadas;
