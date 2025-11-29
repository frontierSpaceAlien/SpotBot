import { createColumnHelper } from '@tanstack/table-core'
import type { Combo } from '@/data/comboData'

export const columnHelper = createColumnHelper<Combo>()

export const columns = [
  columnHelper.accessor('combo', {
    header: () => <span>Combo</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('damage', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Damage</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('advantage', {
    header: () => <span>Advantage</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('notes', {
    header: () => <span>Notes</span>,
    footer: (info) => info.column.id,
  }),
]
