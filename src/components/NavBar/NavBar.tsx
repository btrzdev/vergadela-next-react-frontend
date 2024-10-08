import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = ({ links }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <div className="flex h-[149px] w-screen items-center justify-between overflow-hidden bg-white px-[5%]">
        <Link href={'/'}>
          <Image
            width={140}
            height={32}
            src={'/vergadelaLogo.svg'}
            alt={'logoVergadela'}
          />
        </Link>

        <button className="text-black hover:brightness-50" onClick={toggleNav}>
          <Image
            width={22}
            height={22}
            src={'/icons/hamburguer.svg'}
            alt={'hamburguer_menu'}
          />
        </button>

        <div className="flex flex-row gap-[20px] text-black hover:brightness-50">
          <Link href={links?.facebook_link}>
            <Image
              width={22}
              height={22}
              src={'/icons/facebookIcon.svg'}
              alt={''}
            />
          </Link>
          <Link href={links?.instagram_link} className="hover:brightness-50">
            <Image
              width={22}
              height={22}
              src={'/icons/instagramIcon.svg'}
              alt={''}
            />
          </Link>
        </div>
      </div>

      {isNavOpen && (
        <div
          style={{
            backgroundImage: `url('/images/navbarbg.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: 100,
          }}
          className="fixed left-0 top-0 z-50 flex h-full w-full animate-slideFromTop flex-col items-center justify-center text-white"
        >
          <div className="justifycenter flex h-[149px] w-full items-center">
            <button
              className="absolute right-1/2 top-6 text-white"
              onClick={toggleNav}
            >
              <Image
                height={20}
                width={20}
                src={'/icons/closeButton.svg'}
                alt={'close button navbar'}
              />
            </button>
          </div>

          <div className="flex w-full px-[7%]">
            <div className="flex w-1/2">
              <nav className="flex w-full flex-col gap-[40px] font-glittenCaps text-[35px]">
                <Link
                  href="/about-us"
                  onClick={toggleNav}
                  className="hover:text-primary-yellow"
                >
                  Sobre nós
                </Link>
                <Link
                  href="/services-vergadela"
                  onClick={toggleNav}
                  className="hover:text-primary-yellow"
                >
                  Serviços
                </Link>
                <Link
                  href="/project-types"
                  onClick={toggleNav}
                  className="hover:text-primary-yellow"
                >
                  Projetos
                </Link>
                <Link
                  href="/news"
                  onClick={toggleNav}
                  className="hover:text-primary-yellow"
                >
                  Notícias
                </Link>
                <Link
                  href="/contact"
                  onClick={toggleNav}
                  className="hover:text-primary-yellow"
                >
                  Contactos
                </Link>
              </nav>
            </div>
            <div className="z-100 flex w-1/2 items-start justify-start">
              <Link href={'/'} onClick={toggleNav}>
                <Image
                  height={350}
                  width={307}
                  src={'/icons/vergadela_log_navbar.svg'}
                  alt={'close button navbar'}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
