import Badge from '@/components/ui/badge/Badge'
import { ArrowUpIcon, GroupIcon } from '@/icons'
import React from 'react'

const TotalBookings = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white  dark:border-gray-800 dark:bg-white/3 p-5">
            <span className="text-sm text-blue-400">
                Total Bookings
            </span>
            <div className="flex items-end justify-between">

                <h4 className="mt-2 font-bold text-gray-800 text-3xl dark:text-white/90">
                    50
                </h4>

            </div>
        </div>
    )
}

export default TotalBookings