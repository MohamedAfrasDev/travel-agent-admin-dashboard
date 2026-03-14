import React from 'react'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import FlightIcon from "../../../../../../../public/images/icons/fly.png";
import Image from 'next/image'
import { ChevronDownIcon, Trash } from 'lucide-react'
import { FlightRouteInput } from './TouchFlight'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
interface TouchFlightInputProps {
    flightRouteInput: FlightRouteInput
    onDelete: (id: string) => void
    index: number
    onStartLocationChange: (id: string, value: string) => void
    onEndLocationChange: (id: string, value: string) => void
    startLocation: string
    endLocation: string
    previousLocation: string
    departureDate: number
    arrivalDate: number
    departureTime: number
    arrivalTime: number
}

const TouchFlightInput = ({
    flightRouteInput,
    onDelete,
    index, onStartLocationChange,
    onEndLocationChange,
    startLocation,
    endLocation,
    previousLocation,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime
}: TouchFlightInputProps) => {
    const [startDate, setStartDate] = React.useState<Date>()
    const [endDate, setEndDate] = React.useState<Date>()


    return (
        <div>
            <div className='flex flex-row gap-2 items-center justify-between w-full'>
                <h2 className='text-lg'>Route #{index + 1}</h2>
                <Button variant="destructive" className="h-10" onClick={() => onDelete(flightRouteInput.id)}>
                    <Trash />
                </Button>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-between w-full mt-5'>

                <div className='flex flex-col gap-2 w-full'>

                    <Field className='' id={`flight-route-${flightRouteInput.id}-start`}>
                        <ButtonGroup>
                            <Button variant="outline" className="h-10">
                                Start

                            </Button>
                            <Input
                                id={`airline-${flightRouteInput.id}-start-location`}
                                placeholder="Enter Start Location"
                                value={startLocation} onChange={(e) =>
                                    onStartLocationChange(flightRouteInput.id, e.target.value)
                                }
                            />
                        </ButtonGroup>
                    </Field>
                    <div className='flex flex-row gap-5'>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="date-picker-simple"
                                    className="justify-start font-normal h-10"
                                >
                                    {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={startDate}
                                    onSelect={setStartDate}
                                    defaultMonth={startDate}
                                />
                            </PopoverContent>
                        </Popover>
                        <Field>
                            <ButtonGroup>
                                <Button variant="outline" className="h-10">
                                    Departure Time

                                </Button>
                                <Input
                                    type="time"
                                    id="time-picker-optional"
                                    step="1"
                                    defaultValue="10:30:00"
                                    className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                />
                            </ButtonGroup>
                        </Field>
                    </div>
                </div>
                <Image src={FlightIcon} alt="Flight" width={100} height={50} color='white' className='dark:filter dark:invert dark:brightness-0 dark:sepia' />
                <div className='flex flex-col gap-2 w-full'>
                    <Field className='' id={`flight-route-${flightRouteInput.id}-end`}>
                        <ButtonGroup>
                            <Button variant="outline" className="h-10">
                                Stop

                            </Button>
                            <Input id={`airline-${flightRouteInput.id}-end-location`} placeholder="Enter End Location" value={endLocation} onChange={(e) => onEndLocationChange(flightRouteInput.id, e.target.value)} />
                        </ButtonGroup>
                    </Field>
                    <div className='flex flex-row gap-5'>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="date-picker-simple"
                                    className="justify-start font-normal"
                                >
                                    {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={endDate}
                                    onSelect={setEndDate}
                                    defaultMonth={endDate}
                                />
                            </PopoverContent>
                        </Popover>
                        <Field>
                            <ButtonGroup>
                                <Button variant="outline" className="h-10">
                                    Arrival Time

                                </Button>
                                <Input
                                    type="time"
                                    id="arrival-time-picker-optional"
                                    step="1"
                                    defaultValue="10:30:00"
                                    className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                />
                            </ButtonGroup>
                        </Field>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TouchFlightInput