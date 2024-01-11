import AboutSonnen from '@/components/aboutSonnen/AboutSonnen';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sobre Nós'
}
const SobreSonnen: React.FC = () => {
  return (
    <main className="w-screen h-auto pt-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950">
      <AboutSonnen />
    </main>
  );
};

export default SobreSonnen;