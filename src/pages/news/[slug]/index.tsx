import NewsCard from '@/components/News/NewsCard'
import RecentNewsCard from '@/components/News/RecentNewsCard'
import getNews from '@/services/getNews'
import getNewsPage from '@/services/getNewsPage'
import { getStrapiMedia } from '@/utils/api-helpers'
import Image from 'next/image'

interface NewsProps {
  attributes: any
  news: any
}

const NewsIndividual: React.FC<NewsProps> = ({ attributes, news }) => {
  console.log('Attributes', attributes)
  console.log('News', news)
  return (
    <div>
      <div className="relative mb-[78px] flex min-h-[872px] items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${getStrapiMedia(attributes?.bigImage?.data?.attributes?.url)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        ></div>

        <div className="relative left-[10%] top-1/2 z-10 flex flex-col">
          <div className="flex">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="ml-2 font-roboto text-[16px] text-primary-yellow">
              {attributes.title}
            </span>
          </div>
          <h3 className="font-glittenCaps text-[70px] text-white">
            {attributes.subtitle}
          </h3>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[67px]">
          {news.map((item: any, index: any) => (
            <NewsCard
              key={`${item}-${index}`}
              newsTitle={item?.attributes?.preview?.title}
              imageSrc={item?.attributes?.preview?.image?.data?.attributes?.url}
              newsContent={
                'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.'
              }
              tag={item?.attributes?.tag}
              date={'6 DE MAIO, 2022'}
            />
          ))}
        </div>
        <div className="flex flex-col px-[7%]">
          <div className="mb-[69px]">
            <h2 className="mb-[19px] font-roboto text-[23px] font-semibold">
              TAGS{' '}
            </h2>
            <div className="flex w-full flex-wrap gap-[24px]">
              {news.map((item: any, index: any) => (
                <span
                  key={`${item}-${index}`}
                  className="flex h-[32px] w-max items-center justify-center rounded-[2px] bg-black px-[18px] py-[9px] text-center text-sm font-semibold text-white"
                >
                  {item?.attributes?.tag?.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h2 className="no-break mb-[19px] font-roboto text-[23px] font-semibold">
              NOTÍCIAS RECENTES
            </h2>
            <div className="flex flex-col gap-[24px]">
              {news.map((item: any, index: any) => (
                <RecentNewsCard
                  key={`${item}-${index}`}
                  newsDate={'6 DE MAIO, 2022'}
                  newsTitle={item?.attributes?.preview?.title}
                  imgUrl={
                    item?.attributes?.preview?.image?.data?.attributes?.url
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsIndividual

export async function getServerSideProps() {
  const data = await getNewsPage()
  const attributes = data?.data?.data
  const newsData = await getNews()

  return {
    props: {
      attributes: attributes?.attributes,
      news: newsData?.data?.data,
    },
  }
}
