
import LoginForm from "@/components/loginForm/LoginForm";
import type { Metadata } from 'next'
const services = ['Desenvolvimento Web', 'Desenvolvimento Desktop', 'Desenvolvimento Mobile', 'Consultoria em TI', 'Testes de Software', 'Otimização de Sistema', 'Evento'];
export const metadata: Metadata = {
  title: 'Sonnen Software | Login',
  description: '',
}
const Login: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <LoginForm />
    </main>
  );
};

export default Login;