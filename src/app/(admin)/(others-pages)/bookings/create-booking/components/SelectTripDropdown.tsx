"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import React from 'react'

const SelectTripDropdown = () => {

    const [tripName, setTripName] = React.useState<string>("");

    const handleSelectTrip = (tripName: string) => {
        setTripName(tripName);
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}
                className="ml-auto w-full"

            >

                <Field>
                    <FieldLabel htmlFor='trip-name'>Trip Name</FieldLabel>
                    <Input id='trip-name' placeholder='Select Trip Name' value={tripName} disabled />
                </Field>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Select Trip</DropdownMenuLabel>
                    <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTrip("May 2026 Umrah Package")
                    }}>May 2026 Umrah Package</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTrip("July 2026 Umrah Package")
                    }}>July 2026 Umrah Package</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTrip("October 2026 Umrah Package")
                    }}>October 2026 Umrah Package</DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTrip("December 2026 Umrah Package")
                    }}>December 2026 Umrah Package</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SelectTripDropdown