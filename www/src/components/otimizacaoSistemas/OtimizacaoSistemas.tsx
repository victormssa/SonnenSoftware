"use client"
import Image from "next/image";
import React, { useState } from 'react';
import Link from "next/link";
import googlePlay from '../../../public/assets/images/img__google_play.png';
import googleAds from '../../../public/assets/images/img__google__ads.png';
import react from '../../../public/assets/images/reactLogo.png';
import flutter from '../../../public/assets/images/flutterLogo.png';
import postgresql from '../../../public/assets/images/postgresql.png';
import analytics from '../../../public/assets/images/google-analytics.png';
import fastfyLogo from '../../../public/assets/images/fastfyLogo.png';
import awslogo from '../../../public/assets/images/AWSLogo.png';
import SonnenLogo from '../../../public/assets/images/logoSonnen.png';
import buildingApp from '../../../public/assets/images/buildingApp.svg';
import systemOtimized from '../../../public/assets/images/otimizacao.svg';
import {Tilt} from 'react-tilt';
import { MdKeyboardArrowUp } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { LuPackage } from "react-icons/lu";
import { LuClipboardSignature } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import Accordion from "../accordion/accordion";


interface Card {
  image: string;
  title: string;
  content: string;
}

const OtimizacaoSistemas = () => {
  const items = [
    { id: 1, icon: <Image src={flutter} alt="Logo Flutter" className={`w-16 md:w-20 h-auto`} />, text: "Flutter", link: "https://flutter.dev" },

    { id: 2, icon: <Image src={googlePlay} alt="Logo Google Play" className={`w-16 md:w-20 h-auto`} />, text: "Google Play", link: "https://play.google.com/store/apps" },
    
    { id: 3, icon: <Image src={googleAds} alt="Logo Google Ads" className={`w-16 md:w-20 h-auto`} />, text: "Google Ads", link: "https://ads.google.com/intl/pt-BR_br/start/overview-ha/?subid=br-pt-ha-awa-bk-c-scru!o3~Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB~140965879609~aud-780873439152:kwd-94527731~17334788550~664803803888&gad_source=1&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB&gclsrc=aw.ds"  },

    { id: 4, icon: <Image src={awslogo} alt="Logo AWS" className={`w-16 md:w-24 h-auto`} />, text: "AWS", link: "https://aws.amazon.com/pt" },

    { id: 5, icon: <Image src={react} alt="Logo React Native" className={`w-16 md:w-20 h-auto`} />, text: "React Native", link: "https://reactnative.dev/" },

    { id: 5, icon: <Image src={fastfyLogo} alt="Logo Fastfy" className={`w-20 md:w-36 h-auto`} />, text: "Fastify", link: "https://fastify.dev/" },

    { id: 6, icon: <Image src={postgresql} alt="Logo Postgresql" className={`w-16 md:w-20 h-auto`} />, text: "Postgresql", link: "https://www.postgresql.org" },
    
    { id: 7, icon: <Image src={analytics} alt="Logo Google Analytics" className={`w-16 md:w-20 h-auto`} />, text: "Google Analytics", link: "https://analytics.google.com/analytics/academy/" },
     
  ];

  const renderedItems = items.map((item, index) => (
    <div key={item.id} className="flex flex-col items-center mt-6 ">
      <div className="w-auto md:h-48 flex items-center justify-center mb-4">
        <div className="w-auto h-auto">
          {item.icon}
        </div>
      </div>
      <a href={item.link} className="line text-white pb-4 line border-b-2 border-transparent hover:border-red-600 whitespace-nowrap text-sm md:text-base lg:text-2xl font-semibold " target="_blank">
        {item.text}
      </a>
    </div>
  ));

  const questionsPage5 = [
    { question: 'O que é otimização de sistemas?', answer: 'A otimização de sistemas refere-se ao processo de aprimorar a eficiência, desempenho e segurança de sistemas de software. Isso pode incluir ajustes em códigos, configurações de servidores e aprimoramentos na infraestrutura.' },
    { question: 'Por que minha empresa precisa de otimização de sistemas?', answer: 'A otimização de sistemas é essencial para garantir que seus recursos tecnológicos operem de maneira eficiente, resultando em melhor desempenho, redução de custos operacionais e uma experiência mais rápida para os usuários.' },
    { question: 'Quais são os benefícios da otimização de website? ou do meu aplicativo?', answer: 'A otimização melhora a velocidade de carregamento, a experiência do usuário e o ranking nos motores de busca. Isso pode levar a um aumento na retenção de visitantes e nas conversões.' },
    { question: 'Como a Sonnen Software realiza a otimização de sistemas?', answer: 'Nossos especialistas em otimização utilizam abordagens avançadas, incluindo análise detalhada de códigos, ajustes de servidores, otimização de banco de dados e aprimoramento da interface para garantir resultados eficazes e adaptados às necessidades específicas de cada cliente.' },
    { question: 'Como posso saber se meu sistema precisa de otimização?', answer: 'Sinais de que seu sistema pode precisar de otimização incluem lentidão, tempo de carregamento prolongado, erros frequentes ou queda no desempenho geral. Uma análise profissional pode identificar áreas específicas para melhorias.' },
    { question: 'A otimização de sistemas é um serviço único ou contínuo?', answer: 'A otimização de sistemas pode ser tanto um serviço pontual quanto contínuo. Um serviço contínuo garante que seu sistema esteja sempre ajustado às demandas em constante evolução do ambiente digital.' },
    { question: 'Quais setores podem se beneficiar da otimização de sistemas?', answer: 'Empresas de todos os setores podem se beneficiar da otimização de sistemas, desde comércio eletrônico até serviços financeiros. A otimização é crucial para qualquer organização que depende da eficiência de seus sistemas para operar com sucesso.' },
  ];


  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [originalTitleHeight, setOriginalTitleHeight] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex((prevIndex) => {
      if (prevIndex === index) {
      
        setOriginalTitleHeight(null);
        return null;
      } else {
      
        setOriginalTitleHeight(document.getElementById(`title-${prevIndex}`)?.offsetHeight ?? null);
        return index;
      }
    });
  };

  const cards = [
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img_otimizacao__site.jpg',
      title: 'Otimização de Website',
      content: 'A otimização de Websites é uma análise detalhada, identificando áreas de oportunidade e refinando o conteúdo para ser relevante, envolvente e seguro.',
    },
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__otimiza%C3%A7%C3%A3o.jpg',
      title: 'Otimização de Banco de Dados',
      content: 'Reforçamos o back-end de forma escalável e seguro, capaz de oferecer soluções seguras, rápida e eficientes para processar grandes volumes de dados de forma rápida e confiável.',
    },
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__otimizacao__app.jpg',
      title: 'Otimização de Aplicativos',
      content: 'Otimizamos aplicativos com uma base robusta, desenvolvendo com precisão e inovação para aproveitar todo o potencial do seu projeto.',
    },
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__otimizacao_interface.jpg',
      title: 'Otimização de Interface',
      content: 'Elevando a satisfação do usuário através da otimização da interface para atender às necessidades específicas, proporcionando uma experiência mais eficiente.',
    },
  ];
  
  const defaultOptions = {
    reverse:             false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    transition: true,
    axis: null,
    reset: true,
    aesing: "cubic-bezier(.03,.98,.52,.99",

  }

  const customOptions = {
    reverse:  true,
    max: 45,
    perspective: 1500,
    scale: 1.8,
    transition: true,
    axis: "X",
    reset: false,
    aesing: "cubic-bezier(.2,.8,.3,1",
  }

  return (
    <div className='w-screen  text-white bg-zinc-900 bg-center'>

      <section className='md:border-b-8 border-red-600 bg-gradient-to-tr from-red-600 to-rose-800 items-center justify-center custom-outer-border-red slide-left-hero'>
      <div className="flex flex-col lg:flex-row ">
           <div className="w-full lg:w-1/2 pt-28 ">
              <div className=" text-start md:text-left items-center mx-auto px-0 md:pr-80  lg:px-7 xl:px-16">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-4 mb-3  px-6  md:px-7">Otimize sua <br /> plataforma<span className="text-black"> digital.</span> </h1>
              

              <Link href='https://wa.link/lprzpn' target="_blank" rel="noopener noreferrer">
              <button className="w-auto ml-6 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-zinc-900 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  Entre em Contato
              </button>
              </Link>

              <div className=" md:p-2 xl:p-4 rounded-lg font-semibold md:mx-6  xl:pl-0 mt-3 md:mt-0 text-white text-left">
                  <p className="max-w-4xl text-lg px-6 md:px-0 md:text-sm xl:text-lg leading-7 sm:mt-6 md:mt-0 mb-6 ">
                  Nossos serviços personalizados de Otimização de Sistema são projetados para atender às suas necessidades específicas, proporcionando uma resposta direcionada aos desafios operacionais que você enfrenta.
                  </p>
                </div>

              </div>
            </div>

            <div className="lg:w-1/2 shadow bg-zinc-900 mb-6 custom-inner-border-black " >
              <div className=" px-6 py-0 md:py-10 mx-auto mb-14">

                  <div className="hidden lg:grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 mx-0 md:mx-5 lg:mx-10 "  >
              
                  
                    <Tilt options={defaultOptions} >
                        <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg " style={{
                          backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img_otimizacao__site.jpg')" }}>
                          <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center ">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Otimização de Website </h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                            <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">A otimização de Websites é uma análise detalhada, identificando áreas de oportunidade e refinando o conteúdo para ser relevante, envolvente e seguro.</p>
                          </div>
                        </div>
                        </Tilt>
                        <Tilt options={defaultOptions}>
                          <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48  bg-cover border-2 border-red-900 shadow-lg" style={{
                            backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__otimiza%C3%A7%C3%A3o.jpg')" }}>
                            <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Otimização de Banco de Dados</h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                              <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Reforçamos o back-end de forma escalável e seguro, capaz de oferecer soluções seguras, rápida e eficientes para processar grandes volumes de dados de forma rápida e confiável.</p>
                            </div>
                          </div>
                        </Tilt>
                        <Tilt options={defaultOptions}>
                          <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48  bg-cover border-2 border-red-900 shadow-lg" style={{
                            backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__otimizacao__app.jpg')" }}>
                            <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Otimização de Aplicativos </h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                              <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Otimizamos aplicativos com uma base robusta, desenvolvendo com precisão e inovação para aproveitar todo o potencial do seu projeto.</p>
                            </div>
                          </div>
                        </Tilt>
                        <Tilt options={defaultOptions}>
                          <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg" style={{
                            backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__otimizacao_interface.jpg')" }}>
                            <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Otimização de Interface</h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                              <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Elevando a satisfação do usuário através da otimização da interface para atender às necessidades específicas, proporcionando uma experiência mais eficiente. </p>
                            </div>
                          </div>
                        </Tilt>
                 
                  </div>

                  <div className="grid lg:hidden grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 mx-0 md:mx-5 lg:mx-10 h-full">
                      {cards.map((card, index) => (
                        <div
                          key={index}
                          className={`flex  items-end overflow-hidden bg-center rounded-lg bg-cover border-2 border-red-900 shadow-lg justify-center align-middle items-center${
                            clickedIndex === index ? 'h-28' : 'h-32 bg-gray-900/40'
                          }`}
                          style={{ backgroundImage: `url('${card.image}')` }}
                        >
                          <div
                            className={`group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-sm transform-gpu transition-transform duration-300 cursor-pointer ${
                              clickedIndex === index ? 'bg-gray-900/60 h-full' : ''
                            }`}
                            onClick={() => handleClick(index)}
                          >
                            <div className="flex justify-center items-center align-middle">
                              <h2
                                id={`title-${index}`}
                                className={`mt-4 text-xl font-semibold capitalize transition-transform ${
                                  clickedIndex === index ? '' : ''
                                }`}
                              >
                                {card.title}
                              </h2>
                              <MdKeyboardArrowUp size='3rem' className='pt-4'/>
                            </div>
                            <p
                              className={`mt-2 text-sm tracking-wider uppercase transition-opacity duration-300 ${
                                clickedIndex === index ? 'flex' : ' hidden'
                              }`}
                            >
                              {card.content}
                            </p>
                          </div>
                        </div>
                      ))}
                   </div>


              </div>
          </div>
        </div>      
    </section>

    <section className="mt-12 ">
      <div  className=" pt-1 mx-4 text-start  bg-gradient-to-l  from-red-600 via-zinc-900 to-red-800 rounded-xl">

          <div className="xl:flex xl:items-center bg-zinc-900 h-full rounded-lg pt-4">
          <div className="md:w-full xl:w-1/3 mx-4 md:p-2 xl:p-4 mt-3 xl:mt-3 rounded-lg font-semibold text-center" >
            <h1 className="text-4xl font-extrabold text-center">Veja como é fácil e rápido</h1>
            <p className="text-2xl font-semibold text-center py-4">Descubra nossa abordagem de <span className="text-red-600">trabalho</span>.</p>
          <figure className="pt-4">
            <Image 
              src={systemOtimized} 
              alt="Como funciona?"
              className=" rounded mx-auto -skew-x-6 " />
          </figure>
          </div>
            <div className="xl:w-1/2 md:p-2  font-semibold space-y-10 text-start rounded-full px-2 md:px-10 mx-auto">
              <div className="flex items-center justify-start mt-6  rounded-full">
              <span className=" p-2 md:p-10 rounded-full border-2 custom-list-border bg-gradient-to-br from-red-400 to-rose-700">
                <LiaTelegramPlane size='2em'/>
                </span>
                <div className="flex flex-col text-left">
                  <h3 className="px-8 p-4 text-2xl font-bold rounded-full">Explore Nossos Planos</h3>
                  <p className="px-8 font-medium mt-2 ">Descubra a solução perfeita para o seu projeto entre nossos planos especializados: <strong>Essencial & Simples, Presença Online e A sua Medida.</strong></p>
                </div>
              </div>
              <div className="flex items-center justify-start mt-6 rounded-full">
              <span className=" p-2 md:p-10 rounded-full border-2 custom-list-border bg-gradient-to-br from-red-400 to-rose-700">
                <LuPackage  size='2em'/>
              </span>
                <div className="flex flex-col text-left">
                <h3 className="px-8 text-2xl font-boldp-4 rounded-full">Expanda com Nossos Módulos</h3>
                <p className="px-8 font-medium mt-2">Explore nossos módulos exclusivos, incluindo <strong>e-commerce, relatórios, análise de dados, e muito mais</strong>.</p>
                </div>
              </div>
              <div className="flex items-center justify-start mt-6 rounded-full">
              <span className=" p-2 md:p-10 rounded-full border-2 custom-list-border bg-gradient-to-br from-red-400 to-rose-700">
                <LuClipboardSignature size='2em'/>
              </span>
                <div className="flex flex-col text-left">
                  <h3 className="px-8  text-2xl font-bold p-4 rounded-full">Transforme Ideias em Realidade</h3>
                  <p className="px-8 font-medium mt-2 ">Através de um briefing online, nossa equipe alinha suas ideias para incorporá-las ao projeto final, tornando suas visões realidade.</p>
                </div>
              </div>
              <div className="flex items-center justify-start mt-6 rounded-full pb-4">
              <span className=" p-2 md:p-10 rounded-full border-2 custom-list-border bg-gradient-to-br from-red-400 to-rose-700">
                <GrAchievement size='2em'/>
              </span>
                <div className="flex flex-col text-left">
                  <h3 className="px-8 text-2xl font-bold  p-4 rounded-full">Descomplicado e Eficiente</h3>
                  <p className="px-8 font-medium mt-2">Após o período de desenvolvimento, entregamos seu site diretamente em suas mãos. Se preferir, delegue a administração à nossa equipe especializada da Sonnen, tornando tudo ainda mais simples para você.</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="md:mt-10">
      <div className="px-6 py-10 mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-center">Tenha Seu Site Totalmente Integrado</h1>
        <p className="text-2xl font-semibold text-center py-4">Explore o potencial máximo com as mais avançadas <span className="text-red-600">tecnologias</span> disponíveis.</p>
        <div className=" mt-8 w-auto border-b-2 pb-2 rounded-xl border-red-600 ">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex  items-center align-middle  justify-evenly">
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
    </section>

    <div className="justify-center text-center flex flex-col items-center mt-20 ">
      <figure >
          <Image src={SonnenLogo} alt="Sonnen Software Logo" className={`w-60 h-auto`} />
      </figure>
      <Link href='/contato' rel="noopener noreferrer">
        <button className="px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold">Solicite um Orçamento
        </button>
      </Link>
          {/*SECTION FAQ */}
    <section className='w-screen h-full mt-12 text-gray-600 body-font border-t-[0.08rem] border-[#0000002e] bg-gradient-to-tr from-red-600 to-rose-800'>
      <h3 className='text-start text-white text-3xl font-semibold ms-3 mt-1'>FAQ</h3>
      <div className=' mt-1'>
        <Accordion questions={questionsPage5} />
      </div>
    </section>
    </div>


    
    </div>
    
  );
};

export default OtimizacaoSistemas;
