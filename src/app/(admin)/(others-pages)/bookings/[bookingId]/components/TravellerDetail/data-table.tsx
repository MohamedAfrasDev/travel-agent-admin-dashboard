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
    getExpandedRowModel,
} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion";
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
import { Dropdown } from "@/components/ui/dropdown/Dropdown"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"

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
        getExpandedRowModel: getExpandedRowModel(),

        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,

        },
    })

    return (
        <div className=" overflow-y-auto custom-scrollbar">

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
                            <React.Fragment key={row.id}>
                                <TableRow onClick={() => {
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
                                <AnimatePresence initial={false}>
                                    {row.getIsExpanded() && (
                                        <TableRow className="cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                                        >
                                            <TableCell colSpan={columns.length} className="p-0">
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.20 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="gap-5 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 grid grid-cols-2">          <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Field>
                                                                <FieldLabel htmlFor="travller-type">Traveller Type</FieldLabel>

                                                                <Input
                                                                    type="name"
                                                                    placeholder="Traveller Type"
                                                                    value={row.original.type}
                                                                    disabled
                                                                />
                                                            </Field>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent>
                                                            <DropdownMenuGroup>
                                                                <DropdownMenuLabel>Change Traveller Type</DropdownMenuLabel>
                                                                <DropdownMenuItem onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    table.options.meta?.updateType?.(row.original.id, "Adult");
                                                                }}>Adult</DropdownMenuItem>
                                                                <DropdownMenuItem onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    table.options.meta?.updateType?.(row.original.id, "Child")
                                                                }}>Child</DropdownMenuItem>
                                                                <DropdownMenuItem onClick={(e) => {
                                                                    e.stopPropagation();

                                                                    table.options.meta?.updateType?.(row.original.id, "Infant")
                                                                }}>Infant</DropdownMenuItem>

                                                            </DropdownMenuGroup>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                        <Field>
                                                            <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
                                                            <Input
                                                                id="full-name"
                                                                type="text"
                                                                value={row.original.name}
                                                                placeholder="Full Name"
                                                                disabled
                                                            />

                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="traveller-email">Email</FieldLabel>
                                                            <Input
                                                                id="traveller-email"
                                                                type="text"
                                                                value={row.original.email}
                                                                placeholder="Email"
                                                                disabled
                                                            />

                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="traveller-phone">Phone</FieldLabel>
                                                            <Input
                                                                id="traveller-phone"
                                                                type="text"
                                                                value={row.original.phone}
                                                                placeholder="Email"
                                                                disabled
                                                            />

                                                        </Field>

                                                        <Field>
                                                            <FieldLabel htmlFor="traveller-address">Address</FieldLabel>
                                                            <Input
                                                                id="traveller-address"
                                                                type="text"
                                                                value={row.original.address}
                                                                placeholder="Address"
                                                                disabled
                                                            />

                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="traveller-country">Country</FieldLabel>
                                                            <Input
                                                                id="traveller-country"
                                                                type="text"
                                                                value={row.original.country}
                                                                placeholder="Country"
                                                                disabled
                                                            />

                                                        </Field>

                                                    </div>
                                                </motion.div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </AnimatePresence>
                            </React.Fragment>

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
    )
}
