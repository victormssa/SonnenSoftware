
import LoginForm from "@/components/loginForm/LoginForm";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Login'
}
const Login: React.FC = () => {
  return (
    <main className="w-screen h-auto">
      <LoginForm />
    </main>
  );
};

export default Login;