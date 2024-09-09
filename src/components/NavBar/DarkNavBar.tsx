import Image from 'next/image'
import Link from 'next/link'

const DarkNavBar = () => {
  return (
    <div className="absolute z-50 flex h-[149px] w-full items-center justify-between bg-transparent px-[5%]">
      <Link href={'/about-us'}>
        <Image
          width={140}
          height={32}
          src={'/white/logo_white.svg'}
          alt={'logoVergadela'}
        />
      </Link>

      <button className="text-black">
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
  )
}

export default DarkNavBar
