import { useRouter } from 'next/router'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import LightNavBar from '@/components/NavBar/LightNavBar'
import '@/styles/globals.css'
import { Roboto } from 'next/font/google'
import getFooter from '@/services/getFooter'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

function MyApp({ Component, pageProps, attributes }: any) {
  console.log('Console footer', attributes)
  const router = useRouter()

  const specialNavBarRoutes = [
    '/contact',
    '/project-types',
    'services-vergadela',
  ]

  const noFooterRoute = '/'
  return (
    <div
      className={`flex min-h-screen flex-col ${roboto.className} overflow-hidden`}
    >
      {specialNavBarRoutes.includes(router.pathname) ? (
        <NavBar links={attributes?.attributes} />
      ) : (
        <LightNavBar links={attributes?.attributes} />
      )}
      <main>
        <Component {...pageProps} />
      </main>
      {noFooterRoute !== router.pathname ? (
        <Footer attributes={attributes?.attributes} />
      ) : null}
    </div>
  )
}

MyApp.getInitialProps = async () => {
  const dataFooter = await getFooter()

  return {
    attributes: dataFooter?.data?.data || null,
  }
}

export default MyApp
