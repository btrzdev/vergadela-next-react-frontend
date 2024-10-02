//@ts-nocheck
import getProject from '@/services/getProject'
import { getStrapiMedia } from '@/utils/api-helpers'
import { GetServerSidePropsContext } from 'next/types'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useState } from 'react'

interface IndividualProjectProps {
  attributes: any
}

const IndividualProject: React.FC<IndividualProjectProps> = ({
  attributes,
}) => {
  console.log('Project', attributes)

  const infos = attributes?.infoSection

  const carrouselImages = attributes?.infoSection?.carrouselImages?.image?.data

  const [selectedImage, setSelectedImage] = useState(
    carrouselImages[0]?.attributes?.url
  )

  const handleClick = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    const backgroundImage = window.getComputedStyle(e.target).backgroundImage

    const fullUrl = backgroundImage.slice(5, -2)
    const relativeUrl = new URL(fullUrl).pathname

    setSelectedImage(relativeUrl)
    console.log('Extracted Relative URL:', relativeUrl)
  }

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
            <div className="flex gap-[12px]">
              <Image
                src={'/icons/yellow_straight.svg'}
                alt={''}
                width={53}
                height={22}
              />
              <span className="text-[16px] text-primary-yellow">PROJETOS</span>
            </div>
            <h3 className="font-glittenCaps text-[70px] text-white">
              Apartamentos
            </h3>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-[#FFFAF5]">
        <div className="max-w-[1095px] bg-[#FFFAF5]">
          <div className="mb-[66px] mt-[108px] flex justify-between px-[7%]">
            <div className="flex w-1/2 flex-col gap-[42px]">
              <h3 className="text-[35px] font-semibold">{infos?.location}</h3>
              <div className="flex justify-between">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col">
                    <p className="text-[12px] font-semibold">TEAM</p>
                    <p className="text-[16px] text-medium-gray">
                      {infos?.team}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-semibold">STRATEGY</p>
                    <p className="text-[16px] text-medium-gray">
                      {infos?.strategy}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col">
                    <p className="text-[12px] font-semibold">CLIENT</p>
                    <p className="text-[16px] text-medium-gray">
                      {infos?.client}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-semibold">DATE</p>
                    <p className="text-[16px] text-medium-gray">
                      {infos?.date}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col">
                    <p className="text-[12px] font-semibold">TERMS</p>
                    <p className="text-[16px] text-medium-gray">
                      {infos?.terms}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-semibold">SERVICES</p>
                    <p className="text-[16px] text-medium-gray">
                      {infos?.services}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/4 flex-col gap-[5px]">
              <h3 className="text-[12px] font-semibold leading-[24px]">
                PARTILHAR
              </h3>
              <div className="flex gap-[24px]">
                <Link href={''}>
                  <Image
                    src={'/icons/instagramIcon.svg'}
                    alt={''}
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href={'https://www.facebook.com/vergadelainteriores/'}>
                  <Image
                    src={'/icons/facebookIcon.svg'}
                    alt={''}
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href={''}>
                  <Image
                    src={'/icons/linkedin.svg'}
                    alt={''}
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href={''}>
                  <Image
                    src={'/icons/twitter.svg'}
                    alt={''}
                    width={22}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-[30px] px-[7%] pb-[30px] pt-[30px]">
            <div className="flex h-[300px] w-full max-w-[1095px] gap-[30px] overflow-x-auto overflow-y-hidden">
              {carrouselImages.map(
                (image: { attributes: { url: string | null } }, index: any) => (
                  <div
                    key={`${image}-${index}`}
                    onClick={(e) => handleClick(e)}
                    className="h-[204px] w-[308px] flex-shrink-0 items-center rounded-[12px]"
                    style={{
                      backgroundImage: `url(${getStrapiMedia(image?.attributes?.url)})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  />
                )
              )}
            </div>

            <div className="flex h-full items-center justify-center">
              <div
                className="flex h-[800px] w-full max-w-[1094px] rounded-[12px]"
                style={{
                  backgroundImage: `url(${getStrapiMedia(selectedImage)})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            </div>
          </div>

          <div className="mb-[55px] flex gap-[30px] px-[7%]">
            <div className="flex w-1/2 flex-col gap-[14px]">
              <h3 className="text-left font-semibold">DETALHES</h3>
              <p className="max-w-[532px] text-left text-[16px] leading-[26px] text-medium-gray">
                {infos?.details[0]?.content}
              </p>
            </div>
            <div className="flex w-1/2 flex-col gap-[14px]">
              <h3 className="text-left font-semibold">CONCEITO</h3>
              <p className="max-w-[532px] text-left text-[16px] leading-[26px] text-medium-gray">
                {infos?.details[1]?.content}
              </p>
            </div>
          </div>
          <div className="mb-[50px] flex justify-between px-[7%]">
            <div className="flex gap-[11px]">
              <Image
                src={'/icons/straight.svg'}
                alt={''}
                width={24}
                height={24}
              />
              <p>ANTERIOR</p>
            </div>
            <div className="flex">
              <Link href={''}>
                <Image
                  src={'/icons/grid.svg'}
                  alt={''}
                  width={28}
                  height={28}
                />
              </Link>
            </div>
            <div className="flex gap-[11px]">
              <p>PRÓXIMO</p>
              <Image
                src={'/icons/straight.svg'}
                alt={''}
                width={24}
                height={24}
                className="rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[660px] bg-white px-[7%] pt-[139px]">
        <div className="mb-[161px] flex flex-col">
          <div className="mb-[29px] flex flex-col">
            <div className="flex gap-[10px]">
              <Image
                src={'/icons/yellow_straight.svg'}
                alt={''}
                width={53}
                height={22}
              />{' '}
              <h4 className="text-primary-yellow">PROJETOS</h4>
            </div>
            <h4 className="text-[34px] font-semibold">Projetos Relacionados</h4>
          </div>
          <div className="flex gap-[30px]">
            {' '}
            <div className="relative flex h-[278px] w-[308px] items-end justify-start overflow-hidden rounded-[12px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${getStrapiMedia(attributes?.hero?.image?.data?.attributes?.url)}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  filter: 'grayscale(100%)',
                }}
              ></div>

              <div className="relative z-50 flex flex-col px-[25px] py-[23px]">
                <div className="flex">
                  <Image
                    src={'/icons/yellow_straight.svg'}
                    alt={''}
                    width={25}
                    height={22}
                  />
                  <h4 className="text-[12px] text-primary-yellow">INTERIOR</h4>
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
  const { project } = context.query

  const data = await getProject(String(project))
  const attributes = data?.data?.attributes
  // console.log('Attributes', slug)

  return {
    props: {
      attributes: attributes,
    },
  }
}
