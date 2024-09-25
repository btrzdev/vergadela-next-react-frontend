import NewsCard from '@/components/News/NewsCard'
import RecentNewsCard from '@/components/News/RecentNewsCard'
import getNews from '@/services/getNews'
import getNewsPage from '@/services/getNewsPage'
import { getStrapiMedia } from '@/utils/api-helpers'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NewsProps {
  attributes: any
  news: any
}

const News: React.FC<NewsProps> = ({ attributes, news }) => {
  const newsTags = news?.map((item: any) => item?.attributes?.tag)

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(news)
  const [searchByTag, setSearchByTag] = useState('')

  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)

  useEffect(() => {
    const filtered = news.filter((item: any) => {
      const titleMatches = item?.attributes?.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const tagMatches =
        searchByTag === '' || item?.attributes?.tag === searchByTag

      return titleMatches && tagMatches
    })

    setFilteredItems(filtered)
    setCurrentPage(1)
  }, [searchTerm, searchByTag, news])

  const paginatedNews = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSearch = (event: { target: { value: string } }) => {
    setSearchTerm(event.target.value)
  }

  const handleSpanClick = (tag: string) => {
    setSearchByTag(tag === searchByTag ? '' : tag)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex w-screen flex-col overflow-hidden">
      {/* Header Section */}
      <div className="relative mb-[78px] flex min-h-[500px] items-center overflow-hidden lg:min-h-[872px]">
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

        <div className="relative left-[10%] top-1/2 z-10 flex w-full flex-col">
          <div className="flex">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="ml-2 text-[16px] text-primary-yellow">
              {attributes.title}
            </span>
          </div>
          <h3 className="font-glittenCaps text-[50px] text-white lg:text-[70px]">
            {attributes.subtitle}
          </h3>
        </div>
      </div>

      {/* Main Section */}
      <div className="mb-[132px] flex w-full flex-col justify-between px-[7%] lg:flex-row">
        {/* News Cards Section */}
        <div className="flex flex-col">
          {/* Tag Filtering */}
          <div className="mb-[69px] lg:hidden">
            <h2 className="mb-[19px] text-[23px] font-semibold">TAGS</h2>
            <div className="flex w-full flex-wrap gap-[24px]">
              {news.map((item: any, index: any) => (
                <span
                  key={`${item}-${index}`}
                  onClick={() => handleSpanClick(item?.attributes?.tag)}
                  className={`flex h-[32px] w-max items-center justify-center rounded-[2px] px-[18px] py-[9px] text-center text-sm font-semibold ${
                    searchByTag === item?.attributes?.tag
                      ? 'bg-medium-gray text-white'
                      : 'border border-medium-gray bg-white text-medium-gray'
                  } cursor-pointer`}
                >
                  {item?.attributes?.tag?.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[67px]">
          {paginatedNews.map((item: any, index: any) => (
            <Link href={`/news/${item?.id}`} key={`${item}-${index}`}>
              <NewsCard
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

          {/* Pagination Section */}
          <div className="flex justify-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rotate-180 bg-transparent hover:cursor-pointer"
            >
              <img
                src="/icons/nextPageButton.svg"
                className="h-[32px] w-[40px]"
              />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 ${
                  currentPage === index + 1
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-black'
                } rounded`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-transparent hover:cursor-pointer"
            >
              <img
                src="/icons/nextPageButton.svg"
                className="h-[32px] w-[40px]"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col px-[7%]">
          <div className="mb-[69px]">
            <input
              className="focus:border-b-1 hidden w-full border-b border-gray-300 pb-[8px] placeholder:text-[12px] focus:border-gray-300 focus:outline-none"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Tag Filtering */}
          <div className="mb-[69px] hidden lg:flex lg:flex-col">
            <h2 className="mb-[19px] text-[23px] font-semibold">TAGS</h2>
            <div className="flex w-full flex-wrap gap-[24px]">
              {news.map((item: any, index: any) => (
                <span
                  key={`${item}-${index}`}
                  onClick={() => handleSpanClick(item?.attributes?.tag)}
                  className={`flex h-[32px] w-max items-center justify-center rounded-[2px] px-[18px] py-[9px] text-center text-sm font-semibold ${
                    searchByTag === item?.attributes?.tag
                      ? 'bg-medium-gray text-white'
                      : 'border border-medium-gray bg-white text-medium-gray'
                  } cursor-pointer`}
                >
                  {item?.attributes?.tag?.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Recent News Section */}
          <div className="mb-0 w-full lg:mb-[132px]">
            <h2 className="no-break mb-[19px] text-[23px] font-semibold">
              OUTRAS NOTÍCIAS
            </h2>
            <div className="flex flex-col gap-[24px]">
              {news.map((item: any, index: any) => (
                <Link href={`/news/${item?.id}`} key={`${item}-${index}`}>
                  <RecentNewsCard
                    key={`${item}-${index}`}
                    newsDate={'6 DE MAIO, 2022'}
                    newsTitle={item?.attributes?.preview?.title}
                    imgUrl={
                      item?.attributes?.preview?.image?.data?.attributes?.url
                    }
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

export default News

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
