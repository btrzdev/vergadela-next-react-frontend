import { useRouter } from 'next/router'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import LightNavBar from '@/components/NavBar/LightNavBar'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const specialNavBarRoutes = [
    '/contact',
    '/project-types',
    'services-vergadela',
  ]

  const noFooterRoute = '/'
  console.log('Router', router)
  return (
    <div
      className={`flex min-h-screen flex-col ${roboto.className} overflow-hidden`}
    >
      {specialNavBarRoutes.includes(router.pathname) ? (
        <NavBar />
      ) : (
        <LightNavBar />
      )}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      {noFooterRoute !== router.pathname ? <Footer /> : null}
    </div>
  )
}

export default MyApp
