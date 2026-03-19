import Image from 'next/image';
import React from 'react'
import { DataTable } from './data-table';
import { columns } from './columns';

interface BillingDetailsBookingProps {
    noOfTravellers: number;
    travellers: any[];
}

const BillingDetailsBooking = ({ noOfTravellers, travellers }: BillingDetailsBookingProps) => {
    return (
        <div className='flex flex-col gap-5'>
            <p className='text-lg'>Billing Details</p>
            {noOfTravellers > 0 && (
                <DataTable columns={columns} data={travellers} />
            )}
        </div>

    )
}

export default BillingDetailsBooking