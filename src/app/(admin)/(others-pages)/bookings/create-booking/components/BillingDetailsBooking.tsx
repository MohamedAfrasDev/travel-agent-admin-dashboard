import Image from 'next/image';
import React from 'react'

interface BillingDetailsBookingProps {
    noOfTravellers: number;
    travellers: any[];
}

const BillingDetailsBooking = ({ noOfTravellers, travellers }: BillingDetailsBookingProps) => {
    return (
        <div className='flex flex-col gap-5'>
            <p className='text-lg'>Billing Details</p>
            {noOfTravellers > 0 && (
                travellers.map((traveller, index) => (
                    <div key={index} className='flex flex-row gap-5'>

                        <Image src={traveller.photo} alt={traveller.name} width={30} height={30} className='rounded-full w-[40px] h-[40px]' />
                        <h3 className='text-lg'>{traveller.name}</h3>
                    </div>
                ))
            )}
        </div>

    )
}

export default BillingDetailsBooking