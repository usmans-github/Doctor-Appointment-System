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
    <section className="mt-20 py-16 bg-[#f0f0f0] border rounded-t-[2.5rem] pl-14 md:px-16   rounded-b-[2.5rem]">
      <div className=" mb-12 flex flex-col justify-center items-center">
      <h2 className="md:text-5xl text-4xl text-indigo-500 text-center md:text-start font-extrabold mb-4 ">Top Doctors to Book</h2>
          <span className='text-2xl font-semibold text-zinc-900 mx-3 text-center mt-4 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8 w-full ">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-indigo-500 group cursor-pointer  w-[80vw] md:w-[24vw] border rounded-[2rem] "
          >
            <div className="relative h-[35vh] md:h-[40vh] ">
              <img
                src={doctor.picture}
                alt={doctor.name}
                className="object-cover object-center w-full h-full rounded-t-[1.5rem]"
              />
              <div className="absolute top-2 left-2 group-hover:bg-black bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Available
              </div>
            </div>
            <div className="below p-6">
            <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white mb-2">
              {doctor.name}
            </h3>
            <p className="flex justify-center gap-1 items-center text-md  text-white mb-2">
              <Sparkle size={16} className="group-hover:text-black transition-all" />{doctor.specialization}
            </p>
            </div>
           <div className="flex justify-between">
           <span className="text-lg text-white mb-3">
              {/* Experiance: {doctor.experience} */}
              Lorem ipsum dolor sit.
            </span>
            <span className="text-lg text-white mb-3">
              Fee : {doctor.fee}
            </span>
           </div>
            <Link to="/register">
            <button className=" font-semibold gap-2 group-hover:gap-4 transition-all text-lg flex justify-center items-center text-center w-full py-3 bg-[#f0f0f0] rounded-[1.5rem] self-center ">
              <span>Book Appointment</span>
             <MoveRight />
            </button>
            </Link>
            </div>
           
          </div>
        ))}
      </div>
    </section>  );
};

export default TopDoctors
