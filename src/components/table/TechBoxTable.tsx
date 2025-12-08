import React, { useEffect, useRef, useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface TechBoxTableProps {
  data: Array<any>
  columns: Array<any>
  filterRow: (e: any) => void
  selectedRow: (e: any) => void
  getSelectedRow: (e: any) => void
}

export default function TechBoxTable({
  data,
  columns,
  filterRow,
  selectedRow,
  getSelectedRow,
}: TechBoxTableProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
  const tableIdRef = useRef(`table-${Math.random().toString(36).slice(2)}`)

  useEffect(() => {
    function onExternalToggle(e: Event) {
      const detail = (e as CustomEvent).detail
      if (!detail) return
      if (detail.tableId !== tableIdRef.current) {
        setExpandedRow(null)
      }
    }

    if (expandedRow != null && expandedRow !== '-1') {
      selectedRow(expandedRow)
      const idx = parseInt(expandedRow, 10)
      const filter = data.filter((_, i) => i !== idx)
      const filterNew = data.filter((_, i) => i === idx)
      filterRow(filter)
      getSelectedRow(filterNew)
    } else {
      selectedRow('-1')
      filterRow([])
    }

    window.addEventListener(
      'techbox-row-toggle',
      onExternalToggle as EventListener,
    )
    return () =>
      window.removeEventListener(
        'techbox-row-toggle',
        onExternalToggle as EventListener,
      )
  }, [expandedRow])

  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      size: 300,
      minSize: 120,
      maxSize: 600,
    },
  })

  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  style={{
                    width: `${header.getSize()}px`,
                  }}
                  className="text-left p-1"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border-t border-gray-400">
          {table.getRowModel().rows.map((row) => {
            const isExpanded = expandedRow === row.id
            return (
              <React.Fragment key={row.id}>
                <tr
                  className={`cursor-pointer hover:bg-[#202020]  ${isExpanded ? 'bg-[#202020] border border-gray-500 rounded' : ''}`}
                  onClick={() => {
                    setExpandedRow((prev) => {
                      const next = prev === row.id ? null : row.id
                      window.dispatchEvent(
                        new CustomEvent('techbox-row-toggle', {
                          detail: { tableId: tableIdRef.current, rowId: next },
                        }),
                      )
                      return next
                    })
                  }}
                  aria-expanded={isExpanded}
                >
                  {row.getVisibleCells().map((cell) => {
                    if (cell.column.id === 'notes') {
                      const notes = String(cell.getValue() ?? '')
                      return (
                        <td key={cell.id} className="p-1">
                          <div className="max-w-[15rem] truncate">{notes}</div>
                        </td>
                      )
                    }
                    return (
                      <td key={cell.id} className="p-1">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
                {isExpanded ? (
                  <tr
                    key={`${row.id}-expanded`}
                    className="bg-[#202020] border border-gray-500 rounded"
                  >
                    <td
                      colSpan={row.getVisibleCells().length}
                      className="p-2 text-sm text-gray-200"
                    >
                      {row.getVisibleCells().map((cell) => {
                        if (cell.column.id === 'notes') {
                          const notes = String(cell.getValue() ?? '')
                          return (
                            <div
                              key={`${row.id}-notes`}
                              className="whitespace-pre-wrap break-words w-93"
                            >
                              {notes}
                            </div>
                          )
                        }
                        return null
                      })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
