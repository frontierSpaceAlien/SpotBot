export function AddToCombo() {
  const newRow = {
    combo: 'New Combo',
    damage: 50,
    advantage: 10,
    notes: 'Newly added combo',
  }
  return newRow
}

export function AddToOki() {
  const newRow = {
    screenPosition: 'Corner',
    ender: 'H Arrow',
    frameKill: 'Dash',
    meaty: 'crHP',
    frameOnHit: 8,
    frameOnBlock: 1,
    notes: 'Newly added oki',
  }
  return newRow
}

export function Modal() {
  return <div>This is the modal</div>
}
