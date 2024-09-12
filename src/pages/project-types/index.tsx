import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

const ProjectTypes = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center gap-[40px] px-5 py-[10px] lg:gap-[126px] lg:px-0">
          <h1 className="text-center font-glittenCaps text-[50px] font-normal text-black lg:text-[70px]">
            Tipos de Projetos
          </h1>
          <p className="inline-block max-w-[630px] text-center text-[28px] leading-[48px]">
            "Seja em um apartamento aconchegante, uma moradia espaçosa ou um
            ambiente corporativo dinâmico, tudo é feito com{' '}
            <span className="font-glittenCaps">amor e dedicação</span>."
          </p>
          <hr className="h-[2px] w-[87px] bg-primary-yellow" />
        </div>
        <div className="flex h-auto w-full flex-col lg:flex-row">
          <div className="relative flex h-full min-h-[480px] w-1/3 items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/images/component_24.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'brightness(50%)',
                zIndex: 1,
              }}
            />

            <p className="relative z-50 font-glittenCaps text-[50px] text-white">
              Apartamentos
            </p>
          </div>
          <div className="relative flex h-full min-h-[480px] w-1/3 items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/images/component_24.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'brightness(50%)',
                zIndex: 1,
              }}
            />

            <p className="relative z-50 font-glittenCaps text-[50px] text-white">
              Apartamentos
            </p>
          </div>
          <div className="relative flex h-full min-h-[480px] w-1/3 items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/images/component_24.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                filter: 'brightness(50%)',
                zIndex: 1,
              }}
            />

            <p className="relative z-50 font-glittenCaps text-[50px] text-white">
              Apartamentos
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectTypes
