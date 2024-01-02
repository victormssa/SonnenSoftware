"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import metrica from '../../../public/assets/images/suaMedida.png';
import globe from '../../../public/assets/images/globe.png';
import webdesign from '../../../public/assets/images/webdesign.png';
import { IoIosColorPalette } from "react-icons/io";
import { GoPasskeyFill } from "react-icons/go";
import { FaUserGear } from "react-icons/fa6";
import { CiCoinInsert } from "react-icons/ci";
import { TbShieldCode } from "react-icons/tb";
import { TbCalendarDollar } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { TbSeo } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

import Accordion from '../accordion/accordion';


const questionsPage3 = [
  { question: 'O que é o Plano "Site à Sua Medida?', answer: 'O Plano "Site à Sua Medida" oferece a criação de um site personalizado, proporcionando total autonomia ao cliente para deploy, gerenciamento e manutenção após a entrega.' },
  { question: 'Posso adicionar funcionalidades extras ao meu site nesse plano?', answer: 'Sim, além dos benefícios inclusos, oferecemos a possibilidade de adicionar módulos de funcionalidades específicas, como sistemas avançados de autenticação, integração de plataformas, e-commerce, entre outros.' },
  { question: 'O que são os módulos de funcionalidades/serviços?', answer: 'São componentes adicionais, como sistema de autenticação, que podem ser incluídos separadamente para personalizar o sistema de acordo com as necessidades específicas do cliente.' },
  { question: 'Quem fica responsável pela manutenção, deploy e gerenciamento do site após a entrega?', answer: 'No Plano "À Sua Medida", após a entrega do arquivo, toda a responsabilidade pela manutenção, deploy e gerenciamento do site e suas funcionalidades fica a cargo do cliente.' },
  { question: 'A manutenção está inclusa no plano?', answer: 'Não, a manutenção não está inclusa no Plano "À Sua Medida". Após a entrega, o cliente é responsável por todo o gerenciamento do site. Caso necessite de manutenção, oferecemos serviços adicionais. Entre em contato conosco para mais informações.' },
];

const SuaMedida = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['controle.', 'autonomia', 'conforto.', 'flexibilidade'];

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
    <div className='w-screen h-cover flex flex-col  text-white'>
      <section
        className="w-full h-full bg-center bg-cover "
        style={{
          backgroundImage: `url("https://previews.dropbox.com/p/thumb/ACISEBYYfFra2evWsZQOWY69H48GnRan_7dEr77mRRb-jRgc9KhQ5vXghjEuPPhBNPHkl0xHwDtnfwI79fUByQJBAhZixNUsyj6GiAEhjkBwgxQ6CO5xRnpvvNCOulSDhJXevj_Lvbqi4Prs9DqvBn-u3VEpj-MUlmKFjegnuOVfLHKHsDo4WoIrzPDUYAYQZBrwbnWAFIaoALEzi6FCWSFP-vWiHJEFLoAAux4taTWNx1DVnalZBlJ_e0Uw_jFB_0v613CI_N0Imka7UwQzi_Ldb3c_Ope0NgT72UW4oyPerll40Qul7QwruJpuXCm1ESHJHOJVFbulEam-_QZZonjg/p.png")`,
        }}
      >
      <div className='py-28 bg-[#000000]/50'>
        <section className='flex-1 flex flex-col items-center justify-center '>
          <h3 className='text-dark text-center text-red-600 text-3xl font-semibold lg:text-4xl'>
            Á sua Medida
          </h3>
          <Image src={metrica} alt="Presença Online Continua" className="w-20 mt-5"></Image>
        </section>

        <section className='flex-1  '>

          <p className="mt-8 lg:mt-10 xl:mt-6 lg:ms-15 text-center text-md ">
                Com o Plano &quot;À Sua Medida&quot;, entregamos uma experiência única e personalizada. Aqui, você tem total autonomia para cuidar do deploy, gerenciamento e manutenção do seu site, enquanto nós lidamos com toda a complexidade do desenvolvimento.
            <br />
          </p>
          <p className="mt-8 lg:mt-10 xl:mt-6 lg:ms-20 text-center text-md">
             Oferecemos uma experiência única e personalizada, onde você tem total{" "}
            <span className="text-red-600" style={{ display: "inline-block" }}>
              {renderText()} 
            </span>
            <br />
            Uma solução perfeita para impulsionar o seu negócio com total autonomia.
          </p>

          <h3 className='text-red-600 text-2xl font-semibold md:text-[1em] lg:text-3xl text-center mt-10'>Construa sua presença online</h3>
          <section className='flex justify-center text-justify mx-auto text-[.8em] lg:flex-row flex-col pr-10 pl-10'>
            <div className='lg:w-1/2 lg:me-10 lg:ms-10'>
              <ul className='list-none'>
                <li className='flex items-center'>
                    <IoIosColorPalette  size='20em '/>
                    <span className=' ml-2 lg:ml-6  '>
                        A Sonnen Software se dedica a uma parceria única na construção da identidade visual do seu site. Nossa equipe de designers trabalha em estreita colaboração com você para criar um design exclusivo, cuidadosamente alinhado com a identidade visual da sua marca. Cada detalhe é meticulosamente elaborado para refletir a singularidade do seu negócio, proporcionando uma experiência visualmente impactante para seus visitantes.
                    </span>
                </li>
                <li className='flex items-center '>
                    <GoPasskeyFill  size='20em'/>
                    <span className=' ml-2 lg:ml-6'>
                     O site desenvolvido torna-se sua propriedade exclusiva. Isso significa que você tem total controle sobre o conteúdo, a estrutura e as futuras decisões relacionadas ao seu site. A Sonnen Software entrega não apenas um site, mas um ativo digital que é verdadeiramente seu.
                    </span>
                </li>
                <li className='flex items-center '>
                    <FaUserGear size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                    Após a entrega do seu site, você é livre para realizar o deploy, gerenciamento e manutenção conforme sua conveniência. Isso proporciona flexibilidade total, permitindo que você adapte e atualize seu site de acordo com as necessidades em constante evolução do seu negócio.
                    </span>
                </li>
                <li className='flex items-center '>
                    <CiCoinInsert size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                    Com um modelo de pagamento único, o Plano &quot;À Sua Medida&quot; simplifica suas finanças. Você efetua o pagamento uma vez e desfruta de todos os benefícios listados, sem preocupações com mensalidades recorrentes. Essa abordagem transparente oferece controle financeiro e previsibilidade.
                    </span>
                </li>
              </ul>
            </div>

            <div className='lg:w-1/2 lg:me-20 lg:ms-30'>
              <ul className='list-none'>
                <li className='flex items-center '>
                    <CiCoinInsert size='20em'/>
                    <span className='ml-2 lg:ml-6 '>
                    Priorizamos a experiência do usuário em todos os dispositivos. Seu site, desenvolvido sob o Plano &quot;À Sua Medida&quot;, é totalmente responsivo, garantindo que os visitantes tenham uma navegação suave e consistente, independentemente do dispositivo que estão usando.
                    </span>
                </li>
                <li className='flex items-center '>
                    <DiResponsive  size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                        Conte com suporte técnico dedicado e prioritário. Nossa equipe está pronta para ajudar a resolver qualquer problema rapidamente, garantindo que seu site funcione sem problemas e que você tenha suporte técnico quando mais precisa.
                    </span>
                </li>
                <li className='flex items-center '>
                    <TbSeo size='20em'/>
                    <span className='ml-2 lg:ml-6'>
                        A otimização para mecanismos de busca (SEO) é uma prioridade. Implementamos estratégias abrangentes para aumentar a visibilidade online do seu site, ajudando-o a se destacar nos resultados de pesquisa e alcançar seu público-alvo de forma eficaz.
                    </span>
                </li>
              </ul>
            </div>
          </section>

          <section className='flex flex-col items-center justify-center text-center'>
            <h3 className='text-2xl font-semibold lg:text-3xl mt-5 lg:me-5'>
              <span className='text-red-600'>Plano A sua Medida: </span> 
              <span className='text-red-600 line-through'> R$4.999,99</span>
              <span className='text-green-600'> por R$ 3.999,99 </span>a vista.
            </h3>
            <h3 className='text-2xl font-semibold lg:text-3xl mt-5 lg:me-5'>
                ou 12x de
              <span className='text-red-600 line-through'> 416,96</span>
              <span className='text-green-600'> R$ 332,99</span>
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

export default SuaMedida;