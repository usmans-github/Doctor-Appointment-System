'use client'

import React, { useState } from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

// Mock data for doctors
const mockDoctors = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', email: 'john.doe@example.com', phone: '(123) 456-7890' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Neurology', email: 'jane.smith@example.com', phone: '(234) 567-8901' },
  { id: 3, name: 'Dr. Mike Johnson', specialization: 'Orthopedics', email: 'mike.johnson@example.com', phone: '(345) 678-9012' },
  { id: 4, name: 'Dr. Sarah Williams', specialization: 'Pediatrics', email: 'sarah.williams@example.com', phone: '(456) 789-0123' },
  { id: 5, name: 'Dr. David Brown', specialization: 'Dermatology', email: 'david.brown@example.com', phone: '(567) 890-1234' },
]

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDoctors = mockDoctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-white mb-6">Doctors Management</h1>
      
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search doctors..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <table className="min-w-full divide-y divide-gray-200">
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
            {filteredDoctors.map((doctor) => (
              <tr key={doctor.id}>
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
      </div>
    </div>
  )
}

