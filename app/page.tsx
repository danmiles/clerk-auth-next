import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function Home() {
  const {userId} = auth()
  // redirect to dashboard if user is logged in
  if (userId) {
    redirect('/dashboard');
  }
  return (
    <main className="flex justify-center items-center h-screen p-2">      
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Clerk + Next.js 14 Authentification</h1>
    </main>
  )
}
