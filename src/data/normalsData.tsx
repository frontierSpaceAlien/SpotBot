export type Normals = {
  normal: string
  startup: string
  onHit: string
  onBlock: string
}

export const normalsData: Array<Normals> = [
  {
    normal: '5LP',
    startup: '4',
    onHit: '+5',
    onBlock: '-2',
  },
  {
    normal: '5MP',
    startup: '6',
    onHit: '+6',
    onBlock: '-1',
  },
  {
    normal: '5HP',
    startup: '8',
    onHit: '+2',
    onBlock: '-3',
  },
  {
    normal: '5LK',
    startup: '5',
    onHit: '+2',
    onBlock: '-3',
  },
  {
    normal: '5MK',
    startup: '8',
    onHit: '+3',
    onBlock: '-4',
  },
  {
    normal: '5HK',
    startup: '11',
    onHit: '+2',
    onBlock: '-3',
  },
  {
    normal: '2LP',
    startup: '4',
    onHit: '+5',
    onBlock: '-2',
  },
  {
    normal: '2MP',
    startup: '7',
    onHit: '+5',
    onBlock: '-2',
  },
  {
    normal: '2HP',
    startup: '10',
    onHit: '+7',
    onBlock: '+1',
  },
  {
    normal: '2LK',
    startup: '5',
    onHit: '+3',
    onBlock: '-2',
  },
  {
    normal: '2MK',
    startup: '8',
    onHit: '+1',
    onBlock: '-5',
  },
  {
    normal: '2HK',
    startup: '9',
    onHit: 'KD +38',
    onBlock: '-10',
  },
]
