import React from 'react'
import { Card } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import LinkTripDropDown from './LinkTripDropDown'
import { DurationPicker } from './DurationPicker'
import { LastBookingDatePicker } from './LastBookingDatePicker'

const TripDetailInput = () => {
    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <h2 className='text-2xl font-semibold mb-5'>Trip Details</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <Field>
                    <FieldLabel htmlFor="tripName">Trip Name</FieldLabel>
                    <Input id="tripName" placeholder="Trip Name" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="linkedTrip">Linked Trip</FieldLabel>
                    <LinkTripDropDown />
                </Field>
                <Field>
                    <FieldLabel htmlFor="tripName">Trip Name</FieldLabel>
                    <Input id="tripName" placeholder="Trip Name" />
                </Field>

                <Field>
                    <FieldLabel htmlFor="tripDuration">Trip Duration</FieldLabel>
                    <DurationPicker />
                </Field>
                <Field>
                    <FieldLabel htmlFor="bookingDeadline">Booking Deadline</FieldLabel>
                    <LastBookingDatePicker />
                </Field>
                <Field>
                    <FieldLabel htmlFor="maximumTravelers">Maximum Travelers</FieldLabel>
                    <Input id="maximumTravelers" placeholder="Maximum Travelers" type='number' />
                </Field>

            </div>
        </Card>
    )
}

export default TripDetailInput