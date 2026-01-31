"use client";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function ProductPerformanceChart() {
    const [productPerformanceData, setProductPerformanceData] = useState([]);
    useEffect(() => {
        fetch(`/data/data.json`)
            .then((response) => response.json())
            .then((data) => {
                setProductPerformanceData(data.productPerformance);
            })
            .catch((error) => {
                console.error("Error fetching product performance data:", error);
            });
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0'>
            <h2 className='text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left '>Product Performance</h2>
            <div className='w-full h-64 md:h-72'>
                <ResponsiveContainer>
                    <BarChart data={productPerformanceData}>
                        <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#9ca3af" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
                        <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} width={40} />
                        <Tooltip contentStyle={{
                            backgroundColor: "rgba(31,41,55,0.8)",
                            borderColor: "#4b5563",
                            fontSize: "12px",
                        }}
                            itemStyle={{ color: "#e5e7eb" }}
                        />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Bar dataKey="Retention" fill="#ff7043" radius={[4, 4, 0, 0]} barSize={20} />
                        <Bar dataKey="Revenue" fill="#29b6f6" radius={[4, 4, 0, 0]} barSize={20} />
                        <Bar dataKey="Profit" fill="#66bb6a" radius={[4, 4, 0, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}