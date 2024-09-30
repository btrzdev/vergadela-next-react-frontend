//@ts-nocheck
import TeamSwiper from '@/components/AboutUs/TeamSwiper'
import getAboutUs from '@/services/getAboutUs'
import getProjectList from '@/services/getProjectList'
import { getStrapiMedia } from '@/utils/api-helpers'
import Image from 'next/image'
import Link from 'next/link'
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
  useState,
  useRef,
  useEffect,
} from 'react'
import getProjectType from '@/services/getProjectType'
import ProjectTypeCardAbout from '@/components/ProjectTypes/ProjectTypes'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import getServices from '@/services/getServices'

export default function AboutUs({ attributes, projects, servicesTypes }: any) {
  console.log('Attributes About Us', servicesTypes)
  // console.log('Attributes projects', projects)
  // console.log('Attributes projectTypes', projectsType)

  const [chronologyItems, setChronologyItems] = useState(
    attributes?.chronology?.items
  )

  const [selectedYear, setSelectedYear] = useState(chronologyItems[0].year)

  const filteredCronologyItemByYear = chronologyItems.filter(
    (item: any) => item.year === selectedYear
  )
  const elementsRef = useRef<
    (HTMLHeadingElement | HTMLParagraphElement | null)[]
  >([])

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0')
        entry.target.classList.add(entry.target.dataset.animation)
        observer.unobserve(entry.target)
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    })

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div>
      <div>
        <div
          className="relative flex h-[872px] w-full items-center justify-center rounded-[4px]"
          style={{
            backgroundImage: `url(${getStrapiMedia(attributes?.hero?.imageCover?.data?.attributes?.url)})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'darken',
            filter: 'brightness(50%)',
          }}
        />
        <div className="absolute left-10 top-1/2 z-50 -mt-10 flex flex-col px-[7%]">
          <div className="flex gap-[8px]">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="text-[16px] text-primary-yellow">
              {attributes?.hero?.title}
            </span>
          </div>

          <h1 className="font-glittenCaps text-[60px] text-white lg:text-[70px]">
            {attributes?.hero?.subtitle}
          </h1>
          <h2 className="mb-[45px] inline-block max-w-[460px] text-justify text-[20px] font-light leading-[26px] text-white">
            {attributes?.hero?.description}
          </h2>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-[50px] rounded-b-[30px] border-t-2 border-t-primary-yellow bg-primary-green px-[12%] py-[80px] lg:h-[368px] lg:flex-row lg:justify-between lg:gap-0 lg:py-0">
        <div className="flex max-w-[420px] flex-col items-center justify-center">
          <h3
            ref={(el) => (elementsRef.current[0] = el)}
            data-animation="animate-slideInLeft"
            className="font-glittenCaps text-[36px] text-primary-yellow opacity-0"
          >
            {attributes?.hero?.blockQuote1?.title}
          </h3>
          <p
            ref={(el) => (elementsRef.current[1] = el)}
            data-animation="animate-slideInRight"
            className="text-[16px] font-normal leading-[28px] text-white opacity-0"
          >
            {attributes?.hero?.blockQuote1?.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[10px] lg:w-1/2 lg:gap-[8%]">
          <div className="flex flex-col items-end">
            <div className="flex flex-col items-end">
              <h3
                ref={(el) => (elementsRef.current[2] = el)}
                data-animation="animate-slideInLeft"
                className="font-glittenCaps text-[48px] text-primary-yellow opacity-0"
              >
                {attributes?.hero?.blockQuote1?.info1}
              </h3>
              <p
                ref={(el) => (elementsRef.current[3] = el)}
                data-animation="animate-slideInRight"
                className="text-[16px] font-light leading-[28px] text-white opacity-0"
              >
                {attributes?.hero?.blockQuote1?.subinfo1}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <h3
                ref={(el) => (elementsRef.current[4] = el)}
                data-animation="animate-slideInLeft"
                className="font-glittenCaps text-[48px] text-primary-yellow opacity-0"
              >
                {attributes?.hero?.blockQuote1?.info3}
              </h3>
              <p
                ref={(el) => (elementsRef.current[5] = el)}
                data-animation="animate-slideInRight"
                className="text-[16px] font-light leading-[28px] text-white opacity-0"
              >
                {attributes?.hero?.blockQuote1?.subinfo3}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex flex-col items-end">
              <h3
                ref={(el) => (elementsRef.current[6] = el)}
                data-animation="animate-slideInLeft"
                className="font-glittenCaps text-[48px] text-primary-yellow opacity-0"
              >
                {attributes?.hero?.blockQuote1?.info2}
              </h3>
              <p
                ref={(el) => (elementsRef.current[7] = el)}
                data-animation="animate-slideInRight"
                className="text-[16px] font-light leading-[28px] text-white opacity-0"
              >
                {attributes?.hero?.blockQuote1?.subinfo2}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <h3
                ref={(el) => (elementsRef.current[8] = el)}
                data-animation="animate-slideInLeft"
                className="font-glittenCaps text-[48px] text-primary-yellow opacity-0"
              >
                {attributes?.hero?.blockQuote1?.info4}
              </h3>
              <p
                ref={(el) => (elementsRef.current[9] = el)}
                data-animation="animate-slideInRight"
                className="text-[16px] font-light leading-[28px] text-white opacity-0"
              >
                {attributes?.hero?.blockQuote1?.subinfo4}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* chronology  section*/}
      <div className="flex w-full flex-col items-center justify-center pb-[81px] pt-[40px] lg:pt-[89px]">
        <h2 className="text-[34px] font-semibold lg:my-[50px]">Cronologia</h2>
        <div className="my-12 mt-[213px] hidden w-screen flex-col items-center lg:flex">
          <div className="relative flex w-[80%] justify-between">
            {chronologyItems?.map((item: any, index: number) => (
              <div
                className={`relative flex flex-col items-center justify-center`}
                key={`${item.year}-${index}`}
              >
                <div
                  className={`absolute bottom-12 min-w-max items-center ${index % 2 !== 0 ? 'flex flex-col-reverse' : 'hidden'}`}
                >
                  <div
                    className={`h-[126px] w-[2px] bg-gradient-to-t ${item?.year === selectedYear ? 'from-primary-yellow' : 'from-black'} to-white"`}
                  ></div>
                  <span
                    className={`${item?.year === selectedYear ? 'text-primary-yellow' : 'text-black'} mt-2`}
                  >
                    {item?.subtitle}
                  </span>{' '}
                </div>
                <div
                  className={`absolute flex flex-col items-center justify-center ${index % 2 === 0 ? 'bottom-9' : 'bottom-0'}`}
                >
                  <span
                    className={`text-[24px] font-semibold ${item?.year === selectedYear ? 'text-primary-yellow' : 'text-black'} ${index % 2 !== 0 ? 'hidden' : 'flex'}`}
                  >
                    {item?.year}
                  </span>
                  <button
                    className={`z-10 h-[26px] w-[26px] rounded-full bg-black ${item?.year === selectedYear ? 'bg-primary-yellow' : 'bg-black'}`}
                    onClick={() => setSelectedYear(item?.year)}
                  ></button>
                  <span
                    className={`text-[24px] font-semibold ${item?.year === selectedYear ? 'text-primary-yellow' : 'text-black'} ${index % 2 !== 0 ? 'flex' : 'hidden'}`}
                  >
                    {item?.year}
                  </span>
                </div>

                <div
                  className={`absolute -top-10 flex min-w-max flex-col items-center ${index % 2 !== 0 ? 'hidden' : 'flex'}`}
                >
                  <div
                    className={`h-[126px] w-[2px] ${index % 2 !== 0 ? 'bg-gradient-to-t' : 'bg-gradient-to-b'} ${item?.year === selectedYear ? 'from-primary-yellow' : 'from-black'} to-white"`}
                  ></div>
                  <span
                    className={`text-[16px] ${item?.year === selectedYear ? 'text-primary-yellow' : 'text-black'} mt-2`}
                  >
                    {item?.subtitle}
                  </span>{' '}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="-mt-[100px] hidden h-[2px] w-full bg-gradient-to-r from-transparent via-black to-transparent lg:flex"></div>

        <div className="mt-[290px] hidden w-full max-w-[1095] flex-col justify-center gap-[10%] px-[7%] lg:flex lg:flex-row">
          <div className="flex w-full flex-col justify-end lg:max-w-[420px]">
            <span className="text-[24px] font-semibold text-primary-yellow">
              {filteredCronologyItemByYear[0]?.year}
            </span>
            <span className="text-left text-[34px] font-medium text-[#1D1C1B]">
              {filteredCronologyItemByYear[0]?.title}
            </span>
            <span className="text-[14px] font-normal leading-[26px] text-[#1D1C1B]">
              {filteredCronologyItemByYear[0]?.description}
            </span>
          </div>
          <div
            className="mt-[50px] flex h-[368px] w-[562px] w-full max-w-[562px] items-center justify-center rounded-[14px] lg:mt-0"
            style={{
              backgroundImage: `url(${getStrapiMedia(filteredCronologyItemByYear[0]?.image?.data?.attributes?.url)})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundBlendMode: 'darken',
              filter: 'brightness(50%)',
            }}
          />
        </div>
      </div>
      {/* chronology section mobile */}
      <div className="flex flex-col lg:hidden">
        <div className="scrollbar-hide flex gap-[20px] overflow-x-scroll pl-[8%]">
          {chronologyItems?.map((item: any, index: number) => (
            <div
              className="relative flex min-w-[80px] flex-shrink-0 flex-col items-center justify-center lg:hidden"
              key={`${item.year}-${index}`}
            >
              <span
                className={`cursor-pointer text-[20px] font-semibold ${
                  item?.year === selectedYear
                    ? 'rounded-md bg-primary-green p-3 text-primary-yellow'
                    : 'text-black'
                }`}
                onClick={() => setSelectedYear(item?.year)}
              >
                {item?.year}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-[30px] mt-[50px] flex w-full max-w-[1095] flex-col justify-center gap-[10%] px-[7%] lg:flex-row">
          <div className="flex w-full flex-col justify-end lg:max-w-[420px]">
            <span className="text-[24px] font-semibold text-primary-yellow">
              {filteredCronologyItemByYear[0]?.year}
            </span>
            <span className="text-left text-[34px] font-medium leading-[39px] text-[#1D1C1B]">
              {filteredCronologyItemByYear[0]?.title}
            </span>
            <span className="text-[14px] font-normal leading-[26px] text-[#1D1C1B]">
              {filteredCronologyItemByYear[0]?.description}
            </span>
          </div>
          <div
            className="mt-[50px] flex h-[368px] w-[562px] w-full max-w-[562px] items-center justify-center rounded-[14px] lg:mt-0"
            style={{
              backgroundImage: `url(${getStrapiMedia(filteredCronologyItemByYear[0]?.image?.data?.attributes?.url)})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundBlendMode: 'darken',
              filter: 'brightness(50%)',
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-[20px] rounded-b-[30px] border-t-2 border-t-primary-yellow bg-primary-green px-[12%] py-[59px] lg:h-[368px] lg:flex-row">
        <div
          className="flex items-center justify-center"
          ref={(el) => (elementsRef.current[10] = el)}
          data-animation="animate-slideInLeft"
        >
          <h3 className="inline-block max-w-[420px] animate-slideInLeft text-center font-glittenCaps text-[36px] text-primary-yellow lg:text-left">
            {attributes?.blockQuote2?.title}
          </h3>
        </div>
        <div
          className="flex items-center justify-center"
          ref={(el) => (elementsRef.current[11] = el)}
          data-animation="animate-slideInRight"
        >
          <p className="inline-block max-w-[375px] animate-slideInRight text-justify text-[16px] font-normal leading-[28px] text-white">
            {attributes?.blockQuote2?.description}
          </p>
        </div>
      </div>
      {/* our services section */}
      <div className="w-full pt-[100px]">
        <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[10px] px-[7%]">
            <div className="flex items-center">
              <div className="h-[1px] w-[53px] bg-primary-yellow" />
              <span className="text-sm font-normal uppercase text-primary-yellow">
                O QUE PUDEMOS OFERECER{' '}
              </span>
            </div>
            <h2 className="text-[34px] font-medium">Os nossos serviços</h2>
          </div>
          <div className="flex w-full flex-col items-center lg:flex-row">
            {servicesTypes.map((item: any, index: number) => (
              <ProjectTypeCardAbout
                key={index}
                href={`/services-vergadela/${item?.attributes?.subtitle}`}
                item={item?.attributes}
                img={item?.attributes?.cardImg?.data?.attributes?.url}
                type={item?.attributes?.type}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* our team section */}
      <div className="mt-0 w-full pl-[7%] pt-[100px] lg:mt-[300px] lg:px-[7%]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[10px]">
            <div className="h-[1px] w-[53px] bg-primary-yellow" />
            <span className="text-sm font-normal uppercase text-primary-yellow">
              PROFISSIONAIS
            </span>
          </div>
          <h2 className="text-[34px] font-medium">Nossa Equipa</h2>
          <div className="scrollbar-hide flex w-full items-center gap-[30px] overflow-x-auto overflow-y-hidden">
            <TeamSwiper items={attributes?.team?.teamMember} />
          </div>
        </div>
      </div>

      {/* recent projects section */}
      <div className="relative w-full overflow-x-auto pl-[7%] pt-[100px] lg:px-[7%]">
        <div className="flex flex-col overflow-x-auto">
          <div className="flex items-center gap-[10px]">
            <div className="h-[1px] w-[53px] bg-primary-yellow" />
            <span className="text-sm font-normal uppercase text-primary-yellow">
              PROJETOS
            </span>
          </div>
          <h2 className="text-[34px] font-medium">Projetos Recentes</h2>
          <div className="scrollbar-hide flex w-full items-center justify-start gap-[30px] overflow-x-auto">
            {projects?.map(
              (item: { attributes: any }, index: Key | null | undefined) => (
                <div
                  className="relative flex h-[278px] min-w-[308px] items-center overflow-hidden rounded-[12px]"
                  key={index}
                >
                  <div
                    className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat grayscale transition-transform duration-1000 ease-out hover:scale-105 hover:grayscale-0"
                    style={{
                      backgroundImage: `url(${getStrapiMedia(item?.attributes?.hero?.image?.data?.attributes?.url)})`,
                    }}
                  />
                  <div className="absolute bottom-2 left-5 flex flex-col">
                    <div className="flex items-center gap-[10px]">
                      <div className="h-[1px] w-[13px] bg-primary-yellow" />
                      <span className="text-sm font-normal uppercase text-primary-yellow">
                        {item?.attributes?.type}
                      </span>
                    </div>
                    <h3 className="font-glittenCaps text-[28px] capitalize text-white">
                      {item?.attributes?.hero?.subtitle}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
          <Link
            className="mt-[27px] flex text-primary-green"
            href={'/project-types'}
          >
            <span className="text-[16px]">MAIS PROJETOS</span>
            <Image
              src={'/icons/arrow-right.svg'}
              width={24}
              height={26}
              alt={'arrowIcon'}
            />
          </Link>
        </div>
      </div>
      {/* curiosity */}
      <div className="flex h-[694px] w-full flex-col py-[99px] pb-0 pl-[7%] lg:px-[7%]">
        <>
          <div className="flex items-center gap-[10px]">
            <div className="h-[1px] w-[53px] bg-primary-yellow font-medium" />
            <span className="text-sm font-normal uppercase text-primary-yellow">
              {attributes?.curiositySection?.title}
            </span>
          </div>
          <h2 className="mb-[26px] text-[34px] font-medium">
            {attributes?.curiositySection?.subtitle}
          </h2>
        </>
        <div className="scrollbar-hide flex justify-between gap-[20px] overflow-x-auto overflow-y-hidden">
          {attributes?.curiositySection?.curiosity?.map(
            (
              item: {
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined
                image: { data: { attributes: { url: string | null } } }
              },
              index: Key | null | undefined
            ) => (
              <div
                key={index}
                className="group flex h-[396px] w-[420px] min-w-[300px] flex-col overflow-hidden rounded-lg"
              >
                <div className="items-left flex h-1/2 w-full flex-col justify-start gap-[23px] rounded-t-lg bg-primary-green py-[32px] pl-[20px]">
                  <p className="max-w-[252px] text-[26px] font-medium leading-[30.47px] text-white">
                    {item.title}
                  </p>
                  <div className="group flex items-center gap-[2px]">
                    <div className="h-[1px] w-[12px] bg-primary-yellow transition-all duration-500 ease-out group-hover:w-[24px]" />
                    <Link href={'/contact'} className="hover:brightness-75">
                      <span className="text-left text-primary-yellow">
                        SABER MAIS
                      </span>
                    </Link>
                  </div>
                </div>
                <div
                  className="relative flex h-[872px] w-full items-center justify-center bg-cover bg-center bg-no-repeat grayscale filter transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:filter-none"
                  style={{
                    backgroundImage: `url(${getStrapiMedia(item?.image?.data?.attributes?.url)})`,
                  }}
                >
                  <div className="absolute inset-0 transition duration-500 ease-out group-hover:brightness-100 group-hover:filter-none"></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* partinershipSection */}
      <div className="flex h-[250px] w-full flex-col items-start justify-center overflow-hidden lg:h-[526px] lg:items-center">
        <h3 className="mb-[76px] pl-[7%] text-[35px] font-medium leading-[41px]">
          Parcerias
        </h3>
        <div className="scrollbar-hide flex w-full items-center justify-center gap-[20px] overflow-x-scroll px-[7%] pl-[100px] lg:justify-between">
          {attributes?.partinershipSection?.partinership.map(
            (
              item: {
                href: string
                image: { data: { attributes: { url: string | null } } }
              },
              index: any
            ) => (
              <div key={`${item}-${index}`} className="flex-shrink-0">
                <Link
                  href={item?.href}
                  className="flex items-center justify-center"
                >
                  <Image
                    className="h-[49px] w-auto"
                    src={
                      `${getStrapiMedia(item?.image?.data?.attributes?.url)}` ??
                      ''
                    }
                    width={74}
                    height={74}
                    alt={''}
                  />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const data = await getAboutUs()
  const dataProjects = await getProjectList()
  const dataServiceType = await getServices()

  const { attributes } = data?.data?.data
  const projects = dataProjects?.data?.data
  const services = dataServiceType?.data
  console.log('dataServiceType', services)
  return {
    props: {
      attributes: attributes,
      projects: projects,
      servicesTypes: services,
    },
  }
}
