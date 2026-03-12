"use client"

import { ColumnDef } from "@tanstack/react-table"
import Badge from "@/components/ui/badge/Badge"
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"

export type TripTraveller = {
    id: string
    name: string
    type: "Adult" | "Child" | "Infant"
    email: string
    phone: string
    country: string
    paid: boolean
    airline: string
    class: "Economy" | "Business" | "First Class"
    amount: number
    visa: string
    ticket: string
    travellerId: string
}

// Extend the TableMeta interface to support our update function

declare module "@tanstack/react-table" {
    interface TableMeta<TData extends unknown> {
        updateClassType?: (id: string, status: TripTraveller["class"]) => void
    }
}

export const columns: ColumnDef<TripTraveller>[] = [
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
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("type") as string;
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
        accessorKey: "paid",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Paid
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("paid") as boolean;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90" style={{
                            color: name === true ? "var(--color-green-500)" : "var(--color-red-500)"
                        }}>
                            {name === true ? "Paid" : "Unpaid"}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "action",
        header: () => {
            return <Button variant="ghost">Action</Button>
        },
        cell: ({ row }) => {
            return (
                <Button
                    variant="outline"
                    onClick={(e) => {
                        e.stopPropagation();
                        row.toggleExpanded()
                    }}
                >
                    {row.getIsExpanded() ? "Close" : "View"}
                </Button>
            );
        }
    }

]
