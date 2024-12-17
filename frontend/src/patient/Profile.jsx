'use client'

import React, { useState } from 'react'

// Mock data for the patient profile
const patientData = {
  name: "John Doe",
  age: 35,
  gender: "Male",
  bloodType: "A+",
  email: "john.doe@example.com",
  phone: "(123) 456-7890",
  address: "123 Main St, Anytown, USA",
  emergencyContact: "Jane Doe (Wife) - (987) 654-3210",
  medicalHistory: [
    { condition: "Hypertension", diagnosedDate: "2018-03-15" },
    { condition: "Type 2 Diabetes", diagnosedDate: "2019-07-22" },
  ],
  medications: [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
  ],
  upcomingAppointments: [
    { id: 1, date: "2023-06-15", time: "10:00 AM", doctor: "Dr. Smith", department: "Cardiology", status: "Confirmed" },
    { id: 2, date: "2023-07-02", time: "2:30 PM", doctor: "Dr. Johnson", department: "Endocrinology", status: "Pending" },
  ],
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const handleBookAppointment = () => {
    // In a real application, this would navigate to the appointment booking page
    alert("Navigating to appointment booking page...")
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  return (
    <>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Patient Profile
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and medical information.
              </p>
            </div>
            <button
              onClick={handleBookAppointment}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Appointment
            </button>
          </div>
          <div className="border-t border-gray-200">
            <div className="bg-gray-50 px-4 py-5 sm:px-6">
              <div className="flex space-x-4">
                <button
                  className={`px-3 py-2 font-medium text-sm rounded-md ${
                    activeTab === 'personal'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('personal')}
                >
                  Personal Info
                </button>
                <button
                  className={`px-3 py-2 font-medium text-sm rounded-md ${
                    activeTab === 'medical'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('medical')}
                >
                  Medical History
                </button>
                <button
                  className={`px-3 py-2 font-medium text-sm rounded-md ${
                    activeTab === 'appointments'
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('appointments')}
                >
                  Appointments
                </button>
              </div>
            </div>
            <div className="px-4 py-5 sm:px-6">
              {activeTab === 'personal' && (
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.name}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.age}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.gender}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Blood type</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.bloodType}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.email}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.phone}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.address}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Emergency contact</dt>
                    <dd className="mt-1 text-sm text-gray-900">{patientData.emergencyContact}</dd>
                  </div>
                </dl>
              )}
              {activeTab === 'medical' && (
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Medical Conditions</h3>
                  <ul className="divide-y divide-gray-200">
                    {patientData.medicalHistory.map((condition, index) => (
                      <li key={index} className="py-4">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-900">{condition.condition}</p>
                          <p className="text-sm text-gray-500">{condition.diagnosedDate}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mt-8 mb-4">Current Medications</h3>
                  <ul className="divide-y divide-gray-200">
                    {patientData.medications.map((medication, index) => (
                      <li key={index} className="py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{medication.name}</p>
                          <p className="text-sm text-gray-500">
                            {medication.dosage} - {medication.frequency}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'appointments' && (
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
                  <ul className="divide-y divide-gray-200">
                    {patientData.upcomingAppointments.map((appointment) => (
                      <li key={appointment.id} className="py-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{appointment.doctor}</p>
                            <p className="text-sm text-gray-500">{appointment.department}</p>
                            <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                          </div>
                          <div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
