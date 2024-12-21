import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-indigo-500 min-h-screen flex items-center">
    <div className="container mx-auto px-6 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-wide mb-6">
          Book Appointments with <br /> Trusted Doctors
        </h1>
        <p className="text-lg lg:text-xl text-indigo-100 font-light mb-8">
          Get the best medical consultation from verified professionals at your convenience. 
          Start your healthcare journey today!
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <button className="bg-white text-indigo-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300">
              Book Now
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-indigo-500 transition duration-300">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
  