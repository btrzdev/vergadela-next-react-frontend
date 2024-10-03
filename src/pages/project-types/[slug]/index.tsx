import ProjectCard from '@/components/ProjectList/ProjectCard'
import getProjectList from '@/services/getProjectList'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next/types'
import getProjectType from '@/services/getProjectType'

interface ProjectListProps {
  attributes: any
  slug: string
  projectTypes: any
}

const ProjectList: React.FC<ProjectListProps> = ({
  attributes,
  slug,
  projectTypes,
}) => {
  // console.log('Atributes projectlist', attributes)
  // console.log('Atributes projectTypes', projectTypes)

  const [projectType, selectProjectType] = useState(
    attributes.filter(
      (el: { attributes: { type: any } }) => el.attributes?.type === slug
    )
  )
  const [selectedFilter, setSelectedFilter] = useState('TODOS')

  const filters = [
    'TODOS',
    'RECENTES',
    'DESIGN DE INTERIORES',
    'DECORAÇÃO DE INTERIORES',
    'REMODELAÇÃO',
    'MOBILIÁRIO PERSONALIZADO',
  ]

  useEffect(() => console.log('Project Type', projectType), [])

  return (
    <div className="flex h-full w-screen flex-col">
      <div className="relative min-h-[872px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        ></div>

        <div className="absolute left-[10%] top-1/2 z-10 flex flex-col">
          <div className="flex">
            <Image
              src={'/icons/yellow_straight.svg'}
              alt={''}
              width={53}
              height={22}
            />
            <span className="ml-2 text-[16px] text-primary-yellow">
              PROJETOS
            </span>
          </div>
          <h3 className="font-glittenCaps text-[70px] capitalize text-white">
            {projectType[0]?.attributes?.type}
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex h-[210px] max-w-[992px] items-center justify-between gap-[50px]">
          {filters.map((filter, index) => (
            <span
              key={index}
              className={`text-[14px] hover:cursor-pointer ${filter === selectedFilter ? 'font-bold text-primary-yellow' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col pb-[335px]">
        <div className="flex">
          <ProjectCard
            slug={slug}
            bgUrl={attributes[0].attributes?.hero?.image?.data?.attributes?.url}
            width={'w-2/3'}
            type={attributes[0].attributes?.type}
          />
          <ProjectCard
            slug={slug}
            bgUrl={attributes[0].attributes?.hero?.image?.data?.attributes?.url}
            width={'w-1/3'}
            type={attributes[0].attributes?.type}
          />
          <ProjectCard
            slug={slug}
            bgUrl={attributes[0].attributes?.hero?.image?.data?.attributes?.url}
            width={'w-1/3'}
            type={attributes[0].attributes?.type}
          />
        </div>
        <div className="flex">
          <ProjectCard
            slug={slug}
            bgUrl={attributes[0].attributes?.hero?.image?.data?.attributes?.url}
            width={'w-1/3'}
            type={attributes[0].attributes?.type}
          />
          <ProjectCard
            slug={slug}
            bgUrl={attributes[0].attributes?.hero?.image?.data?.attributes?.url}
            width={'w-2/3'}
            type={attributes[0].attributes?.type}
          />
          <ProjectCard
            slug={slug}
            bgUrl={attributes[0].attributes?.hero?.image?.data?.attributes?.url}
            width={'w-1/3'}
            type={attributes[0].attributes?.type}
          />
        </div>
      </div>
      <div className="flex">
        <Link href={''} className="text-[16px] font-normal">
          MAIS PROJETOS
        </Link>
        <Image
          src={'/icons/straight.svg'}
          alt={''}
          width={24}
          height={24}
          className="rotate-180"
        />
      </div>
    </div>
  )
}

export default ProjectList

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const data = await getProjectList()
  const dataProjectTypes = await getProjectType()
  const attributes = data?.data?.data
  const projectTypes = dataProjectTypes?.data?.data
  const { slug } = context.query
  return {
    props: {
      attributes: attributes,
      slug: slug,
      projectTypes: projectTypes,
    },
  }
}
