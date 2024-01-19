"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";
import headerLogoBlack from "./../../../public/assets/images/logoSonnen.png";
import { useAuth } from "../authContext/AuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [mostrarLista, setMostrarLista] = useState(false);
  const { logout, isLoggedIn, userId } = useAuth();


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
      className={`fixed w-full z-20 transition-all  ${isTop && !isSpecialPage && !isOpen
        ? "bg-transparent"
        : "shadow-2xl bg-gradient-to-tr from-red-600 to-rose-800 "
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
            className={`absolute inset-x-0 z-20 w-full h-auto px-6 py-0 bg-white mt-4 lg:h-auto lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen
              ? "translate-x-0 opacity-100 bg-gradient-to-tr from-red-600 to-rose-800"
              : " -translate-x-full"
              }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                href="/sobre/sonnen_software"
                className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold mr-4 lg:border-y-0 border-b lg:w-auto w-screen text-center ${isActive(
                  "/sobre/sonnen_software"
                )} ${isTop && !isSpecialPage
                  ? "lg:hover:text-red-600 hover:text-rose-300 "
                  : " hover:text-rose-300"
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  setMostrarLista(false);
                }}
              >
                Sobre Nós
              </Link>
              <Link
                href="/#planos"
                className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold mr-4 lg:border-y-0 border-b lg:w-auto w-screen text-center ${isActive(
                  "/#planos"
                )} ${isTop && !isSpecialPage
                  ? "lg:hover:text-red-600 hover:text-rose-300 "
                  : " hover:text-rose-300"
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  setMostrarLista(false);
                }}
              >
                Nossos Planos
              </Link>
              <div className="flex flex-col">
                <button
                  className={`px-3 py-2 duration-200 text-white hover:text-black border-rose-800 font-semibold mr-4 lg:border-y-0 border-b lg:w-auto w-screen flex items-center gap-1 justify-center ${isActive(
                    "/#planos"
                  )} ${isTop && !isSpecialPage
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
                )} ${isTop && !isSpecialPage
                  ? "lg:hover:bg-red-600 lg:border-red-600 lg:hover:text-black hover:text-rose-300"
                  : "lg:border-white lg:hover:bg-white lg:hover:text-red-600 hover:text-rose-300"
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  setMostrarLista(false);
                }}
              >
                Solicite um orçamento
              </Link>
              <div
                className={`md:hidden lg:hidden 
                    ml-10 w-[4.8rem] bg-gray-700 lg:mr-10 sm:mr-0 lg:pr-4 lg:border-2 border-red-500  rounded-full
                `}
              ></div>
              {isLoggedIn ? (
                <div className="ml-8 flex w-auto">
                  <button onClick={() => setIsOpen2(!isOpen2)}>
                    <img className="object-fill w-16 h-auto rounded-full ring ring-white hover:ring-red-600 cursor-pointer" src={`https://api.dicebear.com/7.x/identicon/svg?seed=${userId}&scale=80&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`} width={2000} height={2000} alt="" />
                    <span className="absolute top-12 right-[19rem] w-4 h-4 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="absolute top-12 right-[19rem] w-4 h-4 rounded-full bg-emerald-500 ring-0 ring-white"></span>
                  </button>
                  {isOpen2 && (
                    <div className="absolute top-[4.5rem] right-[13.5rem] mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 -z-10">
                      <div className="py-0 flex flex-col justify-center align-middle items-start" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link href={`/perfil/${userId}`} className="flex w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md" role="menuitem"><svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="currentColor"></path>
                          <path d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z" fill="currentColor"></path>
                        </svg>Ver Perfil</Link>
                        <Link href={`/perfil/${userId}/configuracoes`} className="flex w-full pl-2 pr-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md" role="menuitem"><svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.8199 22H10.1799C9.71003 22 9.30347 21.673 9.20292 21.214L8.79592 19.33C8.25297 19.0921 7.73814 18.7946 7.26092 18.443L5.42392 19.028C4.97592 19.1709 4.48891 18.9823 4.25392 18.575L2.42992 15.424C2.19751 15.0165 2.27758 14.5025 2.62292 14.185L4.04792 12.885C3.98312 12.2961 3.98312 11.7019 4.04792 11.113L2.62292 9.816C2.27707 9.49837 2.19697 8.98372 2.42992 8.576L4.24992 5.423C4.48491 5.0157 4.97192 4.82714 5.41992 4.97L7.25692 5.555C7.50098 5.37416 7.75505 5.20722 8.01792 5.055C8.27026 4.91269 8.52995 4.78385 8.79592 4.669L9.20392 2.787C9.30399 2.32797 9.71011 2.00049 10.1799 2H13.8199C14.2897 2.00049 14.6958 2.32797 14.7959 2.787L15.2079 4.67C15.4887 4.79352 15.7622 4.93308 16.0269 5.088C16.2739 5.23081 16.5126 5.38739 16.7419 5.557L18.5799 4.972C19.0276 4.82967 19.514 5.01816 19.7489 5.425L21.5689 8.578C21.8013 8.98548 21.7213 9.49951 21.3759 9.817L19.9509 11.117C20.0157 11.7059 20.0157 12.3001 19.9509 12.889L21.3759 14.189C21.7213 14.5065 21.8013 15.0205 21.5689 15.428L19.7489 18.581C19.514 18.9878 19.0276 19.1763 18.5799 19.034L16.7419 18.449C16.5093 18.6203 16.2677 18.7789 16.0179 18.924C15.7557 19.0759 15.4853 19.2131 15.2079 19.335L14.7959 21.214C14.6954 21.6726 14.2894 21.9996 13.8199 22ZM7.61992 16.229L8.43992 16.829C8.62477 16.9652 8.81743 17.0904 9.01692 17.204C9.20462 17.3127 9.39788 17.4115 9.59592 17.5L10.5289 17.909L10.9859 20H13.0159L13.4729 17.908L14.4059 17.499C14.8132 17.3194 15.1998 17.0961 15.5589 16.833L16.3799 16.233L18.4209 16.883L19.4359 15.125L17.8529 13.682L17.9649 12.67C18.0141 12.2274 18.0141 11.7806 17.9649 11.338L17.8529 10.326L19.4369 8.88L18.4209 7.121L16.3799 7.771L15.5589 7.171C15.1997 6.90671 14.8132 6.68175 14.4059 6.5L13.4729 6.091L13.0159 4H10.9859L10.5269 6.092L9.59592 6.5C9.39772 6.58704 9.20444 6.68486 9.01692 6.793C8.81866 6.90633 8.62701 7.03086 8.44292 7.166L7.62192 7.766L5.58192 7.116L4.56492 8.88L6.14792 10.321L6.03592 11.334C5.98672 11.7766 5.98672 12.2234 6.03592 12.666L6.14792 13.678L4.56492 15.121L5.57992 16.879L7.61992 16.229ZM11.9959 16C9.78678 16 7.99592 14.2091 7.99592 12C7.99592 9.79086 9.78678 8 11.9959 8C14.2051 8 15.9959 9.79086 15.9959 12C15.9932 14.208 14.2039 15.9972 11.9959 16ZM11.9959 10C10.9033 10.0011 10.0138 10.8788 9.99815 11.9713C9.98249 13.0638 10.8465 13.9667 11.9386 13.9991C13.0307 14.0315 13.9468 13.1815 13.9959 12.09V12.49V12C13.9959 10.8954 13.1005 10 11.9959 10Z" fill="currentColor"></path>
                        </svg>Configurações</Link>
                        <button onClick={() => {
                          setIsOpen(false);
                          setMostrarLista(false);
                          logout();
                        }} className="flex w-full px-2 py-2 text-sm border-t text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-b-md" role="menuitem"> <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                          </svg> Sair</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className={`px-3 py-2 duration-200 sm:hover:bg-none text-white hover:text-black font-semibold lg:border-2 lg:rounded-lg rounded-none lg:border-b-2 lg:w-auto w-screen text-center ${isActive2(
                    "/login"
                  )} ${isTop && !isSpecialPage
                    ? "lg:hover:bg-red-600 lg:border-red-600 lg:hover:text-black hover:text-rose-300"
                    : "border-white lg:hover:bg-white lg:hover:text-red-600 hover:text-rose-300"
                    }`}
                  onClick={() => {
                    setIsOpen(false);
                    setMostrarLista(false);
                  }}
                >
                  Login
                </Link>)}
              <span className="lg:hidden flex w-full h-20 shadow-2xl bg-gradient-to-br from-red-600 to-rose-800" />
            </div>
            <p
              className={`lg:text-2xl px-3 py-2 duration-200 font-medium mr-4 lg:border-y-0 border-y-2 lg:w-auto w-screen text-white lg:ml-0 lg:flex items-center gap-2  hidden`}
            >
              <BiSolidPhoneCall />
              (71) 99618-4966
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
