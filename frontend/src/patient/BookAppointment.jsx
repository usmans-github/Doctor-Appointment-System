"use client"
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
 import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';



// // Mock data for available time slots
const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
]


const BookAppointment = () => {
        const { user_token, setuser_token } = useContext(AppContext)
        const { doctors, setDoctors } = useContext(AppContext)
        console.log(doctors);
        
        const [docinfo, setdocinfo] = useState(null)
        const [docslots, setdocslots] = useState([])
        const [slotId, setslotId] = useState(0)
        const [timeslot, settimeslot] = useState("")



        const fetchDocInfo = async () => {
          const docinfo = doctors.find(doc => doc._id === docId) 
          setdocinfo(docinfo) 
        }
            
            const {
                register,
                handleSubmit,
                reset,
                watch,
                formState: { errors },
              } = useForm();

          const onSubmit  = async (data) => {
            console.log(data);
            
          }     
          useEffect(() => {
            fetchDocInfo()
          }, [])

          useEffect(() => {
            fetchDocInfo()
          }, [doctors])
    
  if(user_token) return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      
          <section className="container mx-auto px-4 py-8 ">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
             
              <div className="px-6 py-4">
                <div className="px-6 py-4">
                  <h1 className="text-xl font-bold mb-2 leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Book an Appointment
                  </h1>
                  <p className="text-gray-600 mb-6">Fill out the form below to schedule your appointment</p>
          
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 md:space-y-6"
                    action=""
                  >
                   {/* Select Doctor */}
                    <div>
                    <label htmlFor="selectdoctor" className="block text-sm font-medium text-gray-700 mb-1">Select Doctor</label>
             
                    <select
                     name="selectdoctor"
                     id="selectdoctor"
                     {...register("selectdoctor")}
                     className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    >
                      <option value="">Select a Doctor</option>
                      {
                        doctors.map((doctor)=> (
                            <option key={doctor._id} value={doctor.id}>
                              {doctor.name} - {doctor.specialization}
                            </option>
                        ))
                      }

                    </select>
                    </div>
                    {/* Date */}
                    <div>
                      <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Appointment Date
                      </label>
                      <input
                        defaultValue=""
                        {...register("date")}
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required={true}
                      />
                    </div>
                    {/* Time */}
                    <div>
                      <label
                        htmlFor="time"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Appointment Time
                      </label>
                      <select
                     name="selecttime"
                     id="selecttime"
                     {...register("time")}
                     className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    >
                      <option value="">Select a time slot</option>
                      {
                        timeSlots.map((slot)=> (
                            <option key={slot} value={slot}>
                             {slot}
                            </option>
                        ))
                      }

                    </select>
                      
                    </div>
                    {/* Reason */}
                    <div>
                    <label
                        htmlFor="reason"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      />
                      <textarea 
                      name="reason" 
                      id="reason"
                      rows={3}
                      {...register("reason")}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Brief description of your reason for the appointment'
                      >

                      </textarea>
                    </div>
    
                    <button
                      type="submit"
                      className="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Book Appointment
                    </button>
                    <p className="text-sm font-normal text-black dark:text-gray-400">
                     Back to Profile?{" "} 
                      <Link
                       to="/patient/profile"
                        className="font-medium text-indigo-500 ml-2 hover:underline dark:text-primary-500"
                      >
                        Click here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
       
    
    </>
  )
}

export default BookAppointment
