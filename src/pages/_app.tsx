import { useRouter } from 'next/router'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import LightNavBar from '@/components/NavBar/LightNavBar'
import '@/styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const specialNavBarRoutes = [
    '/about-us',
    '/contact',
    '/news',
    '/project-types',
    'services-vergadela',
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {specialNavBarRoutes.includes(router.pathname) ? (
        <NavBar />
      ) : (
        <LightNavBar />
      )}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default MyApp
