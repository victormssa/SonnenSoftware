"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "../authContext/AuthContext";
import { MdModeEdit } from "react-icons/md";


const UserProfile = () => {
  const { logout, isLoggedIn, userId } = useAuth();
  return (
    <>

      <section className="flex h-full">
        <aside className="flex flex-col w-64 h-full py-8 px-0 bg-white border-r rtl:border-r-0 rtl:border-l border-gray-200">
          <div className="flex flex-col items-center mt-6 -mx-2 px-4">
            <img className="object-cover w-24 h-24 mx-2 rounded-full ring-[0.4rem] ring-red-600" src={`https://api.dicebear.com/7.x/identicon/svg?seed=${userId}&scale=80&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`} alt="avatar" />
            <button className="relative bottom-6 left-8 w-auto bg-red-600 rounded-full p-1 text-white"><MdModeEdit size={"1rem"} /></button>
            <h4 className="mx-2 mt-2 font-medium text-gray-800 ">Usuário da Silva</h4>
            <div className="flex w-full gap-1  justify-center items-center">
              <p className="mt-1 text-xs font-medium text-gray-600 ">Estágiario</p>
              <p className="mt-1 text-xs font-medium text-gray-600 "> - </p>
              <p className="mt-1 text-xs font-medium text-gray-600 ">XVideos</p>
            </div>
          </div>
          <hr className="my-6" />
          <div className="flex flex-col justify-between flex-1 px-4">
            <nav>
              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700 " href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Dashboard</span>
              </a>

              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700 " href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Equipe</span>
              </a>

              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-gray-700 " href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Checkout</span>
              </a>

              <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700 " href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Configurações</span>
              </a>
            </nav>
            <div className="px-2">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">Seus Projetos</h2>

                <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-700 border-gray-700 border rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>

              <nav className="mt-4 -mx-3 space-y-3 ">
                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-800 hover:text-gray-200 ">
                  <div className="flex items-center gap-x-2 ">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    <span>Projeto 01</span>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-800 hover:text-gray-200 ">
                  <div className="flex items-center gap-x-2 ">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    <span>Projeto 02</span>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-800 hover:text-gray-200 ">
                  <div className="flex items-center gap-x-2 ">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Projeto 03</span>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>

                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-800 hover:text-gray-200 ">
                  <div className="flex items-center gap-x-2 ">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Projeto 04</span>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </aside>
        <div className="bg-white w-2/4 flex flex-col align-middle  gap-4 px-4 py-4">
          <div className="flex flex-col w-[47rem] border gap-3 rounded-lg shadow-lg">
            <h2 className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-t-lg px-2 py-2">Abril/2024</h2>
            <div className="w-full px-4">
              <div className="flex align-middle items-center gap-3">
                <input type="checkbox" name="select" id="select" className="cursor-pointer" />
                <h3 className="w-full font-medium">Mensalidade Abril de 2024</h3>
              </div>

              <div className="flex items-center align-middle mt-4 gap-10 pb-2">
                <div className="flex flex-col w-auto ">
                  <h3 className="text-gray-400 font-light">Parcela</h3>
                  <p className="">Única</p>
                </div>
                <div className="flex flex-col w-auto">
                  <h3 className="text-gray-400 font-light">Data de Vencimento</h3>
                  <p>05/04/2024</p>
                </div>
                <div className="flex flex-col w-auto">
                  <h3 className="text-gray-400 font-light">Valor Total</h3>
                  <p>R$ 1.500,00</p>
                </div>
                <div className="flex flex-col w-auto">
                  <h3 className="text-gray-400 font-light">Status</h3>
                  <p>Aberto</p>
                </div>
                <button className="px-8 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md">
                  Mais Detalhes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full p-4 pr-8 ">
          <div className="flex flex-col w-full border gap-3 rounded-lg shadow-lg">
            <h2 className="bg-zinc-200 text-zinc-600 rounded-t-lg text-center px-2 py-2">Pague com Boleto ou Cartão</h2>
            <div className="w-full px-4">


              <div className="flex flex-col align-middle mt-4 gap-2 pb-2">
                <div className="flex flex-col w-auto ">
                  <h3 className="text-gray-400 font-light">Valor total em aberto</h3>
                  <p className="">R$ 00,00</p>
                </div>
                <hr />
                <div className="flex flex-col w-auto ">
                  <h3 className="text-gray-400 font-light">Pagamento</h3>
                  <p className="">Confira os dados selecionados abaixo</p>
                </div>
                <div className="flex w-full border rounded-lg shadow-md gap-3">
                  <div className="flex flex-col w-auto p-2">
                    <h3 className="">Valor</h3>
                    <p className="">R$ 00,00</p>
                  </div>
                  <div className="flex flex-col w-auto p-2">
                    <h3 className="">Vencimento</h3>
                    <p className="">00/00/0000</p>
                  </div>
                  <div className="flex flex-col w-auto p-2">
                    <h3 className="">Identificação</h3>
                    <p className=""></p>
                  </div>
                </div>
                <div className="flex w-auto gap-2 mt-4">
                  <h3 className="">Total selecionado:</h3>
                  <p className="">R$ 00,00</p>
                </div>
              </div>
              <div className="py-4 gap-3">
                <button className="px-8 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md shadow-lg mr-4">
                    Pagar com Cartão
                  </button>
                  <button className="px-8 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md shadow-lg">
                    Pagar com Boleto
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default UserProfile;
