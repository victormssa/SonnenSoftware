import Header from "../../../client/src/components/header/Header";
import Footer from "../../../client/src/components/footer/Footer";
import usePageTitle from "../hooks/UsePageTitle";
import AboutArchei from "../../../client/src/components/aboutArchei/AboutArchei"

const About = () => {
  return (
    <>
      {usePageTitle("Sobre a Archei | Archei Software")}
      <Header />
      <AboutArchei />
      <Footer />
    </>
  );
};

export default About;
