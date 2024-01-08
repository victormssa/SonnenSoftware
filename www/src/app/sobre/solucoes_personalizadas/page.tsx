import Image from "next/image";
import React, { useState } from "react";
import testeSvg from "../../../../public/assets/images/teste.svg";
import { Metadata } from "next";
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaBrush } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Soluções Personalizadas",
};
const SolucoesPersonalizadas = () => {
  const modulesData = [
    {
      icon: <MdOutlineSecurity />,
      title: "Módulo de Segurança Avançada",
      type: "Básico",
      addon: "Segurança",
      description:
        "Fortaleça a integridade dos seus dados por meio de nosso avançado módulo de segurança, assegurando um ambiente confiável e protegido contra ameaças.",
      link: "https://wa.link/awwuy3",
    },
    {
      icon: <BsFillClipboard2DataFill />,
      title: "Módulo de Análise de Dados",
      type: "Básico",
      addon: "Análise de Dados",
      description:
        "Aprimore a capacidade de decisão de sua organização com nosso módulo avançado de análise de dados, fornecendo insights estratégicos cruciais para o sucesso empresarial.",
      link: "https://wa.link/bs2k6k",
    },
    {
      icon: <MdIntegrationInstructions />,
      title: "Módulo de Integração de Sistemas",
      type: "Básico",
      addon: "Otimização",
      description:
        "Simplifique e otimize operações complexas com nosso módulo de integração de sistemas, garantindo uma eficiência operacional sem precedentes.",
      link: "https://wa.link/67v5yf",
    },
    {
      icon: <FaBrush />,
      title: "Módulo de Personalização Avançada",
      type: "Básico",
      addon: "Design",
      description:
        "Adapte a interface de sua aplicação de maneira sofisticada e precisa com nosso módulo de personalização avançada, atendendo às exigências específicas de sua operação.",
      link: "https://wa.link/wuvx1u",
    },
    {
      icon: <FaShoppingBasket />,
      title: "Módulo de E-commerce Avançado",
      type: "Premium",
      addon: "Loja",
      description:
        "Potencialize sua presença online com nosso Módulo de E-commerce Avançado. Oferecendo recursos robustos, desde a gestão eficiente de inventário até a otimização da jornada do cliente, proporcionamos uma experiência de compra excepcional e impulsionamos suas operações comerciais para o sucesso.",
      link: "https://wa.link/t437i9",
    },
    {
      icon: <IoIosPaper />,
      title: "Módulo de Relatórios Avançado",
      type: "Premium",
      addon: "Negócios",
      description:
        "Acesse informações detalhadas e personalizadas de maneira instantânea com nosso módulo de relatórios avançados, permitindo uma análise profunda e estratégica dos dados.",
      link: "https://wa.link/q4lu4y",
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

                <Link href='https://wa.link/lprzpn' target="_blank" rel="noopener noreferrer">
              <button className="w-auto ml-6 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  Entre em Contato
              </button>
              </Link>
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

      <section className="bg-zinc-900 flex flex-col align-middle items-center pb-10">
        <div className="container px-6 pb-10 mx-auto">
          <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white">
            Explore os nossos <br /> Incríveis{" "}
            <span className="underline decoration-red-500">Módulos</span>
          </h1>

          <p className="mt-4 xl:mt-6 text-gray-300">
            Descubra a excelência dos nossos módulos, projetados para oferecer
            uma experiência única.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {modulesData.map((module, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center align-middle w-full">
                  <span className="inline-block p-3 rounded-full text-white bg-red-500 text-xl">
                    {module.icon}
                  </span>

                  <div className="flex gap-2">
                    <p className="text-white font-semibold bg-red-600 w-auto h-auto py-2 px-3 rounded-xl">
                      {module.type}
                    </p>
                    <p className="text-white font-semibold bg-red-600 w-auto h-auto py-2 px-3 rounded-xl">
                      {module.addon}
                    </p>
                  </div>
                </div>

                <h1 className="text-xl font-semibold capitalize text-white">
                  {module.title}
                </h1>
                <p className=" text-gray-300">
                  {module.description}
                </p>
                <Link
                  href={module.link}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center -mx-1 text-sm capitalize transition-colors duration-300 transform text-red-400 hover:underline hover:text-red-500"
                >
                  <span className="mx-1">Entre em contato</span>
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
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <a
            href="#"
            className="px-4 py-2 mx-1 capitalize rounded-md cursor-not-allowed bg-zinc-800 text-gray-600"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">Antes</span>
            </div>
          </a>

          <a
            href=""
            className="px-4 py-2 mx-1  transition-colors duration-300 transform rounded-md sm:inline bg-red-600 text-gray-200  hover:bg-red-500 hover:text-white"
          >
            1
          </a>
          <a
            href="#"
            className="px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md cursor-not-allowed bg-zinc-800 text-gray-600"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Próximo</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default SolucoesPersonalizadas;
