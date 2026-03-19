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
    bookedTrip: string
    email: string
    phone: string
    type: "Adult" | "Child" | "Infant"
    passportNumber: string
    passport: string
    airline: string
    note: string
    photo: string
    cost: number
}

// Extend the TableMeta interface to support our update function
declare module "@tanstack/react-table" {
    interface TableMeta<TData extends unknown> {
        updateTripTravellerStatus?: (id: number, status: TripTraveller["type"]) => void
    }
}

export const columns: ColumnDef<TripTraveller>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                >
                    Name
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
                >
                    Type
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
        accessorKey: "cost",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                >
                    Cost
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("cost") as number;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            {name}asas
                        </p>
                    </div>
                </div>
            );
        },
    },


]
