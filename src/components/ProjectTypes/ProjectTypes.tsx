import { getStrapiMedia } from '@/utils/api-helpers'
import Link from 'next/link'

interface ProjectTypesProps {
  item: any
  index: number
  img: string
  type: string
  href: string
}

const ProjectTypeCardAbout: React.FC<ProjectTypesProps> = ({
  item,
  index,
  img,
  type,
  href,
}) => {
  return (
    <Link href={href} className="w-full" key={`${item}-${index}`}>
      <div
        key={index}
        className="group relative flex h-full min-h-[602px] w-full items-center justify-center overflow-hidden hover:cursor-pointer"
      >
        <div
          className="absolute inset-0 w-full bg-cover bg-center grayscale filter transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-50 group-hover:grayscale-0"
          style={{
            backgroundImage: `url(${getStrapiMedia(img)})`,
          }}
        />
        <p className="relative z-50 text-center font-glittenCaps text-[50px] capitalize text-white transition-colors duration-500 ease-in-out group-hover:text-primary-yellow">
          {type}
        </p>
      </div>
    </Link>
  )
}

export default ProjectTypeCardAbout
