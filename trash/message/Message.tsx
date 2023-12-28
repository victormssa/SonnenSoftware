import { useState } from "react";
import emailjs from "@emailjs/browser";
const Message: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState<string>("");

  const formatCurrency = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/[^0-9]/g, "");
    if (!numericValue) {
      return "";// Se não houver valor, não mostre nada
    }
    // Divida por 100 para obter o valor correto
    const floatValue = parseFloat(numericValue) / 100;
    // Formate os milhares com um ponto e os centavos com uma vírgula
    const formattedValue = `R$: ${floatValue
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
    return formattedValue;
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(formatCurrency(inputValue));
  };
  function sendEmail(e: any) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    console.log(templateParams);
    emailjs
      .send(
        "service_qb7vvtg",
        "template_ftk18x6",
        templateParams,
        "Vfrdy_j6MLcNUX3aE"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO:", err.text);
        }
      );
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
                Deseja solicitar um orçamento?
              </h2>
              <p>Alcance novas formas de transformar sua empresa</p>
            </div>
            <form
              onSubmit={sendEmail}
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
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm  ">
                    Cargo/posição
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Insira o seu cargo/posição"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm  ">
                    Pretensão de gasto total
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder="R$: 0,00"
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Mensagem*
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
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2 w-4 accent-red-600"
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
                  da Archei Software.
                </p>
              </div>

              <button className="flex items-center justify-between w-40 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
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
              <p className="text-xs text-gray-500 mt-3">
                Cheque a aba spam em seu e-mail caso não houver uma resposta em
                até 7 dias, caso o contrario entre em contato com o suporte |
                +55 (71) 99386-0508
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Message;
