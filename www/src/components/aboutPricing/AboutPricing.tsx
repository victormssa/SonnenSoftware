import React from "react";

const AboutPricing: React.FC = () => {
  return (
    <>
      <section className="" id="planos">
      <div className="bg-white">
    <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl">Nossos planos</h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-black xl:mt-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-12 text-center shadow-xl rounded-lg">
                <p className="font-medium text-black uppercase ">plano <span className="text-red-600 font-bold">Essencial & Simples</span> </p>
                <h2 className="text-4xl font-bold  uppercase ">
                    <span className="text-4xl">ATÉ</span> 4x R$ 374,99 <br /> <span className="text-2xl">Sem juros</span>
                </h2>
                <h2 className="text-4xl font-semibold text-black uppercase ">
                     OU
                </h2>
                <h2 className="text-4xl font-semibold text-black uppercase ">
                R$ 1499,99<br /> <span className="text-2xl">-20% OFF</span>
                </h2>

                <p className="font-medium text-black ">PROMOÇÃO DE INAUGURAÇÃO</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80">
                ASSINE AGORA
                </button>
            </div>

            <div className="w-full pt-0 px-0 space-y-9 text-center  rounded-lg shadow-xl">
            <p className="w-full py-2 text-sm text-center text-white uppercase bg-red-500 rounded-t">RECOMENDADO</p>
                <p className="font-medium mb-[-1rem] text-black uppercase">Plano <span className=" font-bold text-red-600">PRESENÇA ONLINE CONTINUA</span></p>
                <p className="font-bold text-xl text-black uppercase">MELHOR OFERTA</p>

                <h2 className="text-4xl font-bold  uppercase text-black">
                    R$ 1.499,99 <span className="text-lg text-black">/Mensal</span>
                </h2>
                <h2 className="text-4xl font-semibold text-black uppercase ">
                     OU
                </h2>
                <h2 className="text-4xl font-semibold text-black uppercase ">
                    R$ 17.999,99 <span className="text-lg text-black">/Anual</span> <br /> <span className="text-2xl">-20% OFF</span>
                </h2>

                <p className="font-medium text-black">PROMOÇÃO DE INAUGURAÇÃO</p>

                <button className="w-96 px-4 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-400 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-black focus:ring-opacity-80">
                ASSINE AGORA
                </button>
            </div>

            <div className="w-full p-8 space-y-12 text-center shadow-xl rounded-lg">
                <p className="font-medium text-black uppercase ">plano <span className="text-red-600 font-bold">Á SUA MEDIDA</span></p>
                <h2 className="text-4xl font-bold  uppercase ">
                   ATÉ 12x R$ 416,99 <span className="text-2xl"> <br />Sem juros</span>
                </h2>
                <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
                     OU
                </h2>
                <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
                     R$ 4.999,99 <br /> <span className="text-2xl">-20% OFF</span>
                </h2>

                <p className="font-medium text-black ">PROMOÇÃO DE INAUGURAÇÃO</p>

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