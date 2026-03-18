import { Card } from '@/components/ui/card'
import React from 'react'
import SelectTripDropdown from './SelectTripDropdown'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

interface InputBookingDetailsProps {
    setNoOfTravellers: (noOfTravellers: number) => void;
    handleSelectTrip: (tripName: string) => void;
    tripName: string;
}

const InputBookingDetails = ({ setNoOfTravellers, handleSelectTrip, tripName }: InputBookingDetailsProps) => {
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const inputElement = event.target as HTMLInputElement;
        // Limit the value to 5 characters
        if (inputElement.value.length > 2) {
            inputElement.value = inputElement.value.slice(0, 2);
        }
    };
    return (
        <Card className='dark:bg-white/3 px-5 py-3 '>

            <h2 className='text-lg'>
                Booking Details
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-5'>
                <SelectTripDropdown handleSelectTrip={handleSelectTrip} tripName={tripName} />

                <Field className='w-full'>
                    <FieldLabel htmlFor='booking-id'>Booking ID</FieldLabel>
                    <Input id='booking-id' placeholder='Enter Booking ID' value={"332asa523Ad3ar2"} disabled />
                </Field>


                <Field>
                    <FieldLabel htmlFor='booking-no-of-travellers'>No. of Travellers</FieldLabel>
                    <Input id='booking-no-of-travellers' placeholder='Enter No. of Travellers' type='number' onInput={handleInput}
                        onChange={(e) => setNoOfTravellers(Number(e.target.value))} />
                </Field>
            </div>
        </Card>
    )
}

export default InputBookingDetails