import React from "react";
import { Link } from "react-router-dom";
import Specialities from "../components/Specialities";
import TopDoctors from "../components/TopDoctors";
import Cta from "../components/Cta";
import Featured from "../components/Featured";
import Blogs from "./Blogs";
import MedicalEducation from "./MedicalEducation";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto md:min-h-[85vh]">
        <div className=" justify-center md:h-[40vh] grid grid-cols-1 md:grid-cols-2">
          <div
            className="md:mt-2 mt-16 mx-auto flex flex-col justify-center items-center gap-4 md:gap-2 md:items-start
           md:space-y-5  md:w-[42vw]"
          >
            <p className="md:text-xl text-lg font-semibold text-[#F9FAFB]">
              Welcome to Sehat X,
            </p>
            <h1 className="md:text-5xl text-4xl text-center md:text-start font-bold  text-[#F9FAFB] mt-2 ">
              Providing Quality Healthcare for You and Your Family
            </h1> 
            {/* Buttons  */}
            <div className  ="flex items-center gap-2">
              <Link to="/register" className="mt-3 ">
                <button
                  className="text-indigo-500 border hover:bg-[#f0f0f0] bg-white 
              font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Book Appointment
                </button>
              </Link>

              <Link to="/all-doctors" className="mt-3 ">
                <button
                  className="text-[#f0f0f0] hover:text-indigo-500 border hover:bg-[#f0f0f0] border-[#f0f0f0]
              font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Our team
                </button>
              </Link>
            </div>
          </div>

          <div
            className="mx-auto md:mt-2 mt-16 flex items-center justify-center  md:h-[90vh]
           md:w-[45vw] md:rounded-[2.5rem]"
          >
            <video
              src="/sehatx-video.mp4"
              alt="sehatx"
              className="z-10 object-cover bg-transparent  h-[23vh] w-full md:h-[55vh] md:w-[45vw]
               origin-center rounded-[2.5rem]"
              loop
              autoPlay
              muted
            />
          </div>
        </div>
      </section>
      {/* Specialities */}
      {/* <Specialities /> */}
      {/* Featured */}
      {/* <Featured /> */}
      <MedicalEducation />
      <TopDoctors />
      <Blogs />
      <Cta />
    </>
  );
};

export default HomePage;
