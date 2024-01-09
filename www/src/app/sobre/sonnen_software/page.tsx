import AboutSonnen from '@/components/aboutSonnen/AboutSonnen';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sobre Nós'
}
const SobreSonnen: React.FC = () => {
  return (
    <main className="w-screen h-auto pt-28 bg-zinc-900">
      <AboutSonnen />
    </main>
  );
};

export default SobreSonnen;