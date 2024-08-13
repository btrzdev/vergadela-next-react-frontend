import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-footer flex h-[432px] w-full items-start justify-start justify-evenly bg-cover bg-fixed bg-center bg-no-repeat pt-[74px] text-white">
      <div className="flex flex-col items-start justify-start">
        <Image
          src={'/vergadelaFooterLogo.svg'}
          alt={''}
          width={225}
          height={285}
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <h3 className="mb-[53px] text-[16px] font-bold">MENU</h3>
        <div className="flex flex-col gap-[18px]">
          <Link href={''}>Início</Link>
          <Link href={''}>Serviços</Link>
          <Link href={''}>Projetos</Link>
          <Link href={''}>Notícias</Link>
          <Link href={''}>Lola online</Link>
          <Link href={''}>Contactos</Link>
        </div>
      </div>
      <div className="flex w-[179px] flex-col items-start justify-start gap-[29px]">
        <div className="flex flex-col items-start justify-start">
          <h3 className="mb-[53px] text-[16px] font-bold">CONTACTOS</h3>
          <div className="flex flex-col gap-[14px] text-[14px]">
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
        <div>
          <h3 className="mb-[53px] text-[16px] font-bold">REDES SOCIAIS</h3>
          <div className="flex flex-row gap-[20px] text-black">
            <Link href={''} className="hover:cursor-pointer">
              <Image
                width={22}
                height={22}
                src={'/icons/facebookIconWhite.svg'}
                alt={''}
              />
            </Link>
            <Link href={''}>
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
      <div className="flex h-full w-[215px] flex-col items-end justify-start">
        <div className="flex h-full w-full flex-col items-end justify-start text-[14px]">
          <div className="flex flex-col gap-[14px] text-[14px]">
            <h3 className="mb-[53px] text-right text-[16px] font-bold">
              INFORMAÇÕES
            </h3>
            <div className="flex flex-col items-end gap-[18px]">
              <Link href={''}>FAQ</Link>
              <Link href={''}>Privacy Policy</Link>
            </div>
          </div>
          <div className="mt-[49px] flex flex-col">
            <span className="text-right font-semibold text-primary-yellow">
              Segunda-Sexta
            </span>
            <span className="text-right text-white">
              09h00 - 12h30 / 13h30 - 19h00
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-right font-semibold text-primary-yellow">
              Sábado e Domingo
            </span>
            <span className="text-right text-white">Encerrado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
