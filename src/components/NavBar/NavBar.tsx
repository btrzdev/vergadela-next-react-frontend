import Image from 'next/image'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className="flex h-[149px] w-full items-center justify-between bg-white px-[5%]">
      <Image
        width={140}
        height={32}
        src={'/vergadelaLogo.svg'}
        alt={'logoVergadela'}
      />
      <button className="text-black">
        <Image
          width={22}
          height={22}
          src={'/icons/hamburguer.svg'}
          alt={'hamburguer_menu'}
        />
      </button>
      <div className="flex flex-row gap-[20px] text-black">
        <Link href={''}>
          <Image
            width={22}
            height={22}
            src={'/icons/facebookIcon.svg'}
            alt={''}
          />
        </Link>
        <Link href={''}>
          <Image
            width={22}
            height={22}
            src={'/icons/instagramIcon.svg'}
            alt={''}
          />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
