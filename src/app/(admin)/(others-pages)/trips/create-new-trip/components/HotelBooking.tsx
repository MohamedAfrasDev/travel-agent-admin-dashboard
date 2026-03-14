import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const HotelBooking = () => {
    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Hotel Booking</h1>
                <Button>Add Hotel</Button>
            </div>
        </Card>
    )
}

export default HotelBooking