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
    <div className="group flex w-[308px] gap-[30px] hover:cursor-pointer hover:brightness-50">
      <div
        className="h-[86px] min-w-[94px] rounded-[4px]"
        style={{
          backgroundImage: `url(${getStrapiMedia(imgUrl)})`,
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
