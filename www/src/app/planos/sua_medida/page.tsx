import SuaMedida from '@/components/suamedida/SuaMedida';
import type { Metadata } from 'next'
const services = ['Desenvolvimento Web', 'Desenvolvimento Desktop', 'Desenvolvimento Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento'];
export const metadata: Metadata = {
  title: 'Sonnen Software | Plano A sua Medida',
  description: '',
}
const suamedida: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <SuaMedida/>
    </main>
  );
};

export default SuaMedida;