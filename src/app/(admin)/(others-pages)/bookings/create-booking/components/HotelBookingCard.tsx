import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'


interface HotelBookingCardProps {
    id: string
    title: string
    rooms: number
    handleRooms: (string: id) => void
}
const HotelBookingCard = ({ id, title, rooms, handleRooms }: HotelBookingCardProps) => {
    return (
        <Card className='dark:bg-white/3 px-5 py-3 items-center'>
            <h2 className='text-sm text-center'>{title}</h2>

            <ButtonGroup className="justify-center">
                <Button className="h-10 w-10" variant={"outline"}>-</Button>
                <Button className="h-10 w-10" variant={"outline"}>{rooms}</Button>
                <Button className="h-10 w-10" variant={"outline"} onClick={(e) => handleRooms(id)}>+</Button>
            </ButtonGroup>

        </Card>
    )
}

export default HotelBookingCard