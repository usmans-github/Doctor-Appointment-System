import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";






const TopDoctors = () => {
  const {data, setData } = useContext(AppContext)
  
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2 text-indigo-500">Top Doctors to Book</h2>
        <p className="text-indigo-500">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 justify-items-center">
        {data.map((doctor, index) => (
          <div key={index} className="bg-indigo-500 rounded-lg p-4 shadow-sm border w-60">
            <div className="relative w-full h-48 mb-4">
              <img
                src={doctor.picture}
                alt={doctor.name}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-400 text-sm">Available</span>
            </div>
            <h3 className="font-bold text-white">{doctor.name}</h3>
            <p className="text-white text-sm">{doctor.specialization}</p>
            
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default TopDoctors
