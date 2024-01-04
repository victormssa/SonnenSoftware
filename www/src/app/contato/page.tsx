
import Message from "@/components/message/Message";
const services = ['Desenvolvimento Web',  'Desenvolvimento Web e Desktop', 'Desenvolvimento Desktop', 'Desenvolvimento Desktop e Mobile', 'Desenvolvimento Mobile', 'Desenvolvimento Mobile e Web',  'Desenvolvimento Web, Desktop e Mobile', 'Manutenção', 'Marketing Digital', 'Tercerização de TI', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento / Palestra'];
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Orçamento'
}
const Budget: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <Message services={services}/>
    </main>
  );
};

export default Budget;