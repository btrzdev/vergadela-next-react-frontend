import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import Image from "next/image"

const Contact = () => {
    return (
        <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >      
      <NavBar />
      <div className="w-full bg-white h-full">
            <div className="flex items-center justify-center flex-col">
                <h1 className="font-normal text-[70px] text-black">Contactos</h1>
                <hr className="w-[87px] bg-primary-yellow h-[2px]"/>
            </div>       
            <div className="flex"> 
              <Image src={'/contactFormImage.png'} width={623} height={591} alt={"contactImage"}/>
              <form className="w-full pt-[106px] flex flex-col">
                <h2>Agende sua reuniao!</h2>
                <input placeholder="Nome" name={'name'} />
                <input placeholder="Email" name={'email'}/>
                <textarea placeholder="Mensagem" name={'message'} />
                <button className="">Enviar</button>
              </form>
            </div>
        </div>  
      <Footer />
    </main>
        
    )
}

export default Contact