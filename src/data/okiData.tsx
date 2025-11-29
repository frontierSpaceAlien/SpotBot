export type Oki = {
  screenPosition: string
  ender: string
  frameKill: string
  meaty: string
  frameOnHit: number
  frameOnBlock: number
}

export const defaultData: Array<Oki> = [
  {
    screenPosition: 'Midscreen',
    ender: 'H Arrow',
    frameKill: 'Dash',
    meaty: 'stMP',
    frameOnHit: 10,
    frameOnBlock: 1,
  },
  {
    screenPosition: 'Corner',
    ender: 'M Arrow',
    frameKill: 'walk',
    meaty: 'stMP',
    frameOnHit: 5,
    frameOnBlock: 0,
  },
  {
    screenPosition: 'Midscreen',
    ender: 'L Arrow',
    frameKill: 'Dash',
    meaty: 'crHP',
    frameOnHit: 0,
    frameOnBlock: -5,
  },
]
