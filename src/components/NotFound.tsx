import Cammy from '@/images/fullBody/cammy.png'
import Ryu from '@/images/fullBody/ryu.png'
import Akuma from '@/images/fullBody/gouki_akuma.png'
import Chunli from '@/images/fullBody/chunli.png'
import Dhalsim from '@/images/fullBody/dhalsim.png'
import Guile from '@/images/fullBody/guile.png'
import Ken from '@/images/fullBody/ken.png'
import Luke from '@/images/fullBody/luke.png'
import Zangief from '@/images/fullBody/zangief.png'
import Sagat from '@/images/fullBody/sagat.png'
import Terry from '@/images/fullBody/terry.png'
import Mai from '@/images/fullBody/mai.png'
import Kimberly from '@/images/fullBody/kimberly.png'
import Ed from '@/images/fullBody/ed.png'
import Elena from '@/images/fullBody/elena.png'
import Juri from '@/images/fullBody/juri.png'
import JP from '@/images/fullBody/jp.png'
import Marisa from '@/images/fullBody/marisa.png'
import Blanka from '@/images/fullBody/blanka.png'
import Cviper from '@/images/fullBody/cviper.png'
import Deejay from '@/images/fullBody/deejay.png'
import Ehonda from '@/images/fullBody/ehonda.png'
import Aki from '@/images/fullBody/aki.png'
import Jamie from '@/images/fullBody/jamie.png'
import Manon from '@/images/fullBody/manon.png'
import Rashid from '@/images/fullBody/rashid.png'
import Lily from '@/images/fullBody/lily.png'
import Mbison from '@/images/fullBody/vega_mbison.png'

export default function NotFound() {
  const arr = [
    Cammy,
    Ryu,
    Akuma,
    Chunli,
    Dhalsim,
    Guile,
    Ken,
    Luke,
    Zangief,
    Sagat,
    Terry,
    Mai,
    Kimberly,
    Ed,
    Elena,
    Juri,
    JP,
    Marisa,
    Blanka,
    Cviper,
    Deejay,
    Ehonda,
    Aki,
    Jamie,
    Manon,
    Rashid,
    Lily,
    Mbison,
  ]
  const randomIndex = Math.floor(Math.random() * arr.length)
  const randomCharacter = arr[randomIndex]

  return (
    <div className="min-h-[calc(100vh-114px)] flex items-center justify-center text-3xl flex-col select-none">
      <img
        className="w-128"
        src={randomCharacter}
        alt="404 Not Found"
        draggable={false}
      />
      404 - Page Not Found
    </div>
  )
}
