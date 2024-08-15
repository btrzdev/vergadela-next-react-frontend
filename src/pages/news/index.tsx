import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import NewsCard from '@/components/News/NewsCard'

const News = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <NewsCard
          newsTitle={'Um talento “Made in Braga” que brilha no Karting'}
          imageSrc={'/images/news_sample.png'}
          newsContent={
            'Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus necfringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.'
          }
          tag={'social'}
          date={'6 DE MAIO, 2022'}
        />
      </div>
      <div>
        <h2 className="font-roboto text-[23px] font-semibold">
          NOTÍCIAS RECENTES
        </h2>
        <div className="flex w-[308px] gap-[30px]">
          <div
            className="flex h-[86px] w-[94px] items-center justify-center rounded-[4px]"
            style={{
              backgroundImage: `url('/images/news_sample.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          <div className="flex flex-col">
            <h3>Lorem ipsum dolor elit sir amet.</h3>
            <span className="text-[16px] text-primary-yellow">
              6 DE MAIO, 2022
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default News
