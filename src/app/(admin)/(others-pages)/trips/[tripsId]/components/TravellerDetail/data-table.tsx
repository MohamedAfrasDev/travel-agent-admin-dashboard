"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
    getPaginationRowModel,
    PaginationState,
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
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import ExcelIcon from "../../../../../../../../public/images/icons/sheets.png";
import { ButtonGroup } from "@/components/ui/button-group";
import { ViewIDCardDialog } from "./ViewIDCardDialog";

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
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5,
    })

    const [selectedTraveller, setSelectedTraveller] = React.useState<TData | null>(null);
    const router = useRouter();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        meta: {
            updateStatus: updateStatus as any,
        },
        onSortingChange: setSorting,
        getExpandedRowModel: getExpandedRowModel(),

        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onPaginationChange: setPagination,
        state: {
            sorting,
            columnFilters,
            pagination,
        },
    })

    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/5 dark:bg-white/3">

            <h2 className="ml-5 mt-5 text-2xl font-semibold">Travellers</h2>
            <div className="flex items-center py-4 justify-between">
                <Input
                    placeholder="Filter name..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-md ml-5"
                />

                <Button className="h-10 mr-5" variant="outline">
                    Export
                    <Image src={ExcelIcon} width={25} height={25} alt={""} />
                </Button>
            </div>
            <Table >
                <TableHeader className="dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 ">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} >
                            {headerGroup.headers.map((header) => (
                                <TableHead
                                    key={header.id}
                                    className="sticky top-0 z-20 bg-white dark:bg-white/3 px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
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
                    {table.getPaginationRowModel().rows?.length ? (
                        table.getPaginationRowModel().rows.map((row) => (
                            <React.Fragment key={row.id}>
                                <TableRow onClick={(e) => {
                                    e.stopPropagation();
                                    row.toggleExpanded()
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
                                        <TableRow className="cursor-pointer transition-colors "
                                        >
                                            <TableCell colSpan={columns.length} className="p-0">
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.20 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="gap-5 border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] ">
                                                        <div className="sm:p-6 grid grid-cols-2 gap-5">
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger>
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
                                                            <Field>
                                                                <FieldLabel htmlFor="traveller-airline">Airline</FieldLabel>
                                                                <Input
                                                                    id="traveller-airline"
                                                                    type="text"
                                                                    value={row.original.airline}
                                                                    placeholder="Airline"
                                                                    disabled
                                                                />

                                                            </Field>
                                                            <Field>
                                                                <FieldLabel htmlFor="traveller-amount">Amount</FieldLabel>
                                                                <ButtonGroup>
                                                                    <Button variant="outline" className="h-10">LKR</Button>
                                                                    <Input
                                                                        id="traveller-amount"
                                                                        type="text"
                                                                        value={row.original.amount}
                                                                        placeholder="Amount"
                                                                        disabled
                                                                    />
                                                                </ButtonGroup>

                                                            </Field>

                                                        </div>
                                                        <div className="grid grid-cols-3 p-5">
                                                            <Field>
                                                                <FieldLabel htmlFor="traveller-id-card">ID Card</FieldLabel>
                                                                <ButtonGroup>
                                                                    <Input disabled value={"Card Generated"} />
                                                                    <Button
                                                                        className="h-10"
                                                                        variant="outline"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setSelectedTraveller(row.original);
                                                                        }}
                                                                    >
                                                                        View ID Card
                                                                    </Button>                                                                </ButtonGroup>
                                                                {selectedTraveller && (
                                                                    <ViewIDCardDialog
                                                                        traveller={selectedTraveller}
                                                                        open={!!selectedTraveller}
                                                                        onOpenChange={(open) => {
                                                                            if (!open) setSelectedTraveller(null);
                                                                        }}
                                                                    />
                                                                )}

                                                            </Field>
                                                            <Field>
                                                                <FieldLabel htmlFor="traveller-ticket">Ticket</FieldLabel>
                                                                <ButtonGroup>
                                                                    <Button variant="outline" className="h-10">Download Ticket</Button>
                                                                    <Button variant="default" className="h-10">View Ticket</Button>

                                                                </ButtonGroup>

                                                            </Field>
                                                            <Field>
                                                                <FieldLabel htmlFor="traveller-ticket">Visa</FieldLabel>
                                                                <ButtonGroup>
                                                                    <Button variant="outline" className="h-10">Download Visa</Button>
                                                                    <Button variant="default" className="h-10">View Visa</Button>

                                                                </ButtonGroup>

                                                            </Field>

                                                        </div>
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
            <div className="flex items-center justify-end space-x-2 py-4 mr-5">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
