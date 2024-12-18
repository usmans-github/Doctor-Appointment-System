import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-indigo-500 mx-10 lg:px-20 md:px-20 py-12 min-h-[70vh]">
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
       <Link to="/"><button type="button" className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book appointment →</button></Link>
      </div>
      <div className="relative w-full md:w-1/2  md:h-[400px]">
      <img src="/doctors.png" alt="" className=' md:h-[63.7vh]'/>
      </div>
    </div>
  </section>
  )
}

export default Hero
