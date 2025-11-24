import { createFileRoute } from '@tanstack/react-router'
import Aki from '@/images/56px-SF6_A.K.I._Icon.png'
import CharacterGrid from '@/components/CharacterGrid'

export const Route = createFileRoute('/')({ component: App })

function App() {
  console.log(Aki)
  return (
    <div className="min-h-screen bg-[#121312] text-white">
      <header className="max-w-3xl p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to SF Tech Tracker!</h1>
        <p className="text-lg mb-3">
          Keeps track of character tech for learning!
          <p className="font-bold">Login to track your tech.</p>
        </p>
        <CharacterGrid characters={[{ id: '0', src: Aki, name: 'A.K.I.' }]} />
      </header>
    </div>
  )
}
