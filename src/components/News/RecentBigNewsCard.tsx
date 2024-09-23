import { getStrapiMedia } from '@/utils/api-helpers'
import { ReactNode } from 'react'
import Image from 'next/image'

interface RecentNewsProps {
  imageSrc: string
  newsTitle: string
  newsContent: string
  tag: string
  date: string | ReactNode
}
const RecentBigNewsCard: React.FC<RecentNewsProps> = ({
  imageSrc,
  newsTitle,
  tag,
  date,
}) => {
  return (
    <div className="group flex h-full w-full max-w-[420px] flex-col hover:brightness-50">
      <div
        className="flex h-[370px] w-full items-center justify-center rounded-[4px]"
        style={{
          backgroundImage: `url(${getStrapiMedia(imageSrc ?? '')})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="mb-[27px] mt-[35px] flex w-full items-center gap-[16px]">
        <span className="inline-block flex h-[32px] items-center justify-center rounded-[2px] bg-black p-5 text-center text-sm font-semibold text-white">
          {tag?.toUpperCase()}
        </span>
        <span className="inline-block flex h-[32px] items-center justify-center text-center text-primary-yellow">
          {date}
        </span>
      </div>
      <div className="flex w-full flex-col">
        <h2 className="text-[28px] font-semibold text-[#1D1C1B]">
          {newsTitle}{' '}
        </h2>

        <div className="flex gap-[8px]">
          <Image
            src={'/icons/yellow_straight.svg'}
            alt={''}
            width={53}
            height={22}
          />
          <span className="text-[16px] text-primary-yellow">LER MAIS</span>
        </div>
      </div>
    </div>
  )
}

export default RecentBigNewsCard
