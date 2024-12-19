'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'


export default function Doctors() {
  const { admin_token, setadmin_token, stats, setstats, getStats } = useContext(AdminContext)
  const [searchTerm, setSearchTerm] = useState('')
  console.log(stats);



  // const filteredDoctors = stats.doctorsData.filter(doctor =>
  //   doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  // )
  useEffect(() => {
      getStats()
  }, [stats.doctorsData])
  

  if(admin_token){ return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Back to Dashboard Button */}
      <div className="mb-4">  
        <Link to="/admin/dashboard">
        <button
            className="  text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none
             focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
              dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
           Back to dashboard
          </button>
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-white mb-6">Doctors Management</h1>
      
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search doctors..."
          className="px-4 py-2 w-full sm:w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/admin/add-doctor">
          <button
            className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300
            font-medium rounded-lg text-sm px-5 py-2.5">
            Add new doctor
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Table for larger screens */}
        <table className="hidden sm:table min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stats.doctorsData.map((doctor) => (
              <tr key={doctor._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doctor.specialization}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doctor.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{doctor.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Card layout for smaller screens */}
        <div className="sm:hidden">
          {stats.doctorsData.map((doctor) => (
            <div key={doctor._id} className="border-b last:border-none py-4 px-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.specialization}</p>
                </div>
                <div className="flex gap-4">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">{doctor.email}</p>
              <p className="text-sm text-gray-500">{doctor.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
}
