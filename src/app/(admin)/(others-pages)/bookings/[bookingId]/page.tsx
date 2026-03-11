import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PackageDetail from "./components/PackageDetail";
import TravellerDetail from "./components/TravellerDetail/TravellerDetail";
import BookingSummary from "./components/BookingSummary";
import PaymentDetail from "./components/PaymentDetail/PaymentDetail";
import BillingDetail from "./components/BillingDetail/BillingDetail";
import React from "react";
import { Traveller } from "./components/TravellerDetail/columns";
import PaymentSummary from "./components/PaymentSummary/PaymentSummary";

const BookingDetails = async ({ params }: { params: Promise<{ bookingId: string }> }) => {
    const { bookingId } = await params;
    const travellerData: Traveller[] = [
        {
            id: "1",
            name: "Mohamed Afras",
            country: "Sri Lanka",
            email: "afras4432@gmail.com",
            phone: "0760242008",
            type: "Adult",
            address: "AALIM Street"
        },
        {
            id: "2",
            name: "Zayeem Sharaf",
            country: "Sri Lanka",
            email: "afras4432@gmail.com",
            phone: "0760242008",
            type: "Adult",
            address: "AALIM Street"

        },
        {
            id: "3",
            name: "Mohamed Shafaath",
            country: "Sri Lanka",
            email: "afras4432@gmail.com",
            phone: "0760242008",
            type: "Adult",
            address: "AALIM Street"

        },
        {
            id: "4",
            name: "Asmath",
            country: "Sri Lanka",
            email: "afras4432@gmail.com",
            phone: "0760242008",
            type: "Adult",
            address: "AALIM Street"

        },


    ];
    return (
        <div>
            <PageBreadcrumb pageTitle={"Bookings"} secondTitle={bookingId} />

            <div className="flex flex-col lg:flex-row gap-5">                {/* Left side */}
                <div className="flex flex-col gap-5 flex-2">
                    <PackageDetail />
                    <TravellerDetail travellers={travellerData} />
                    <PaymentDetail />
                    <BillingDetail />

                </div>

                {/* Right side */}
                <div className="flex-1">
                    <div className="sticky top-24 flex-4 gap-5 flex flex-col">
                        <BookingSummary travellers={travellerData} />
                        <PaymentSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;