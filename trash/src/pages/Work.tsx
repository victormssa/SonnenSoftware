import Header from "../../../client/src/components/header/Header";
import Footer from "../../../client/src/components/footer/Footer";
import usePageTitle from '../hooks/UsePageTitle';

const Work = () => {
  return (
    <>
    {usePageTitle('Nosso trabalho | Archei Software')}
      <Header />
      <Footer />
    </>
  );
};

export default Work;