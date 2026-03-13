import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React, { use } from 'react'

const TripDetails = ({ tripsId }: { tripsId: string }) => {

    return (
        <Card className='dark:bg-white/3 px-5 py-3'>
            <h2 className='text-lg font-semibold'>Trip Detail</h2>

            <div className='flex flex-row gap-3'>
                <Image src="https://royalalfathimatravels.com/wp-content/uploads/2025/03/pexels-photo-5659779-2048x1536.jpeg"
                    alt={'Trip Image'} width={200} height={100} className='border rounded-xl' />

                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='text-sm text-gray-500'>Trip Name:</p>
                        <h2 className='text-sm'> May 2026 Umrah Package</h2>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Package:</p>
                        <h2 className='text-sm'>Hilton Tower Umrah Package</h2>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Departure:</p>
                        <h2 className='text-sm'>Tue 10 March 2026</h2>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Arrival:</p>
                        <h2 className='text-sm'> 20 March 2026</h2>
                    </div>

                </div>
            </div>

            <Button className="h-10" variant="outline">
                View Trip
            </Button>
        </Card>
    )
}

export default TripDetails