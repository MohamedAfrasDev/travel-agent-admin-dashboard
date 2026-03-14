"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

export function LastBookingDatePicker() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="w-full h-10 justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <ChevronDownIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 dark:bg-gray-900" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={date}
                />
            </PopoverContent>
        </Popover>
    )
}
