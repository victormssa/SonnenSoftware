import Header from "@/components/header/Header";
import HeroMain from "@/components/heroMain/HeroMain";
import Footer from "@/components/footer/Footer";

const Home: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <Header />
      <HeroMain />
      <Footer />
    </main>
  );
};

export default Home;
