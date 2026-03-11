"use client"

import { ColumnDef } from "@tanstack/react-table"
import Badge from "@/components/ui/badge/Badge"
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"

export type Traveller = {
    id: string
    name: string
    totalSpent: string
    due: string
    image: string
    phoneNumber: string
    mail: string
    date: number
}

// Extend the TableMeta interface to support our update function


export const columns: ColumnDef<Traveller>[] = [
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
        accessorKey: "phoneNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Phone
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const phoneNumber = row.getValue("phoneNumber") as string;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                            {phoneNumber}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "mail",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.getValue("mail")}</span>;
        }
    },
    {
        accessorKey: "totalSpent",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Spent
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.getValue("totalSpent")}</span>;
        }
    },
    {
        accessorKey: "due",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Due
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.getValue("due")}</span>;
        }
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
