import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="relative bottom-0 flex h-auto w-full flex-col-reverse items-start justify-start overflow-hidden bg-footer bg-cover bg-fixed bg-center bg-no-repeat pb-[50px] pt-[74px] text-white lg:h-[432px] lg:flex-row lg:justify-evenly lg:pb-0">
      <div className="flex w-full flex-col items-center justify-start pt-[40px] lg:w-1/4 lg:items-start lg:pt-0">
        <div className="flex w-full flex-row-reverse justify-between px-10 lg:flex-row lg:px-0">
          {' '}
          <div className="flex flex-col items-center justify-center pb-[50px] lg:w-1/2 lg:items-start lg:justify-start">
            <Link href={'/'} className="w-full hover:text-primary-yellow">
              <Image
                className="h-[125px] h-[185px] hover:text-primary-yellow lg:h-[225px] lg:w-[285px]"
                src={'/vergadelaFooterLogo.svg'}
                alt={''}
                width={150}
                height={185}
              />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-[18px]">
            <h3 className="text-[16px] font-bold lg:mb-[53px]">MENU</h3>
            <Link href={'/'} className="hover:text-primary-yellow">
              Início
            </Link>
            <Link
              href={'/services-vergadela'}
              className="hover:text-primary-yellow"
            >
              Serviços
            </Link>
            <Link href={'/project-types'} className="hover:text-primary-yellow">
              Projetos
            </Link>
            <Link href={'/news'} className="hover:text-primary-yellow">
              Notícias
            </Link>
            <Link href={''} className="hover:text-primary-yellow">
              Loja online
            </Link>
            <Link href={'/contact'} className="hover:text-primary-yellow">
              Contactos
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex w-full gap-[29px] px-10 lg:mt-0 lg:w-[192px] lg:flex-col lg:items-start lg:justify-start lg:px-0">
        <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start">
          <h3 className="mb-[53px] text-[16px] font-bold">CONTACTOS</h3>
          <div className="flex flex-col items-start gap-[14px] text-[14px]">
            <div className="flex gap-[5px]">
              <span className="font-semibold text-primary-yellow">
                Telefone:
              </span>
              <span className="text-white">+351 253 276 111</span>
            </div>
            <div className="flex gap-[5px]">
              <span className="font-semibold text-primary-yellow">Email:</span>
              <span className="text-white">
                Rua de Pousada 32, 4715-381 Braga, Portugal
              </span>
            </div>
            <div className="flex gap-[5px]">
              <span className="font-semibold text-primary-yellow">Morada:</span>
              <span className="text-white">+351 253 276 111</span>
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-start gap-[17px] lg:flex">
          <h3 className="text-[16px] font-bold">REDES SOCIAIS</h3>
          <div className="flex flex-row gap-[20px] text-black">
            <Link
              href={'https://www.facebook.com/vergadelainteriores/'}
              className="hover:cursor-pointer hover:brightness-50"
            >
              <Image
                width={22}
                height={22}
                src={'/icons/facebookIconWhite.svg'}
                alt={''}
              />
            </Link>
            <Link
              href={''}
              className="hover:cursor-pointer hover:brightness-50"
            >
              <Image
                width={22}
                height={22}
                src={'/icons/instagramIconWhite.svg'}
                alt={''}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-between px-10 lg:w-[215px] lg:items-end lg:justify-start">
        <div className="flex h-full w-full items-center justify-between text-[14px] lg:flex-col lg:items-end lg:justify-start">
          <div className="flex flex-col gap-[14px] text-[14px]">
            <h3 className="text-right text-[16px] font-bold lg:mb-[53px]">
              INFORMAÇÕES
            </h3>
            <div className="flex flex-col items-start gap-[18px] lg:items-end">
              <Link href={''} className="hover:text-primary-yellow">
                FAQ
              </Link>
              <Link href={''} className="hover:text-primary-yellow">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[20px] lg:items-end lg:justify-end">
            <div className="flex flex-col items-start items-end justify-center lg:mt-[49px] lg:items-end">
              <span className="text-right font-semibold text-primary-yellow">
                Segunda-Sexta
              </span>
              <span className="text-right text-white">
                09h00 - 12h30 / 13h30 - 19h00
              </span>
            </div>
            <div className="flex flex-col items-start items-end justify-center lg:items-end lg:justify-end">
              <span className="text-right font-semibold text-primary-yellow">
                Sábado e Domingo
              </span>
              <span className="text-right text-white">Encerrado</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[20px] flex w-full items-center justify-between gap-[17px] px-10 lg:hidden">
        <h3 className="text-[16px] font-bold">REDES SOCIAIS</h3>
        <div className="flex flex-row items-start gap-[20px] text-black">
          <Link
            href={'https://www.facebook.com/vergadelainteriores/'}
            className="hover:cursor-pointer hover:brightness-50"
          >
            <Image
              width={22}
              height={22}
              src={'/icons/facebookIconWhite.svg'}
              alt={''}
            />
          </Link>
          <Link href={''} className="hover:cursor-pointer hover:brightness-50">
            <Image
              width={22}
              height={22}
              src={'/icons/instagramIconWhite.svg'}
              alt={''}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
