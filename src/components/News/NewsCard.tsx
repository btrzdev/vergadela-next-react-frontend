import { ReactNode } from 'react'

interface NewsCardProps {
  imageSrc: string
  newsTitle: string
  newsContent: string
  tag: string
  date: string | ReactNode
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  newsTitle,
  newsContent,
  tag,
  date,
}) => {
  return (
    <div className="font-roboto flex flex-col px-[11%]">
      <div
        className="flex h-full min-h-[445px] w-[645px] items-center justify-center"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="mb-[27px] mt-[35px] flex items-center gap-[16px]">
        <span className="inline-block flex h-[32px] items-center justify-center rounded-[2px] bg-black p-5 text-center text-sm font-semibold text-white">
          {tag.toUpperCase()}
        </span>
        <span className="inline-block flex h-[32px] items-center justify-center text-center text-primary-yellow">
          {date}
        </span>
      </div>
      <div className="flex max-w-[642px] flex-col">
        <h2 className="text-[34px] font-semibold text-[#1D1C1B]">
          {newsTitle}{' '}
        </h2>
        <p className="mb-[23px] text-sm font-thin leading-[24px]">
          {newsContent}
        </p>
        <div className="flex">
          <span className="text-[16px] text-primary-yellow">---------</span>
          <span className="text-[16px] text-primary-yellow">LER MAIS</span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard