"use client"
import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from 'next/link';
import networkImg from '../../../public/assets/images/network.png';
import globe from '../../../public/assets/images/globe.png';
import webdesign from '../../../public/assets/images/webdesign.png';
import { IoIosColorPalette } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosTabletPortrait } from "react-icons/io";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiOutlineServer } from "react-icons/hi2";
import { FaBrazilianRealSign } from "react-icons/fa6";

import Accordion from '../accordion/accordion';
const questionsPage1 = [
  { question: 'Pergunta Essencial Simples 1', answer: 'Resposta para a pergunta EssencialSimples 1.' },
  { question: 'Pergunta Essencial Simples 2', answer: 'Resposta para a pergunta EssencialSimples 2' },
  { question: 'Pergunta Essencial Simples 3', answer: 'Resposta para a pergunta EssencialSimples 2' },
];

const SimplesEssencial = () => {
  return (
<div className='w-screen h-cover flex flex-col  text-white  '>
  <section
    className="w-full h-full bg-center bg-cover "
    style={{
      backgroundImage: `url("https://previews.dropbox.com/p/thumb/ACLTWIVvkOvi_kPgGiJs1DXwpBanS0eZI8we7DsO39QvPJij4zSGzH5DbXpMbKunEDqtDi_FImXeoUvYpo8itrrORwVbq-Q2LQN4R0rCiGK_ZsMu6FS-OD6SH78cdo9u7NVZT4tUeULp9lXjyAXeMB_7W8EkHnPtHRcQIN0UpWQqO35DAlWukZkTjDne7MI_uEUQ0TlYjIw3Zpq_3NU-nFVoBiBsKQqUDgvrcQNZHW83b2-mrGM2AeDRN93OVLERFCEVRtnuxc1YqqNF89UvWcoWhY0UP3t5LopdVTYtdrg1NktoO2zSfuwktWrMwnGY47arlVlqk5FIdLyRQdLqCRBt/p.jpeg")`,
    }}
  >
  <div className='py-20 bg-[#000000]/80'>
    <section className='flex-1 flex flex-col items-center justify-center'>
      <h3 className='text-dark text-center text-red-600 text-3xl font-semibold lg:text-4xl'>
        Simples e Essencial
      </h3>
      <Image src={networkImg} alt="Simples e Essencial" className="w-20 mt-5"></Image>
    </section>

    <section className='flex-1 md:ms-20'>
      <h3 className='text-red-600 text-1xl font-semibold lg:text-4xl '>&quot;Soluções Personalizadas&quot;</h3>
      <p className='max-w-4xl mt-4 xl:mt-6 '>Nosso Plano Essencial é a opção perfeita para quem busca uma presença
        online simples e informativa. Desenvolvemos um site estático com páginas
        descritivas e informativas, oferecendo uma solução acessível e eficiente para
        pequenos negócios, profissionais autônomos e projetos pessoais.
      </p>

      <h3 className='text-red-600 text-2xl font-semibold lg:text-3xl text-center mt-10'>Construa sua presença online</h3>
      <section className='flex justify-center text-justify mx-auto text-1xl'>
        <div className='w-1/2 me-40'>
          <ul className='list-none'>
            <li className='flex items-center'>
                <IoIosColorPalette size={180}/>
                <span className='ml-6'>
                  Design refinado e elegante, cuidadosamente desenvolvido para refletir a identidade visual distintiva da sua marca.
                </span>
            </li>
            <li className='flex items-center '>
                <IoDocumentTextOutline size={180}/>
                <span className='ml-6'>
                  Ideal para destacar seus serviços, histórico, contatos e demais informações relevantes, proporciona uma apresentação completa e impactante.
                </span>
            </li>
            <li className='flex items-center '>
                <IoIosTabletPortrait size={180}/>
                <span className='ml-6'>
                    Garante responsividade em dispositivos móveis, assegura uma experiência de usuário perfeita em qualquer plataforma.
                </span>
            </li>
          </ul>
        </div>

        <div className='w-1/2 me-40'>
          <ul className='list-none'>
            <li className='flex items-center '>
                <AiOutlineDashboard size={180}/>
                <span className='ml-6 '>
                  Otimizações básicas de SEO para aumentar a visibilidade online e melhorar o posicionamento nos motores de busca.
                </span>
            </li>
            <li className='flex items-center '>
                <HiOutlineServer size={180}/>
                <span className='ml-6'>
                Hospedagem segura e confiável, que oferece a garantia de que seu site estará sempre disponível para seus visitantes.
                </span>
            </li>
            <li className='flex items-center '>
                <FaBrazilianRealSign  size={180}/>
                <span className='ml-6'>
                  Pacote com valor único, que proporciona solução abrangente e acessível para suas necessidades online.
                </span>
            </li>
          </ul>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center text-center'>
        <h3 className='text-2xl font-semibold lg:text-3xl mt-5 me-5'>
          <span className='text-red-600'>Plano Essencial: </span> 
          Valor à vista com 20% de desconto 
          <span className='text-red-600 line-through'> R$1.499,99</span> 
          <span className='text-green-600'> por R$ 1.299,99</span>
        </h3>
        <h3 className='text-2xl font-semibold lg:text-2xl mt-5'>
          À vista com <span className='text-green-600'>20%</span> de desconto
        </h3>
        <h3 className='text-2xl font-semibold lg:text-2xl mt-5'>
          Até 4x no cartão de crédito sem juros. Adiantamento de comprometimento: R$300,00
        </h3>
        
        <Link className="w-50 px-8 py-3 mt-10 tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold" href="https://wa.link/qwzw34" target='_blank'>
          Entre em Contato
        </Link>
        {/*Imagens do canto da pagina */}
      </section>

      <div className='flex  text-[2rem] font-semibold absolute left-10' >
        <h6 className='me-2'>WEB</h6>
        <Image src={globe} className='me-2 w-25 h-auto'  alt='Web developer'></Image>
        <h6 className='me-2'>DESIGN</h6>
        <Image src={webdesign} className='me-2 w-25 h-auto' alt='Web design'></Image>
      </div>

    </section>
    
  </div>
  </section>
        {/*SECTION FAQ */}
        <section className='w-full bottom-0  h-auto text-gray-600 body-font border-t-[0.08rem] border-[#0000002e] bg-gradient-to-tr from-red-600 to-rose-800'>
          <h3 className='text-start text-white text-3xl font-semibold ms-3 mt-1'>FAQ</h3>
          <div className='ms-5 mt-1'>
          <Accordion questions={questionsPage1} />
          </div>
      </section>
</div>



  )
}

export default SimplesEssencial