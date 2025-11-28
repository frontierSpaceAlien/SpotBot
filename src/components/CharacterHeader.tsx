import SwitchButton from './SwitchButton'
import Cammy from '@/images/character_cammy_l.png'
import Classic from '@/images/controlScheme/24px-SF6_Classic.png'

export default function CharacterHeader() {
  return (
    <div>
      <header className="max-w-5xl p-10 mx-auto rounded flex flex-row items-center gap-3">
        <img
          className="w-10 rounded-full select-none border border-gray-300"
          src={Cammy}
          draggable={false}
        />
        <span className="text-white font-semibold">Cammy</span>
        <img src={Classic} alt="Classic Control Scheme" />
        <div>
          <SwitchButton />
        </div>
      </header>
    </div>
  )
}
