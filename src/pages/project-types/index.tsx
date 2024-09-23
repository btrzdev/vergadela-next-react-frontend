import getProjectTypesPage from '@/services/getProjectTypePage'
import { getStrapiMedia } from '@/utils/api-helpers'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectTypesProps {
  attributes: any
}
const ProjectTypes: React.FC<ProjectTypesProps> = ({ attributes }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-white">
        <div className="mb-[50px] flex flex-col items-center justify-center gap-[40px] px-5 py-[10px] lg:mb-[160px] lg:gap-[126px] lg:px-0">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Image
                src={'/icons/yellow_straight.svg'}
                alt={''}
                width={53}
                height={22}
              />
              <span className="ml-2 font-roboto text-[16px] text-primary-yellow">
                {attributes?.attributes?.title}
              </span>
            </div>
            <h1 className="text-center font-glittenCaps text-[50px] font-normal text-black lg:text-[70px]">
              {attributes?.attributes?.subtitle}
            </h1>
          </div>

          <p className="inline-block max-w-[630px] text-center text-[20px] leading-[35px] lg:text-[28px] lg:leading-[48px]">
            {attributes?.attributes?.description}
          </p>
        </div>
        <div className="flex h-auto w-full flex-col lg:flex-row">
          {attributes?.attributes?.cardType?.map((item: any, index: any) => (
            <Link
              href={'/project-list'}
              className="w-full"
              key={`${item}-${index}`}
            >
              <div
                key={index}
                className="group relative flex h-full min-h-[480px] w-full items-center justify-center overflow-hidden hover:cursor-pointer"
              >
                <div
                  className="absolute inset-0 w-full bg-cover bg-center grayscale filter transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-50 group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${getStrapiMedia(item?.imgCard?.data?.attributes?.url)})`,
                  }}
                />
                <p className="relative z-50 font-glittenCaps text-[50px] capitalize text-white transition-colors duration-500 ease-in-out group-hover:text-primary-yellow">
                  {item?.typeProject}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="h-[4px] w-full bg-primary-yellow"></div>
      </div>
    </main>
  )
}

export default ProjectTypes

export async function getServerSideProps() {
  const data = await getProjectTypesPage()
  const attributes = data?.data?.data

  return {
    props: {
      attributes: attributes,
    },
  }
}
