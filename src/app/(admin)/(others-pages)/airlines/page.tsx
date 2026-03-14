"use client"

import React, { useEffect, useState } from "react"
import BreadcrumbComp from "./components/BreadcrumbComp"
import { DataTable } from "./components/data-table"
import { Airline, columns } from "./components/columns"
import { createClient } from "@/utils/supabase/client"

export default function Airlines() {
    const supabase = createClient()
    const [airlineData, setAirlineData] = useState<Airline[]>([])

    // Fetch data on mount
    const fetchAirlines = async () => {
        const { data, error } = await supabase.from("airlines").select("*")
        if (data) {
            const formatted: Airline[] = data.map((item) => ({
                id: String(item.id),
                name: item.name,
                code: item.code,
                logo: item.logo,
                status: item.status as "Active" | "Inactive",
                date: new Date(item.date).getTime(),
            }))
            setAirlineData(formatted)
        }
        if (error) console.log(error)
    }

    useEffect(() => {
        fetchAirlines()
    }, [])

    // Handle row deletion
    const handleDelete = async (id: string) => {
        const { error } = await supabase.from("airlines").delete().eq("id", id)
        if (!error) {
            // Remove the deleted row from state
            setAirlineData((prev) => prev.filter((airline) => airline.id !== id))
        } else {
            console.log(error)
        }
    }

    return (
        <div>
            <BreadcrumbComp />
            <DataTable columns={columns} data={airlineData} onDelete={handleDelete} />
        </div>
    )
}