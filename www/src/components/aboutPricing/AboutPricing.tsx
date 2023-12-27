import React from "react";

const AboutPricing: React.FC = () => {
  return (
    <>
      <section className="" id="planos">
      <div className="bg-zinc-900">
    <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white lg:text-3xl">Conheça os <span className="text-red-600">Nossos Planos</span></h1>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-100 xl:mt-6 ">
        Descubra a excelência da Sonnen Software com nossos planos exclusivos. Oferecemos opções personalizadas para atender às suas necessidades, com tecnologias modernas e com preços transparentes e benefícios exclusivos.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-auto p-8 space-y-5 text-center shadow-xl rounded-lg bg-white">
                <p className="font-medium text-black uppercase ">plano <span className="text-red-600 font-bold">Essencial & Simples</span> </p>
                <div>
                    <h2 className="text-3xl font-medium text-black">
                     <span className="text-red-600 line-through">De 4x R$ 374,99</span>
                    </h2>
                    <h2 className="text-4xl font-semibold text-black">
                    <span className="text-green-600">Por 4x R$ 325,99</span><br /><span className="text-xl font-semibold">SEM JUROS</span><br /> <span className="text-xl font-medium bg-green-600 text-white rounded-xl px-2">20% OFF</span>
                    </h2>
                    
                </div>
                
                <h2 className="text-4xl font-medium text-black uppercase ">
                     OU
                </h2>
                <div>
                    <h2 className="text-3xl font-medium text-black">
                     <span className="text-red-600 line-through">R$ 1.499,99</span>
                    </h2>
                    <h2 className="text-5xl font-semibold text-black">
                    <span className="text-green-600">R$ 1.299,99</span><br /> <span className="text-xl font-medium bg-green-600 text-white rounded-xl px-2">20% OFF</span>
                    </h2>
                </div>

                <p className="font-medium text-black ">PROMOÇÃO DE INAUGURAÇÃO</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold">
                ASSINE AGORA
                </button>
            </div>

            <div className="w-auto pt-0 px-0 space-y-7 text-center  rounded-lg shadow-xl bg-white">
            <div className="py-2 bg-gradient-to-r from-amber-200 to-yellow-500 rounded-t shadow-md">
                <p className="w-full text-sm text-center text-zinc-900 uppercase rounded-t">MELHOR OFERTA</p>
                <p className=" text-zinc-900 uppercase">Plano <span className="font-semibold text-red-700">PRESENÇA ONLINE CONTINUA</span></p>
            </div>
                

                <div>
                    <h2 className="text-3xl font-medium  uppercase text-red-600 line-through ">
                        R$ 1.499,99 <span className="text-lg text-black font-normal">/Mensal</span>
                    </h2>
                    <h2 className="text-4xl font-bold pb-2 uppercase text-green-600 ">
                        R$ 1.299,99 <span className="text-lg text-black font-normal">/Mensal</span>
                    </h2>
                    
                </div>
                <span className="font-semibold shadow-md text-2xl text-yellow-600 px-2 bg-gradient-to-r from-amber-200 to-yellow-500">-20% OFF</span>
                <h2 className="text-4xl font-medium text-black  uppercase ">
                     OU
                </h2>
                <div>
                    <h2 className="text-3xl font-medium text-red-600  uppercase line-through ">
                        R$ 17.999,99<span className="text-lg text-black font-normal"> /Anual</span>
                    </h2>
                    <h2 className="text-4xl font-bold text-green-600  uppercase ">
                        R$ 14.399,99 <span className="text-lg text-black font-normal">/Anual</span> <br /> <span className="font-semibold shadow-md text-2xl text-yellow-600 px-2 bg-gradient-to-r from-amber-200 to-yellow-500">-20% OFF</span>
                    </h2>
                </div>

                <p className="font-medium text-black pt-3">PROMOÇÃO DE INAUGURAÇÃO</p>

                <button className="w-96 px-4 py-2 tracking-wide text-white font-semibold capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-black focus:ring-opacity-80">
                ASSINE AGORA
                </button>
            </div>
            
            <div className="w-auto p-8 space-y-5 text-center shadow-xl rounded-lg bg-white">
                <p className="font-medium text-black uppercase ">plano <span className="text-red-600 font-bold">À SUA MEDIDA</span> </p>
                <div>
                    <h2 className="text-3xl font-medium text-black">
                     <span className="text-red-600 line-through">De 12x R$ 416,99</span>
                    </h2>
                    <h2 className="text-4xl font-semibold text-black">
                    <span className="text-green-600">Por 12x R$ 332,99</span><br /><span className="text-xl font-semibold">SEM JUROS</span><br /> <span className="text-xl font-medium bg-green-600 text-white rounded-xl px-2">20% OFF</span>
                    </h2>
                    
                </div>
                
                <h2 className="text-4xl font-medium text-black uppercase ">
                     OU
                </h2>
                <div>
                    <h2 className="text-3xl font-medium text-black">
                     <span className="text-red-600 line-through">R$ 4.999,99</span>
                    </h2>
                    <h2 className="text-5xl font-semibold text-black">
                    <span className="text-green-600">R$ 3.999,99</span><br /> <span className="text-xl font-medium bg-green-600 text-white rounded-xl px-2">20% OFF</span>
                    </h2>
                </div>

                <p className="font-medium text-black ">PROMOÇÃO DE INAUGURAÇÃO</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80 font-semibold">
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