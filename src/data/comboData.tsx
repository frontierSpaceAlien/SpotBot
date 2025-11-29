export type Combo = {
  combo: string
  damage: number
  advantage: number
  notes: string
}

export const defaultData: Array<Combo> = [
  {
    combo: 'PC 2HP, 5HP xx DRC, 2HP, 5HP xx SA3',
    damage: 24,
    advantage: 100,
    notes: 'Better oki',
  },
  {
    combo: 'PC 2HP, 5HP xx DRC, 2HP, 5HP xx SA3',
    damage: 40,
    advantage: 40,
    notes: 'does some combo stuff',
  },
  {
    combo: 'PC 2HP, 5HP xx DRC, 2HP, 5HP xx SA3',
    damage: 45,
    advantage: 20,
    notes: 'safer on block',
  },
]
