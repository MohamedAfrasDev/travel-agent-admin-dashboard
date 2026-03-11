"use client";
import ComponentCard from '@/components/common/ComponentCard'
import React from 'react'
import { Traveller, columns } from './columns';
import { DataTable } from './data-table';
import { AddTravellerDialog } from './AddTravellerDialog';
interface TravellerDetailProps {
    travellers: Traveller[];
}

const TravellerDetail = ({ travellers }: TravellerDetailProps) => {
    return (
        <ComponentCard title={"Traveller Details"} className="w-full" icons={<AddTravellerDialog travellerId={travellers.length + 1} />} >
            <DataTable columns={columns} data={travellers} />

        </ComponentCard>
    )
}

export default TravellerDetail