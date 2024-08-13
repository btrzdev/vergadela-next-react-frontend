import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

const ProjectTypes = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <NavBar />
      <div className="flex h-full w-full flex-col items-center justify-center bg-white pb-[196px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-glittenCaps text-[70px] font-normal text-black">
            Tipos de Projetos
          </h1>
          <p>
            "Seja em um apartamento aconchegante, uma moradia espaçosa ou um
            ambiente corporativo dinâmico, tudo é feito com{' '}
            <span>amor e dedicação</span>."
          </p>
          <hr className="h-[2px] w-[87px] bg-primary-yellow" />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-center">
            <p>Apartamentos</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p>Moradias</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p>Corporativo</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default ProjectTypes
