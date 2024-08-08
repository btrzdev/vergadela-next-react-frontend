import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white ${inter.className}`}
    >
      <NavBar />
      <Footer />
    </main>
  )
}
