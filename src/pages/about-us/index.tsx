import getAboutUs from '@/services/getAboutUs'

export default function AboutUs({ attributes }: any) {
  console.log('Attributes About Us', attributes)
  return (
    <div>
      <div>
        <div
          className="relative flex h-[872px] w-full items-center justify-center rounded-[4px]"
          style={{
            backgroundImage: `url('/images/hero.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'darken',
            filter: 'brightness(50%)',
          }}
        />
        <div className="absolute left-10 top-1/2 z-50 flex flex-col">
          <span className="text-primary-yellow">{attributes?.hero?.title}</span>
          <h1 className="font-glittenCaps text-[70px] text-white">
            {attributes?.hero?.subtitle}
          </h1>
          <h2 className="font-roboto mb-[45px] inline-block max-w-[460px] text-justify text-[20px] font-normal leading-[26px] text-white">
            {attributes?.hero?.description}
          </h2>
          <span className="text-[16px] text-primary-yellow">SABER MAIS</span>
        </div>
      </div>
      <div className="h-[368px] w-full rounded-b-[30px] border-t-2 border-t-primary-yellow bg-primary-green"></div>
      <div className="flex h-[526px] w-full items-center justify-center">
        <h3>Parcerias</h3>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const data = await getAboutUs()
  const { attributes } = data?.data?.data

  return {
    props: {
      attributes: attributes,
    },
  }
}
