import PresencaContinua from '@/components/presencacontinua/PresencaContinua';
import type { Metadata } from 'next'
const services = ['Desenvolvimento Web', 'Desenvolvimento Desktop', 'Desenvolvimento Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento'];
export const metadata: Metadata = {
  title: 'Sonnen Software | Plano Presença Online Continua',
  description: '',
}
const presencaContinua: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <PresencaContinua />
    </main>
  );
};

export default PresencaContinua;