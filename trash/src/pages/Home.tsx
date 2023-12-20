import Header from "../../../client/src/components/header/Header";
import Footer from "../../../client/src/components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';
import HeroMain from '../../../client/src/components/heroMain/HeroMain';
import AboutArchei from '../../../client/src/components/aboutArchei/AboutArchei';
import AboutPricing from "../../../client/src/components/aboutPricing/AboutPricing";
import {AiOutlineArrowDown} from "react-icons/ai";



const Home = () => {
  return (
    <>
      {usePageTitle('Archei Software')}

        <Header />
        <HeroMain />
        <a href="#final" className="fixed z-10 bottom-4 right-4 bg-red-500 text-white p-3 rounded-md hover:bg-red-600 hover:text-black transition duration-600 ease-in-out">
          <AiOutlineArrowDown size={"2rem"}/>
        </a>
        <AboutArchei />
        <AboutPricing />
        <Footer />
      
    </>
  );
};

export default Home;