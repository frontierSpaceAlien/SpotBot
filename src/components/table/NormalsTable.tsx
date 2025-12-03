import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface TechBoxTableProps {
  data: Array<any>
  columns: Array<any>
}

export default function NormalsTable({ data, columns }: TechBoxTableProps) {
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
            return (
              <React.Fragment key={row.id}>
                <tr className="p-1">
                  {row.getVisibleCells().map((cell) => {
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
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
