import getServicePage from '@/services/getServicePage'
import getServices from '@/services/getServices'
import { getStrapiMedia } from '@/utils/api-helpers'
import Formatter from '@/utils/formatter'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkBreaks from 'remark-breaks'

interface ServicesVergadelaProps {
  attributes: any
  slug: any
  servicePage: any
}

const ServicesVergadela: React.FC<ServicesVergadelaProps> = ({
  attributes,
  servicePage,
}) => {
  const [activeTab, setActiveTab] = useState(
    attributes[0]?.attributes?.subtitle
  )

  const currentContent = attributes.filter(
    (element: { attributes: { subtitle: any } }) =>
      element.attributes.subtitle === activeTab
  )

  const customComponents = {
    p: ({ ...props }) => (
      <p
        className="flex flex-col items-center justify-center font-roboto text-[14px] font-light leading-[24px] text-medium-gray lg:flex-row lg:justify-between"
        {...props}
      />
    ),
    img: ({ ...props }) => (
      <img
        className="h-auto w-full md:w-[300px] lg:mr-4 lg:min-h-[326px] lg:min-w-[450px] xl:max-w-[474px]"
        src={getStrapiMedia(props.src) || undefined}
        {...props}
      />
    ),
  }
  useEffect(() => {
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: 'instant',
    })
  }, [])

  return (
    <div className="flex w-full flex-col">
      <div className="relative min-h-[872px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${getStrapiMedia(servicePage?.imgCover?.data?.attributes?.url)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        ></div>
        <div className="relative z-10 flex h-full min-h-[872px] flex-col justify-center pl-[12%]">
          <div className="flex items-center">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="ml-2 text-[16px] text-primary-yellow">
              {servicePage?.title}
            </span>
          </div>
          <h3 className="font-glittenCaps text-[70px] text-white">
            {servicePage?.subtitle}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-[30px] px-[7%] md:flex-row">
        <div className="w-[308px] overflow-x-auto">
          <div className="flex gap-[23px] pb-[74px] pt-[151px] md:flex-col">
            {attributes?.map(
              (
                item: {
                  attributes: {
                    subtitle: string
                  }
                },
                index: any
              ) => (
                <Link
                  key={index}
                  href={`/services-vergadela/${item?.attributes?.subtitle}`}
                >
                  <div
                    onClick={() => setActiveTab(item?.attributes?.subtitle)}
                    className={`flex min-h-[61px] flex-col items-center gap-[18px] rounded-[6px] px-[33px] py-[22px] text-center font-medium hover:cursor-pointer md:flex-row ${
                      activeTab === item?.attributes?.subtitle
                        ? 'bg-primary-green'
                        : 'bg-white'
                    }`}
                    key={`${item}-${index}`}
                  >
                    <img
                      src={
                        activeTab === item?.attributes?.subtitle
                          ? '/icons/white_chair.svg'
                          : '/icons/green_chair.svg'
                      }
                      alt="Chair"
                      width={22}
                      height={18}
                    />
                    <h3
                      className={`text-[16px] font-medium ${
                        activeTab === item?.attributes?.subtitle
                          ? 'text-white'
                          : 'text-primary-green'
                      }`}
                    >
                      {item?.attributes?.subtitle}
                    </h3>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col justify-center overflow-hidden pb-[74px] pt-[151px] lg:w-2/3">
          <h3 className="font-medium text-primary-yellow">
            {currentContent[0]?.attributes?.title}
          </h3>
          <h2 className="text-[35px] font-medium text-medium-gray">
            {currentContent[0]?.attributes?.subtitle}
          </h2>

          <Formatter
            value={currentContent[0]?.attributes?.content}
            render={({ children, key }) => {
              const containsImage = children.includes('<img')

              return (
                <div
                  key={key}
                  className={`flex ${containsImage ? 'flex-row' : 'flex-row'}`}
                >
                  <Markdown
                    remarkPlugins={[remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                    components={customComponents}
                  >
                    {children}
                  </Markdown>
                </div>
              )
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesVergadela

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await getServices()
  const servicePage = await getServicePage()
  const attributes = data?.data
  const servicePageData = servicePage?.data?.data

  return {
    props: {
      attributes: attributes,
      servicePage: servicePageData?.attributes,
    },
  }
}
