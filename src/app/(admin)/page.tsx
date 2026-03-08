import type { Metadata } from "next";
import { OverviewMetrics } from "@/components/ecommerce/OverviewMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/EstimatedRevenue";
import MonthlySalesChart from "@/components/ecommerce/BookingTrends";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentBookings";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import EstimatedRevenue from "@/components/ecommerce/EstimatedRevenue";
import BookingTrends from "@/components/ecommerce/BookingTrends";

export const metadata: Metadata = {
  title:
    "Royal Fathima Travels",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Overview() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <OverviewMetrics />
      </div>
      <div className="col-span-12 space-y-6 xl:col-span-7">


        <BookingTrends />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <EstimatedRevenue />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div>
    </div>
  );
}
