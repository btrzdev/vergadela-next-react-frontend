import getProjectList from '@/services/getProjectList'
import { getStrapiMedia } from '@/utils/api-helpers'
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
    dotsClass: 'button__bar',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    vertical: false,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Slider {...settings}>
        {projects?.length > 0 ? (
          projects.map((item: any, index: number) => (
            <div className="flex h-screen w-screen" key={index}>
              <Link
                href={'/project-types'}
                className="absolute top-1/2 ml-10 flex flex-col pl-[3%]"
                style={{
                  cursor: 'pointer',
                  zIndex: 100,
                }}
              >
                <h4 className="text-[16px] font-light uppercase text-white">
                  {item?.attributes?.type || 'Name'}
                </h4>
                <h3 className="font-glittenCaps text-[70px] font-medium text-white">
                  {item?.attributes?.hero?.subtitle || 'Name'}
                </h3>
                <div className="mt-[27px] flex text-primary-yellow">
                  <span className="text-[16px]">MAIS PROJETOS</span>
                  <Image
                    src={'/icons/arrow-right.svg'}
                    width={24}
                    height={26}
                    alt={'arrowIcon'}
                  />
                </div>
              </Link>
              <div
                className="brightness-25 relative flex h-screen w-screen items-center pl-[200px]"
                style={{
                  backgroundImage: `url(${getStrapiMedia(item?.attributes?.hero?.image?.data?.attributes?.url)})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              ></div>
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
