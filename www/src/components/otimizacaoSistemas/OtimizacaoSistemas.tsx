"use client"
import Image from "next/image";
import React, { useState } from 'react';
import android from '../../../public/assets/images/img__android.png';
import googlePlay from '../../../public/assets/images/img__google_play.png';
import googleAds from '../../../public/assets/images/img__google__ads.png';
import googleCloud from '../../../public/assets/images/img__google__cloud.png';
import elysia from '../../../public/assets/images/elysia.png';
import postgresql from '../../../public/assets/images/postgresql.png';
import analytics from '../../../public/assets/images/google-analytics.png';
import nextJS from '../../../public/assets/images/img__next__js.png';
import SonnenLogo from '../../../public/assets/images/logoSonnen.png';
import InterfaceApp from '../../../public/assets/images/img__interface__app.jpg';
import NotificationMessage from '../../../public/assets/images/img__notification_app.png';
import {Tilt} from 'react-tilt';
import { MdKeyboardArrowUp } from "react-icons/md";


interface Card {
  image: string;
  title: string;
  content: string;
}

const OtimizacaoSistemas = () => {
  const items = [
    { id: 1, icon: <Image src={android} alt="Logo Android" className={` w-12 md:w-24 h-auto`} />, text: "Android", link: "https://www.android.com/intl/pt_br/" },

    { id: 2, icon: <Image src={googlePlay} alt="Logo Google Play" className={` w-12 md:w-24 h-auto`} />, text: "Google Play", link: "https://play.google.com/store/apps" },
    
    { id: 3, icon: <Image src={googleAds} alt="Logo Google Ads" className={`w-12 md:w-24 h-auto`} />, text: "Google Ads", link: "https://ads.google.com/intl/pt-BR_br/start/overview-ha/?subid=br-pt-ha-awa-bk-c-scru!o3~Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB~140965879609~aud-780873439152:kwd-94527731~17334788550~664803803888&gad_source=1&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB&gclsrc=aw.ds"  },

    { id: 4, icon: <Image src={googleCloud} alt="Logo Google Cloud" className={`w-12 md:w-24 h-auto`} />, text: "Google Cloud", link: "https://cloud.google.com/?hl=pt_br" },

    { id: 5, icon: <Image src={nextJS} alt="Logo Next.JS" className={`w-12 md:w-24 h-auto bg-white rounded-2xl p-4`} />, text: "Logo Next.js", link: "https://nextjs.org/showcase" },

    { id: 5, icon: <Image src={elysia} alt="Logo Elysia.js" className={`w-16 md:w-36 h-auto`} />, text: "Elysia.js", link: "https://elysiajs.com" },

    { id: 6, icon: <Image src={postgresql} alt="Logo Postgresql" className={`w-12 md:w-24 h-auto`} />, text: "Postgresql", link: "https://www.postgresql.org" },
    
    { id: 7, icon: <Image src={analytics} alt="Logo Google Analytics" className={`w-12 md:w-24 h-auto`} />, text: "Google Analytics", link: "https://analytics.google.com/analytics/academy/" },
     
  ];

  const renderedItems = items.map((item, index) => (
    <div key={item.id} className="flex flex-col items-center mt-6 ">
      <div className="w-auto md:h-48 flex items-center justify-center mb-4">
        <div className="w-auto h-auto">
          {item.icon}
        </div>
      </div>
      <a href={item.link} className=" line text-white pb-4 line border-b-2 border-transparent hover:border-red-600 whitespace-nowrap text-sm md:text-base lg:text-base xl:text-xl" target="_blank">
        {item.text}
      </a>
    </div>
  ));


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

      <section className='md:border-b-8 border-red-600 items-center justify-center custom-outer-border-red '>
          <div className="flex flex-col lg:flex-row ">
           <div className="w-full lg:w-1/2 pt-28 ">
              <div className=" text-start md:text-left items-center mx-auto px-0 lg:px-7 xl:px-16">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-4 mb-3  px-6  md:px-7">Otimize sua <br /> plataforma<span className="text-red-600"> digital.</span> </h1>
              

              <button className="w-auto ml-6 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  Assine agora
              </button>

                <div className=" md:p-2 xl:p-0 rounded-lg font-semibold md:mx-6  xl:pl-0 mt-3 xl:mt-0  text-white text-left">
                  <p className="max-w-4xl text-lg sm:px-5 md:text-sm xl:text-lg leading-7 sm:mt-6 mb-6 ">
                  Nossos serviços personalizados de Otimização de Sistema são projetados para atender às suas necessidades específicas, proporcionando uma resposta direcionada aos desafios operacionais que você enfrenta.
                  <br /><br/>
                  Ao contrário do desenvolvimento de novos aplicativos, concentramos nossos esforços em refinamentos e melhorias contínuas no seu sistema atual. Isso resulta não apenas em uma eficiência operacional aprimorada, mas também em um aumento significativo na produtividade da sua equipe.
                  </p>
                </div>

              </div>
            </div>

            <div className="lg:w-1/2 shadow bg-gradient-to-tr from-red-600 to-rose-800 mt-6 py-6 md:py-10  lg:py-20 custom-inner-border-red " >
              <div className=" px-6 py-0 md:py-10 mx-auto">

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
      <section className=" md:mt-10">
        <div className="px-6 py-10 mx-auto text-center">
          <h1 className="text-3xl font-bold">Seu Sistema otimizado</h1>
          <p className="text-3xl font-bold py-4">Com as mais modernas <span className="text-red-600">Tecnologias</span>.</p>

          <div className=" mt-8 w-auto  border-t-2 border-b-2 pb-2 rounded-xl border-red-600 ">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex  items-center align-middle  justify-evenly">
              {renderedItems}
            </div>
          </div>
        </div>
      </section>

      <div className="justify-center text-center flex flex-col items-center mt-20 pb-28">
        <figure >
            <Image src={SonnenLogo} alt="Sonnen Software Logo" className={`w-60 h-auto`} />
        </figure>
        <a className=" md:hidden  px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold" target="_blank" href="/planos/essencial&amp;simples">Solicite um Orçamento</a>
      </div>
      

    </div>
  );
};

export default OtimizacaoSistemas;
