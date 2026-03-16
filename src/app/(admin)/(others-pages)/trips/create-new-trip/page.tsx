import React from 'react'
import BreadcrumbComp from './components/BreadcrumbComp'
import TripDetailInput from './components/TripDetailInput'
import AirlineDetailInput from './components/AirlineDetailInput'
import HotelBooking from './components/HotelBooking'
import CreateItenarary from './components/CreateItenarary'

const CreateNewTrip = () => {
    return (
        <div className='flex flex-col gap-5'>

            <BreadcrumbComp />

            <TripDetailInput />

            <AirlineDetailInput />
            <CreateItenarary />

            <HotelBooking />

        </div>
    )
}

export default CreateNewTrip