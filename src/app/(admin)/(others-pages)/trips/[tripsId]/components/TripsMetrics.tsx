"use client";
import React from "react";
import TotalBookings from "./TotalBookings";
import ConfirmedBookings from "./ConfirmedBookings";
import PendingBookings from "./PendingBookings";
import CanceledBookings from "./CanceledBookings";
import TotalPayments from "./TotalPayments";
import ReceivedPayments from "./ReceivedPayment";



export const TripsMetrics = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-5 flex-4">
            {/* <!-- Metric Item Start --> */}
            <TotalBookings />

            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <ConfirmedBookings />
            <PendingBookings />
            <CanceledBookings />
            {/* 
            <TotalPayments />
            <ReceivedPayments /> */}



            {/* <!-- Metric Item End --> */}
        </div>
    );
};
