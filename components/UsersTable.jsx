"use client";
import { motion } from "framer-motion";
import { Edit, Search, Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function UsersTable() {
  const [clients, setClients] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  //   fetching data
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`/data/data.json`);
        const data = await res.json();
        setClients(data.clients);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
  }, []);

  //   searchFunction
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0 mb-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center sm:text-left">
          Clients
        </h2>
        <div className="relative w-full sm:w-auto ">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search Clients..."
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {["Name", "Email", "Phone Number", "Country", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
                  >
                    {/* {" "} */}
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredClients?.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex flex-col md:table-row mb-4 md:mb-0 border-b  md:border-b-0 border-gray-700 md:border-none p-2 md:p-0`}
              >
                {/* mobile view */}
                <td className="md:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src={client.image}
                        width={36}
                        height={36}
                        alt="clients image"
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium  text-gray-100 ">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          ID: {client.id}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1 -mt-5 -mr-4">
                      <button className="text-indigo-500 hover:text-indigo-300">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-500 hover:text-red-300">
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-gray-300">
                    <div>Phone: {client.phoneNumber}</div>
                    <div>Country: {client.country}</div>
                  </div>
                </td>

                {/* DeskTop view */}
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap ">
                  <div className="flex items-center">
                    <Image
                      src={client.image}
                      alt="client image"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium  text-gray-100 ">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm  text-gray-300">
                  {client.email}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm  text-gray-300">
                  {client.phoneNumber}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm  text-gray-300">
                  {client.country}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm  text-gray-300">
                  <div className="flex space-x-1 -ml-2">
                    <button
                      className={`text-indigo-500 hover:text-indigo-300 mr-1 cursor-pointer`}
                    >
                      <Edit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-300">
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
