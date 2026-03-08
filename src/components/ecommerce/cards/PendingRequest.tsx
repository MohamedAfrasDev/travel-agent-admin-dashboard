import Badge from '@/components/ui/badge/Badge'
import { ArrowUpIcon, GroupIcon } from '@/icons'
import React from 'react'

const PendingRequest = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-end justify-between">
                <div>
                    <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                        3,782
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Pending Requests
                    </span>
                </div>
                <Badge color="success">
                    <ArrowUpIcon />
                    11.01%
                </Badge>
            </div>
        </div>
    )
}

export default PendingRequest