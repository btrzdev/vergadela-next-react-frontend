import Image from "next/image"
import Link from "next/link"
const NavBar = () => {
    return(
        <div className="bg-white h-[149px] justify-between flex items-center w-full px-[5%]">
            <Image width={140} height={32} src={'/vergadelaLogo.svg'} alt={'logoVergadela'} />
            <button className="text-black">Menu hamburguer</button>
            <div className="text-black flex flex-row gap-[20px]">
                <Link href={""}>
                    <Image width={22} height={22} src={"/icons/facebookIcon.svg"} alt={""} />                    
                </Link>
                <Link href={""}>
                    <Image width={22} height={22} src={"/icons/instagramIcon.svg"} alt={""} /> 
                </Link>
            </div>
        </div>
    )
}

export default NavBar