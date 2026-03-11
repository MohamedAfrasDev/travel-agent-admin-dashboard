"use client";
import ComponentCard from '@/components/common/ComponentCard';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import React from 'react'
import { columns, Booking } from './columns';
import { DataTable } from './data-table';

const Bookings = () => {
    // Define the table data using the interface
    const [tableData, setTableData] = React.useState<Booking[]>([
        {
            id: '1',
            name: "Mohamed Afras",
            bookedTrip: 'Makkah Tower Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Booked",
            date: Date.now(),
            travellers: ["1", "2"],
            price: 1000

        },
        {
            id: '2',
            name: "Mohamed Shafaath",
            bookedTrip: 'Hilton Tower Umrah Package',
            bookedDate: Date.now(),
            startDate: Date.now(),
            endDate: Date.now(),
            travellersCount: 2,
            tripCode: 'RF-01',
            status: "Booked",
            date: Date.now(),
            travellers: ["3", "4"],
            price: 2000

        },

    ]);
    const updateStatus = (id: string, status: Booking["status"]) => {
        setTableData((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status } : item
            )
        );
    };
    return (
        <div className=''>
            <PageBreadcrumb pageTitle="Bookings" />

            <DataTable columns={columns} data={tableData} updateStatus={updateStatus as any} />

        </div>
    )
}

export default Bookings