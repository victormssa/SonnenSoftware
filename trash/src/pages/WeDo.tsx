import Header from "../../../client/src/components/header/Header";
import Footer from "../../../client/src/components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const WeDo = () => {
  return (
    <>
    {usePageTitle('O que fazemos | Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default WeDo;