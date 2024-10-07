import getContactPage from '@/services/getContactPage'
import { getStrapiMedia } from '@/utils/api-helpers'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next/types'

interface ContactProps {
  attributes: any
}
const Contact: React.FC<ContactProps> = ({ attributes }) => {
  console.log('Attributes', attributes)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between overflow-hidden bg-white`}
    >
      <div className="flex h-full w-full max-w-[1440px] flex-col bg-white pb-[196px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-glittenCaps text-[70px] font-normal text-black">
            {attributes?.title}
          </h1>
          <hr className="h-[2px] w-[87px] bg-primary-yellow" />
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-[40px] pt-[106px] lg:flex-row lg:pr-[7%]">
          <div
            className={`max-h-[591px] min-h-[579px] w-full min-w-[400px] rounded-none bg-cover lg:w-1/2 lg:rounded-r-[14px] xl:rounded-[14px]`}
            style={{
              backgroundImage: `url(${getStrapiMedia(attributes?.image?.data?.attributes?.url)})`,
            }}
          />
          <form className="flex w-full flex-col items-center justify-center px-[10%] lg:w-1/2">
            <h2 className="mb-[49px] text-[35px] font-semibold text-primary-dark">
              {attributes?.titleForm}
            </h2>
            <div className="flex w-full flex-col justify-center gap-[40px]">
              <input
                placeholder="Nome"
                name={'name'}
                className="h-[60px] w-full max-w-[563px] items-center justify-center rounded-[4px] border border-[#1D1C1B80] pl-[12px] xl:min-w-[563px]"
              />
              <input
                placeholder="Email"
                name={'email'}
                className="h-[60px] w-full max-w-[563px] items-center justify-center rounded-[4px] border border-[#1D1C1B80] pl-[12px] xl:min-w-[563px]"
              />
              <textarea
                placeholder="Mensagem"
                name={'message'}
                className="h-[204px] w-full max-w-[563px] rounded-[4px] border border-[#1D1C1B80] pl-[12px] pt-[12px] xl:min-w-[563px]"
              />
              <div className="flex w-full justify-end xl:min-w-[563px]">
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await getContactPage()
  const attributes = data?.data

  return {
    props: {
      attributes: attributes?.data?.attributes,
    },
  }
}
