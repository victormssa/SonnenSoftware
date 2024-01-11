import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 h-[100vh] text-white flex flex-col justify-center items-center align-middle'>
      <h2 className=''>Erro <span className='text-red-600'>404</span> | Página Não Encontrada</h2>
      <p className='mb-5'>Não conseguimos achar o recurso requisitado.</p>
      <Link href="/" className='border-2 border-red-600 px-4 py-2 rounded-lg font-semibold'>Retorne ao Ínicio</Link>
    </main>
  )
}