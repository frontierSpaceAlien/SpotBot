export type Combo = {
  id: number
  combo: string
  damage: number
  advantage: number
  notes: string
}

export const comboData: Array<Combo> = [
  {
    id: 0,
    combo: 'PC 2HP, 5HP xx DRC, 2HP, 5HP xx SA3',
    damage: 24,
    advantage: 100,
    notes: 'Better oki',
  },
  {
    id: 1,
    combo: 'PC 2HP, 5HP xx DRC, 2HP, 5HP xx SA3',
    damage: 40,
    advantage: 40,
    notes: 'does some combo stuff',
  },
  {
    id: 2,
    combo: 'PC 2HP, 5HP xx DRC, 2HP, 5HP xx SA3',
    damage: 45,
    advantage: 20,
    notes: 'safer on block',
  },
]
