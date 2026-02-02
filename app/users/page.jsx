"use client";
import StatCard from '@/components/StatCard';
import UsersTable from '@/components/UsersTable';
import { motion } from 'framer-motion';
import { RotateCcw, UserCheck, UserPlus, UsersIcon } from 'lucide-react';
import React from 'react';

export default function Users() {
    return (
        <div className='flex-1 overflow-auto relative z-10 '>
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <StatCard name={"Total Clients"} icon={UsersIcon} value={"7038"} />
                    <StatCard name={"New Clients"} icon={UserPlus} value={"837"} />
                    <StatCard name={"Active Clients"} icon={UserCheck} value={"4839"} />
                    <StatCard name={"Returning Clients"} icon={RotateCcw} value={"2678"} />
                </motion.div>
                <UsersTable />
            </main>
        </div>
    );
}