import React from "react";
import fotoVictor from "./../../assets/imgs/fotoVictor.png";
import archeiImagem from "./../../assets/imgs/Archei Logo.png";

const AboutArchei: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-[#101010]">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800  lg:text-3xl dark:text-white">
            Do Blog
          </h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 border border-red-600 cursor-pointer"
              src={archeiImagem}
              alt="Imagem"
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-red-500 uppercase">novidades!</p>

              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                Tudo sobre o início da Archei
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    A Archei Software emerge como uma recém-estabelecida entidade no
                cenário tecnológico, dedicada à criação de soluções inovadoras.
                Especializada no desenvolvimento de aplicativos de desktop e
                mobile, a empresa se destaca por sua habilidade em otimizar
                sistemas e pela capacidade de conceber websites de última
                geração, adotando as tecnologias mais avançadas disponíveis no
                mercado...
              </p>

              <a
                href="#"
                className="inline-block mt-2 text-red-500 underline hover:text-red-400"
              >
                Leia mais.
              </a>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={fotoVictor}
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Victor Alves
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Co-Founder | Front-End Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArchei;
