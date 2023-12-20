import {AiOutlineMail} from 'react-icons/ai';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


const Message: React.FC = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [company, setCompany] = useState('');
const [phone, setPhone] = useState('');

  function sendEmail (e: any) {
    e.preventDefault()
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }
    console.log(templateParams)
    emailjs.send("service_qb7vvtg", "template_ftk18x6", templateParams, "Vfrdy_j6MLcNUX3aE").then((response) => {
      console.log('Email enviado', response.status, response.text)
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log('ERRO:', err.text)
    })
  }
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="mapa"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=-13.004823580728337,-38.461108932664715&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(0.99) contrast(1) opacity(1)" }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex ">
          <form onSubmit={sendEmail} className="lg:w-1/3 md:w-1/2 bg-white dark:bg-[#101010] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
            <h2 className="text-black dark:text-white text-2xl mb-1 font-bold flex align-middle justify-center">
            <AiOutlineMail className="mt-1 mr-1"/>Solicitar Orçamento
            </h2>
            <div  className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm  dark:text-white"
              >
                Seu nome*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Insira seu nome'
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div  className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm  dark:text-white"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Insira seu email'
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
              /><div  className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm  dark:text-white"
              >
                Celular*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder='Insira o seu celular'
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
              <div  className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm  dark:text-white"
              >
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder='Insira o nome da sua empresa'
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div  className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm  dark:text-white"
              >
                Cargo/posição
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder='Insira o seu cargo/posição'
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm dark:text-white"
              >
                Mensagem*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='Insira a sua mensagem.'
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Enviar
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Cheque a aba spam em seu e-mail caso não houver uma resposta em até 7 dias, caso o contrario entre em contato com o suporte | +55 (71) 99386-0508
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Message;
