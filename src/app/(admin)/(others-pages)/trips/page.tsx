
"use client";
import PageBreadcrumb from '@/components/common/PageBreadCrumb'
import React from 'react'
import { columns, Trips } from './columns';
import { DataTable } from './data-table';


const Trips = () => {
    const [tableData, setTableData] = React.useState<Trips[]>([
        {
            id: '1',
            bookedTrip: 'Makkah Tower Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Booked",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },
        {
            id: '2',
            bookedTrip: 'Hilton Tower Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Pending",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },
        {
            id: '3',
            bookedTrip: 'Ramadan Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Departed",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },

        {
            id: '4',
            bookedTrip: 'December Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Active",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },

        {
            id: '5',
            bookedTrip: 'January Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Arrived",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },

        {
            id: '6',
            bookedTrip: 'September Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Canceled",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },
        {
            id: '7',
            bookedTrip: 'October Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Completed",
            date: Date.now(),
            travellers: ["1", "2"],
            guides: ["1", "2"],
            price: 1000

        },
    ]);
    const updateTripStatus = (id: string, status: Trips["status"]) => {
        setTableData((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status } : item
            )
        );
    };
    return (
        <div>
            <PageBreadcrumb pageTitle={'Trips'} />
            <DataTable columns={columns} data={tableData} updateTripStatus={updateTripStatus as any} />

        </div>
    )
}

export default Trips