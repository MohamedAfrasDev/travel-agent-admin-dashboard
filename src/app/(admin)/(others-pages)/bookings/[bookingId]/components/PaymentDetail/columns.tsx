"use client"

import { ColumnDef } from "@tanstack/react-table"
import Badge from "@/components/ui/badge/Badge"
import { DropdownItem } from "@/components/ui/dropdown/DropdownItem"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react"

export type Payment = {
    id: number
    paymentNo: string
    paymentStatus: "Completed" | "Failed" | "Pending" | "Refunded"
    gateway: "Bank Transfer" | "Later" | "Cheque"
    depositAmount: number
    paidAmount: number
    transactionId: string
    remainingAmount: number
    note: string
    date: number
}

// Extend the TableMeta interface to support our update function

declare module "@tanstack/react-table" {
    interface TableMeta<TData extends unknown> {
        updatePaymentStatus?: (id: number, status: Payment["paymentStatus"]) => void
    }
    interface TableMeta<TData extends unknown> {
        updatePaymentGatewayStatus?: (id: number, status: Payment["gateway"]) => void
    }
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "paymentNo",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Payment No
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const name = row.getValue("paymentNo") as string;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            Payment #{name}
                        </p>

                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "paidAmount",
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
            const name = row.getValue("paidAmount") as string;
            return (
                <div className="flex items-center gap-3">

                    <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                            LKR {name}
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
