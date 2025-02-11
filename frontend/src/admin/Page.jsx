"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { LoadingContext } from "../context/LoadingContext";

const Page = () => {
  const { admin_token, stats, setstats, getStats } = useContext(AdminContext);
  const { loading, setloading } = useContext(LoadingContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  useEffect(() => {
    setloading(true);
    getStats();
    setloading(false);
  }, []);

  
  
  
  const Stats = [
    {
      name: "Total Patients",
      value: stats.usersData ? stats.usersData.length : 0,
    },
    {
      name: "Total Doctors",
      value: stats.doctorsData ? stats.doctorsData.length : 0,
    },
    {
      name: "Appointments",
      value: stats.reverseData ? stats.reverseData.length : 0,
    },
  ];

  return (
    <div className="flex h-screen bg-indigo-500">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } fixed inset-y-0 left-0 z-50 w-64 bg-indigo-500 text-white  transition-transform duration-300
         lg:relative lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <XIcon className="h-6 w-6 hover:text-red-500 transition-colors" />
          </button>
        </div>
        <nav className="mt-6 space-y-2">
          <Link
            to="/admin/dashboard"
            className="block py-2 px-4 text-lg font-semibold hover:text-black transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/appointments"
            className="block py-2 px-4 text-lg font-semibold hover:text-black transition-colors"
          >
            Appointments
          </Link>
          <Link
            to="/create-blog"
            className="block py-2 px-4 text-lg font-semibold hover:text-black transition-colors"
          >
            Blogs
          </Link>
          <Link
            to="/admin/doctors"
            className="block py-2 px-4 text-lg font-semibold hover:text-black transition-colors"
          >
            Doctors
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="flex items-center justify-between px-4 py-3 bg-indigo-500">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Dashboard content */}
        <main className="p-6">
          <h1 className="text-3xl font-semibold text-white mb-6">
            Dashboard Overview
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
            {Stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-500 bg-opacity-75">
                    <MenuIcon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 text-lg font-semibold text-black">
                      {stat.name}
                    </p>
                    <p className="text-4xl font-semibold text-indigo-500">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Appointments */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black mb-4">
                Recent Appointments
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-black border-b">
                      <th className="pb-3 font-medium">Patient</th>
                      <th className="pb-3 font-medium">Doctor</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">Time</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.reverseData &&
                      stats.reverseData.map((appointment) => (
                        <tr
                          key={appointment._id}
                          className="border-b last:border-b-0"
                        >
                          <td className="py-3">{appointment.userData.name}</td>
                          <td className="py-3">{appointment.docData.name}</td>
                          <td className="py-3">{appointment.slotDate}</td>
                          <td className="py-3">{appointment.slotTime}</td>
                          <td className="py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                appointment.Status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : appointment.Status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {appointment.Status}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-black mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/admin/add-doctor">
                <button
                  className="flex items-center justify-center px-4 py-2 border border-transparent
               text-sm font-medium rounded-md text-white bg-indigo-500 hover:text-black transition-colors"
                >
                  Add New Doctor
                </button>
              </Link>

              <Link to="/admin/appointments">
                <button
                  className="flex items-center justify-center px-4 py-2 border border-transparent
               text-sm font-medium rounded-md text-white bg-indigo-500 hover:text-black transition-colors"
                >
                  View Appointments
                </button>
              </Link>
              <Link to="/admin/doctors">
                <button
                  className="flex items-center justify-center px-4 py-2 border border-transparent
               text-sm font-medium rounded-md text-white bg-indigo-500 hover:text-black transition-colors"
                >
                  All Doctors
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
