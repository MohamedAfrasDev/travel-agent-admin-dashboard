"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react'

const LinkTripDropDown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}

            >
                <Input placeholder='Select Trip' disabled />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Select Trip</DropdownMenuLabel>
                    <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                    }}>Makkah Tower Umrah Package 2026</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

export default LinkTripDropDown