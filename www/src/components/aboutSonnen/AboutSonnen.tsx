"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/assets/images/openGraph.png";

const AboutSonnen: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <section className="bg-zinc-900 flex flex-col items-center align-middle">
        <h1 className="text-2xl font-semibold text-white lg:text-3xl lg:w-auto">
          Mais Sobre Nós
        </h1>
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">

            <div className="mt-4 lg:w-1/2 lg:px-6 lg:mt-0 items-center justify-center align-middle">
              <h1 className="text-2xl font-semibold text-white lg:text-3xl lg:w-auto">
                O que é a{" "}
                <span className="underline decoration-red-600">
                  Sonnen Software
                </span>
                ?
              </h1>

              <p className="max-w-auto mt-6 text-gray-400 text-left">
                {showFullText ? (
                  <>
                    A Sonnen Software foi fundada com a missão de auxiliar o
                    desenvolvimento do cenário nacional, oferecendo soluções
                    tecnológicas de ponta que transcendem os paradigmas
                    convencionais. Nosso compromisso inabalável com a
                    excelência nos orienta a implementar as mais avançadas
                    tecnologias disponíveis, garantindo não apenas eficiência,
                    mas também uma qualidade excepcional em cada aspecto do
                    processo de desenvolvimento.
                    <br />
                    <br />
                    O que nos distingue é a capacidade de proporcionar essas
                    inovações a um preço notavelmente confortável, tornando-as
                    acessíveis a uma ampla gama de empreendimentos. Na Sonnen
                    Software, estamos comprometidos não apenas em simplificar,
                    mas em elevar a experiência de desenvolvimento, catalisando
                    o progresso tecnológico com uma abordagem distintamente
                    pioneira.
                    <br />
                    <br />A fundação da Sonnen Software emergiu como resposta a
                    uma observação notável no panorama tecnológico do ano de
                    2024, uma época marcada por avanços significativos e
                    evolução contínua. Diante das inovações e progressos
                    tecnológicos, surpreende constatar que, ainda assim, o
                    mercado nacional opta pelo uso de ferramentas antiquadas
                    como sua plataforma de escolha. Neste contexto, buscamos
                    estabelecer uma presença dedicada à criação de soluções
                    sofisticadas e personalizadas, visando atender às
                    crescentes demandas e expectativas que permeiam este cenário
                    dinâmico. A Sonnen Software se propõe a elevar os padrões,
                    oferecendo alternativas inovadoras e eficazes, alinhadas com
                    as exigências contemporâneas, e a contribuir para a
                    otimização da experiência digital em um ambiente cada vez
                    mais tecnológico e interconectado. <button
                      onClick={toggleFullText}
                      className="text-red-500 hover:underline focus:outline-none"
                    >
                      Leia Menos
                    </button>
                  </>
                ) : (
                  <>
                    {`A Sonnen Software foi fundada com a missão de auxiliar o
                    desenvolvimento do cenário nacional, oferecendo soluções
                    tecnológicas de ponta que transcendem os paradigmas
                    convencionais. Nosso compromisso inabalável com a
                    excelência nos orienta a implementar as mais avançadas
                    tecnologias disponíveis, garantindo não apenas eficiência,
                    mas também uma qualidade excepcional em cada aspecto do
                    processo de desenvolvimento. `}
                    {/* Adicione um botão "Leia Mais" */}
                    <button
                      onClick={toggleFullText}
                      className="text-red-500 hover:underline focus:outline-none"
                    >
                      Leia Mais
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSonnen;
