import Desenvolvimento_Site from "@/components/desenvolvimentoSite/DesenvolvimentoSite";
const services = ['Desenvolvimento Web',  'Desenvolvimento Web + Desktop', 'Desenvolvimento Desktop', 'Desenvolvimento Desktop + Mobile', 'Desenvolvimento Mobile', 'Desenvolvimento Mobile + Web',  'Desenvolvimento Web + Desktop + Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento / Palestra'];
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Desenvolvimento de Sites'
}
const Desenvolvimento__Site: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <Desenvolvimento__Site/>
    </main>
  );
};

export default Desenvolvimento_Site;