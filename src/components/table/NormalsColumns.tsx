import { createColumnHelper } from '@tanstack/table-core'

const columnHelper = createColumnHelper()

export const normalsColumns = [
  columnHelper.accessor('normal', {
    header: () => <span>Normal</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('startup', {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Startup</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('onHit', {
    header: () => <span>On Hit</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('onBlock', {
    header: () => <span>On Block</span>,
    footer: (info) => info.column.id,
  }),
]
