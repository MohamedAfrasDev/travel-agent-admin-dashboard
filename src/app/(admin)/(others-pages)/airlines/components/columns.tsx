"use client"

import { ColumnDef } from "@tanstack/react-table"
import Badge from "@/components/ui/badge/Badge"
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"
import Image from "next/image";

export type Airline = {
    id: string
    name: string
    code: string
    logo: string
    status: "Active" | "Inactive"
    date: number

}

// Extend the TableMeta interface to support our update function
declare module "@tanstack/react-table" {
    interface TableMeta<TData extends unknown> {
        updateAirlineStatus?: (id: number, status: Airline["status"]) => void
    }
}

export const columns: ColumnDef<Airline>[] = [
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
            const code = row.original.code;
            const logo = row.original.logo;
            return (
                <div className="flex items-center gap-3">
                    <Image src={logo} alt={logo} width={50} height={50} />

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {name}
                        </p>
                        <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                            {code}
                        </span>
                    </div>
                </div>
            );
        },
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row, table }) => {
            const status = row.getValue("status") as Airline["status"];
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}
                        className="ml-auto"
                        style={{
                            background: status === "Active"
                                ? "green-20"
                                : "red/60",
                            color:
                                status === "Active"
                                    ? "green"
                                    : "red"

                        }}
                    >
                        {status}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateAirlineStatus?.(row.original.id, "Active");
                            }}>Active</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateAirlineStatus?.(row.original.id, "Inactive")
                            }}>Inactive</DropdownMenuItem>

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
