
"use client";
import React from 'react'
import BreadcrumbComp from './components/BreadcrumbComp'
import { Card } from '@/components/ui/card'
import SelectTripDropdown from './components/SelectTripDropdown'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import InputBookingDetails from './components/InputBookingDetails'
import InputTravellersDetails from './components/InputTravellersDetails'
import BookingPaymentDetails from './components/BookingPaymentDetails';

const CreateBooking = () => {
    const [noOfTravellers, setNoOfTravellers] = React.useState<number>(0);

    const [tripName, setTripName] = React.useState<string>("");

    const handleSelectTrip = (tripName: string) => {
        setTripName(tripName);
    }
    const [travellers, setTravellers] = React.useState(
        Array.from({ length: noOfTravellers }, () => ({
            name: "",
            email: "",
            phone: "",
            passport: "",
            photo: "",
            airline: "",
            type: "Adult",
            note: "",
            passportNumber: "",
            cost: ""
        }))
    );
    return (
        <div className='gap-5 flex flex-col'>
            <BreadcrumbComp pageTitle={'Create new Booking'} />


            <InputBookingDetails setNoOfTravellers={setNoOfTravellers} handleSelectTrip={handleSelectTrip} tripName={tripName} />

            <InputTravellersDetails
                noOfTravellers={noOfTravellers}
                travellers={travellers}
                isShowTravellersDetails={(noOfTravellers !== 0 && tripName !== "") ? false : true} setTravellers={setTravellers} />


            <BookingPaymentDetails noOfTravellers={noOfTravellers} setTravellers={setTravellers} travellers={travellers} />
        </div>
    )
}

export default CreateBooking