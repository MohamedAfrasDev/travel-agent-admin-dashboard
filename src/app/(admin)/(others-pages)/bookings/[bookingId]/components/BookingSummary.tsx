import ComponentCard from '@/components/common/ComponentCard'
import React from 'react'
import { Traveller } from './TravellerDetail/columns';
import { Button } from '@/components/ui/button';

interface BookingSummaryProps {
    travellers: Traveller[];
}

const BookingSummary = ({ travellers }: BookingSummaryProps) => {
    const hasAdult = travellers.some(traveller => traveller.type === "Adult");
    const hasChild = travellers.some(traveller => traveller.type === "Child");
    const hasInfant = travellers.some(traveller => traveller.type === "Infant");

    const adultCount = travellers.filter(t => t.type === "Adult").length;
    const childCount = travellers.filter(t => t.type === "Child").length;
    const infantCount = travellers.filter(t => t.type === "Infant").length;

    const adultPrice = 375000;
    const childPrice = 355000;
    const infantPrice = 275000;
    const currency = "LKR";

    return (
        <ComponentCard title={'Booking Summary'} className='w-full'>
            <p>Traveller(s)</p>

            {hasAdult && (
                <div className='flex flex-row gap-5 text-sm justify-between'>
                    <div className='flex flex-row gap-2'>
                        <h2 className='text-gray-500 dark:text-gray-400 '>Adult x {adultCount}</h2>
                        <h2>{currency} {adultPrice}<span className='text-gray-500 dark:text-gray-400'> /person</span></h2>

                    </div>
                    <h2>{currency}{adultPrice * adultCount}</h2>
                </div>
            )}
            {hasChild && (
                <div className='flex flex-row gap-5 text-sm justify-between'>
                    <div className='flex flex-row gap-2'>
                        <h2 className='text-gray-500 dark:text-gray-400 '>Child x {childCount}</h2>
                        <h2>{currency} {childPrice}<span className='text-gray-500 dark:text-gray-400'> /person</span></h2>

                    </div>
                    <h2>{currency}{childPrice * childCount}</h2>
                </div>
            )}
            {hasInfant && (
                <div className='flex flex-row gap-5 text-sm justify-between'>
                    <div className='flex flex-row gap-2'>
                        <h2 className='text-gray-500 dark:text-gray-400 '>Infant x {infantCount}</h2>
                        <h2>{currency} {infantPrice}<span className='text-gray-500 dark:text-gray-400'> /person</span></h2>

                    </div>
                    <h2>{currency}{infantPrice * infantCount}</h2>
                </div>
            )}

            <div className='bg-gray-200 dark:bg-white/10 pl-4 pr-4 pt-3 pb-3 border rounded-lg flex flex-row justify-between border-none text-sm'>
                <h2>Total Amount</h2>
                <h2>{currency} {adultPrice * adultCount + childPrice * childCount + infantPrice * infantCount}</h2>
            </div>


        </ComponentCard>
    )
}

export default BookingSummary