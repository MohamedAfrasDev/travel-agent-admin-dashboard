"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,

    useReactTable,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,

    TableRow,
} from "@/components/ui/table"
import React from "react"
import { useRouter } from "next/navigation"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    updateStatus?: (id: number, status: string) => void
}

export function DataTable<TData, TValue>({
    columns,
    data,
    updateStatus,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    );

    const router = useRouter();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateStatus: updateStatus as any,
        },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,

        },
    })

    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">

            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter name..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-md ml-5"
                />
            </div>

            {/* SCROLL CONTAINER */}
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar">

                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-gray-800">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} >
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="sticky top-0 z-20 bg-white dark:bg-gray-900 px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} onClick={() => {
                                    router.push(`/bookings/${row.original.id}`);
                                }}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="px-5 py-4 sm:px-6 text-start"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}
