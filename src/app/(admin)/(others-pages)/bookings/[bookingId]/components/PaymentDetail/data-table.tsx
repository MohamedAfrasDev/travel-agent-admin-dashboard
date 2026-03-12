"use client"
import { ButtonGroup } from "@/components/ui/button-group"
import { format } from "date-fns";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { ChevronDownIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
                                    className="sticky top-0 z-20 bg-white dark:bg-transparent px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
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
                                            <TableCell colSpan={columns.length}>
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.20 }}
                                                    className="overflow-hidden">
                                                    <div className="gap-5 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 sm:p-6 grid grid-cols-2">

                                                        <Field>
                                                            <FieldLabel htmlFor="payment-id">Payment ID</FieldLabel>
                                                            <Input
                                                                id="payment-id"
                                                                type="text"
                                                                value={row.original.id}
                                                                placeholder="Payment ID"
                                                                disabled
                                                            />

                                                        </Field>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Field>
                                                                    <FieldLabel htmlFor="payment-status">Payment Status</FieldLabel>

                                                                    <Input
                                                                        type="name"
                                                                        placeholder="Payment Status"
                                                                        value={row.original.paymentStatus}
                                                                        disabled
                                                                    />
                                                                </Field>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent>
                                                                <DropdownMenuGroup>
                                                                    <DropdownMenuLabel>Change Payment Type</DropdownMenuLabel>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        table.options.meta?.updatePaymentStatus?.(row.original.id, "Completed");
                                                                    }}>Completed</DropdownMenuItem>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        table.options.meta?.updatePaymentStatus?.(row.original.id, "Pending")
                                                                    }}>Pending</DropdownMenuItem>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();

                                                                        table.options.meta?.updatePaymentStatus?.(row.original.id, "Failed")
                                                                    }}>Failed</DropdownMenuItem>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();

                                                                        table.options.meta?.updatePaymentStatus?.(row.original.id, "Refunded")
                                                                    }}>Refunded</DropdownMenuItem>

                                                                </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Field>
                                                                    <FieldLabel htmlFor="payment-gateway">Payment Gateway</FieldLabel>

                                                                    <Input
                                                                        type="name"
                                                                        placeholder="Payment Gateway"
                                                                        value={row.original.gateway}
                                                                        disabled
                                                                    />
                                                                </Field>
                                                            </DropdownMenuTrigger>
                                                            {/* Payment Gateway input */}
                                                            <DropdownMenuContent>
                                                                <DropdownMenuGroup>
                                                                    <DropdownMenuLabel>Change Payment Gateway</DropdownMenuLabel>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        table.options.meta?.updatePaymentGatewayStatus?.(row.original.id, "Bank Transfer");
                                                                    }}>Bank Transfer</DropdownMenuItem>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        table.options.meta?.updatePaymentGatewayStatus?.(row.original.id, "Later")
                                                                    }}>Book Now Pay Later</DropdownMenuItem>
                                                                    <DropdownMenuItem onClick={(e) => {
                                                                        e.stopPropagation();

                                                                        table.options.meta?.updatePaymentGatewayStatus?.(row.original.id, "Cheque")
                                                                    }}>Cheque</DropdownMenuItem>


                                                                </DropdownMenuGroup>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                        <Field>
                                                            <FieldLabel htmlFor="payment-transaction">Transaction ID</FieldLabel>
                                                            <Input
                                                                id="payment-transaction"
                                                                type="text"
                                                                value={row.original.transactionId}
                                                                placeholder="Transaction ID"
                                                                disabled
                                                            />

                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="payment-deposit">Deposit Amount</FieldLabel>
                                                            <ButtonGroup>
                                                                <Button className="h-10">LKR රු</Button>
                                                                <Input
                                                                    id="payment-deposit"
                                                                    type="text"
                                                                    value={row.original.depositAmount}
                                                                    placeholder="Deposit Amount"
                                                                    disabled
                                                                />
                                                            </ButtonGroup>

                                                        </Field>

                                                        <Field>
                                                            <FieldLabel htmlFor="payment-paid">Paid Amount</FieldLabel>
                                                            <ButtonGroup>
                                                                <Button className="h-10">LKR රු</Button>
                                                                <Input
                                                                    id="payment-paid"
                                                                    type="text"
                                                                    value={row.original.paidAmount}
                                                                    placeholder="Paid Amount"
                                                                    disabled
                                                                />
                                                            </ButtonGroup>

                                                        </Field>

                                                        <Field>
                                                            <FieldLabel htmlFor="payment-note">Note</FieldLabel>
                                                            <Input
                                                                id="payment-note"
                                                                type="text"
                                                                value={row.original.note}
                                                                placeholder="Note"
                                                                disabled
                                                            />

                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="payment-date">Date</FieldLabel>
                                                            <Popover>
                                                                <PopoverTrigger disabled render={<Button variant={"outline"} data-empty={!row.original.date} className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground">{row.original.date ? format(row.original.date, "PPP") : <span>Pick a date</span>}<ChevronDownIcon data-icon="inline-end" /></Button>} />
                                                                <PopoverContent className="w-auto p-0" align="start">
                                                                    <Calendar
                                                                        mode="single"
                                                                        selected={new Date(row.original.date)}
                                                                        onSelect={() => { }}
                                                                        defaultMonth={new Date(row.original.date)}
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>

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
