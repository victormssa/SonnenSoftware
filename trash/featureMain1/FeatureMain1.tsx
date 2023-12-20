import { MdOutlineDevices } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";

const FeatureMain1 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl lg:text-5xl font-black title-font text-gray-900 dark:text-white">
              O que nós fazemos
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <MdOutlineDevices></MdOutlineDevices>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Aplicações Modernas | Modern Applications
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    A Archei destaca-se pelo
                    desenvolvimento de aplicações web, mobile e desktop com
                    tecnologias de ponta. Nossa missão é oferecer soluções
                    inovadoras e personalizadas, garantindo a satisfação dos nossos clientes. Estamos empenhados
                    em entregar projetos de alta qualidade, mantendo prazos e
                    compromissos.
                  </p>
                  <a
                    className="mt-3 text-red-500 inline-flex items-center"
                    href="/pt-br/modern-applications"
                  >
                    Descubra mais
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <FaShoppingCart></FaShoppingCart>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Comércio Digital | Digital Commerce
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Nosso principal objetivo é criar experiências de compra
                    excepcionais para os consumidores, garantindo que cada
                    interação seja conveniente, envolvente e personalizada.
                    Utilizamos tecnologias de ponta e estratégias inovadoras
                    para impulsionar as vendas, aumentar a visibilidade da marca
                    e otimizar a jornada do cliente.
                  </p>
                  <a
                    className="mt-3 text-red-500 inline-flex items-center"
                    href="/pt-br/digital-commerce"
                  >
                    Descubra mais
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <HiPaintBrush></HiPaintBrush>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Experiência do Usúario | User Experience
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Nossos talentosos designers e desenvolvedores combinam
                    habilidades técnicas com criatividade para projetar
                    interfaces atraentes, fluxos de navegação intuitivos e
                    interações envolventes. Utilizamos as melhores práticas de
                    design de UX, realizando testes de usabilidade e iterando
                    constantemente com base no feedback dos usuários.
                  </p>
                  <a
                    className="mt-3 text-red-500 inline-flex items-center"
                    href="/pt-br/user-experience"
                  >
                    Descubra mais
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureMain1;
