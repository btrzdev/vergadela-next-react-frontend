import { getStrapiMedia } from '@/utils/api-helpers'

interface RecentNewsProps {
  imgUrl: string
  newsTitle: string
  newsDate: string
}
const RecentNewsCard: React.FC<RecentNewsProps> = ({
  imgUrl,
  newsTitle,
  newsDate,
}) => {
  return (
    <div className="flex w-[308px] gap-[30px]">
      <div
        className="flex h-[86px] w-[94px] items-center justify-center rounded-[4px]"
        style={{
          backgroundImage: `url('${imgUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="flex flex-col">
        <h3 className="text-[16px] font-semibold">{newsTitle}</h3>
        <span className="text-[16px] text-primary-yellow">{newsDate}</span>
      </div>
    </div>
  )
}

export default RecentNewsCard
