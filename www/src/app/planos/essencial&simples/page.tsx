import SimplesEssencial from '@/components/essencialSimples/SimplesEssencial';
import type { Metadata } from 'next'
const services = ['Desenvolvimento Web', 'Desenvolvimento Desktop', 'Desenvolvimento Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento'];
export const metadata: Metadata = {
  title: 'Essencial & Simples'
}
const planoSimples: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <SimplesEssencial/>
    </main>
  );
};

export default SimplesEssencial;