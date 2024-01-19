import type { Metadata } from 'next';
import UserProfile from '@/components/userProfile/UserProfile';
export const metadata: Metadata = {
  title: 'Perfil'
}
const Perfil: React.FC = () => {
  return (
    <main className="w-screen pt-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 h-[100vh]">
      <UserProfile />
    </main>
  );
};

export default Perfil;