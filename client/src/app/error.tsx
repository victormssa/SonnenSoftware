'use client'
 
import { useEffect } from 'react'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
<main className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 h-[100vh] text-white flex flex-col justify-center items-center align-middle'>
<h2 className=''>Erro <span className='text-red-600'>500</span> | Aconteceu um Erro</h2>
<p className='mb-5'>O servidor encontrou uma situação inesperada que o impediu de atender à requisição.</p>
<button onClick={
          () => reset()
        }  className='border-2 border-red-600 px-4 py-2 rounded-lg font-semibold'>Tente Novamente</button>
</main>
  )
}

