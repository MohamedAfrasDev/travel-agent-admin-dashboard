"use client";
import ComponentCard from '@/components/common/ComponentCard';
import PageBreadcrumb from '@/components/common/PageBreadCrumb';
import Badge from '@/components/ui/badge/Badge'
import { Table, TableHeader, TableRow, TableCell, TableBody } from '@/components/ui/table'
import React from 'react'

const Bookings = () => {
    interface Product {
        id: number; // Unique identifier for each product
        name: string; // Product name
        travellers: number; // Number of variants (e.g., "1 Variant", "2 Variants")
        category: string; // Category of the product
        price: string; // Price of the product (as a string with currency symbol)
        // status: string; // Status of the product
        image: string; // URL or path to the product image
        status: "Booked" | "Pending" | "Canceled" | "Paid"; // Status of the product
        date: number;
    }

    // Define the table data using the interface
    const [tableData, setTableData] = React.useState<Product[]>([
        {
            id: 1,
            name: "Makkah Tower Umrah Package",
            travellers: 2,
            category: "Umrah",
            price: "$2399.00",
            status: "Booked",
            image: "/images/product/product-01.jpg", // Replace with actual image URL
            date: Date.now(),
        },
        {
            id: 2,
            name: "Pullman Umrah Package",
            travellers: 5,
            category: "Umrah",
            price: "$879.00",
            status: "Pending",
            image: "/images/product/product-02.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 3,
            name: "30 Days Hajj",
            travellers: 1,
            category: "Hajj ",
            price: "$1869.00",
            status: "Paid",
            image: "/images/product/product-03.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 4,
            name: "Ramadan Umrah Package",
            travellers: 6,
            category: "Electronics",
            price: "$1699.00",
            status: "Canceled",
            image: "/images/product/product-04.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 5,
            name: "Ramadan Umrah Package",
            travellers: 3,
            category: "Accessories",
            price: "$240.00",
            status: "Pending",
            image: "/images/product/product-05.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 6,
            name: "Ramadan Umrah Package",
            travellers: 3,
            category: "Accessories",
            price: "$240.00",
            status: "Pending",
            image: "/images/product/product-05.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 7,
            name: "Ramadan Umrah Package",
            travellers: 3,
            category: "Accessories",
            price: "$240.00",
            status: "Pending",
            image: "/images/product/product-05.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 8,
            name: "Ramadan Umrah Package",
            travellers: 3,
            category: "Accessories",
            price: "$240.00",
            status: "Pending",
            image: "/images/product/product-05.jpg", // Replace with actual image URL
            date: Date.now(),

        },
        {
            id: 9,
            name: "Ramadan Umrah Package",
            travellers: 3,
            category: "Accessories",
            price: "$240.00",
            status: "Pending",
            image: "/images/product/product-05.jpg", // Replace with actual image URL
            date: Date.now(),

        },
    ]);
    const updateStatus = (id: number, status: Product["status"]) => {
        setTableData((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status } : item
            )
        );
    };
    return (
        <div>
            <PageBreadcrumb pageTitle="Bookings" />

            <ComponentCard title='Search' className='mt-5'>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                    <div className="max-w-full overflow-x-auto">
                        <div className="">
                            <Table>
                                {/* Table Header */}
                                <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
                                    <TableRow>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        >
                                            Package
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        >
                                            Price
                                        </TableCell>

                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        >
                                            Status
                                        </TableCell>
                                        <TableCell
                                            isHeader
                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                        >
                                            Date
                                        </TableCell>
                                    </TableRow>
                                </TableHeader>

                                {/* Table Body */}

                                <TableBody className="divide-y divide-gray-100 dark:divide-white/5">
                                    {tableData.map((client) => (
                                        <TableRow key={client.id} className="">
                                            <TableCell className="px-5 py-4 sm:px-6 text-start">
                                                <div className="flex items-center gap-3">

                                                    <div>
                                                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            {client.name}
                                                        </p>
                                                        <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                                                            {client.travellers} Travellers
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                {client.price}
                                            </TableCell>

                                            <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                <Badge
                                                    size="sm"
                                                    color={
                                                        client.status === "Booked"
                                                            ? "success"
                                                            : client.status === "Pending"
                                                                ? "warning"
                                                                : client.status === "Paid"
                                                                    ? "primary"
                                                                    : "error"
                                                    }
                                                >
                                                    <select
                                                        value={client.status}
                                                        onChange={(e) =>
                                                            updateStatus(client.id, e.target.value as Product["status"])
                                                        }
                                                        className="bg-transparent outline-none"
                                                    >
                                                        <option value="Booked">Booked</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Paid">Paid</option>
                                                        <option value="Canceled">Canceled</option>
                                                    </select>
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                {new Date(client.date).toLocaleDateString()}                </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </ComponentCard>
        </div>
    )
}

export default Bookings