"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SonnenLogo from '../../../public/assets/images/logoSonnen.png';

const AboutSonnen: React.FC = () => {
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);

  const toggleFullText1 = () => {
    setShowFullText1(!showFullText1);
  };

  const toggleFullText2 = () => {
    setShowFullText2(!showFullText2);
  };

  return (
    <>
      <section className="flex flex-col items-center align-middle">
        <div className="px-10 pt-5 mx-auto rounded-xl mb-10">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <div className="lg:w-full lg:px-6 flex flex-col items-center justify-center align-middle">
              <h1 className="text-2xl font-semibold text-white lg:text-3xl lg:w-auto place-self-start">
                + Sobre a {" "}
                <span className="underline decoration-red-600">
                  Sonnen Software
                </span>
              </h1>
              <h2 className="text-2xl font-semibold text-white lg:text-3xl lg:w-auto place-self-start">Empresa de desenvolvimento de <strong className="">Aplicações Tecnológicas</strong>.</h2>

              <p className="max-w-[60rem] w-auto mt-6 text-gray-400 text-left ">
                {showFullText1 ? (
                  <>
                    A Sonnen Software foi fundada com a missão de oferecer soluções
                    tecnológicas de ponta que transcendem os paradigmas
                    convencionais. Nosso compromisso inabalável com a excelência
                    nos orienta a implementar as mais avançadas tecnologias
                    disponíveis, garantindo não apenas eficiência, mas também
                    uma qualidade excepcional em cada aspecto do processo de
                    desenvolvimento.
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
                    2023, uma época marcada por avanços significativos e
                    evolução contínua. Diante das inovações e progressos
                    tecnológicos, surpreende constatar que, ainda assim, o
                    mercado nacional opta pelo uso de ferramentas antiquadas
                    como sua plataforma de escolha. Neste contexto, buscamos
                    estabelecer uma presença dedicada à criação de soluções
                    sofisticadas e personalizadas, visando atender às crescentes
                    demandas e expectativas que permeiam este cenário dinâmico.
                    A Sonnen Software se propõe a elevar os padrões, oferecendo
                    alternativas inovadoras e eficazes, alinhadas com as
                    exigências contemporâneas, e a contribuir para a otimização
                    da experiência digital em um ambiente cada vez mais
                    tecnológico e interconectado. <br />{" "}
                    <button
                      onClick={toggleFullText1}
                      className="text-red-500 hover:underline focus:outline-none"
                    >
                      Leia Menos
                    </button>
                  </>
                ) : (
                  <>
                    {`A Sonnen Software foi fundada com a missão de oferecer soluções
                    tecnológicas de ponta que transcendem os paradigmas
                    convencionais. Nosso compromisso inabalável com a excelência
                    nos orienta a implementar as mais avançadas tecnologias
                    disponíveis, garantindo não apenas eficiência, mas também
                    uma qualidade excepcional em cada aspecto do processo de
                    desenvolvimento.
                    `}
                    <br />
                    <br />
                    {`
                    O que nos distingue é a capacidade de proporcionar essas
                    inovações a um preço notavelmente confortável, tornando-as
                    acessíveis a uma ampla gama de empreendimentos. Na Sonnen
                    Software, estamos comprometidos não apenas em simplificar,
                    mas em elevar a experiência de desenvolvimento, catalisando
                    o progresso tecnológico com uma abordagem distintamente...`}
                    <br />
                    <button
                      onClick={toggleFullText1}
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
        <h2 className="text-2xl font-semibold text-white lg:text-3xl lg:w-auto py-10 px-5"><span className="text-red-600">“</span>A ideia veio ao querer criar um farol, para guiar as pessoas pela tempestade.<span className="text-red-600">”</span> </h2>
        <div className="px-10 pt-5 pb-10 mx-auto rounded-xl">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <div className="lg:w-full lg:px-6 flex flex-col items-center justify-center align-middle">
              <h1 className="text-2xl font-semibold text-white lg:text-3xl lg:w-auto">
                A {" "}
                <span className="underline decoration-red-600">Filosofia</span> da Empresa
              </h1>

              <p className="max-w-[60rem] w-auto mt-6 text-gray-400 text-left ">
                {showFullText2 ? (
                  <>
                    Em meio ao caos do mundo, queremos ser a fonte de luz do futuro,
                    e é isso que nossa filosofia se trata; Esperança. Sonhamos com um mundo melhor e trabalhamos para o mesmo, por isso retemos o propósito central de contribuir para
                    o desenvolvimento nacional e mundial por meio de soluções tecnológicas
                    inovadoras. Buscamos a excelência em todas as etapas do
                    desenvolvimento, priorizando não apenas a eficiência, mas
                    também a entrega de produtos de alta qualidade.
                    <br /><br />
                    Oferecer avanços
                    tecnológicos a preços acessíveis, tornando essas soluções
                    disponíveis para uma ampla variedade de empresas. Na Sonnen
                    Software, não nos limitamos a simplificar; trabalhamos para
                    melhorar a experiência da comunidade.
                    O surgimento da Sonnen Software foi motivado pela observação crítica do cenário
                    tecnológico em 2023 no Brasil. Mesmo diante dos progressos notáveis,
                    identificamos a persistência no uso de ferramentas
                    obsoletas. Nossa missão é estabelecer uma presença
                    comprometida com soluções sofisticadas e personalizadas,
                    atendendo às crescentes demandas do dinâmico ambiente
                    tecnológico.
                    <br /><br />
                    Buscamos não apenas elevar padrões, mas também
                    oferecer alternativas inovadoras alinhadas com as exigências
                    contemporâneas. Na Sonnen Software, almejamos contribuir
                    para a otimização da experiência digital em um mundo cada
                    vez mais interconectado, com uma visão que vai além da
                    simples oferta de software, mirando na formação
                    de um futuro digital avançado. <br />{" "}
                    <button
                      onClick={toggleFullText2}
                      className="text-red-500 hover:underline focus:outline-none"
                    >
                      Leia Menos
                    </button>
                  </>
                ) : (
                  <>
                    {`Em meio ao caos do mundo, queremos ser a fonte de luz do futuro,
                    e é isso que nossa filosofia se trata; Esperança. Sonhamos com um mundo melhor e trabalhamos para o mesmo, por isso retemos o propósito central de contribuir para
                    o desenvolvimento nacional e mundial por meio de soluções tecnológicas
                    inovadoras. Buscamos a excelência em todas as etapas do
                    desenvolvimento, priorizando não apenas a eficiência, mas
                    também a entrega de produtos de alta qualidade.
                    `}
                    <br />
                    <br />
                    {`
                    Oferecer avanços
                    tecnológicos a preços acessíveis, tornando essas soluções
                    disponíveis para uma ampla variedade de empresas. Na Sonnen
                    Software, não nos limitamos a simplificar; trabalhamos para
                    melhorar a experiência da comunidade.
                    O surgimento da Sonnen Software foi motivado pela observação crítica do ...`}
                    <br />
                    <button
                      onClick={toggleFullText2}
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
        
      <div className="justify-center text-center flex flex-col items-center pb-40 pt-32">
        <figure >
            <Image src={SonnenLogo} alt="Sonnen Software Logo" className={`w-60 h-auto`} />
        </figure>
        <Link href='/contato' rel="noopener noreferrer">
          <button className="px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold">Solicite um Orçamento
          </button>
        </Link>
      </div>
      </section>
    </>
  );
};

export default AboutSonnen;


