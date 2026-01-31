"use client";
import CategoryChart from "@/components/CategoryChart";
import OrderChart from "@/components/OrderChart";
import ProductPerformanceChart from "@/components/ProductPerformanceChart";
import SalesOverviewChart from "@/components/SalesOverviewChart";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, SquareActivity, User } from "lucide-react";
import React from "react";

export default function OverviewPage() {
  return (
    <div className="flex-1 overflow-hidden relative z-10  ">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon={DollarSign} value="182,450 EGP" />
          <StatCard name="Total Clients" icon={User} value="1,437" />
          <StatCard name="Total Products" icon={ShoppingBag} value="674" />
          <StatCard name="Stock" icon={SquareActivity} value="12,845" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryChart />
          <OrderChart />
          <ProductPerformanceChart />
        </div>
      </main>
    </div>
  );
}
