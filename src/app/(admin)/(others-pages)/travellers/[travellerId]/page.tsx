import ComponentCard from '@/components/common/ComponentCard';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import React from 'react'

const TravellerDetails = async ({ params }: { params: Promise<{ travellerId: string }> }) => {
    const { travellerId } = await params;
    return (
        <div>
            <PageBreadcrumb pageTitle="Travellers" secondTitle={travellerId} />

            <ComponentCard title='Traveller Details'>
                <h2>Traveller Details ID: {travellerId}</h2>
            </ComponentCard>
        </div>
    )
}

export default TravellerDetails