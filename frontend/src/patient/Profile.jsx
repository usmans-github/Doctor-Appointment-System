'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'



const Profile = () => {
  const [userappointments, setuserappointments] = useState([])
  const { user_token, setuser_token } = useContext(AppContext)
  const { userData, setUserData, userProfileData } = useContext(AppContext)
  const [activeTab, setActiveTab] = useState('personal')


  const upComingAppointments = async () => {
    
    try {
    const res = await axios.get("https://sehatx.com/api/user/user-appointments");
    console.log(userappointments)
    setuserappointments(res.data.userappointments) 
    } catch (error) {
      toast.error(error.message)
    }

  }

  const getStatusColor = (Status) => {
    switch (Status.toLowerCase()) {
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

  useEffect(() => {
    userProfileData()
    upComingAppointments()
  }, [userData, setUserData, activeTab])
  
  if(user_token){ return  ( 
    <>
    <div className="min-h-screen bg-indigo-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden rounded-[2.5rem]">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            
            <div>
              <h1 className="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Patient Profile
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and appointments information.
              </p>
            </div> 
          

            <Link to="/patient/book-appointment">
            <button 
             className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
             shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
             focus:ring-blue-500"
             >
              Book Appointment
            </button>
              </Link> 
           
              
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
                    <dd className="mt-1 text-sm text-gray-900">{userData.name}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.age}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.gender}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.email}</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                    <dd className="mt-1 text-sm text-gray-900">{userData.phone}</dd>
                  </div>
                </dl>
              )}
              {activeTab === 'appointments' && (
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
                  <ul className="divide-y divide-gray-200">
                    {userappointments.map((appointment) => (
                      <li key={appointment._id} className="py-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{appointment.docData.name}</p>
                            <p className="text-sm text-gray-500">{appointment.department}</p>
                            <p className="text-sm text-gray-500">{appointment.slotDate} at {appointment.slotTime}</p>
                          </div> 
                          <div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(appointment.Status)}`}>
                              {appointment.Status}
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
            
   
  )}
}

export default Profile
