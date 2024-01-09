"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import modulo from '../../../public/assets/images/sitemodulo.svg'
import android from '../../../public/assets/images/img__android.png';
import googlePlay from '../../../public/assets/images/img__google_play.png';
import googleAds from '../../../public/assets/images/img__google__ads.png';
import elysia from '../../../public/assets/images/elysia.png';
import postgresql from '../../../public/assets/images/postgresql.png';
import analytics from '../../../public/assets/images/google-analytics.png';
import nextJS from '../../../public/assets/images/nextLogo.png';
import SonnenLogo from '../../../public/assets/images/logoSonnen.png';
import awslogo from '../../../public/assets/images/AWSLogo.png';
import dashboard from '../../../public/assets/images/digital-tablet-online-learning.jpg';
import {Tilt} from 'react-tilt';
import { MdKeyboardArrowUp } from "react-icons/md";


interface Card {
  image: string;
  title: string;
  content: string;
}

const Desenvolvimento_Site = () => {
  const items = [
    { id: 1, icon: <Image src={android} alt="Logo Android" className={` w-12 md:w-24 h-auto`} />, text: "Android", link: "https://www.android.com/intl/pt_br/" },

    { id: 2, icon: <Image src={googlePlay} alt="Logo Google Play" className={` w-12 md:w-24 h-auto`} />, text: "Google Play", link: "https://play.google.com/store/apps" },
    
    { id: 3, icon: <Image src={googleAds} alt="Logo Google Ads" className={`w-12 md:w-24 h-auto`} />, text: "Google Ads", link: "https://ads.google.com/intl/pt-BR_br/start/overview-ha/?subid=br-pt-ha-awa-bk-c-scru!o3~Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB~140965879609~aud-780873439152:kwd-94527731~17334788550~664803803888&gad_source=1&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB&gclsrc=aw.ds"  },

    { id: 4, icon: <Image src={awslogo} alt="Logo AWS" className={`w-12 md:w-24 h-auto`} />, text: "AWS", link: "https://aws.amazon.com/pt" },

    { id: 5, icon: <Image src={nextJS} alt="Logo Next.JS" className={`w-12 md:w-24 h-auto`} />, text: "Next.js", link: "https://nextjs.org/showcase" },

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
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/modulo__solucoes__personalizadas.png',
      title: 'UX/UI ',
      content: 'UI é responsável pela aparência do seu site, enquanto que o UX cuida da acessibilidade. A combinação permite a criação de páginas modernas mas levando em consideração a expêriencia do usuário',
    },
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__host.jpg',
      title: 'Hospedagem Segura e escalável',
      content: 'Suporte 24h em servidores confiaveis, Certificação SSL, proteção de privacidade',
    },
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__localization.jpg',
      title: 'Geolocalização',
      content: 'Geocalize seu site para se adaptar as Características regionais e aumentar a chance da sua página encontrar o seu usuário.',
    },
    {
      image: 'https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__security.jpg',
      title: 'Proteção',
      content: 'Nossos desenvolvedores seguem diretrizes rigorosas como: validação adequada de entrada, prevenção de injeção de código e implementação de controles de acesso.',
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


  const targetRef1 = useRef(null); //Aqui eu defino meus alvos
  const targetRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Animação 1 ocorreu!');
   
            entry.target.classList.add('slide-right'); // removo e adiciono minhas classes de interesse
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0 } // O quanto preciso mostrar da div para a animação ocorrer
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Animação 2 ocorreu!');
            
            entry.target.classList.add('slide-left');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (targetRef1.current) {
      observer1.observe(targetRef1.current);
    }

    if (targetRef2.current) {
      observer2.observe(targetRef2.current);
    }

    return () => {
      if (targetRef1.current) {
        observer1.unobserve(targetRef1.current);
      }

      if (targetRef2.current) {
        observer2.unobserve(targetRef2.current);
      }
    };
  }, []);


  return (
    <div className='w-screen  text-white bg-zinc-900 bg-center'>

      <section className='md:border-b-8 border-red-600 bg-gradient-to-tr from-red-600 to-rose-800 items-center justify-center custom-outer-border-red slide-left-hero'>
          <div className="flex flex-col lg:flex-row ">
           <div className="w-full lg:w-1/2 pt-28 ">
              <div className=" text-start md:text-left items-center mx-auto px-0 lg:px-7 xl:px-16">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-4 mb-3  px-6  md:px-7">Construa sua presença<br /> Online<span className="text-black"> contínua.</span> </h1>
              
              <Link href='https://wa.link/lprzpn' target="_blank" rel="noopener noreferrer">
              <button className="w-auto ml-6 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-zinc-900 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  Entre em Contato
              </button>
              </Link>


                <div className=" md:p-2 xl:p-4 rounded-lg font-semibold md:mx-6  xl:pl-0 mt-3 md:mt-0 text-white text-left">
                  <p className="max-w-4xl text-lg px-6 md:px-0 md:text-sm xl:text-lg leading-7 sm:mt-6 md:mt-0 mb-6 ">
                    A Sonnen Software cuida de tudo para você poder desfrutar da sua presença online ideal.
                    Nossa equipe dedicada cria uma base sólida, alinhada com as melhores práticas de desenvolvimento web, para garantir que seu site atenda às suas necessidades exclusivas desde o início.
                  </p>

                </div>

              </div>
            </div>

            <div className="lg:w-1/2 shadow bg-zinc-900  mt-6 py-6 md:py-10  lg:py-20 custom-inner-border-black " >
              <div className=" px-6 py-0 md:py-10 mx-auto">

                  <div className="hidden lg:grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 mx-0 md:mx-5 lg:mx-10 "  >
              
                  
                    <Tilt options={defaultOptions} >
                        <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg " style={{
                          backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/modulo__solucoes__personalizadas.png')" }}>
                          <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center ">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">UX/UI </h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                            <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">UI é responsável pela aparência do seu site, enquanto que o UX cuida da acessibilidade. A combinação permite a criação de páginas modernas mas levando em consideração a expêriencia do usuário</p>
                          </div>
                        </div>
                        </Tilt>
                        <Tilt options={defaultOptions}>
                          <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48  bg-cover border-2 border-red-900 shadow-lg" style={{
                            backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__host.jpg')" }}>
                            <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Hospedagem Segura e escalável</h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                              <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Suporte 24h em servidores confiaveis, Certificação SSL, proteção de privacidade</p>
                            </div>
                          </div>
                        </Tilt>
                        <Tilt options={defaultOptions}>
                          <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48  bg-cover border-2 border-red-900 shadow-lg" style={{
                            backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__localization.jpg')" }}>
                            <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Geolocalização</h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                              <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Geocalize seu site para se adaptar as Características regionais e aumentar a chance da sua página encontrar o seu usuário.</p>
                            </div>
                          </div>
                        </Tilt>
                        <Tilt options={defaultOptions}>
                          <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg" style={{
                            backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__security.jpg')" }}>
                            <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">Proteção</h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                              <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Nossos desenvolvedores seguem diretrizes rigorosas como: validação adequada de entrada, prevenção de injeção de código e implementação de controles de acesso.</p>
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


 
      <section className="m-3 px-6 mx-auto mt-10">
          <div className="xl:flex xl:items-center xL:-mx-4">
              <div ref={targetRef1} className="xl:w-1/2 xl:mx-4  md:p-2 xl:p-4 mt-3 xl:mt-3  rounded-lg font-semibold text-left opacity-0">
                  <h1 className="text-2xl font-semibold capitalize lg:text-3xl text-white ">Potencialize seus negócios:<br /> com  <span className="underline decoration-red-500">dashboards</span> </h1>
       
                  <p className=" mt-4 xl:mt-6 text-gray-300">
                  Uma das ferramentas mais poderosas em nosso arsenal são os dashboards personalizados. Essas interfaces intuitivas e visualmente atraentes permitem que nossos clientes acompanhem, analisem e interpretem dados cruciais de maneira simplificada.
                  <br /> <br /> São excelentes ferramentas para monitorar o progresso em relação a metas e indicadores-chave de desempenho KPIs. Isso possibilita que as equipes avaliem o sucesso de suas estratégias e façam ajustes conforme necessário.
                  </p>
                  </div>

              <div ref={targetRef2} className="grid grid-cols-1 gap-8 md:mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2 opacity-0 ">
                <div className="relative h-96 rounded-xl border border-zinc-950 shadow-md overflow-hidden justify-center items-center text-center">
                  <div className="bg-black absolute inset-0 opacity-40"></div>
                  <Image
                    src={modulo}
                    alt="Monetização App"
                    className="w-full h-full object-cover mt-5"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-2">
                    <h1 className="text-xl font-semibold  drop-shadow-2xl">News Letters</h1>
                    <p className="font-semibold drop-shadow-2xl px-8 mt-2 ">A sua empresa procura divulgar amplamente informações e notícias relacionadas com a sua atividade? A newsletter é a ferramenta ideal para informar seus clientes, promover ofertas especiais ou simplesmente cultivar um relacionamento sólido.</p>
                  </div>
                </div>

                <div className="relative h-96 rounded-xl border border-zinc-950 shadow-md overflow-hidden justify-center items-center text-center">
                  <div className="bg-black absolute inset-0 opacity-40"></div>
                  <Image
                    src={dashboard}
                    alt="Monetização App"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-2">
                    <h1 className="text-xl font-semibold  drop-shadow-2xl">Potencialize Sua Receita com Google AdMob e Google Analytics</h1>
                    <p className="font-semibold drop-shadow-2xl px-8 mt-2">Maximize seus ganhos integrando estrategicamente Google AdMob e aproveitando as análises detalhadas do Google Analytics.</p>

                  </div>
                </div>
              </div>

          </div>
      </section>

    
      <section className=" md:mt-10">
        <div className="px-6 py-10 mx-auto text-center">
          <h1 className="text-3xl font-bold">Seu App integrado</h1>
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
        <Link href='/contato' rel="noopener noreferrer">
          <button className="px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold">Solicite um Orçamento
          </button>
        </Link>
      </div>
      

    </div>
  );
};

export default Desenvolvimento_Site;
