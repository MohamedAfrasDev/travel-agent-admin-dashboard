"use client";
import ComponentCard from '@/components/common/ComponentCard'
import React from 'react'
import { TripTraveller, columns } from './columns';
import { DataTable } from './data-table';
interface TravellerDetailProps {
    travellers: TripTraveller[];
}

const TravellerDetail = ({ travellers }: TravellerDetailProps) => {
    return (
        <div>
            <DataTable columns={columns} data={travellers} />
        </div>
    )
}

export default TravellerDetail