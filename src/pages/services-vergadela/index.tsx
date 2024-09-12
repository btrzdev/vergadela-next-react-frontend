import getServices from '@/services/getServices'
import Image from 'next/image'

interface ServicesVergadelaProps {
  attributes: any
}
const ServicesVergadela: React.FC<ServicesVergadelaProps> = ({
  attributes,
}) => {
  console.log('attributes', attributes)
  return (
    <div className="flex w-full flex-col">
      <div className="relative min-h-[872px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('images/service_bg.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        ></div>
        <div className="items-left relative z-10 flex h-full min-h-[872px] flex-col justify-center pl-[12%]">
          <div className="flex items-center">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="ml-2 font-roboto text-[16px] text-primary-yellow">
              SOBRE NÓS
            </span>
          </div>
          <h3 className="font-glittenCaps text-[70px] text-white">Serviços</h3>
        </div>
      </div>
      <div className="flex h-full w-full px-[7%] pb-[74px] pt-[151px]">
        <div className="h-full w-[308px]">
          <div className="flex w-full flex-col gap-[23px]">
            {attributes?.map((item, index) => (
              <div
                className="flex h-[61px] w-full gap-[18px] rounded-[6px] bg-primary-green px-[33px] py-[22px] font-medium"
                key={`${item}-${index}`}
              >
                <Image
                  src={'/icons/white_chair.svg'}
                  alt={''}
                  width={22}
                  height={18}
                />
                <h3 className="text-[16px] text-white">
                  {item?.attributes?.subtitle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesVergadela

export async function getServerSideProps() {
  const data = await getServices()
  const attributes = data?.data

  return {
    props: {
      attributes: attributes,
    },
  }
}
