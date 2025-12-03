import { createColumnHelper } from '@tanstack/table-core'
import type { Oki } from '@/data/okiData'

const columnHelper = createColumnHelper<Oki>()

export const okiColumns = [
  columnHelper.accessor('screenPosition', {
    header: () => <span>Screen Pos.</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('ender', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Ender</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('frameKill', {
    header: () => <span>Frame Kill</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('meaty', {
    header: () => <span>Meaty</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('frameOnHit', {
    header: () => <span>Frame On Hit</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('frameOnBlock', {
    header: () => <span>Frame On Block</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('notes', {
    header: () => <span>Notes</span>,
    footer: (info) => info.column.id,
  }),
]
