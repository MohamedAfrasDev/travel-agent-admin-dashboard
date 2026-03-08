"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";
import CurrentClients from "./cards/CurrentBookings";
import TotalBookings from "./cards/TotalBookings";
import ActiveTravellers from "./cards/ActiveTravellers";
import PendingRequest from "./cards/PendingRequest";

export const OverviewMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <TotalBookings />

      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <CurrentClients />
      <ActiveTravellers />
      <PendingRequest />

      {/* <!-- Metric Item End --> */}
    </div>
  );
};
