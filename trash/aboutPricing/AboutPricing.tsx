import React from "react";

const AboutPricing: React.FC = () => {
  return (
    <>
      <section className="" id="final">
      <div className="bg-white dark:bg-[#101010]">
    <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Nossos planos</h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-12 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase dark:text-gray-300">plano Start</p>
                <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
                    R$149,90
                </h2>
                <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    / R$1.490,90
                </h2>

                <p className="font-medium text-gray-500 dark:text-gray-300">Mensalmente / Anualmente</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                ASSINE AGORA
                </button>
            </div>

            <div className="w-full p-8 space-y-9 text-center bg-red-600 rounded-lg">
                <p className="font-medium mb-[-1rem] text-gray-200 uppercase">Plano Premium</p>
                <p className="font-bold text-xl text-gray-200 uppercase">MELHOR OFERTA</p>

                <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
                    R$249,90
                </h2>
                <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    / R$2.490,90
                </h2>

                <p className="font-medium text-gray-200">Mensalmente / Anualmente</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-red-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                ASSINE AGORA
                </button>
            </div>

            <div className="w-full p-8 space-y-12 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase dark:text-gray-300">plano Enterprise</p>
                <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
                    R$349,00
                </h2>
                <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    / R$3.490,90
                </h2>

                <p className="font-medium text-gray-500 dark:text-gray-300">Mensalmente / Anulamente</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                    ASSINE AGORA
                </button>
            </div>
        </div>
    </div>
</div>
      </section>
    </>
  );
};

export default AboutPricing;