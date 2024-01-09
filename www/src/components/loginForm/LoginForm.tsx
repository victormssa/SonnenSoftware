"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import logo from './../../../public/assets/images/logoSonnen_wBg.png';
import setCookie from "./../../hooks/Cookie";

interface Credentials {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const newItem = { email, password };
  
    try {
      const response = await fetch('https://api-archei.onrender.com/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
  
      if (!response.ok) {
        // Se a resposta não for bem-sucedida (status code diferente de 2xx), lança um erro
        throw new Error('Erro na requisição');
      }
  
      const data = await response.json();
  
      if (data.message === 'Login realizado com sucesso') {
        router.push("/user/profile");
        setCookie("token", data.token, 7);
      } else {
        setPassword("");
        setEmail("");
        setError("Email ou senha incorretos.");
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      // Lógica para tratar erros, se necessário
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      const credentials: Credentials = { email, password };
      document.cookie = `credentials=${JSON.stringify(credentials)}; path=/`;
    } else {
      document.cookie =
        "credentials=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  useEffect(() => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const savedCredentialsCookie = cookies.find((cookie) =>
      cookie.startsWith("credentials=")
    );

    if (savedCredentialsCookie) {
      const savedCredentials: Credentials = JSON.parse(
        savedCredentialsCookie.split("=")[1]
      );
      setEmail(savedCredentials.email);
      setPassword(savedCredentials.password);
      setRememberMe(true);
    }
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
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
            <div className="flex-1">
              <div className="flex flex-col align-middle items-center">
              <Image src={logo} alt="Logo da Sonnen Software" className="w-40 h-auto"></Image>
              <h2 className="text-lg mt-2">Área de acesso da equipe Sonnen. <br /> Bem-vindo,</h2>
                <p className="mt-2 text-gray-500 ">
                  Faça o Login para acessar sua conta.
                </p>
              </div>
              {/* Restante do seu código... */}

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-black "
                    >
                      Endereço de Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="exemplo@sonnensoftware.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow-lg rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-black "
                      >
                        Senha
                      </label>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="●●●●●●●●"
                      required
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow-lg rounded-lg  focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40 font-black"
                    />
                    <div className="flex items-start mt-3">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:bg-red-400 focus:ring-3 focus:ring-primary-300 accent-red-500"
                          checked={rememberMe}
                          onChange={handleRememberMe}
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          Lembre-se de mim
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
                    >
                      Entrar
                    </button>
                  </div>
                </form>
                {error && (
                  <p className="mt-4 text-sm text-red-500 text-center">
                    {error}
                  </p>
                )}

                <p className="mt-6 text-sm text-center text-gray-400">
                  Tem interesse em uma vaga?{" "}
                  <a
                    href="#"
                    className="text-red-500 focus:outline-none focus:underline hover:underline cursor-not-allowed"
                  >
                    Inscreva-se
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
