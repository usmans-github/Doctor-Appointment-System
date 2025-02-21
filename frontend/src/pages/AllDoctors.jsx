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
    <section className="mt-20 py-16 bg-[#f0f0f0] border rounded-t-[2.5rem] px-6 sm:px-10 md:px-16 rounded-b-[2.5rem]">
      <div className="mb-12 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-500 mb-4">
          Our Team
        </h2>
        <span className="text-xl md:text-2xl font-semibold text-zinc-900 mt-2 sm:mt-4">
          Meet our team of highly qualified doctors who are always there for you
        </span>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-indigo-500 group cursor-pointer w-full sm:w-[90%] md:w-[80%] lg:w-[24vw] border rounded-[2rem] shadow-lg"
          >
            {/* Doctor Picture */}
            <div className="relative h-[35vh] md:h-[40vh]">
              <img
                src={doctor.picture}
                alt={doctor.name}
                className="object-cover object-top w-full h-full rounded-t-[1.5rem]"
              />
              <div className="absolute top-2 left-2 group-hover:bg-black bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Available
              </div>
            </div>

            {/* Doctor Info */}
            <div className="below p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  {doctor.name}
                </h3>
                <p className="flex items-center gap-1 text-md text-white">
                  <Sparkle
                    size={16}
                    className="group-hover:text-black transition-all"
                  />
                  {doctor.specialization}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">
                <span className="text-lg text-white mb-3">
                  Experience: {doctor.experience}
                </span>
                <span className="text-lg text-white mb-3">
                  Fee: {doctor.fee}
                </span>
              </div>

              {/* Appointment Button */}
              <Link to="/register">
                <button className="w-full py-3 bg-[#f0f0f0] text-lg font-semibold rounded-[1.5rem] flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                  <span>Book Appointment</span>
                  <MoveRight />
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
