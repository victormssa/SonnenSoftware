import Otimizacao__Sistemas from "@/components/otimizacaoSistemas/OtimizacaoSistemas";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Otimização de Sistemas'
}
const OtimizacaoSistemas: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <Otimizacao__Sistemas/>
    </main>
  );
};

export default OtimizacaoSistemas;