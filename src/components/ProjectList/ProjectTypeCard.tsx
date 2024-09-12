interface ProjectCardTypeCardProps {
  urlBg: string
  category: string
}
const ProjectCardTypeCard: React.FC<ProjectCardTypeCardProps> = ({
  urlBg,
  category,
}) => {
  return (
    <div className="relative flex h-full min-h-[480px] w-1/3 items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/component_24.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: 'brightness(50%)',
          zIndex: 1,
        }}
      />

      <p className="relative z-50 font-glittenCaps text-[50px] text-white">
        Apartamentos
      </p>
    </div>
  )
}

export default ProjectCardTypeCard
