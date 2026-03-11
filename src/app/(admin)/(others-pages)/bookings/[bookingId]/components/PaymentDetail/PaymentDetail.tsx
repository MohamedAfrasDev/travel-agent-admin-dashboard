"use client";
import ComponentCard from '@/components/common/ComponentCard'
import React from 'react'
import { DataTable } from './data-table'
import { columns, Payment } from './columns'
import { Plus } from 'lucide-react';
import { AddPaymentDialog } from './AddPaymentDialog';

const PaymentDetail = () => {

    const [tableData, setTableData] = React.useState<Payment[]>([
        {
            id: 1,
            paymentNo: '12',
            paymentStatus: "Pending",
            gateway: "Bank Transfer",
            depositAmount: 300000,
            paidAmount: 300000,
            transactionId: 'string',
            remainingAmount: 75000,
            note: 'Ok',
            date: Date.now()

        },

        {
            id: 1,
            paymentNo: '12',
            paymentStatus: "Completed",
            gateway: "Bank Transfer",
            depositAmount: 375000,
            paidAmount: 375000,
            transactionId: 'string',
            remainingAmount: 0,
            note: 'Ok',
            date: Date.now()

        },

    ]);
    return (
        <ComponentCard title='Payments' icons={
            <AddPaymentDialog paymentId={tableData.length + 1} />
        }>
            <DataTable columns={columns} data={tableData} />

        </ComponentCard>
    )
}

export default PaymentDetail