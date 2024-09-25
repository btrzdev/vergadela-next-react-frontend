import getProjectList from '@/services/getProjectList'
import { getStrapiMedia } from '@/utils/api-helpers'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface HomeProps {
  projects: any
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    vertical: false,
    appendDots: (dots: any) => (
      <div className="relative">
        <ul className="absolute -top-20 right-1/2 z-50 mt-4 flex items-center justify-center space-x-2 bg-transparent">
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div className="h-3 w-3 cursor-pointer rounded-full bg-gray-400 hover:bg-gray-600" />
    ),
  }

  console.log('Projects', projects)
  return (
    <div className={`flex min-h-screen flex-col overflow-hidden`}>
      <Slider {...settings}>
        {projects?.length > 0 ? (
          projects.map((item: any, index: number) => (
            <div className="flex h-screen w-screen" key={index}>
              <div
                className="relative flex h-screen w-screen items-center pl-[200px]"
                style={{
                  backgroundImage: `url(${getStrapiMedia(item?.attributes?.hero?.image?.data?.attributes?.url)})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  zIndex: -1,
                }}
              >
                <div
                  className="absolute inset-0 z-10"
                  style={{ filter: 'brightness(50%)', zIndex: -1 }}
                />
                <div
                  className="relative z-20 flex flex-col"
                  style={{ transition: 'left 0.5s ease-out' }}
                >
                  <h4 className="text-[16px] font-light uppercase text-white">
                    {item?.attributes?.type || 'Name'}
                  </h4>
                  <h3 className="text-[70px] font-medium text-white">
                    {item?.attributes?.hero?.subtitle || 'Name'}
                  </h3>
                  <Link
                    className="mt-[27px] flex text-primary-yellow"
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
            </div>
          ))
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            No items available
          </div>
        )}
      </Slider>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const data = await getProjectList()
  const attributes = data?.data?.data

  return {
    props: {
      projects: attributes,
    },
  }
}
