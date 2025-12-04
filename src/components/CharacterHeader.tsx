import SwitchButton from './SwitchButton'
import Classic from '@/images/controlScheme/24px-SF6_Classic.png'

interface CharacterHeaderProps {
  image: any
  character: string
}

export default function CharacterHeader({
  image,
  character,
}: CharacterHeaderProps) {
  return (
    <div className="w-full">
      <header className="max-w-5xl p-5 rounded flex flex-row items-center gap-3 ">
        <img
          className="w-10 rounded-full select-none border border-gray-300"
          src={image}
          draggable={false}
        />
        <span className="text-white font-semibold">{character}</span>
        <img src={Classic} alt="Classic Control Scheme" />
        <div>
          <SwitchButton />
        </div>
      </header>
    </div>
  )
}
