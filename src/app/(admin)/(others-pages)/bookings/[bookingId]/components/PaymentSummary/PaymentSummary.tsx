import ComponentCard from '@/components/common/ComponentCard'
import { Button } from '@/components/ui/button'
import React from 'react'

const PaymentSummary = () => {
    return (
        <ComponentCard title='Payment Summary'>
            <div className='flex flex-row justify-between text-sm'>
                <h2>Total Deposit Amount</h2>
                <h2 className='font-semibold'>LKR 100000</h2>

            </div>
            <div className='flex flex-row justify-between text-sm'>
                <h2>Total Remaining Amount</h2>
                <h2 className='font-semibold'>LKR 100000</h2>


            </div>
            <div className='bg-green-500 pl-4 pr-4 pt-3 pb-3 border rounded-lg flex flex-row justify-between'>
                <h2 className='text-white'>Total Paid Amount</h2>
                <h2 className='text-white'>LKR 100000</h2>

            </div>

            <div className='flex flex-row gap-2 max-w-full justify-between'>

                <Button className='p-5 flex-1' variant="default">
                    Print Receipt
                </Button>
                <Button className='p-5 flex-1' variant="outline">
                    Send Receipt
                </Button>
            </div>
        </ComponentCard>
    )
}

export default PaymentSummary