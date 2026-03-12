"use client";
import ComponentCard from '@/components/common/ComponentCard'
import React from 'react'
import { Traveller, columns } from './columns';
import { DataTable } from './data-table';
import { AddTravellerDialog } from './AddTravellerDialog';
import { Card } from '@/components/ui/card';
interface TravellerDetailProps {
    travellers: Traveller[];
}

const TravellerDetail = ({ travellers }: TravellerDetailProps) => {
    return (
        <Card className='dark:bg-white/3'>
            <div className='flex justify-between px-5 pt-2'>
                <h2 className='text-lg font-semibold'>Traveller Details</h2>
                <AddTravellerDialog travellerId={travellers.length + 1} />
            </div>
            <DataTable columns={columns} data={travellers} />

        </Card>
    )
}

export default TravellerDetail