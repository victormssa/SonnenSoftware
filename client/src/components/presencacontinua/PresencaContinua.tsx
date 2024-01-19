"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import worldgrid from '../../../public/assets/images/world_grid.png';
import globe from '../../../public/assets/images/globe.png';
import webdesign from '../../../public/assets/images/webdesign.png';
import { MdOutlineDeviceHub } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { CiServer } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { TbShieldCode } from "react-icons/tb";
import { TbCalendarDollar } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { TbSeo } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

import Accordion from '@/components/accordion/accordion';


const questionsPage3 = [
  { question: 'O que oferece o plano Presença Online contínua?', answer: 'Com o Plano "Presença Online Contínua", proporcionamos uma solução de serviço contínuo. Cuidamos de todo o ciclo de vida do seu site, desde o desenvolvimento até o gerenciamento e manutenção contínua. Ao pagar uma mensalidade, seu site permanece online, atualizado e sob nossa gestão, garantindo uma presença digital eficiente.' },
  { question: 'É possivel adicionar funcionalidades ao meu site nesse plano?', answer: 'Sim, no Plano Presença Online Contínua, damos a você a flexibilidade de adicionar quantas funcionalidadesdesejar. Explore nossos módulos adicionais para personalizar seu site e atender às necessidades específicas do seu negócio, proporcionando uma presença online única e eficiente.' },
  { question: 'Como o valor mensal é sempre fixo?', answer: 'O valor mensal é fixo para o pacote completo, que inclui os módulos padrões essenciais. No entanto, caso deseje adicionar módulos extras para aprimorar a funcionalidade do seu site, os valores finais podem ser ajustados. Mantemos total transparência para que você possa personalizar seu plano de acordo com suas necessidades.' },
  { question: 'Manutenção está incluida no pacote?', answer: 'Sim, com o Plano Presença Online Contínua, você elimina preocupações com a manutenção do seu site. Nossa equipe especializada garantirá que seu site permaneça sempre atualizado, seguro e receba suporte técnico prioritário, proporcionando uma presença online contínua, confiável e de alto desempenho.' },
  { question: 'O que acontece se não pagar as mensalidades?', answer: 'No "Plano Presença Online Contínua", o site permanece sob nossa propriedade durante o período de prestação de serviços. O não pagamento das mensalidades pode resultar no encerramento temporário do site. A regularidade dos pagamentos é crucial para garantir a continuidade dos serviços, sustentabilidade do serviço e manter a qualidade do suporte, hospedagem e atualizações fornecidas pela Sonnen Software.' },
  { question: 'Quais tecnologias atuais são utilizadas para desenvolver os sites no Plano "Presença Online Contínua?', answer: 'No Plano "Presença Online Contínua", utilizamos tecnologias de ponta para garantir a excelência no desenvolvimento e manutenção contínua do seu site. Empregamos linguagens de programação modernas, frameworks robustos e ferramentas avançadas de gestão de conteúdo para proporcionar uma experiência online eficiente e atualizada. Estamos comprometidos em utilizar tecnologias que acompanham as tendências do mercado, garantindo assim um ambiente virtual de alta qualidade para o seu negócio.' },
];

const PresencaContinua = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['experiência Completa.', 'agilidade.', 'prioridade.', 'conforto.'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  const renderText = () => {
    if (textIndex === texts.length - 1) {
      return (
        <motion.span
          key={texts[textIndex]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
        >
          {texts[textIndex]}
        </motion.span>
      );
    } else {
      return (
        <motion.span
          key={texts[textIndex]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
        >
          {texts[textIndex]}
        </motion.span>
      );
    }
  };

  const currentText = texts[textIndex];

  return (
    <div className='w-screen h-cover flex flex-col  text-white  '>
      <section
        className="w-full h-full bg-center bg-cover "
        style={{
          backgroundImage: `url("https://previews.dropbox.com/p/thumb/ACK7Q3BQgbGrouEQbPr7zYrM3mCs4OFnQX13LjO283vIQAD2AUh0R8Wz3TGsExhImrNNyPYFZg19hLJt0OtCQDbYRyYPVJXzcp9QTJ6L0WAizzgESZOnJcXeRGq0bwISKnPK1246Kd8kjCo7_VyjI7Ci7_DrE2dNkgKCNJ81mK5h-KKGJiRlHoc_vMVycZV12POyfATBL_nwfytAtRGpG-u8PnVcYTXQk9zw0Ek8UsRqupUzqZR-N_LaugP8O3ZvO0zpU-CftkJv4npr4bdobW03VNra4d3k8Jej5HZaGkiuq0qFzGYaYOL58BdbXTeF4KLfyIYY4dj1oPuFuEuXgYf5/p.png")`,
        }}
      >
      <div className='py-28 bg-[#000000]/50'>
        <section className='flex-1 flex flex-col items-center justify-center '>
          <h3 className='text-dark text-center text-red-600 text-3xl font-semibold lg:text-4xl'>
            Presença online Contínua
          </h3>
          <Image src={worldgrid} alt="Presença Online Continua" className="w-20 mt-5"></Image>
        </section>

        <section className='flex-1  '>

          <p className="mt-8 lg:mt-10 xl:mt-6 lg:ms-20 text-center text-md ">
            Nosso Plano Presença Online Continua é ideal para quem quer uma experiência completa, sem precisar se preocupar. 
            <br />
          </p>
          <p className="mt-8 lg:mt-10 xl:mt-6 lg:ms-20 text-center text-md">
             A Sonnen Software cuida de tudo para você poder desfrutar da sua presença online ideal para aqueles que buscam{" "}
            <span className="text-red-600" style={{ display: "inline-block" }}>
              {renderText()} 
            </span>
            <br />
            Perfeita para alavancar seu negócio.
          </p>

          <h3 className='text-red-600 text-2xl font-semibold md:text-[1em] lg:text-3xl text-center mt-10'>Construa sua presença online</h3>
          <section className='flex justify-center text-justify mx-auto text-[.8em] lg:flex-row flex-col pr-10 pl-10'>
            <div className='lg:w-1/2 lg:me-10 lg:ms-10'>
              <ul className='list-none'>
                <li className='flex items-center'>
                    <MdOutlineDeviceHub  size='20em '/>
                    <span className=' ml-2 lg:ml-6  '>
                    Desenvolvemos sua presença online desde o primeiro código. Nossa equipe dedicada cria uma base sólida, alinhada com as melhores práticas de desenvolvimento web, para garantir que seu site atenda às suas necessidades exclusivas desde o início.
                    </span>
                </li>
                <li className='flex items-center '>
                    <IoIosColorPalette size='20em'/>
                    <span className=' ml-2 lg:ml-6'>
                    Cada detalhe do design é cuidadosamente elaborado para refletir a identidade única da sua marca. De layouts intuitivos a elementos visuais envolventes, nosso design personalizado destaca sua singularidade, proporcionando uma experiência visualmente impactante aos seus visitantes.
                    </span>
                </li>
                <li className='flex items-center '>
                    <CiServer size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                    Garantimos uma presença online sem interrupções. Nossa hospedagem confiável e serviços de manutenção contínua asseguram que seu site esteja sempre acessível, seguro e atualizado, proporcionando tranquilidade para focar no crescimento do seu negócio.
                    </span>
                </li>
                <li className='flex items-center '>
                    <DiResponsive size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                    Seu site é otimizado para proporcionar uma experiência perfeita em qualquer dispositivo. Com design responsivo, garantimos que seu conteúdo seja acessível e visualmente atraente, independentemente do dispositivo que seus visitantes estejam utilizando.
                    </span>
                </li>
              </ul>
            </div>

            <div className='lg:w-1/2 lg:me-20 lg:ms-30'>
              <ul className='list-none'>
                <li className='flex items-center '>
                    <RxUpdate size='20em'/>
                    <span className='ml-2 lg:ml-6 '>
                    Mantenha seu conteúdo relevante e atualizado. Oferecemos um sistema fácil de usar para que você possa realizar atualizações de forma eficiente, garantindo que seus visitantes tenham acesso às informações mais recentes sobre seus produtos, serviços e notícias.
                    </span>
                </li>
                <li className='flex items-center '>
                    <TbShieldCode  size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                    Conte com suporte técnico dedicado e prioritário. Nossa equipe está pronta para ajudar a resolver qualquer problema rapidamente, garantindo que seu site funcione sem problemas e que você tenha suporte técnico quando mais precisa.
                    </span>
                </li>
                <li className='flex items-center '>
                    <TbCalendarDollar size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                      Simplificamos seu investimento com um modelo de pagamento mensal transparente. Sem surpresas, apenas um compromisso mensal acessível que inclui todos os serviços essenciais para manter sua presença online eficiente.
                    </span>
                </li>
                <li className='flex items-center '>
                    <TbSeo size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                    Maximize sua visibilidade online. Implementamos estratégias abrangentes de SEO para melhorar seu posicionamento nos motores de busca, garantindo que seu site seja facilmente encontrado por aqueles que procuram seus produtos ou serviços.
                    </span>
                </li>
              </ul>
            </div>
          </section>

          <section className='flex flex-col items-center justify-center text-center'>
            <h3 className='text-2xl font-semibold lg:text-3xl mt-5 lg:me-5'>
              <span className='text-red-600'>Plano Presença Online Continua: </span> 
              <span className='text-red-600 line-through'> R$1.499,99</span>
              <span className='text-green-600'> por R$ 1.299,99</span> no plano mensal.
            </h3>
            <h3 className='text-2xl font-semibold lg:text-3xl mt-5 lg:me-5'>
              <span className='text-red-600 line-through'> R$17.999,99</span>
              <span className='text-green-600'> por R$ 14.399,99</span> no anual.
            </h3>

            <h3 className='text-1xl font-semibold lg:text-2xl lg:mt-5'>
              À vista com <span className='text-green-600'>20%</span> de desconto
            </h3>
            
            <Link className="w-50 px-8 py-3 mt-10 tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold" href="https://wa.link/qwzw34" target='_blank'>
              ENTRE EM CONTATO
            </Link>
            {/*Imagens do canto da pagina */}
          </section>

          <div className='flex text-sm font-semibold absolute left-4 mt-20' >
            <h6 className='me-2'>WEB</h6>
            <Image src={globe} className='me-2 w-5 h-auto'  alt='Web developer'></Image>
            <h6 className='me-2'>DESIGN</h6>
            <Image src={webdesign} className='me-2 w-5 h-auto' alt='Web design'></Image>
          </div>
        </section>

      </div>
      </section>
            {/*SECTION FAQ */}
            <section className='w-screen bottom-0 h-auto text-gray-600 body-font border-t-[0.08rem] border-[#0000002e] bg-gradient-to-tr from-red-600 to-rose-800'>
              <h3 className='text-start text-white text-3xl font-semibold ms-3 mt-1'>FAQ</h3>
              <div className=' mt-1'>
              <Accordion questions={questionsPage3} />
              </div>
      </section>
    </div>
  )
}

export default PresencaContinua;