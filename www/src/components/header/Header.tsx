"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
import headerLogoBlack from "./../../../public/assets/images/logoSonnen.png";
import headerLogoWhite from "./../../../public/assets/images/logoSonnen_wBg.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

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
  const specialPages = ["/login", "/contato"];
  const isSpecialPage = specialPages.includes(pathname);
  const isActive = (path: string) => {
    return pathname === path
      ? " text-red-600"
      : "text-white";
  };

  const isActive2 = (path: string) => {
    return pathname === path
      ? " sm:bg-none bg-white text-red-600 "
      : " text-white";
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all ${
        isTop && !isSpecialPage ? "bg-transparent" : "shadow bg-gradient-to-tr from-red-600 to-rose-800"
      }`}
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center justify-between">
            <Image
              className={`w-40 h-auto transition-all `}
              src={isTop && !isSpecialPage ?  headerLogoBlack : headerLogoBlack}
              alt=""
            />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <div
                className={`md:hidden lg:hidden h-[2rem] pr-[1rem] bg-gray-700 lg:mr-10 sm:mr-0 lg:pr-4  border-2 border-red-500 dark:border-red-500 rounded-full`}
              >
                
                  </div>
              <button
                onClick={toggleMenu}
                type="button"
                className=" ml-2 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  className={isOpen ? "hidden" : "w-6 h-6"}
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
                  className={isOpen ? "w-6 h-6" : "hidden"}
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
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
            <Link
                href="/#planos"
                className={`px-3 py-2 duration-200 hover:text-black font-semibold mr-4 ${isActive(
                  "/#planos"
                )} ${
                  isTop && !isSpecialPage ?  "lg:hover:text-red-600 " : " hover:text-rose-300"
                }`}
              >
                Nossos Planos
              </Link>
              <Link
                href="/contato"
                className={`px-3 py-2 duration-200 hover:text-black font-semibold lg:border-2 sm:border-0 border-red-600 mr-4 ${isActive2(
                  "/contato"
                )} ${
                  isTop && !isSpecialPage ?  "lg:hover:bg-red-600 " : "border-white lg:hover:bg-white hover:text-red-600"
                }`}
              >
                Solicite um orçamento
              </Link>
              <div
                className={`md:hidden lg:hidden 
                    ml-10 w-[4.8rem] bg-gray-700 lg:mr-10 sm:mr-0 lg:pr-4  border-2 border-red-500 dark:border-red-500 rounded-full
                `}
              >
              </div>
              <Link
                href="/login"
                className={`px-3 py-2 duration-200 sm:hover:bg-none hover:text-black border-red-600 font-semibold lg:border-2 sm:border-0 rounded-lg ml-2 ${isActive2(
                  "/login"
                )} ${
                  isTop && !isSpecialPage ?  "lg:hover:bg-red-600 " : "border-white lg:hover:bg-white hover:text-red-600"
                }`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
