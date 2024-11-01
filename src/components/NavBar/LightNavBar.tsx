import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = ({ links }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isNavOpen])

  return (
    <>
      <div className="absolute z-50 flex h-[149px] w-full items-center justify-between overflow-hidden bg-transparent px-[5%]">
        <Link href={'/'}>
          <Image
            width={140}
            height={32}
            src={'/white/logo_white.svg'}
            alt={'logoVergadela'}
          />
        </Link>

        <button className="text-black hover:brightness-50" onClick={toggleNav}>
          <Image
            width={22}
            height={22}
            src={'/white/white_burguer.svg'}
            alt={'hamburguer_menu'}
          />
        </button>

        <div className="flex flex-row gap-[20px] text-black">
          <Link href={links?.facebook_link} className="hover:brightness-50">
            <Image
              width={22}
              height={22}
              src={'/white/facebook_white_logo.svg'}
              alt={''}
            />
          </Link>
          <Link href={links?.instagram_link} className="hover:brightness-50">
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
          className="fixed left-0 top-0 z-0 flex h-full w-screen animate-slideFromTop flex-col items-center justify-center overflow-hidden text-white"
        >
          <div className="fixed absolute top-0 z-50 flex h-[149px] w-full items-center justify-center overflow-hidden bg-transparent px-[5%]">
            <button className="hover:brightness-50" onClick={toggleNav}>
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
                  className="text-primary-yellow hover:brightness-50"
                >
                  Sobre nós
                </Link>
                <Link
                  href="/services-vergadela"
                  onClick={toggleNav}
                  className="text-primary-yellow hover:brightness-50"
                >
                  Serviços
                </Link>
                <Link
                  href="/project-types"
                  onClick={toggleNav}
                  className="text-primary-yellow hover:brightness-50"
                >
                  Projetos
                </Link>
                <Link
                  href="/news"
                  onClick={toggleNav}
                  className="text-primary-yellow hover:brightness-50"
                >
                  Notícias
                </Link>
                <Link
                  href="/contact"
                  onClick={toggleNav}
                  className="text-primary-yellow hover:brightness-50"
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
