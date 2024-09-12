import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'

const Contact = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <NavBar />
      <div className="flex h-full w-full flex-col items-center justify-center bg-white pb-[196px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-glittenCaps text-[70px] font-normal text-black">
            Contactos
          </h1>
          <hr className="h-[2px] w-[87px] bg-primary-yellow" />
        </div>
        <div className="flex pt-[106px]">
          <div className="max-h-[591px] min-h-[579px] min-w-[400px] rounded-r-[14px] bg-[url('/contactFormImage.png')] bg-cover lg:w-[623px]" />
          {/* <Image
              src={'/contactFormImage.png'}
              width={623}
              height={591}
              alt={'contactImage'}
              className="rounded-r-[14px]"
            /> */}

          <form className="w-full flex-1 flex-col pl-[82px]">
            <h2 className="mb-[49px] text-[35px] font-semibold text-primary-dark">
              Agende sua reunião!
            </h2>
            <div className="flex w-auto flex-col gap-[40px]">
              <input
                placeholder="Nome"
                name={'name'}
                className="h-[60px] max-w-[563px] items-center justify-center rounded-[4px] border border-[#1D1C1B80] pl-[12px] xl:min-w-[563px]"
              />
              <input
                placeholder="Email"
                name={'email'}
                className="xl-min-w-[563px] h-[60px] max-w-[563px] items-center justify-center rounded-[4px] border border-[#1D1C1B80] pl-[12px]"
              />
              <textarea
                placeholder="Mensagem"
                name={'message'}
                className="xl-min-w-[563px] h-[204px] max-w-[563px] items-center justify-center rounded-[4px] border border-[#1D1C1B80] pl-[12px] pt-[12px]"
              />
              <div className="flex max-w-[563px] justify-end">
                <button className="flex text-[16px] text-primary-yellow hover:brightness-50">
                  ENVIAR
                  <Image
                    src={'/icons/arrow-right.svg'}
                    width={24}
                    height={26}
                    alt={'arrowIcon'}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact
