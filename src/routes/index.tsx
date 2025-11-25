import { createFileRoute } from '@tanstack/react-router'
import Aki from '@/images/character_aki_l.png'
import Cammy from '@/images/character_cammy_l.png'
import Luke from '@/images/character_luke_l.png'
import Jamie from '@/images/character_jamie_l.png'
import Blanka from '@/images/character_blanka_l.png'
import Chunli from '@/images/character_chunli_l.png'
import Cviper from '@/images/character_cviper_l.png'
import Deejay from '@/images/character_deejay_l.png'
import Dhalsim from '@/images/character_dhalsim_l.png'
import Ehonda from '@/images/character_honda_l.png'
import Guile from '@/images/character_guile_l.png'
import Ken from '@/images/character_ken_l.png'
import Mbison from '@/images/character_vega_l.png'
import Akuma from '@/images/character_gouki_l.png'
import Ryu from '@/images/character_ryu_l.png'
import Lily from '@/images/character_lily_l.png'
import Manon from '@/images/character_manon_l.png'
import Juri from '@/images/character_juri_l.png'
import JP from '@/images/character_jp_l.png'
import Marisa from '@/images/character_marisa_l.png'
import Rashid from '@/images/character_rashid_l.png'
import Zangief from '@/images/character_zangief_l.png'
import Sagat from '@/images/character_sagat_l.png'
import Mai from '@/images/character_mai_l.png'
import Terry from '@/images/character_terry_l.png'
import Kimberly from '@/images/character_kimberly_l.png'
import Ed from '@/images/character_ed_l.png'
import Elena from '@/images/character_elena_l.png'
import CharacterGrid from '@/components/CharacterGrid'
import LoginForm from '@/components/LoginForm'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-[#121312] text-white">
      <header className="max-w-5xl p-10 mx-auto">
        <div className="border border-gray-400 rounded p-6">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to SF Tech Tracker!
          </h1>
          <p className="text-lg mb-1">
            Keeps track of character tech for learning!
          </p>
          <p className="font-bold">Login to track your tech.</p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row">
          <CharacterGrid
            characters={[
              { id: '0', src: Aki, name: 'A.K.I.' },
              { id: '1', src: Cammy, name: 'Cammy' },
              { id: '2', src: Luke, name: 'Luke' },
              { id: '3', src: Jamie, name: 'Jamie' },
              { id: '4', src: Blanka, name: 'Blanka' },
              { id: '5', src: Chunli, name: 'Chun-Li' },
              { id: '6', src: Cviper, name: 'C Viper' },
              { id: '7', src: Deejay, name: 'Dee Jay' },
              { id: '8', src: Dhalsim, name: 'Dhalsim' },
              { id: '9', src: Ehonda, name: 'E. Honda' },
              { id: '10', src: Guile, name: 'Guile' },
              { id: '11', src: Ken, name: 'Ken' },
              { id: '12', src: Mbison, name: 'M. Bison' },
              { id: '13', src: Akuma, name: 'Akuma' },
              { id: '14', src: Ryu, name: 'Ryu' },
              { id: '15', src: Lily, name: 'Lily' },
              { id: '16', src: Manon, name: 'Manon' },
              { id: '17', src: Juri, name: 'Juri' },
              { id: '18', src: JP, name: 'JP' },
              { id: '19', src: Marisa, name: 'Marisa' },
              { id: '20', src: Rashid, name: 'Rashid' },
              { id: '21', src: Zangief, name: 'Zangief' },
              { id: '22', src: Sagat, name: 'Sagat' },
              { id: '23', src: Mai, name: 'Mai' },
              { id: '24', src: Terry, name: 'Terry' },
              { id: '25', src: Kimberly, name: 'Kimberly' },
              { id: '26', src: Ed, name: 'Ed' },
              { id: '27', src: Elena, name: 'Elena' },
            ]}
          />
          <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-96 border border-gray-400 rounded">
            <LoginForm />
          </div>
        </div>
      </header>
    </div>
  )
}
