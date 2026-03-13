"use client";
import BookingTrends from '@/components/ecommerce/BookingTrends';
import StatisticsChart from '@/components/ecommerce/StatisticsChart';
import { TripsMetrics } from './components/TripsMetrics';
import { PaymentPieChart } from './components/PaymentPieChart';
import TripDetails from './components/TripDetails';
import BreadcrumbComp from './components/BreadcrumbComp';
import TripEstimatedRevenue from './components/TripEstimatedRevenue';
import { TripMetrics } from './components/TripMetrics';
import { columns, Trips } from '../columns';
import React, { use } from 'react';
import { TravellerDataTable } from './components/traveller-data-table';
import TravellerDetail from './components/TravellerDetail/TravellerDetail';
import { Traveller } from '../../travellers/columns';
import { TripTraveller } from './components/TravellerDetail/columns';
import TripGuide from './components/TripGuide/TripGuide';
import TripItenery from './components/TripItenery';

const TripsDetails = ({ params }: { params: { tripsId: string } }) => {
    const { tripsId } = use(params);

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
    const travellerData: TripTraveller[] = [
        {
            id: "1",
            name: "Afras",
            type: "Adult",
            email: 'afras4432@gmail.com',
            phone: '0766223',
            country: "Sri Lanka",
            paid: true,
            airline: 'Sri Lankan',
            class: "Economy",
            amount: 375000,
            visa: "as",
            ticket: "qq",
            travellerId: "1"
        },
        {
            id: "1",
            name: "Zaeeym",
            type: "Adult",
            email: 'afras4432@gmail.com',
            phone: '0766223',
            country: "Sri Lanka",
            paid: false,
            airline: 'Sri Lankan',
            class: "Economy",
            amount: 375000,
            visa: "as",
            ticket: "qq",
            travellerId: "1"

        },
        {
            id: "1",
            name: "Shafaath",
            type: "Adult",
            email: 'afras4432@gmail.com',
            phone: '0766223',
            country: "Sri Lanka",
            paid: true,
            airline: 'Air arabia',
            class: "Economy",
            amount: 375000,
            visa: "as",
            ticket: "qq",
            travellerId: "1"

        },
        {
            id: "1",
            name: "Asmath",
            type: "Adult",
            email: 'afras4432@gmail.com',
            phone: '0766223',
            country: "Sri Lanka",
            paid: false,
            airline: 'Saudia',
            class: "Economy",
            amount: 375000,
            visa: "as",
            ticket: "qq",
            travellerId: "1"

        },
        {
            id: "1",
            name: "Za ama",
            type: "Infant",
            email: 'afras4432@gmail.com',
            phone: '0766223',
            country: "Sri Lanka",
            paid: true,
            airline: 'Sri Lankan',
            class: "Business",
            amount: 375000,
            visa: "as",
            ticket: "qq",
            travellerId: "1"

        },
        {
            id: "1",
            name: "Fathima",
            type: "Child",
            email: 'afras4432@gmail.com',
            phone: '0766223',
            country: "Sri Lanka",
            paid: true,
            airline: 'Kuwait Airways',
            class: "Business",
            amount: 375000,
            visa: "as",
            ticket: "qq",
            travellerId: "1"

        }
    ];

    return (
        <div>

            <BreadcrumbComp tripTitle={"Trip Detail"} pageTitle={'Trips'} />
            <div className="grid grid-cols-2 gap-4 md:gap-6">

                <div className="col-span-12 flex lg:flex-row md:flex-col flex-col gap-5">
                    <TripDetails tripsId={tripsId} />
                    <TripsMetrics />
                </div>
                <div className="col-span-12">
                    <TravellerDetail travellers={travellerData} />


                </div>
                <div className="col-span-12 space-y-6 xl:col-span-7">

                    <TripItenery tripsId={tripsId} />
                </div>
                <div className="col-span-12 space-y-6 xl:col-span-7">

                    <TripGuide />
                </div>

                <div className="col-span-12 xl:col-span-5">
                    <TripEstimatedRevenue />
                </div>

                <div className="col-span-12">
                    <StatisticsChart />
                </div>

            </div>
        </div>
    )
}

export default TripsDetails