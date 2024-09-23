import RecentBigNewsCard from '@/components/News/RecentBigNewsCard'
import getIndividualNews from '@/services/getIndividualNews'
import getNews from '@/services/getNews'
import { getStrapiMedia } from '@/utils/api-helpers'
import Formatter from '@/utils/formatter'
import Image from 'next/image'
import Link from 'next/link'
import { GetServerSidePropsContext } from 'next/types'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkBreaks from 'remark-breaks'

interface NewsProps {
  attributes: any
  news: any
  slug: any
}

const IndividualNews: React.FC<NewsProps> = ({ attributes, news, slug }) => {
  console.log('attributes', attributes)
  console.log('news', news)

  const customComponents = {
    p: ({ ...props }) => (
      <p
        className="flex text-[14px] font-light leading-[24px] text-medium-gray"
        {...props}
      />
    ),
    img: ({ ...props }) => (
      <img className="mr-4 h-auto max-w-[300px]" {...props} />
    ),
  }

  return (
    <div>
      {/* Header Section */}
      <div className="relative flex min-h-[872px] items-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${getStrapiMedia(attributes?.preview?.image?.data?.attributes?.url)})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        ></div>

        <div className="relative left-[10%] top-1/2 z-10 flex w-1/2 flex-col">
          <div className="flex">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="ml-2 text-[16px] text-primary-yellow">
              {'NOTICIAS'}
            </span>
          </div>
          <h3 className="text-left font-glittenCaps text-[70px] text-white">
            {attributes.title}
          </h3>
        </div>
      </div>

      <div>
        <div className="flex h-full w-full justify-between border border-x-0 border-t-0 border-b-[#D9D9D9] bg-white px-[7%] pt-[151px]">
          <div className="flex w-1/2 flex-col">
            <div className="flex max-w-[420px] flex-col">
              <div className="flex items-center">
                <span className="flex h-[32px] w-max items-center justify-center rounded-[2px] bg-medium-gray px-[18px] py-[9px] text-center text-sm font-semibold text-white">
                  {attributes?.tag?.toUpperCase()}
                </span>
                <span className="w-max items-center justify-center rounded-[2px] px-[18px] py-[9px] text-center text-sm font-semibold text-primary-yellow">
                  {attributes?.date.toUpperCase()}
                </span>
              </div>
              <h2 className="text-[35px] font-semibold">{attributes.title}</h2>
              <Formatter
                value={attributes?.content}
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
            </div>{' '}
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-[12px] font-semibold leading-[24px]">
                PARTILHAR
              </h3>
              <div className="mb-[55px] flex gap-[24px]">
                <Link href={''}>
                  <Image
                    src={'/icons/instagramIcon.svg'}
                    alt={''}
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href={''}>
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
          <div className="flex max-h-[750px] w-1/2 flex-col gap-[40px] overflow-y-auto">
            {attributes?.images?.data?.map(
              (item: { attributes: { url: string | null } }, index: any) => (
                <img
                  className="max-h-[333px] max-w-[533px] rounded-[14px]"
                  src={getStrapiMedia(item?.attributes?.url) ?? ''}
                  key={`${item}-${index}`}
                />
              )
            )}
          </div>
        </div>
        <div className="flex h-[800px] w-full flex-col">
          <div className="mb-[50px] flex justify-between px-[7%] pt-[51px]">
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
              <Link href={'/news'}>
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
          <div className="flex flex-col items-center justify-center gap-[39px] px-[7%] pb-[134px]">
            <div className="flex flex-col items-center justify-center gap-[13px]">
              <img
                src={'/icons/yellow_straight.svg'}
                alt={''}
                className="h-[1px] w-full"
              />
              <span className="ml-2 text-[16px] text-primary-yellow">
                {'NOTÍCIAS'}
              </span>
              <h3 className="text-[35px] font-semibold">OUTRAS NOTÍCIAS</h3>
            </div>
            <div className="flex w-full max-w-[1320px] justify-between">
              {news
                .filter((item: { id: any }, index: any) => item.id !== slug)
                .slice(0, 3)
                .map((item: any, index: any) => (
                  <Link
                    href={`/news/${item?.id}`}
                    key={`${item}-${index}`}
                    className="flex w-[420px]"
                  >
                    <RecentBigNewsCard
                      key={`${item}-${index}`}
                      newsTitle={item?.attributes?.preview?.title}
                      imageSrc={
                        item?.attributes?.preview?.image?.data?.attributes?.url
                      }
                      newsContent={
                        'Worem ipsum dolor sit amet, consectetur adipiscing elit...'
                      }
                      tag={item?.attributes?.tag}
                      date={'6 DE MAIO, 2022'}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualNews

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query

  const data = await getIndividualNews(String(slug))
  const attributes = data?.data?.attributes
  const newsData = await getNews()

  return {
    props: {
      attributes: attributes,
      news: newsData?.data?.data,
      slug: slug,
    },
  }
}
