import React from 'react'
import BreadcrumbComp from './components/BreadcrumbComp'
import { DataTable } from './components/data-table'
import { Airline, columns } from './components/columns';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Airlines() {

    const airlineData: Airline[] = [
        {
            id: "1",
            name: "Emirates",
            code: "EK",
            logo: "https://royalalfathimatravels.com/logo_images/emirates-air.png",
            status: "Active",
            date: 1678886400
        },
        {
            id: "2",
            name: "Qatar Airways",
            code: "QR",
            logo: "https://royalalfathimatravels.com/logo_images/qatar-airways.png",
            status: "Active",
            date: 1678886400
        },
        {
            id: "3",
            name: "Etihad Airways",
            code: "EY",
            logo: "https://royalalfathimatravels.com/logo_images/ethihad.png",
            status: "Active",
            date: 1678886400
        },
        {
            id: "4",
            name: "Sri Lankan Airlines",
            code: "SL",
            logo: "https://royalalfathimatravels.com/logo_images/srilankan-airlines-logo.png",
            status: "Active",
            date: 1678886400
        },
        {
            id: "5",
            name: "Kuwait Airways",
            code: "KU",
            logo: "https://royalalfathimatravels.com/logo_images/kuwait-airways.png",
            status: "Active",
            date: 1678886400
        },
        {
            id: "6",
            name: "Gulf Air",
            code: "GF",
            logo: "https://royalalfathimatravels.com/logo_images/gulf-air.png",
            status: "Active",
            date: 1678886400
        },
        {
            id: "7",
            name: "Jazeera Airways",
            code: "J9",
            logo: "https://royalalfathimatravels.com/logo_images/jazeera-airways.png",
            status: "Active",
            date: 1678886400
        },

    ];
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore as any)
    const { data: airlines } = await supabase.from('airlines').select()


    return (
        <div><BreadcrumbComp />
            {airlines?.map((airline) => (
                <li>{airline.name}</li>
            ))}
            <DataTable columns={columns} data={airlineData} /></div>
    )
}

async function InstrumentsData() {
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore as any)
    const { data: instruments } = await supabase.from('instruments').select()
    return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}

