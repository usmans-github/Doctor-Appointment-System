import React from "react";
import { Link } from "react-router-dom";
import Specialities from "../components/Specialities"
import TopDoctors from "../components/TopDoctors";
import Cta from "../components/Cta"
import Featured from "../components/Featured";

const HomePage = () => {
 


  return (
    <>
    {/* Hero */}
    <section className="container mx-auto min-h-screen ">
      <div className=" justify-center md:h-[42vh] grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto flex flex-col justify-center items-center gap-4 md:gap-2 md:items-start md:space-y-5 mt-[4vh] md:w-[42vw]">
          <p className="md:text-xl text-lg font-semibold text-[#F9FAFB]">
           Lorem ipsum dolor,
          </p>
          <h1 className="md:text-5xl text-4xl text-center md:text-start font-extrabold  text-[#F9FAFB] mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h1>
          {/* Buttons  */}
          <div className="flex items-center gap-2">
            <Link to="/register" className="mt-3 ">
              <button
                className="text-indigo-500 border hover:bg-indigo-50 bg-[#F9FAFB] 
              font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Book Appointment
              </button>
            </Link>

            <Link to="/specialities" className="mt-3 ">
              <button
                 className="text-indigo-50 hover:text-indigo-500 border hover:bg-indigo-50 border-indigo-50
              font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Our Specialities  
              </button>
            </Link>
          </div>
        </div>
        
        <div className="mx-auto mt-[4vh] flex items-center mb-[4vh] justify-center md:h-[90vh]  md:w-[40vw] md:rounded-[2.5rem] ">
          <img
            src="hero.avif"
            alt="healthcare"
            className="z-10 object-cover h-[85vh] w-[90vw] md:w-[40vw] origin-center rounded-[2.5rem]"
          />
        </div>
      </div>
    </section>
    {/* Specialities */}
    <Specialities />
    {/* Featured */}
    <Featured />
    <TopDoctors />
    <Cta />
    </>
  );
};

export default HomePage;
