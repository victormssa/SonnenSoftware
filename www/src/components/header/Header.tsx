"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
import headerLogoBlack from "./../../../public/assets/images/logoSonnen.png";
import headerLogoWhite from "./../../../public/assets/images/logoSonnen.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path
      ? "dark:text-red-600 text-red-600"
      : "dark:text-white text-black";
  };

  const isActive2 = (path: string) => {
    return pathname === path
      ? " sm:bg-none bg-white text-red-600 "
      : "dark:text-white text-black";
  };


  return (
    <nav className="fixed w-full shadow bg-[#ff1715] z-10">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center justify-between">
              <Image
                className={`w-40 h-auto`}
                src={ headerLogoWhite}
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
                href="/contato"
                className={`px-3 py-2 duration-200 hover:text-red-600 lg:hover:bg-white font-semibold lg:border-2 sm:border-0 border-white mr-4 ${isActive2(
                  "/contato"
                )}`}
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
                className={`px-3 py-2 duration-200  lg:hover:bg-white  sm:hover:bg-none hover:text-red-500 lg:hover:text-white lg:hover:dark:text-red-600 dark:hover:text-red-500 border-white  font-semibold lg:border-2 sm:border-0 rounded-lg ml-2 ${isActive2(
                  "/login"
                )}`}
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
