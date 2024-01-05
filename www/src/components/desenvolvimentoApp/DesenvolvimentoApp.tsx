// DesenvolvimentoApp.tsx
"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { FcAndroidOs } from "react-icons/fc";
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

const DesenvolvimentoApp = () => {
  const items = [
    { id: 1, icon: <FcAndroidOs size="8rem" />, text: "Android", link: "https://www.android.com/intl/pt_br/" },

    { id: 2, icon: <Image src={googlePlay} alt="Logo Google Play" className={`w-24 h-auto`} />, text: "Google Play", link: "https://play.google.com/store/apps" },
    
    { id: 3, icon: <Image src={googleAds} alt="Logo Google Ads" className={`w-24 h-auto`} />, text: "Google Ads", link: "https://ads.google.com/intl/pt-BR_br/start/overview-ha/?subid=br-pt-ha-awa-bk-c-scru!o3~Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB~140965879609~aud-780873439152:kwd-94527731~17334788550~664803803888&gad_source=1&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A8OXwlluCyA0LJy8l0FKfxdWVWsXbjDhLKv6uK3iwDI41SVdOIGgzEaApc0EALw_wcB&gclsrc=aw.ds"  },

    { id: 4, icon: <Image src={googleCloud} alt="Logo Google Cloud" className={`w-24 h-auto`} />, text: "Google Cloud", link: "https://cloud.google.com/?hl=pt_br" },

    { id: 5, icon: <Image src={nextJS} alt="Logo Next.JS" className={`w-24 h-auto bg-white rounded-2xl p-4`} />, text: "Logo Next.js", link: "https://nextjs.org/showcase" },

    { id: 5, icon: <Image src={elysia} alt="Logo Elysia.js" className={`w-36 h-auto`} />, text: "Elysia.js", link: "https://elysiajs.com" },

    { id: 6, icon: <Image src={postgresql} alt="Logo Postgresql" className={`w-24 h-auto`} />, text: "Postgresql", link: "https://www.postgresql.org" },
    
    { id: 7, icon: <Image src={analytics} alt="Logo Google Analytics" className={`w-24 h-auto`} />, text: "Google Analytics", link: "https://analytics.google.com/analytics/academy/" },
    
    
  ];

  const renderedItems = items.map((item, index) => (
    <div key={item.id} className="flex flex-col items-center  ">
      <div className="w-auto h-48 flex items-center justify-center mb-4">
        <div className="w-auto h-auto">
          {item.icon}
        </div>
      </div>
      <a href={item.link} className="text-xl line text-white pb-4 line border-b-2 border-transparent hover:border-red-600 whitespace-nowrap" target="_blank">
        {item.text}
      </a>
    </div>
  ));
  
  const defaultOptions = {
    reverse:             false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    trnasition: true,
    axis: null,
    reset: true,
    aesing: "cubic-bezier(.03,.98,.52,.99",

  }

  const customOptions = {
    reverse:  true,
    max: 45,
    perspective: 1500,
    scale: 1.2,
    trnasition: true,
    axis: null,
    reset: false,
    aesing: "cubic-bezier(.2,.8,.3,1",
  }

  return (
    <div className='w-screen  text-white bg-zinc-900 bg-center'>

      <section className='md:border-b-8 border-red-600 items-center justify-center custom-outer-border-red '>
          <div className="flex flex-col lg:flex-row ">
           <div className="w-full lg:w-1/2 pt-28 ">
              <div className="text-start md:text-left items-center mx-auto px-0 lg:px-7 xl:px-16">
              <h1 className="text-3xl xl:text-4xl font-bold mb-6 xl:mb-3 px-6 md:px-0 ">Desenvolva sua <span className="text-red-600">aplicação</span>.</h1>
              
              <a className="sm:hidden px-4 ml-6 py-2  tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold" target="_blank" href="/planos/essencial&amp;simples">Solicite um Orçamento</a>

              <h1 className="text-2xl font-medium text-white lg:text-3xl hidden md:block">Foque no core do seu negócio.</h1>

                <div className=" md:p-2 xl:p-4 rounded-lg font-semibold  xl:pl-3 mt-3 xl:mt-3 hidden md:block text-gray-400 text-left">
                  <p className="max-w-4xl text-lg  md:text-sm xl:text-lg leading-7  mb-6 ">
                    Potencialize o crescimento da sua empresa com soluções de desenvolvimento de software feitas sob medida. Na Sonnen Software, estamos comprometidos em oferecer serviços personalizados que atendam às suas necessidades exclusivas.
                  </p>

                  <p className="max-w-4xl text-lg  md:text-sm xl:text-lg leading-7 ">
                    Desenvolvemos aplicativos específicos que não apenas otimizam a eficiência operacional, mas também impulsionam a produtividade da sua equipe, resultando em redução de custos e processos mais eficientes.
                  </p>
                </div>
                {/* SMALL SIZES */}
                <div className="sm:hidden mt-6 border-2 text-center rounded-3xl mx-3 bg-gradient-to-tr from-zinc-600 to-zinc-800/80">

<div className="h-52 bg-cover mt-2 mr-2 ms-2 custom-sm-BgImage rounded-t-3xl border-zinc-600"></div>

<div className="flex flex-col mx-auto border-t">
  <div className="flex m-6 p-3 capitalize bg-zinc-800 rounded-b-3xl">
    <p className="text-white">
      Potencialize o crescimento da sua empresa com soluções de desenvolvimento de software feitas sob medida.
    </p>
  </div>
  <div className="flex m-6 p-3 capitalize bg-zinc-800 rounded-b-3xl">
    <p className="text-white">
      Otimização da eficiência operacional, produtividade da sua equipe, redução de custos do seu negócio.
    </p>
  </div>
</div>
</div>


              </div>
            </div>

            <div className="lg:w-1/2 shadow bg-gradient-to-tr from-red-600 to-rose-800 mt-6 py-6 md:py-10  lg:py-20 custom-inner-border-red " >
              <div className=" px-6 py-0 md:py-10 mx-auto">

                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 mx-0 md:mx-5 lg:mx-10 "  >
                  <Tilt options={defaultOptions}>
                      <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg " style={{
                        backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/mobile%20dev.jpg')" }}>
                        <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-sm transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer hover:bg-gray-900/40 hover:h-full ">
                          <div className="flex justify-center items-center gap-3">
                            <h2 className="mt-4 text-xl font-semibold capitalize">Experiência do Usuário </h2>
                            <MdKeyboardArrowUp />
                          </div>
                          <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Ofereça uma experiência mobile completa para seus clientes</p>
                        </div>
                      </div>
                      </Tilt>

                      <Tilt options={defaultOptions}>                      
                        <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48  bg-cover border-2 border-red-900 shadow-lg" style={{
                          backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/_4a8bc26b-300f-46b8-b30f-c316a05704f6.jpg')" }}>
                          <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-sm transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer hover:bg-gray-900/40  hover:h-full">
                          <div className="flex justify-center items-center gap-3">
                            <h2 className="mt-4 text-xl font-semibold capitalize">Back End Integrado</h2>
                            <MdKeyboardArrowUp />
                          </div>
                            <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Back End escalacionável e protegido capaz de oferecer soluções de hospedagem e armazenamento para milhões de usuários</p>
                          </div>
                        </div>
                      </Tilt>

                      <Tilt options={defaultOptions}> 
                        <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48  bg-cover border-2 border-red-900 shadow-lg" style={{
                          backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img__arquitetura__app.jpg')" }}>
                          <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-sm transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer hover:bg-gray-900/40  hover:h-full">
                          <div className="flex justify-center items-center gap-3">
                            <h2 className="mt-4 text-xl font-semibold capitalize">Arquitetura do Sistema </h2>
                            <MdKeyboardArrowUp />
                          </div>
                            <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Construa com um alicerce robusto. Desenvolva com precisão e inovação, aproveitando todo o potencial de seu projeto.</p>
                          </div>
                        </div>
                      </Tilt>

                      <Tilt options={defaultOptions}> 
                        <div className="flex items-end overflow-hidden bg-center rounded-lg md:h-36 xl:h-48 bg-cover border-2 border-red-900 shadow-lg" style={{
                          backgroundImage:"url('https://raw.githubusercontent.com/MiracleForge/SonnenSoftware_Images/main/images/img_mobile_app_dev.jpg')" }}>
                          <div className="group w-full px-8 overflow-hidden rounded-b-lg backdrop-blur-sm transform-gpu transition-transform duration-300 hover:scale-105 h-16 cursor-pointer hover:bg-gray-900/40  hover:h-full">
                          <div className="flex justify-center items-center gap-3">
                            <h2 className="mt-4 text-xl font-semibold capitalize">Monitoramento</h2>
                            <MdKeyboardArrowUp />
                          </div>
                            <p className="mt-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">Acompanhe de perto os indicadores essenciais para tomadas de decisão de importântes para sua aplicação. </p>
                          </div>
                        </div>
                      </Tilt>




                  </div>
              </div>
          </div>
        </div>
    </section>


 
      <section className="p-6 mx-auto">
          <div className="xl:flex xl:items-center xL:-mx-4">
              <div className="xl:w-1/2 xl:mx-4">
                  <h1 className="text-2xl font-semibold  capitalize lg:text-3xl "><span className="text-red-600">Potencialize Seu Lucro:</span><br /> Monetize com Google Ads ou E-commerce em Seu Aplicativo</h1>

                  <p className="max-w-2xl mt-4 ">
                  Em um mundo cada vez mais digital, a monetização de aplicativos tornou-se uma estratégia essencial para maximizar seus ganhos. Duas abordagens eficazes são a integração do Google Ads e a implementação de soluções de E-commerce. Essas estratégias oferecem oportunidades valiosas para aumentar sua receita e envolver seus usuários de maneira mais eficaz.
                  </p>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2 ">
                <div className="relative h-96 rounded-xl border border-zinc-950 shadow-md overflow-hidden mt-20">
                  <div className="bg-black absolute inset-0 opacity-40"></div>
                  <Image
                    src={NotificationMessage}
                    alt="Monetização App"
                    className="w-full h-full object-cover mt-5"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-36">
                    <h1 className="text-xl font-semibold  drop-shadow-2xl">Notificações Push</h1>
                    <p className="font-semibold drop-shadow-2xl px-8 mt-2">Estimule a interação contínua de seus usuários em seu aplicativo por meio de mensagens. Acompanhe os dados de entrega para assegurar uma experiência eficiente e personalizada.</p>
                  </div>
                </div>

                <div className="relative h-96 rounded-xl border border-zinc-950 shadow-md overflow-hidden mt-20">
                  <div className="bg-black absolute inset-0 opacity-40"></div>
                  <Image
                    src={InterfaceApp}
                    alt="Monetização App"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-36">
                    <h1 className="text-xl font-semibold  drop-shadow-2xl">Potencialize Sua Receita com Google AdMob e Google Analytics</h1>
                    <p className="font-semibold drop-shadow-2xl px-8 mt-2">Maximize seus ganhos integrando estrategicamente Google AdMob e aproveitando as análises detalhadas do Google Analytics.</p>
                  </div>
                </div>
              </div>

          </div>
      </section>

    
      <section className="mt-10">
        <div className="px-6 py-10 mx-auto text-center">
          <h1 className="text-3xl font-bold">Seu App desenvolvido </h1>
          <p className="text-3xl font-bold py-4">Integrando diversas <span className="text-red-600">Tecnologias</span></p>

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
        <a className=" px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold" target="_blank" href="/planos/essencial&amp;simples">Solicite um Orçamento</a>
      </div>


    </div>
  );
};

export default DesenvolvimentoApp;
