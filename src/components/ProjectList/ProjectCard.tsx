import { getStrapiMedia } from '@/utils/api-helpers'
import Image from 'next/image'

interface ProjectCardProps {
  bgUrl: string
  width: string
  type: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ bgUrl, width, type }) => {
  return (
    <div className={`relative flex h-[438px] ${width} overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${getStrapiMedia(bgUrl)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transition: 'transform 0.7s ease-in-out, filter 0.7s ease-in-out',
          filter: 'grayscale(100%)',
          transform: 'scale(1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)'
          e.currentTarget.style.filter = 'grayscale(0)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.filter = 'grayscale(100%)'
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex flex-col">
          <div className="flex gap-[8px]">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={10}
              height={22}
            />
            <span className="text-[16px] text-primary-yellow">{type}</span>
          </div>
          <h4 className="font-glittenCaps text-[28px] text-white">
            Lorem Ipsum
          </h4>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
