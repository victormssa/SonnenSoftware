"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import headerLogoBlack from "./../../../public/assets/images/logoSonnen.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [mostrarLista, setMostrarLista] = useState(false);

  const toggleLista = () => {
    setMostrarLista(!mostrarLista);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const isTop = scrolled < 20; // You can adjust this threshold
      setIsTop(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const specialPages = ["/login", "/contato", "/politicas/privacidade"];
  const isSpecialPage = specialPages.includes(pathname);
  const isActive = (path: string) => {
    return pathname === path ? " text-red-300" : "";
  };

  const isActive2 = (path: string) => {
    return pathname === path
      ? " sm:bg-none text-rose-300 lg:bg-white lg:text-red-600 "
      : "";
  };

  return (
    <nav
      className={`fixed w-full z-20 transition-all  ${
        isTop && !isSpecialPage && !isOpen
          ? "bg-transparent"
          : "shadow-2xl bg-gradient-to-tr from-red-600 to-rose-800"
      }`}
    >
      <div className=" px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center justify-between lg:ml-20 ml-0"
            >
              <Image
                className={`w-40 h-auto transition-all `}
                src={
                  isTop && !isSpecialPage ? headerLogoBlack : headerLogoBlack
                }
                alt=""
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className=" ml-2 text-white hover:text-red-500 focus:outline-none focus:text-red-500"
                aria-label="toggle menu"
              >
                <svg
                  className={isOpen ? "hidden" : "w-10 h-10"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  className={isOpen ? "w-10 h-10" : "hidden"}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full h-auto px-6 py-0 bg-white mt-4 lg:h-auto lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center transition-transform duration-300 ease-in-out transform ${
              isOpen
                ? "translate-x-0 opacity-100 bg-gradient-to-tr from-red-600 to-rose-800"
                : " -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
            <Link
                href="/sobre/sonnen_software"
                className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold mr-4 lg:border-y-0 border-b lg:w-auto w-screen text-center ${isActive(
                  "/sobre/sonnen_software"
                )} ${
                  isTop && !isSpecialPage
                    ? "lg:hover:text-red-600 hover:text-rose-300 "
                    : " hover:text-rose-300"
                }`}
              >
                Sobre Nós
              </Link>
              <Link
                href="/#planos"
                className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold mr-4 lg:border-y-0 border-b lg:w-auto w-screen text-center ${isActive(
                  "/#planos"
                )} ${
                  isTop && !isSpecialPage
                    ? "lg:hover:text-red-600 hover:text-rose-300 "
                    : " hover:text-rose-300"
                }`}
              >
                Nossos Planos
              </Link>
              <div className="flex flex-col">
                <button
                  className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold mr-4 lg:border-y-0 border-b lg:w-auto w-screen flex items-center gap-1 justify-center ${isActive(
                    "/#planos"
                  )} ${
                    isTop && !isSpecialPage
                      ? "lg:hover:text-red-600 hover:text-rose-300 "
                      : " hover:text-rose-300"
                  }`}
                  onClick={toggleLista}
                >
                  Nosso Trabalho{" "}
                  {mostrarLista ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
                {mostrarLista && (
                  <div
                    className="lg:absolute top-[2rem] left-[19rem] flex flex-col lg:px-2 lg:py-2 lg:rounded-xl rounded-none lg:gap-3 lg:border-b-0 border-b-2 lg:bg-transparent bg-white
                        "
                  >
                    <Link
                      className={`lg:bg-red-600 lg:hover:bg-red-500 lg:text-white text-black py-1 px-2 lg:w-40 lg:rounded-lg lg:border-b-0 border-b-2 text-center ${isActive(
                        "/sobre/desenvolvimento_sites"
                      )}`}
                      href="/sobre/desenvolvimento_sites"
                      onClick={() => {
                        setIsOpen(false);
                        toggleLista();
                      }}
                    >
                      Desenvolvimento de Sites
                    </Link>

                    <Link
                      className={`lg:bg-red-600 lg:hover:bg-red-500 lg:text-white text-black py-1 px-2 lg:w-40 lg:rounded-lg lg:border-b-0 border-b-2 text-center ${isActive(
                        "/sobre/desenvolvimento_apps"
                      )}`}
                      href="/sobre/desenvolvimento_apps"
                      onClick={() => {
                        setIsOpen(false);
                        toggleLista();
                      }}
                    >
                      Desenvolvimento de Apps
                    </Link>
                    <Link
                      className={`lg:bg-red-600 lg:hover:bg-red-500 lg:text-white text-black py-1 px-2 lg:w-40 lg:rounded-lg lg:border-b-0 border-b-2 text-center ${isActive(
                        "/sobre/otimizacao_sistemas"
                      )}`}
                      href="/sobre/otimizacao_sistemas"
                      onClick={() => {
                        setIsOpen(false);
                        toggleLista();
                      }}
                    >
                      Otimização de Sistemas
                    </Link>
                    <Link
                      className={`lg:bg-red-600 lg:hover:bg-red-500 lg:text-white text-black py-1 px-2 lg:w-40 lg:rounded-lg text-center ${isActive(
                        "/sobre/solucoes_personalizadas"
                      )}`}
                      href="/sobre/solucoes_personalizadas"
                      onClick={() => {
                        setIsOpen(false);
                        toggleLista();
                      }}
                    >
                      Soluções Personalizadas
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/contato"
                className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold lg:border-2 border-b lg:w-auto w-screen mr-4 text-center ${isActive2(
                  "/contato"
                )} ${
                  isTop && !isSpecialPage
                    ? "lg:hover:bg-red-600 lg:border-red-600 lg:hover:text-black hover:text-rose-300"
                    : "lg:border-white lg:hover:bg-white lg:hover:text-red-600 hover:text-rose-300"
                }`}
              >
                Solicite um orçamento
              </Link>
              <div
                className={`md:hidden lg:hidden 
                    ml-10 w-[4.8rem] bg-gray-700 lg:mr-10 sm:mr-0 lg:pr-4 lg:border-2 border-red-500  rounded-full
                `}
              ></div>
              <Link
                href="/login"
                className={`px-3 py-2 duration-200 sm:hover:bg-none text-white hover:text-black font-semibold lg:border-2 border-b-0 lg:rounded-lg rounded-none lg:border-b-2 lg:w-auto w-screen text-center ${isActive2(
                  "/login"
                )} ${
                  isTop && !isSpecialPage
                    ? "lg:hover:bg-red-600 lg:border-red-600 lg:hover:text-black hover:text-rose-300"
                    : "border-white lg:hover:bg-white lg:hover:text-red-600 hover:text-rose-300"
                }`}
              >
                Login
              </Link>
              <span className="lg:hidden flex w-full h-20 shadow-inner bg-red-600" />
            </div>
            <p
              className={`lg:text-2xl px-3 py-2 duration-200 font-medium mr-4 lg:border-y-0 border-y-2 lg:w-auto w-screen text-white lg:ml-20 lg:flex items-center gap-2  hidden`}
            >
              <BiSolidPhoneCall />
              (71) 9961-84966
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
