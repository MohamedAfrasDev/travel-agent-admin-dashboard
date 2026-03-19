import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Card } from '@/components/ui/card'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import BillingDetailsBooking from './BillingDetailsBooking'

interface BookingPaymentDetailsProps {
    noOfTravellers: number;
    setTravellers: React.Dispatch<React.SetStateAction<any[]>>;
    travellers: any[];
}

const BookingPaymentDetails = ({ noOfTravellers, setTravellers, travellers }: BookingPaymentDetailsProps) => {
    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <h2 className='text-lg'>Booking Payment Details</h2>


            <BillingDetailsBooking noOfTravellers={noOfTravellers} travellers={travellers} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <Field>
                    <FieldLabel>Total Amount</FieldLabel>
                    <ButtonGroup>
                        <Button className="h-10" variant="outline">LKR</Button>
                        <Input placeholder="Enter Total Amount" type='number' />
                    </ButtonGroup>
                </Field>
                <Field>
                    <FieldLabel>Advance Amount</FieldLabel>
                    <ButtonGroup>
                        <Button className="h-10" variant="outline">LKR</Button>
                        <Input placeholder="Enter Advance Amount" type='number' />
                    </ButtonGroup>
                </Field>
                <Field>
                    <FieldLabel>Remaining Amount</FieldLabel>
                    <ButtonGroup>
                        <Button className="h-10" variant="outline">LKR</Button>
                        <Input placeholder="Enter Remaining Amount" type='number' />
                    </ButtonGroup>
                </Field>
            </div>
        </Card>
    )
}

export default BookingPaymentDetails