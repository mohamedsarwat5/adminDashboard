"use client";
import CategoryChart from "@/components/CategoryChart";
import SalesOverviewChart from "@/components/SalesOverviewChart";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import React from "react";

export default function Sales() {
  return (
    <div className="flex-1 overflow-hidden relative z-10">
      <main className="max-w-7xl mx-auto  py-6  px-4  lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          <StatCard
            name={"Total Revenue"}
            icon={DollarSign}
            value={"$64,323"}
          />
          <StatCard
            name={"Avg. Order Value"}
            icon={ShoppingCart}
            value={"$97,46"}
          />
          <StatCard name={"Total Sales"} icon={CreditCard} value={"147,848"} />
          <StatCard name={"Total Growth"} icon={TrendingUp} value={"83.2%"} />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 mb-8 ">
          <SalesOverviewChart />
          <CategoryChart />
        </div>
      </main>
    </div>
  );
}
