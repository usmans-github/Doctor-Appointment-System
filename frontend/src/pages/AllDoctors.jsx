import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { MoveRight, Sparkle } from "lucide-react";



const TopDoctors = () => {
  const {doctors, setdoctors, doctorsData} = useContext(AppContext)



  useEffect(() => {
    doctorsData()
  }, [doctors, setdoctors])
  
  return (
    <section className="mt-16 py-16 bg-[#f0f0f0] border rounded-t-[2.5rem] rounded-b-[2.5rem] px-4 sm:px-8 md:px-16">
      <div className="mb-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-indigo-500 text-center font-extrabold mb-4">
          Our Team
        </h2>
        <span className="text-xl sm:text-2xl font-semibold text-zinc-900 text-center mt-4 max-w-3xl">
          Meet our team of highly qualified doctors who are always there for you
        </span>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className=" border-indigo-500 group cursor-pointer w-full max-w-sm mx-auto border-[1px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Doctor Picture */}
            <div className="relative h-64 sm:h-72 md:h-80">
              <img
                src={doctor.picture || "/placeholder.svg"}
                alt={doctor.name}
                className="w-full h-full object-cover rounded-t-[1.5rem]"
              />
              <div className="absolute top-2 left-2 group-hover:bg-black bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Available
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-6">
              <div className="flex flex-col justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-indigo-500 group-hover:text-black mb-2">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-black mb-2">
                  {doctor.specialization}
                </p>
              </div>
              <div className="flex flex-col justify-between mb-4">
                <span className="text-sm font-medium text-black mb-1">
                  Experience: {doctor.experience}
                </span>
                <span className="text-sm font-medium text-black">
                  Fee: Rs. {doctor.fee}
                </span>
              </div>

              {/* Appointment Button */}
              <Link to="/register" className="block">
                <button className="font-semibold gap-2 group-hover:gap-4 transition-all text-base sm:text-lg flex justify-center items-center text-center w-full py-3 text-white group-hover:text-black bg-indigo-500 rounded-[1.5rem] self-center">
                  <span>Book Appointment</span>
                  <MoveRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDoctors
