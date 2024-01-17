"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface Credentials {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const tryLogging = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://midgard-sonnen.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();

        var existingCookies = Cookies.get();

        // Verifica se já existe um 'session_info'
        if ('session_info' in existingCookies) {
          // Se existir, atualiza apenas o campo 'tk'
          var sessionInfo = JSON.parse(existingCookies['session_info']);
          sessionInfo.tk = data.token;

          // Atualiza o cookie 'session_info' com o novo valor
          Cookies.set('session_info', JSON.stringify(sessionInfo), { expires: 1, secure: true });
        } else {
          // Se não existir, cria um novo cookie 'session_info'
          Cookies.set('session_info', JSON.stringify({ tk: data.token }), { expires: 1, secure: true });
        }

        // Redirecionar para a rota "perfil/{id}" com base no ID obtido da resposta do backend
        router.push(`/perfil/${data.userId}`);
      } else {
        const error = new Error(response.statusText) as Error;
        console.error("Erro no login:", error.message);
        // Tratar erro de login aqui, exibir mensagem, etc.
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro:", error.message);
        // Tratar erros de rede, etc.
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
  };

  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700 to-zinc-950">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-950 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Sonnen Software
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Bem vindo! A Sonnen Software agradece mais um dia com você, e lembre-se
                  que qualquer caminhada começa com um passo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1 flex flex-col items-center">
              <div className="flex flex-col align-middle items-center">

                <h2 className="text-xl mt-2 text-white drop-shadow-md">Área de <span className="text-red-600">Autenticação</span>.</h2>
                <h2 className="text-3xl mt-2 text-white font-semibold drop-shadow-md">Bem-vindo,</h2>
                <p className="mt-2 text-gray-400 ">
                  Faça o Login para acessar sua conta.
                </p>
              </div>

              <div className="">
                <form onSubmit={tryLogging}>
                  <div className="relative flex items-center mt-8">
                    <span className="absolute">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>

                    <input type="text"
                      name="username"
                      id="username"
                      onChange={handleInputChange}
                      required className="block w-full py-3  border rounded-lg px-11 bg-transparent text-gray-300 border-gray-600 focus:border-red-600  focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Nome de Usúario" />
                  </div>


                  <div className="mt-3">
                    <p className="text-sm text-right text-gray-400">
                      {" "}
                      <Link
                        href="#"
                        className="hover:text-red-500 focus:outline-none focus:underline hover:underline cursor-not-allowed"
                      >
                        Esqueci minha senha
                      </Link>
                    </p>
                    <div className="relative flex items-center mt-3">
                      <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>

                      <input type="password"
                        name="password"
                        id="password"
                        onChange={handleInputChange}
                        className="block w-full px-10 py-3 border rounded-lg bg-transparent text-gray-300 border-gray-600 focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder=" Senha" />
                    </div>

                    <div className="flex items-start mt-3 ">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded focus:bg-red-400 focus:ring-3 focus:ring-primary-300 accent-red-600 cursor-pointer"
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-400 cursor-pointer">
                          Lembre-se de mim
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"

                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-50"
                    >
                      Entrar
                    </button>
                  </div>
                </form>

                <div className="flex flex-col justify-center items-center">
                  <p className="mt-6 text-sm text-center text-white">
                    Tem interesse em uma vaga?

                  </p>
                  <Link
                    href="#"
                    className="text-red-500 focus:outline-none focus:underline hover:underline cursor-not-allowed"
                  >
                    Inscreva-se no nosso Banco de Talentos.
                  </Link>
                </div>

              </div>
              <div className="flex gap-1 mt-4">
                <p className="text-white">Protected by Next Auth V5</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default LoginForm;
