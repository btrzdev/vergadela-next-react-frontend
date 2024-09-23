import { getStrapiMedia } from '@/utils/api-helpers'
import Link from 'next/link'

interface ProjectTypesProps {
  attributes: any
}

const ProjectTypes: React.FC<ProjectTypesProps> = ({ attributes }) => {
  return (
    <div className="flex h-auto w-full flex-col lg:flex-row">
      {attributes?.attributes?.cardType?.map((item: any, index: any) => (
        <Link
          href={'/project-list'}
          className="w-full"
          key={`${item}-${index}`}
        >
          <div
            key={index}
            className="group relative flex h-full min-h-[480px] w-full items-center justify-center overflow-hidden hover:cursor-pointer"
          >
            <div
              className="absolute inset-0 w-full bg-cover bg-center grayscale filter transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-50 group-hover:grayscale-0"
              style={{
                backgroundImage: `url(${getStrapiMedia(item?.imgCard?.data?.attributes?.url)})`,
              }}
            />
            <p className="relative z-50 font-glittenCaps text-[50px] capitalize text-white transition-colors duration-500 ease-in-out group-hover:text-primary-yellow">
              {item?.typeProject}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectTypes
