
import Message from "@/components/message/Message";
import type { Metadata } from 'next'
const services = ['Desenvolvimento Web', 'Desenvolvimento Desktop', 'Desenvolvimento Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento'];
export const metadata: Metadata = {
  title: 'Sonnen Software | Orçamento',
  description: '',
}
const Budget: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <Message services={services}/>
    </main>
  );
};

export default Budget;