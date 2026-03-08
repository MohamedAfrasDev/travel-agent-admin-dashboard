"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";
import ActiveTravellers from "./cards/UniqueVisitors";
import UniqueVisitors from "./cards/UniqueVisitors";
import TotalPageViews from "./cards/TotalPageViews";


export const AnalyticsMetrics = () => {
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-2">
            {/* <!-- Metric Item Start --> */}
            <UniqueVisitors />

            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <TotalPageViews />



            {/* <!-- Metric Item End --> */}
        </div>
    );
};
