import getProject from '@/services/getProject'
import { getStrapiMedia } from '@/utils/api-helpers'
import { GetServerSidePropsContext } from 'next/types'
import Image from 'next/image'

interface IndividualProjectProps {
  attributes: any
}

const IndividualProject: React.FC<IndividualProjectProps> = ({
  attributes,
}) => {
  console.log('Project', attributes)
  const infos = attributes?.infoSection[0]
  return (
    <div className="flex h-screen flex-col bg-[#FFFAF5]">
      <div className="h-[872px] w-full">
        <div
          className="flex h-[872px] items-center px-[7%]"
          style={{
            backgroundImage: `url('${getStrapiMedia(attributes?.hero?.image?.data?.attributes?.url)}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="z-10 flex flex-col">
            <div className="flex">
              <span className="text-[16px] text-primary-yellow">---------</span>
              <span className="text-[16px] text-primary-yellow">PROJETOS</span>
            </div>
            <h3 className="font-glittenCaps text-[70px] text-white">
              Apartamentos
            </h3>
          </div>
        </div>
      </div>

      <div className="mb-[66px] mt-[108px] flex px-[7%]">
        <div className="flex w-1/2 flex-col gap-[42px]">
          <h3 className="font-roboto text-[35px] font-semibold">
            {infos?.location}
          </h3>
          <div className="flex justify-between">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col">
                <p className="text-[12px] font-semibold">TEAM</p>
                <p className="text-medium-gray text-[16px]">{infos?.team}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[12px] font-semibold">STRATEGY</p>
                <p className="text-medium-gray text-[16px]">
                  {infos?.strategy}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col">
                <p className="text-[12px] font-semibold">CLIENT</p>
                <p className="text-medium-gray text-[16px]">{infos?.client}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[12px] font-semibold">DATE</p>
                <p className="text-medium-gray text-[16px]">{infos?.date}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col">
                <p className="text-[12px] font-semibold">TERMS</p>
                <p className="text-medium-gray text-[16px]">{infos?.terms}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[12px] font-semibold">SERVICES</p>
                <p className="text-medium-gray text-[16px]">
                  {infos?.services}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-1/4">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="flex h-[300px] w-full gap-[30px] px-[7%] pb-[30px] pt-[30px]">
        <div
          className="flex h-[204px] w-[308px] items-center rounded-[12px]"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className="flex h-[204px] w-[308px] items-center rounded-[12px]"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className="flex h-[204px] w-[308px] items-center rounded-[12px]"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className="flex h-[204px] w-[308px] items-center rounded-[12px]"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
      <div className="mb-[55px] flex gap-[30px] px-[7%]">
        <div className="flex w-1/2 flex-col gap-[14px]">
          <h3 className="text-left font-semibold">DETALHES</h3>
          <p className="text-left text-[16px] leading-[26px]">
            {infos?.details[0]?.content}
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-[14px]">
          <h3 className="text-left font-semibold">CONCEITO</h3>
          <p className="text-left text-[16px] leading-[26px]">
            {infos?.details[1]?.content}
          </p>
        </div>
      </div>
      <div className="mb-[50px] flex justify-between px-[7%]">
        <div className="flex gap-[11px]">
          <Image src={'/icons/straight.svg'} alt={''} width={24} height={24} />
          <p>ANTERIOR</p>
        </div>
        <div className="flex"></div>
        <div className="flex gap-[11px]">
          <p>PROXIMO</p>
          <Image
            src={'/icons/straight.svg'}
            alt={''}
            width={24}
            height={24}
            className="rotate-180"
          />
        </div>
      </div>
      <div className="flex h-[660px] px-[7%]">
        <div className="mb-[161px] flex flex-col">
          <div className="mb-[29px] flex flex-col">
            <h4 className="text-primary-yellow">------ PROJETOS</h4>
            <h4 className="text-[34px] font-semibold">Projetos Relacionados</h4>
          </div>
          <div className="flex gap-[30px]">
            {' '}
            <div
              className="relative flex h-[278px] w-[308px] items-end justify-start rounded-[12px] px-[25px] py-[23px]"
              style={{
                backgroundImage: `url('${getStrapiMedia(attributes?.hero?.image?.data?.attributes?.url)}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'grayscale(100%)',
              }}
            >
              <div className="z-50 flex flex-col">
                <div className="flex">
                  <span className="text-[16px] text-primary-yellow">
                    ---------
                  </span>
                  <span className="text-[12px] text-primary-yellow">
                    PROJETOS
                  </span>
                </div>
                <h3 className="font-glittenCaps text-[22px] text-white">
                  Apartamentos
                </h3>
              </div>
            </div>
            <div
              className="flex h-[278px] w-[308px] items-end justify-start rounded-[12px] px-[25px] py-[23px]"
              style={{
                backgroundImage: `url('${getStrapiMedia(attributes?.hero?.image?.data?.attributes?.url)}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="z-10 flex flex-col">
                <div className="flex">
                  <span className="text-[16px] text-primary-yellow">
                    ---------
                  </span>
                  <span className="text-[12px] text-primary-yellow">
                    PROJETOS
                  </span>
                </div>
                <h3 className="font-glittenCaps text-[22px] text-white">
                  Apartamentos
                </h3>
              </div>
            </div>
            <div
              className="flex h-[278px] w-[308px] items-end justify-start rounded-[12px] px-[25px] py-[23px]"
              style={{
                backgroundImage: `url('${getStrapiMedia(attributes?.hero?.image?.data?.attributes?.url)}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="z-10 flex flex-col">
                <div className="flex">
                  <span className="text-[16px] text-primary-yellow">
                    ---------
                  </span>
                  <span className="text-[12px] text-primary-yellow">
                    PROJETOS
                  </span>
                </div>
                <h3 className="font-glittenCaps text-[22px] text-white">
                  Apartamentos
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualProject

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query

  const data = await getProject(String(slug))
  const attributes = data?.data?.attributes

  return {
    props: {
      attributes: attributes,
    },
  }
}
