import { useState } from 'react'
import Switch from '@mui/material/Switch'
import { toast } from 'sonner'
import Classic from '@/images/controlScheme/24px-SF6_Classic.png'
import Modern from '@/images/controlScheme/24px-SF6_Modern.png'

interface CharacterHeaderProps {
  image: any
  character: string
}

export default function CharacterHeader({
  image,
  character,
}: CharacterHeaderProps) {
  const [changeControl, setControl] = useState(Classic)

  const handleControlChange = (e: any) => {
    setControl(e ? Modern : Classic)
    toast.success(`Changed control scheme to ${e ? 'Modern' : 'Classic'}`)
  }

  return (
    <div>
      <header className="p-1 rounded flex flex-row items-center ">
        <img
          className="w-10 rounded-full select-none border border-gray-300"
          src={image}
          draggable={false}
        />
        <span className="text-white font-semibold p-1.5">{character}</span>
        <img
          className="p-1.5"
          src={changeControl}
          alt={`${changeControl} Control Scheme`}
        />
        <Switch
          color="warning"
          onChange={(e) => handleControlChange(e.target.checked)}
        />
      </header>
    </div>
  )
}
