"use client"

import { ColumnDef } from "@tanstack/react-table"
import Badge from "@/components/ui/badge/Badge"
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"
import Travellers from "../travellers/page";

export type Booking = {
    id: string
    name: string
    bookedTrip: string
    bookedDate: number
    startDate: number
    endDate: number
    travellersCount: number
    tripCode: string
    status: "Booked" | "Pending" | "Canceled" | "Paid"
    date: number
    travellers: string[]
    price: number
}

// Extend the TableMeta interface to support our update function
declare module "@tanstack/react-table" {
    interface TableMeta<TData extends unknown> {
        updateStatus?: (id: number, status: Booking["status"]) => void
    }
}

export const columns: ColumnDef<Booking>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("name") as string;
            const travellers = row.original.travellers;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {name}
                        </p>
                        <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                            {travellers} Travellers
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "bookedTrip",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Package
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("bookedTrip") as string;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {name}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Cost
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.getValue("price")}</span>;
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row, table }) => {
            const status = row.getValue("status") as Booking["status"];
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            onClick={(e) => e.stopPropagation()}

                            className="ml-auto"
                            style={{
                                background: status === "Booked"
                                    ? "green-20"
                                    : status === "Pending"
                                        ? "orange/60"
                                        : status === "Paid"
                                            ? "blue/60"
                                            : "red/60",
                                color:
                                    status === "Booked"
                                        ? "green"
                                        : status === "Pending"
                                            ? "orange"
                                            : status === "Paid"
                                                ? "blue"
                                                : "red",
                            }}
                        >
                            {status}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateStatus?.(row.original.id, "Booked");
                            }}>Booked</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateStatus?.(row.original.id, "Pending")
                            }}>Pending</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();

                                table.options.meta?.updateStatus?.(row.original.id, "Paid")
                            }}>Paid</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();

                                table.options.meta?.updateStatus?.(row.original.id, "Canceled")
                            }}>Canceled</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            const dateVal = row.getValue("date") as number;
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{new Date(dateVal).toLocaleDateString()}</span>;
        }
    },
]
