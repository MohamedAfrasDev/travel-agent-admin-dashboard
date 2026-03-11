"use client"

import { ColumnDef } from "@tanstack/react-table"
import Badge from "@/components/ui/badge/Badge"
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"
import Travellers from "../travellers/page";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export type Trips = {
    id: string
    bookedTrip: string
    bookedDate: number
    startDate: number
    endDate: number
    travellersCount: number
    tripCode: string
    status: "Booked" | "Pending" | "Departed" | "Active" | "Arrived" | "Completed" | "Canceled"
    date: number
    travellers: string[]
    guides: string[]
    price: number
}

// Extend the TableMeta interface to support our update function
declare module "@tanstack/react-table" {
    interface TableMeta<TData extends unknown> {
        updateTripStatus?: (id: number, status: Trips["status"]) => void
    }
}

export const columns: ColumnDef<Trips>[] = [
    {
        accessorKey: "bookedTrip",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Trip
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("bookedTrip") as string;
            const travellers = row.original.travellers;
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
        accessorKey: "status",
        header: "Status",
        cell: ({ row, table }) => {
            const status = row.getValue("status") as Trips["status"];
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger className={cn("ml-auto px-3 py-1 border rounded-sm")} onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: status === "Booked"
                                ? "#18e7533c"
                                : status === "Pending"
                                    ? "#ffaa003c"
                                    : status === "Departed"
                                        ? "#6200ff3c"
                                        : status === "Active"
                                            ? "#00aeff45"
                                            : status === "Arrived"
                                                ? "#0073ff42"
                                                : status === "Canceled"
                                                    ? "#ff00002c"
                                                    : status === "Completed"
                                                        ? "#006eff45"
                                                        : "red/60",
                            color:
                                status === "Booked"
                                    ? "#00bf33"
                                    : status === "Pending"
                                        ? "#ffaa00"
                                        : status === "Departed"
                                            ? "#6200ff"
                                            : status === "Active"
                                                ? "#00aeff"
                                                : status === "Arrived"
                                                    ? "#0073ff"
                                                    : status === "Canceled"
                                                        ? "#ff0000"
                                                        : status === "Completed"
                                                            ? "#006eff"
                                                            : "red",
                        }}
                    >
                        {status}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                            <DropdownMenuItem className="text-[#00bf33]" onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateTripStatus?.(row.original.id, "Booked");
                            }}>Booked</DropdownMenuItem>
                            <DropdownMenuItem className="text-[#ffaa00]" onClick={(e) => {

                                e.stopPropagation();

                                table.options.meta?.updateTripStatus?.(row.original.id, "Pending")

                            }}>Pending</DropdownMenuItem>

                            <DropdownMenuItem className="text-[#6200ff]" onClick={(e) => {
                                e.stopPropagation();

                                table.options.meta?.updateTripStatus?.(row.original.id, "Departed")
                            }}>Departed</DropdownMenuItem>
                            <DropdownMenuItem className="text-[#00aeff]" onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateTripStatus?.(row.original.id, "Active");
                            }}>Active</DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0073ff]" onClick={(e) => {
                                e.stopPropagation();
                                table.options.meta?.updateTripStatus?.(row.original.id, "Arrived");
                            }}>Arrived</DropdownMenuItem>
                            <DropdownMenuItem className="text-[#ff0000]" onClick={(e) => {
                                e.stopPropagation();

                                table.options.meta?.updateTripStatus?.(row.original.id, "Canceled")
                            }}>Canceled</DropdownMenuItem>
                            <DropdownMenuItem className="text-[#006eff]" onClick={(e) => {
                                e.stopPropagation();

                                table.options.meta?.updateTripStatus?.(row.original.id, "Completed")
                            }}>Completed</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu >
            )
        },
    },
    {
        accessorKey: "travellersCount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Travellers
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("travellersCount") as number;
            return (
                <div className="flex items-center gap-3">

                    <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90 text-center">
                        {name}
                    </p>
                </div>
            );
        },
    },

    {
        accessorKey: "startDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                >
                    Departing
                </Button>
            )
        },
        cell: ({ row }) => {
            const startDate = row.getValue("startDate") as number;
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{new Date(startDate).toDateString()}</span>;
        }
    },

    {
        accessorKey: "guides",
        header: "Guides",
        cell: ({ row }) => {
            return <span className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">{row.getValue("guides")}</span>;
        }
    },
]
