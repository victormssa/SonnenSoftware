import React from "react";
import fotoVictor from "./../../assets/imgs/fotoVictor.png";
import fotoBruno from "./../../assets/imgs/fotoBruno.jpeg";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const AboutTeam: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-[#101010]">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800  lg:text-3xl dark:text-white">
            Nossa equipe <span className="font-bold text-red-600">Executiva</span>
          </h1>

          <div className="grid grid-cols-2 gap-8 mt-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-2 xl:max-w-2xl xl:ml-[25rem]">
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-full rounded-xl aspect-square"
                src={fotoBruno}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Bruno Seixas
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Co-Founder | Back-End Developer
              </p>

              <div className="flex mt-3 -mx-2">
                <a
                  href="https://www.linkedin.com/in/bruno-seixas-0660301a1/"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin size={24}> </AiFillLinkedin>
                </a>

                <a
                  href="https://www.instagram.com/seixasbrunos/"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  aria-label="Instagram"
                >
                  <AiFillInstagram size={24}> </AiFillInstagram>
                </a>

                <a
                  href="https://github.com/iBrunos"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  aria-label="Github"
                >
                  <AiFillGithub size={24}> </AiFillGithub>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="object-cover w-full rounded-xl aspect-square"
                src={fotoVictor}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Victor Alves
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Co-Founder | Front-End Developer
              </p>

              <div className="flex mt-3 -mx-2">
                <a
                  href="https://www.linkedin.com/in/victor-manoel-soares-silva-alves/"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin size={24}> </AiFillLinkedin>
                </a>

                <a
                  href="https://www.instagram.com/victorssalves/"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  aria-label="Instagram"
                >
                  <AiFillInstagram size={24}> </AiFillInstagram>
                </a>

                <a
                  href="https://github.com/victormssa"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  aria-label="Github"
                >
                    <AiFillGithub size={24}> </AiFillGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTeam;
