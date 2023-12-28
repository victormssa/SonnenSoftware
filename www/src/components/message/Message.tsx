"use client";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
interface DropdownProps {
  services: string[];
}
const Message: React.FC<DropdownProps> = ({services}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [state, handleSubmit] = useForm("mleqrwyr");

  if (state.succeeded) {
    return (
      <>
      <main className="bg-white pt-[4.5rem]">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
            }}
          ></div>
          <div className="flex flex-col items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h2 className="text-black  text-2xl mb-1 font-bold flex ">
                Solicite um orçamento
              </h2>
              <p>Alcance novas formas de transformar sua empresa.</p>
            </div>
            <form
               onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1"
            >
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm  ">
                  Seu nome*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Insira seu nome"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative ">
                <label htmlFor="email" className="leading-7 text-sm  ">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Insira seu email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
                  data-ddg-inputtype="identities.emailAddress"
                  data-ddg-autofill="true"
                  style={{
                    backgroundSize: "auto 26px",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    backgroundImage:
                      'url("chrome-extension://bkdgflcldnnnapblkhphbgpggdiikppg/img/logo-small-grayscale.svg")',
                    transition: "background 0s ease 0s",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <ValidationError prefix="Email" field="email" errors={state.errors} />
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm  ">
                    Celular*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Insira o seu celular"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm  ">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Insira o nome da sua empresa"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="services" className="leading-7 text-sm">Serviço*</label>
                        <select
                          id="services"
                          name="services"
                          value={selectedService || ''}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                          <option value="" disabled>
                            Selecione um serviço
                          </option>
                          {services.map((service: any) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                </div>
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Conte nos mais sobre o que deseja.
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Insira a sua mensagem."
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  required
                  className="mr-2 mb-5 w-4 accent-red-600"
                />
                <p>
                  Ao informar meus dados, eu concordo com a{" "}
                  <a href="" className="text-red-600 hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  disponibilizada no site.
                </p>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 w-4 accent-red-600"
                />
                <p>
                  Aceito receber comunicados sobre eventos, produtos e serviços
                  da Sonnen Software.
                </p>
              </div>

              <button className="flex items-center justify-between w-40 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50" type="submit" disabled={state.submitting}>
                Enviar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="text-green-600 font-semibold">Enviado com sucesso!</p>
              <ValidationError errors={state.errors} />
              <p className="text-xs text-gray-500 mt-3">
                Cheque a aba spam em seu e-mail caso não houver uma resposta em
                até 7 dias, caso o contrario entre em contato com o suporte |
                +55 (71) 9961-84966
              </p>
             
      
            </form>
          </div>
        </div>
      </main>
    </>
    )
  }
  return (
    <>
      <main className="bg-white pt-[4.5rem]">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')",
            }}
          ></div>
          <div className="flex flex-col items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h2 className="text-black  text-2xl mb-1 font-bold flex ">
                Solicite um orçamento
              </h2>
              <p>Alcance novas formas de transformar sua empresa.</p>
            </div>
            <form
               onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1"
            >
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm  ">
                  Seu nome*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Insira seu nome"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative ">
                <label htmlFor="email" className="leading-7 text-sm  ">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Insira seu email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
                  data-ddg-inputtype="identities.emailAddress"
                  data-ddg-autofill="true"
                  style={{
                    backgroundSize: "auto 26px",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                    backgroundOrigin: "content-box",
                    backgroundImage:
                      'url("chrome-extension://bkdgflcldnnnapblkhphbgpggdiikppg/img/logo-small-grayscale.svg")',
                    transition: "background 0s ease 0s",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                 <ValidationError prefix="Email" field="email" errors={state.errors} />
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm  ">
                    Celular*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Insira o seu celular"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm  ">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Insira o nome da sua empresa"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="services" className="leading-7 text-sm">Serviço*</label>
                        <select
                          id="services"
                          name="services"
                          value={selectedService || ''}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                          <option value="" disabled>
                            Selecione um serviço
                          </option>
                          {services.map((service: any) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                </div>
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Conte nos mais sobre o que deseja.
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Insira a sua mensagem."
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 mb-5 w-4 accent-red-600"
                />
                <p>
                  Ao informar meus dados, eu concordo com a{" "}
                  <a href="" className="text-red-600 hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  disponibilizada no site.
                </p>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 w-4 accent-red-600"
                />
                <p>
                  Aceito receber comunicados sobre eventos, produtos e serviços
                  da Sonnen Software.
                </p>
              </div>

              <button className="flex items-center justify-between w-40 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50" type="submit" disabled={state.submitting}>
                Enviar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ValidationError errors={state.errors} />
              <p className="text-xs text-gray-500 mt-3">
                Cheque a aba spam em seu e-mail caso não houver uma resposta em
                até 7 dias, caso o contrario entre em contato com o suporte |
                +55 (71) 9961-84966
              </p>
             
      
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Message;
