"use client";
import Image from "next/image";
import React, { useState } from "react";
import modulos from "../../../public/assets/images/moduloEdited.png";
import iconEcommerce from "../../../../public/assets/images/globe.png";
import iconPost from "../../../../public/assets/images/globe.png";

const SolucoesPersonalizadas = () => {
  const items = [
    { iconSrc: iconEcommerce, buttonText: "E-commerce 1" },
    { iconSrc: iconPost, buttonText: "Post/Blog" },
    { iconSrc: iconEcommerce, buttonText: "Controle Estoque" },
    { iconSrc: iconEcommerce, buttonText: "Pacote Agendamentos " },
    { iconSrc: iconEcommerce, buttonText: "Pacote Newsletter" },
    { iconSrc: iconEcommerce, buttonText: "Pacote Multilíngue " },
    { iconSrc: iconEcommerce, buttonText: "Pacote Análise de Dados" },
    { iconSrc: iconEcommerce, buttonText: "Dashboard de Controle" },
    { iconSrc: iconEcommerce, buttonText: "Pacote Dashboard Financeiro " },
    { iconSrc: iconEcommerce, buttonText: "Sistema de Autenticação" },
    { iconSrc: iconEcommerce, buttonText: "Sistema de Gamificação " },
    { iconSrc: iconEcommerce, buttonText: "Sistema de Gamificação " },
  ];

  type ContentMap = {
    [key: string]: React.ReactNode;
  };
  const [selectedButton, setSelectedButton] = useState<string>("");

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  };

  const generateContent = (
    title: string,
    description: string,
    items: string[]
  ) => (
    <div className="justify-evenly flex w-full space-x-4">
      <div className="w-96 h-auto bg-neutral-900 rounded-3xl">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {items.map((item, index) => (
        <div key={index} className="w-32 h-auto bg-neutral-900 rounded-3xl">
          <ol>
            <li>{item}</li>
          </ol>
        </div>
      ))}
    </div>
  );

  const contentMap: ContentMap = {
    "E-commerce 1": generateContent(
      "O que é um E-coomerce?",
      "Construa sua relação direta com o consumidor. O processo de venda ocorre de maneira 100% digital. A experiência do usuário é pensada para facilitar a efetivação do negócio",
      ["24 horas oi", "Compra e venda", "Item 3"]
    ),
    "Post/Blog": generateContent(
      "O que é um Post?",
      "post é um negócio desenvolvido pensando no mundo digital.",
      ["Post", "Item 2", "Item 3"]
    ),
    "Controle Estoque": generateContent(
      "O que é um controle de estoque?",
      "Eestoque é um negócio desenvolvido pensando no mundo digital.",
      ["Estoque", "Item 2", "Item 3"]
    ),
  };

  return (
    <div className="w-screen flex flex-col text-white bg-zinc-900 bg-center -z-10">
      <section className="mt-10 w-full bg-zinc-900">
        <div className="flex justify-center text-center items-center flex-col mx-auto space-y-2 my-16">
          <h3 className="p-1 text-3xl font-bold bg-red-600 rounded-md">
          Nossos Módulos e Serviços
          </h3>
        </div>

        <div className="grid lg:grid-cols-6 gap-x-0 gap-y-4 w-full pl-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold my-2"
            >
              <button
                className="py-2 w-auto h-auto px-4 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-xl mt-2 focus:outline-none focus:bg-red-600 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-medium"
                type="button"
                onClick={() => handleButtonClick(item.buttonText)}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mt-10 w-full px-16">
            <div className="ml-auto right-10 relative top-0 flex-row flex w-40 h-auto bg-red-600 rounded-t-2xl text-center justify-center py-2">
              {/* Content of the div with red background */}
              <h1 className="">e-commerce</h1>
            </div>
          </div>

          <div className="flex ml-10 mr-10 h-96 bg-gradient-to-b from-stone-800 to-black rounded-xl border-4 border-red-600 py-10 justify-evenly">
            {contentMap[selectedButton] || (
              <div className="w-auto h-auto bg-neutral-900 rounded-xl">
                {/* conteudo gerado aqui */}
              </div>
            )}
          </div>

          <p className="text-zinc-500 text-sm font-bold pb-20">
            *Os valores acima são valores mínimos para seu desenvolvimento, de
            acordo com funcionalidades.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SolucoesPersonalizadas;
