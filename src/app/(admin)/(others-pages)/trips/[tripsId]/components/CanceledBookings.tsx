import Badge from '@/components/ui/badge/Badge'
import { ArrowUpIcon, GroupIcon } from '@/icons'
import React from 'react'

const CanceledBookings = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/3 p-5 justify-between">
            <span className="text-sm text-red-500">
                Canceled Bookings
            </span>
            <div className="flex items-end justify-between">

                <h4 className="mt-2 font-bold text-gray-800 text-3xl dark:text-white/90">
                    15
                </h4>
                <div className='flex items-center'>
                    <Badge color="success" size='sm'>
                        <ArrowUpIcon />
                        12%
                    </Badge>
                    <span className="text-sm/3 text-gray-500 dark:text-gray-400 ml-1">
                        vs prev Trip
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CanceledBookings