import React from 'react'
import { Card } from '@/components/ui/card'
import HotelBookingCard from './HotelBookingCard'

const HotelBookingDetails = () => {
    const [rooms, setRooms] = React.useState({
        double: 0,
        triple: 0,
        family: 0
    })
    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <h2 className='text-lg'>Hotel Booking Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                <HotelBookingCard id={'double-bedroom'} title={'Double Bedroom'} rooms={rooms.double}

                    handleRooms={(id) => setRooms({ ...rooms, double: rooms.double + 1 })} />
                <HotelBookingCard id={'triple-bedroom'} title={'Triple Bedroom'} rooms={rooms.triple} handleRooms={(id) => setRooms({ ...rooms, double: rooms.triple + 1 })} />
                <HotelBookingCard id={'family-bedroom'} title={'Family Bedroom'} rooms={rooms.family} handleRooms={(id) => setRooms({ ...rooms, double: rooms.family + 1 })} />
            </div>

        </Card>
    )
}

export default HotelBookingDetails