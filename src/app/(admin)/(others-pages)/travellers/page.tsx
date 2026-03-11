"use client";
import ComponentCard from '@/components/common/ComponentCard';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import React from 'react'
import { columns, Traveller } from './columns';
import { DataTable } from './data-table';

const Travellers = () => {
    // Define the table data using the interface
    const [tableData, setTableData] = React.useState<Traveller[]>([
        {
            id: 1,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 2,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 3,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 4,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 5,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 6,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 7,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
        {
            id: 71,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gdsdmail.com"
        },
        {
            id: 27,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "07734226-640",
            mail: "afras443@gsamail.com"
        },
        {
            id: 73,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226sas-640",
            mail: "afras4asas43@gmail.com"
        },
        {
            id: 74,
            name: "Mohamed Afras",
            totalSpent: "10000",
            due: "100",
            image: "/images/product/product-01.jpg",
            date: Date.now(),
            phoneNumber: "077226-640",
            mail: "afras443@gmail.com"
        },
    ]);

    return (
        <div className=''>
            <PageBreadcrumb pageTitle="Travellers" />

            <DataTable columns={columns} data={tableData} />

        </div>
    )
}

export default Travellers