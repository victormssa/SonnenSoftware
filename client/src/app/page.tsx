import HeroMain from "@/components/heroMain/HeroMain";
import AboutPricing from "@/components/aboutPricing/AboutPricing";

const Home: React.FC = () => {
  return (
    <main className="w-full h-auto">
      <HeroMain />
      <AboutPricing/>
    </main>
  );
};

export default Home;
