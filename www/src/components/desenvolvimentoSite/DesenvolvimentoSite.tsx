"use client"
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import modulo from '../../../public/assets/images/sitemodulo.svg'
import googleAds from '../../../public/assets/images/img__google__ads.png';
import htmx from '../../../public/assets/images/htmxLogo.png';
import fastfyLogo from '../../../public/assets/images/fastfyLogo.png';
import postgresql from '../../../public/assets/images/postgresql.png';
import analytics from '../../../public/assets/images/google-analytics.png';
import nextJS from '../../../public/assets/images/nextLogo.png';
import SonnenLogo from '../../../public/assets/images/logoSonnen.png';
import awslogo from '../../../public/assets/images/AWSLogo.png';
import dashboard from '../../../public/assets/images/digital-tablet-online-learning.png';
import design from '../../../public/assets/images/website.svg';
import react from '../../../public/assets/images/reactLogo.png';
import {Tilt} from 'react-tilt';
import { MdKeyboardArrowUp } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { LuPackage } from "react-icons/lu";
import { LuClipboardSignature } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import Accordion from '../accordion/accordion';

const questionsPage3 = [
  { question: 'Quais as vantagem do Plano Essencial & Simples?', answer: 'Explore nosso plano acessível, uma opção ideal para quem busca um excepcional custo-benefício. Os sites estáticos deste plano apresentam conteúdo pré-definido, permanecendo inalterados para proporcionar uma experiência consistente aos visitantes. Oferecemos um design moderno e ao mesmo tempo simplificado, garantindo facilidade de manutenção a um custo acessível. Ideal para usuários que procuram uma solução rápida e eficiente, sem a necessidade de um projeto completo, proporcionando uma presença online impactante sem comprometer seu orçamento.' },
  { question: 'Quais as vantagem do Plano Presença Online Contínua?', answer: 'O Plano "Presença Online Contínua", proporcionamos uma solução de serviço contínuo. Cuidamos de todo o ciclo de vida do seu site, desde o desenvolvimento até o gerenciamento e manutenção contínua. Ao pagar uma mensalidade, seu site permanece online, atualizado e sob nossa gestão, garantindo uma presença digital eficiente.' },
  { question: 'Quais as vantagem do Plano À Sua Medida?', answer: 'O Plano "Site à Sua Medida" oferece a criação de um site personalizado, proporcionando total autonomia ao cliente para deploy, gerenciamento e manutenção após a entrega.' },
  { question: 'O que são os módulos de funcionalidades/serviços?', answer: 'São componentes adicionais, como sistema de autenticação, que podem ser incluídos separadamente para personalizar o sistema de acordo com as necessidades específicas do cliente.' },
  { question: 'Existe algum pagamento mensal a ser feito?', answer: 'Se o seu plano não inclui nenhum pagamento mensal como O Essencial & Simples e o À sua Medida, não ! No entanto, é importante observar que, além do valor do plano, há outros aspectos a serem considerados, como despesas relacionadas à hospedagem e domínio.' },
  { question: 'Manutenção está incluida no pacote?', answer: 'Se você optar pelo o Plano Presença Online Contínua, você elimina preocupações com a manutenção do seu site. Nossa equipe especializada garantirá que seu site permaneça sempre atualizado, seguro e receba suporte técnico prioritário, proporcionando uma presença online contínua, confiável e de alto desempenho.Caso necessite de manutenção, oferecemos serviços adicionais. Entre em contato conosco para mais informações.' },
  { question: 'No plano Presença Online Contínua o que acontece ao não pagar as mensalidades?', answer: 'No "Plano Presença Online Contínua", o site permanece sob nossa propriedade durante o período de prestação de serviços. O não pagamento das mensalidades pode resultar no encerramento temporário do site. A regularidade dos pagamentos é crucial para garantir a continuidade dos serviços, sustentabilidade do serviço e manter a qualidade do suporte, hospedagem e atualizações fornecidas pela Sonnen Software.' },
  
];


interface Card {
  image: string;
  title: string;
  content: string;
}

const Desenvolvimento_Site = () => {
  const items = [
    { id: 1, icon: <Image src={htmx} alt="Logo htmx" className={`w-16 md:w-28 h-auto`} />, text: "Htmx", link: "https://htmx.org/" },

    { id: 2, icon: <Image src={react} alt="Logo React" className={` w-16 md:w-24 h-auto`} />, text: "React", link: "https://react.dev/" },
    
    { id: 3, icon: <Image src={googleAds} alt="Logo Google Ads" className={`w-16 md:w-20 h-auto`} />, text: "Google Ads", link: "https://ads.google.com/intl/pt-BR_br/start/overview-ha/?subid=br-pt-ha-awa-bk-c-scru!o3~Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB~140965879609~aud-780873439152:kwd-94527731~17334788550~664803803888&gad_source=1&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB&gclsrc=aw.ds"  },

    { id: 4, icon: <Image src={awslogo} alt="Logo AWS" className={`w-16 md:w-24 h-auto`} />, text: "AWS", link: "https://aws.amazon.com/pt" },

    { id: 5, icon: <Image src={nextJS} alt="Logo Next.JS" className={`w-16 md:w-24 h-auto`} />, text: "Next.js", link: "https://nextjs.org/showcase" },

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
      <a href={item.link} className=" line text-white pb-4 line border-b-2 border-transparent hover:border-red-600 whitespace-nowrap text-sm md:text-base lg:text-2xl font-semibold " target="_blank">
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


  const targetRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = targetRefs.map((ref, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(`Animação ${index + 1} ocorreu!`);
              entry.target.classList.add(index % 2 === 0 ? 'slide-right' : 'slide-left');
              entry.target.classList.remove('opacity-0');
            }
          });
        },
        { threshold: 0.5 }
      );
    });

    targetRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      targetRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [targetRefs]);



  return (
    <div className='w-screen  text-white bg-zinc-900 bg-center'>
      <section className='md:border-b-8 border-red-600 bg-gradient-to-tr from-red-600 to-rose-800 items-center justify-center custom-outer-border-red slide-left-hero'>
          <div className="flex flex-col lg:flex-row ">
           <div className="w-full lg:w-1/2 pt-28 ">
              <div className=" text-start md:text-left items-center mx-auto px-0 md:pr-80  lg:px-7 xl:px-16">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-4 mb-3  px-6  md:px-7">Construa sua presença<br /> Online<span className="text-black"> contínua.</span> </h1>
              
              <Link href='https://wa.link/lprzpn' target="_blank" rel="noopener noreferrer">
              <button className="w-auto ml-6 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-zinc-900 rounded-lg lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-red-500">
                  Entre em Contato
              </button>
              </Link>
                <div className=" md:p-2 xl:p-4 rounded-lg font-semibold md:mx-6  xl:pl-0 mt-3 md:mt-0 text-white text-left">
                  <p className="max-w-4xl text-lg px-6 md:px-0 md:text-sm xl:text-lg leading-7 sm:mt-6 md:mt-0 mb-6 ">
                    Seu negócio precisa garantir sua presença online! Com a Sonnen você pode desfrutar de uma loja virtual ideal para aumentar suas vendas, 100% personalizado e construido do zero, pensando nas suas nescessidades. Não sabe por onde começar? Faça um orçamento com a Sonnen
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 shadow bg-zinc-900 mb-6 custom-inner-border-black " >
              <div className=" px-6 py-0 md:py-10 mx-auto mb-14">

                  <div className="hidden lg:grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 mx-0 md:mx-5 lg:mx-10 "  >
              
                  
                    <Tilt options={defaultOptions} >
                        <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg " style={{
                          backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/modulo__solucoes__personalizadas.png')" }}>
                          <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-md bg-opacity-40 transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer bg-gray-900 hover:bg-gray-900/60  hover:h-full">
                            <div className="flex justify-center items-center ">
                              <h2 className=" text-xl font-semibold capitalize group-hover:ml-10 group-hover:mt-4">UX/UI </h2>
                              <span className="group-hover:opacity-0 "><MdKeyboardArrowUp size='3rem'/></span>
                            </div>
                            <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">UI é responsável pela aparência do seu site, enquanto que o UX cuida da acessibilidade. A combinação permite a criação de páginas modernas que  levam em consideração a expêriencia do usuário</p>
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


 
    <section className="m-3 px-6 mx-auto mt-20 ">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div ref={targetRefs[0]} className="xl:w-1/2 xl:mx-4 md:p-2 xl:p-4 mt-3 xl:mt-3 rounded-lg font-semibold text-left opacity-0">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">+ Impulsione seu <span className="underline decoration-red-500">negócio:</span> <br />Explore nosso Módulo de Análise de Dados e crie seu DashBoard personalizado. </h1>
                <p className="pb-6 mt-4 xl:mt-6 text-gray-300">
                Uma das ferramentas mais poderosas em nosso conjunto de recursos é os dashboards personalizados. Estas interfaces são intuitivas e visualmente atraentes, proporcionando uma análise abrangente do seu site. Com elas, é possível avaliar o tráfego de visitantes, monitorar o desempenho das vendas, e obter insights valiosos para aprimorar a eficácia e o impacto da sua presença online.                  
                </p>
                <Link
                href={'/sobre/solucoes_personalizadas'}
                rel="noopener noreferrer"
                className="inline-flex items-center -mx-1 mb-6 text-sm capitalize transition-colors duration-300 transform text-red-400 hover:underline hover:text-red-500"
              >
                <span className="mx-1">Saiba mais</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
                </div>

            <div ref={targetRefs[1]} className="grid grid-cols-1 gap-8 md:mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2 opacity-0 ">
              <div className="relative h-96 rounded-xl border border-zinc-950 shadow-md overflow-hidden justify-center items-center text-center">
                <div className="bg-black absolute inset-0 opacity-70"></div>
                <Image
                  src={modulo}
                  alt="Monetização App"
                  className="w-full h-full object-cover mt-5"
                />
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-2">
                  <h1 className="text-xl font-semibold  drop-shadow-2xl">News Letters</h1>
                  <p className="font-semibold drop-shadow-2xl px-8 mt-2 ">Divulgue amplamente informações e notícias relacionadas com a sua atividade! A newsletter é a ferramenta ideal para informar seus clientes, promover ofertas especiais e cultivar um relacionamento sólido.</p>
                </div>
              </div>

              <div className="relative h-96 rounded-xl border border-zinc-950 shadow-md overflow-hidden justify-center items-center text-center">
                <div className="bg-black absolute inset-0 opacity-40"></div>
                <Image
                  src={dashboard}
                  alt="Monetização App"
                  className="w-full h-full "
                />
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-2">
                  <h1 className="text-xl font-semibold  drop-shadow-2xl">Potencialize Sua Receita com Google AdMob e Google Analytics</h1>
                  <p className="font-semibold drop-shadow-2xl px-8 mt-2">Maximize seus ganhos integrando estrategicamente Google AdMob e aproveitando as análises detalhadas do Google Analytics.</p>

                </div>
              </div>
            </div>
            </div>
          <div>  
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
              src={design} 
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
        <Accordion questions={questionsPage3} />
      </div>
    </section>
    </div>


    </div>
  );
};

export default Desenvolvimento_Site;