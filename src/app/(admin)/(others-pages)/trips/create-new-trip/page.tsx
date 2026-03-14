import React from 'react'
import BreadcrumbComp from './components/BreadcrumbComp'
import TripDetailInput from './components/TripDetailInput'
import AirlineDetailInput from './components/AirlineDetailInput'
import HotelBooking from './components/HotelBooking'

const CreateNewTrip = () => {
    return (
        <div className='flex flex-col gap-5'>

            <BreadcrumbComp />

            <TripDetailInput />

            <AirlineDetailInput />

            <HotelBooking />
        </div>
    )
}

export default CreateNewTrip