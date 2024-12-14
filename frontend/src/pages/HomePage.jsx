import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const HomePage = () => {
  const getUserData = async () => {
    
    try {

      
      const res = await axios.post("http://localhost:3000/api/user/getUserData", {}, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}` 
        }
        
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserData();
  }, [])


  return (
    <section className="bg-indigo-500 px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-white mb-8 md:mb-0 md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Appointment
            <br />
            With Trusted
            <br />
            Doctors
          </h1>
          <p className="mb-6 text-indigo-100">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>
          <button type="button" className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book appointment →</button>
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
       <img src="../assets/we" alt="" />
        </div>
      </div>
    </section>
  )
}

export default HomePage
