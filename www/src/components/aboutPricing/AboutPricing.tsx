import React from "react";
import Link from "next/link";
import { RiFireLine } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";

const AboutPricing: React.FC = () => {
  return (
    <>
      <section className="" id="planos">
        <div className="bg-zinc-900">
          <div className="container flex flex-col px-6 py-8 mx-auto justify-center items-center align-middle">
            <h1 className="text-2xl font-semibold text-center text-white lg:text-3xl">
              Conheça os <span className="text-red-600">Nossos Planos</span>
            </h1>

            <p className="max-w-4xl mx-auto mt-4 text-center text-gray-100 xl:mt-6 ">
              Descubra a excelência da Sonnen Software com nossos planos
              exclusivos. Oferecemos opções personalizadas para atender às suas
              necessidades, com tecnologias modernas e com preços transparentes
              e benefícios exclusivos.
            </p>

            <div className="grid grid-cols-1 gap-8 w-auto mt-6  md:grid-cols-2 lg:grid-cols-3">


              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 border-gray-700">
              <div className="bg-red-600 rounded-t-lg flex items-center justify-center py-2"><p className="text-white font-semibold flex align-middle items-center ">HOT <RiFireLine className="mr-1" size={"1.2rem"}/>| 20% OFF</p></div>
                <div className="p-6">
                  <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">
                    Essencial & Simples
                  </h1>

                  <p className="mt-4  text-gray-300">
                    Este plano se configura como a escolha ideal para aqueles que buscam o essencial, sendo especialmente adequado para pequenos negócios, profissionais autônomos e projetos pessoais, atendendo as necessidades de forma eficiente.
                  </p>

                  
                  <Link href="https://wa.link/sbu0bd">
                      <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                        ASSINE AGORA
                      </button>
                  </Link>
                </div>

                <hr className=" border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium lg:text-xl text-white">
                    Beneficios do Plano
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Site estático performático com CSR
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Design moderno pensado no UX/UI
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">Responsividade completa</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Foco no SEO
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Hospedagem Incluída
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">Suporte</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Acesso a Módulos Base & Premium
                      </span>
                    </div>
                    <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Desconto nos Módulos
                      </span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 border-gray-700">
              <div className="text-white bg-red-600 rounded-t-lg flex items-center justify-center py-2"><p className="font-semibold flex align-middle items-center ">MELHOR OFERTA <MdWorkspacePremium className="mx-[0.1rem]" size={"1.3rem"}/>| 20% OFF</p></div>
                <div className="p-6">
                  <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">
                    Presença Online Continua
                  </h1>

                  <p className="mt-4  text-gray-300">
                  Nosso Plano Presença Online Continua é ideal para quem almeja uma experiência completa, sem precisar se preocupar. A Sonnen Software cuida de tudo para você poder desfrutar, com acesso à diversos módulos para enriquecer seu site.
                  </p>

                  
                  <Link href="https://wa.link/8we64h">
                      <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                        ASSINE AGORA
                      </button>
                  </Link>
                </div>

                <hr className=" border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium lg:text-xl text-white">
                    Beneficios do Plano
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Aplicativo Web Dinâmico e Interativo
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Design moderno pensado no UX/UI
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">Responsividade completa</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Foco no SEO
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Hospedagem Incluída
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">Suporte</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Acesso a Módulos Base & Premium
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Desconto nos Módulos
                      </span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
              
              <div className="max-w-sm mx-auto border rounded-lg md:mx-4 border-gray-700">
              <div className="bg-red-600 rounded-t-lg flex items-center justify-center py-2"><p className="text-white font-semibold flex align-middle items-center ">HOT <RiFireLine className="mr-1" size={"1.2rem"}/>| 20% OFF</p></div>
                <div className="p-6">
                  <h1 className="text-xl font-medium  capitalize lg:text-2xl text-white">
                    À Sua Medida
                  </h1>

                  <p className="mt-4  text-gray-300">
                  Com o plano À Sua Medida, entregamos uma experiência única e personalizada. Você terá total autonomia para cuidar do deploy, gerenciamento e manutenção, enquanto nós lidamos com a complexidade do desenvolvimento.
                  </p>

                  
                  <Link href="https://wa.link/n2xntf">
                      <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                        ASSINE AGORA
                      </button>
                  </Link>
                </div>

                <hr className=" border-gray-700" />

                <div className="p-6">
                  <h1 className="text-lg font-medium lg:text-xl text-white">
                    Beneficios do Plano
                  </h1>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                       Aplicativo Web Dinâmico e Interativo
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Design moderno pensado no UX/UI
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">Responsividade completa</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Foco no SEO
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Hospedagem Incluída
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">Suporte</span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                      Acesso a Módulos Premium & Base
                      </span>
                    </div>
                    <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-300">
                        Desconto nos Módulos
                      </span>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPricing;
