import Link from 'next/link'
import { useState } from 'react'

const ProjectList = () => {
  const [selectedFilter, setSelectedFilter] = useState('TODOS')

  const filters = [
    'TODOS',
    'RECENTES',
    'DESIGN DE INTERIORES',
    'DECORAÇÃO DE INTERIORES',
    'REMODELAÇÃO',
    'MOBILIÁRIO PERSONALIZADO',
  ]

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="relative h-[872px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('images/hero.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        ></div>

        <div className="relative left-[10%] top-1/2 z-10 flex flex-col">
          <div className="flex">
            <span className="text-[16px] text-primary-yellow">---------</span>
            <span className="text-[16px] text-primary-yellow">PROJETOS</span>
          </div>
          <h3 className="font-glittenCaps text-[70px] text-white">
            Apartamentos
          </h3>
        </div>
      </div>
      <div className="flex h-[210px] items-center justify-evenly">
        {filters.map((filter, index) => (
          <a
            key={index}
            className={`text-[14px] hover:cursor-pointer ${filter === selectedFilter ? 'font-bold text-primary-yellow' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </a>
        ))}
      </div>
      <div className="flex flex-col">
        <Link href={'project/1'}>Project 1</Link>
      </div>
    </div>
  )
}

export default ProjectList

// export async function getServerSideProps() {
//     const data = await getAboutUs()
//     const { attributes } = data?.data?.data

//     return {
//       props: {
//         attributes: attributes,
//       },
//     }
//   }
