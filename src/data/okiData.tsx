export type Oki = {
  screenPosition: string
  ender: string
  frameKill: string
  meaty: string
  frameOnHit: number
  frameOnBlock: number
  notes: string
}

export const okiData: Array<Oki> = [
  {
    screenPosition: 'Midscreen',
    ender: 'H Arrow',
    frameKill: 'Dash',
    meaty: 'stMP',
    frameOnHit: 10,
    frameOnBlock: 1,
    notes: 'Weak option as opposed to other oki options',
  },
  {
    screenPosition: 'Corner',
    ender: 'M Arrow',
    frameKill: 'walk',
    meaty: 'stMP',
    frameOnHit: 5,
    frameOnBlock: 0,
    notes: 'Good option forces mix',
  },
  {
    screenPosition: 'Midscreen',
    ender: 'L Arrow',
    frameKill: 'Dash',
    meaty: 'crHP',
    frameOnHit: 0,
    frameOnBlock: -5,
    notes: 'Really bad option',
  },
]
