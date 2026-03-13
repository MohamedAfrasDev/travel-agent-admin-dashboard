import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation';
import React, { use } from 'react'

const TripItenery = ({ tripsId }: { tripsId: string }) => {
    const router = useRouter();
    return (
        <Card className='dark:bg-white/3 p-5'>
            <div className='flex flex-row justify-between'>
                <h2 className='text-lg font-semibold'>Itenery</h2>
                <Button className='bg-primary text-white h-10' onClick={(e) => router.push(`/trips/${tripsId}/create-itinerary`)}>Add Itenery</Button>
            </div>
        </Card>
    )
}

export default TripItenery