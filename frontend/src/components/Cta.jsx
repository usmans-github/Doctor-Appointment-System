import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {

  return (
    <section className="bg-indigo-500 px-6 md:px-20 pt-12 ">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="text-white mb-8 md:mb-0 md:max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Book Appointment
          <br />
          With 100+ Trusted
          <br />
          Doctors
        </h2>
          <Link to="/register" className="mt-3 ">
                      <button
                        className="text-indigo-500 border hover:bg-indigo-50 bg-[#F9FAFB] 
                      font-medium rounded-lg text-sm px-5 py-2.5"
                      >
                        Book Appointment
                      </button>
                    </Link>
      </div>
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
        <img
          src=" /doctors.png"
          alt="Doctor"
          className="object-contain"
        />
      </div>
    </div>
  </section>
  )
}

export default Cta
