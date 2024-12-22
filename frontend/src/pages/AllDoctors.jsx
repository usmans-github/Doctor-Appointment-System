import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";



const TopDoctors = () => {
  const {doctors, setdoctors, doctorsData} = useContext(AppContext)


  



  
  useEffect(() => {
    doctorsData()
  }, [ setdoctors])
  
  return (
    <section className="py-16 px-6 md:px-20 bg-indigo-500 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md">
          Top Doctors to Book
        </h2>
        <p className="text-indigo-100 font-medium text-lg">
          Browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="relative w-full h-60 mb-4">
              <img
                src={doctor.picture}
                alt={doctor.name}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Available
              </div>
            </div>

            <h3 className="text-xl font-semibold text-indigo-800 mb-2">
              {doctor.name}
            </h3>

            <p className="text-sm text-indigo-600 mb-3">
              {doctor.specialization}
            </p>
            <p className="text-sm text-indigo-600 mb-3">
              Fee : {doctor.fee}
            </p>
            <Link to="/register">
            <button className="w-full py-2 mt-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300">
              Book Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </section>  );
};

export default TopDoctors
