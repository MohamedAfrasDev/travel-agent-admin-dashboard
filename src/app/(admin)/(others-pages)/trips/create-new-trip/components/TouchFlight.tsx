import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Airline } from '../../../airlines/components/columns'
import TouchFlightInput from './TouchFlightInput'

export type FlightRouteInput = {
    id: string
    flightRouteId: string
    startLocation: string
    startDate: number
    endLocation: string
    endDate: number
    startTime: number
    endTime: number
}

export type FlightRoute = {
    id: string
    airlineId: string
    tripId: string
    departureTime: number
    arrivalTime: number
    startLocation: string
    endLocation: string
    noOfStops: number
    routes: FlightRouteInput[]
}

const TouchFlight = ({ airlineList, index }: { airlineList: Airline[], index: number }) => {
    const [flightRoute, setFlightRoute] = useState<FlightRouteInput[]>([])

    const handleFlightRoute = (route: FlightRouteInput) => {
        setFlightRoute([...flightRoute, route]);
    }
    const handleDeleteFlightRoute = (id: string) => {
        setFlightRoute((prev) =>
            prev.filter((val) => val.id !== id)
        )
    }
    const [startLocation, setStartLocation] = useState<Record<string, string>>({});
    const handleStartLocation = (flightRouteId: string, value: string) => {
        setStartLocation((prev) => ({
            ...prev,
            [flightRouteId]: value,
        }));
    };
    const [endLocation, setEndLocation] = useState<Record<string, string>>({});
    const handleEndLocation = (flightRouteId: string, value: string) => {
        setEndLocation((prev) => ({
            ...prev,
            [flightRouteId]: value,
        }));
    };
    return (
        <div className='flex flex-col gap-2 w-full'>
            <FieldLabel htmlFor={"al"}>
                Flight Route
            </FieldLabel>
            <div className='grid grid-cols-1 gap-2 w-full'>
                {flightRoute.map((route, index) => (
                    <TouchFlightInput
                        key={route.id}
                        onDelete={(e) => handleDeleteFlightRoute(e)}
                        flightRouteInput={route}
                        index={index}
                        onStartLocationChange={(id: string, value: string) => handleStartLocation(id, value)}
                        onEndLocationChange={(id: string, value: string) => handleEndLocation(id, value)}
                        startLocation={index > 0 ? endLocation[flightRoute[index - 1].id] ?? "" : startLocation[route.id] ?? ""} endLocation={endLocation[route.id] ?? ""}
                        previousLocation={flightRoute[index - 1]?.endLocation ?? ""} departureDate={route.startDate}
                        arrivalDate={route.endDate}
                        departureTime={route.startTime}
                        arrivalTime={route.endTime}

                    />
                ))}
                <Button variant="outline" className="h-10 w-[200px] items-center justify-center mx-auto" onClick={() => {
                    const lastRoute = flightRoute[flightRoute.length - 1];

                    handleFlightRoute({
                        id: window.crypto.randomUUID(),
                        flightRouteId: "",
                        startLocation: lastRoute ? endLocation[lastRoute.id] ?? "" : "",
                        startDate: Date.now(),
                        endLocation: "",
                        endDate: Date.now(),
                        startTime: Date.now(),
                        endTime: Date.now()
                    });
                }}>Add Flight Route</Button>
            </div>
        </div>
    )
}

export default TouchFlight