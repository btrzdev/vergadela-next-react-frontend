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
} from 'react'
import getProjectType from '@/services/getProjectType'
import ProjectTypeCardAbout from '@/components/ProjectTypes/ProjectTypes'

export default function AboutUs({ attributes, projects, projectsType }: any) {
  console.log('Attributes About Us', attributes)
  console.log('Attributes projects', projects)
  console.log('Attributes projectTypes', projectsType)

  const [chronologyItems, setChronologyItems] = useState(
    attributes?.chronology?.items
  )

  const [selectedYear, setSelectedYear] = useState(chronologyItems[0].year)

  const filteredCronologyItemByYear = chronologyItems.filter(
    (item: any) => item.year === selectedYear
  )

  // useEffect(() => console.log('Selected Year', selectedYear))
  // useEffect(() =>
  //   console.log('filteredCronologyItemByYear', filteredCronologyItemByYear)
  // )

  return (
    <div>
      <div>
        <div
          className="relative flex h-[872px] w-full items-center justify-center rounded-[4px]"
          style={{
            backgroundImage: `url('/images/hero.png')`,
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

          <h1 className="font-glittenCaps text-[70px] text-white">
            {attributes?.hero?.subtitle}
          </h1>
          <h2 className="mb-[45px] inline-block max-w-[460px] text-justify text-[20px] font-light leading-[26px] text-white">
            {attributes?.hero?.description}
          </h2>
        </div>
      </div>
      <div className="h-[368px] w-full rounded-b-[30px] border-t-2 border-t-primary-yellow bg-primary-green"></div>

      {/* chronology  section*/}
      <div className="flex w-full flex-col items-center justify-center pb-[81px] pt-[89px]">
        <h2 className="my-[50px] text-[34px] font-semibold">Cronologia</h2>
        <div className="my-12 mt-[213px] flex w-screen flex-col items-center">
          <div className="relative flex w-[80%] justify-between">
            {chronologyItems?.map(
              (
                item: {
                  year:
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
                },
                index: number
              ) => (
                <div
                  className={`flex flex-col items-center justify-center`}
                  key={`${item.year}-${index}`}
                >
                  <button
                    className={`h-[26px] w-[26px] rounded-full bg-black ${item?.year === selectedYear ? 'bg-primary-yellow' : 'bg-black'}`}
                    onClick={() => setSelectedYear(item?.year)}
                  ></button>
                  <span
                    className={`text-[24px] font-semibold ${item?.year === selectedYear ? 'text-primary-yellow' : 'text-black'}`}
                  >
                    {item?.year}
                  </span>
                </div>
              )
            )}
          </div>
          <div className="mt-[-50px] h-[2px] w-full bg-gradient-to-r from-transparent via-black to-transparent"></div>
        </div>
        <div className="mt-[290px] flex w-full max-w-[1095] justify-center gap-[10%] px-[7%]">
          <div className="flex max-w-[420px] flex-col justify-end">
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
            className="flex h-[368px] w-[562px] w-full max-w-[562px] items-center justify-center rounded-[14px]"
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
      <div className="flex h-[368px] w-full items-center justify-between rounded-b-[30px] border-t-2 border-t-primary-yellow bg-primary-green px-[20%] py-[59px]">
        <h3 className="inline-block max-w-[420px] animate-slideInLeft font-glittenCaps text-[36px] text-primary-yellow">
          &quot;Transformamos espaços em experiências, onde cada detalhe reflete
          amor, inovação e a essência de quem os habita.&quot;
        </h3>
        <p className="inline-block max-w-[375px] animate-slideInRight text-[16px] font-normal leading-[28px] text-white">
          A nossa visão é continuar a expandir a nossa presença global,
          estabelecendo parcerias estratégicas e alcançando um crescimento
          contínuo e sustentável, sempre comprometidos com a excelência,
          inovação e responsabilidade social em todos os nossos projetos.
        </p>
      </div>
      {/* our services section*/}
      <div className="h-[591px] w-full pt-[100px]">
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
          <div className="flex w-full items-center justify-start">
            {projectsType.map((item: any, index: number) => (
              <Link
                href={`/services-vergadela/${item?.attributes?.type}`}
                key={`${item?.attributes?.type}-${index}`}
              >
                <ProjectTypeCardAbout
                  item={item?.attributes}
                  img={item?.attributes?.cardImg?.data?.attributes?.url}
                  type={item?.attributes?.type}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* our team section */}
      <div className="mt-[300px] h-[591px] w-full px-[7%] pt-[100px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[10px]">
            <div className="h-[1px] w-[53px] bg-primary-yellow" />
            <span className="text-sm font-normal uppercase text-primary-yellow">
              PROFISSIONAIS
            </span>
          </div>
          <h2 className="text-[34px] font-medium">Nossa Equipa</h2>
          <div className="flex w-full items-center justify-start gap-[30px]">
            <TeamSwiper items={attributes?.team?.teamMember} />
          </div>
        </div>
      </div>
      {/* recent projects section */}
      <div className="h-[591px] w-full px-[7%] pt-[100px]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[10px]">
            <div className="h-[1px] w-[53px] bg-primary-yellow" />
            <span className="text-sm font-normal uppercase text-primary-yellow">
              PROJETOS
            </span>
          </div>
          <h2 className="text-[34px] font-medium">Projetos Recentes</h2>
          <div className="flex w-full items-center justify-start gap-[30px]">
            {projects?.map(
              (item: { attributes: any }, index: Key | null | undefined) => (
                <div
                  className="relative flex h-[278px] w-[308px] items-center overflow-hidden rounded-[12px]"
                  key={index}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-transform duration-1000 ease-out hover:scale-105 hover:grayscale-0"
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
                    <h3 className="font-glittenCaps text-[28px] text-white">
                      {' '}
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
      <div className="flex h-[694px] w-full flex-col px-[7%] py-[99px]">
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
        <div className="flex justify-between gap-[20px]">
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
                className="group flex h-[396px] w-[420px] flex-col overflow-hidden rounded-lg"
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
      <div className="flex h-[526px] w-full flex-col items-center justify-center">
        <h3 className="mb-[76px] text-[35px] font-medium leading-[41px]">
          Parcerias
        </h3>
        <div className="flex w-full justify-evenly">
          {attributes?.partinershipSection?.partinership.map(
            (
              item: {
                href: string
                image: { data: { attributes: { url: string | null } } }
              },
              index: any
            ) => (
              <div key={`${item}-${index}`}>
                <Link href={item?.href}>
                  <Image
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
  const dataProjectType = await getProjectType()

  const { attributes } = data?.data?.data
  const projects = dataProjects?.data?.data
  const projectTypes = dataProjectType?.data?.data

  return {
    props: {
      attributes: attributes,
      projects: projects,
      projectsType: projectTypes,
    },
  }
}
