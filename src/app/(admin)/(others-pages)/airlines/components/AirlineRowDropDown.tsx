"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { MoreVerticalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DeleteAirlineDialog from "./DeleteAirlineDialog"
import { Airline } from "./columns"
import React from "react"

interface AirlineRowDropDownProps {
    airlineData: Airline
    onDelete?: (id: string) => void
}

const AirlineRowDropDown = ({ airlineData, onDelete }: AirlineRowDropDownProps) => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreVerticalIcon color="gray" />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            className="text-red-500"
                            onClick={(e) => {
                                e.stopPropagation() // prevent row click if inside table
                                setOpen(true)
                            }}
                        >
                            Delete Airline
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Render Dialog outside the dropdown */}
            <DeleteAirlineDialog open={open} setOpen={setOpen} airlineData={airlineData} onDelete={onDelete} // <- this was missing
            />
        </>
    )
}

export default AirlineRowDropDown