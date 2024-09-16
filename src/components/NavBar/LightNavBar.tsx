import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <>
      <div className="absolute z-50 flex h-[149px] w-full items-center justify-between overflow-hidden bg-transparent px-[5%]">
        <Link href={'/about-us'}>
          <Image
            width={140}
            height={32}
            src={'/white/logo_white.svg'}
            alt={'logoVergadela'}
          />
        </Link>

        <button className="text-black" onClick={toggleNav}>
          <Image
            width={22}
            height={22}
            src={'/white/white_burguer.svg'}
            alt={'hamburguer_menu'}
          />
        </button>

        <div className="flex flex-row gap-[20px] text-black">
          <Link href={''}>
            <Image
              width={22}
              height={22}
              src={'/white/facebook_white_logo.svg'}
              alt={''}
            />
          </Link>
          <Link href={''}>
            <Image
              width={22}
              height={22}
              src={'/white/instagram_white_logo.svg'}
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
          className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center text-white"
        >
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
              {' '}
              <Image
                height={350}
                width={307}
                src={'/icons/vergadela_log_navbar.svg'}
                alt={'close button navbar'}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
