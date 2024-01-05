import Desenvolvimento__App from "@/components/desenvolvimentoApp/DesenvolvimentoApp";
const services = ['Desenvolvimento Web',  'Desenvolvimento Web + Desktop', 'Desenvolvimento Desktop', 'Desenvolvimento Desktop + Mobile', 'Desenvolvimento Mobile', 'Desenvolvimento Mobile + Web',  'Desenvolvimento Web + Desktop + Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento / Palestra'];
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Desenvolvimento App'
}
const DesenvolvimentoApp: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <Desenvolvimento__App/>
    </main>
  );
};

export default DesenvolvimentoApp;