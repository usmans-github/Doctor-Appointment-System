import { Stethoscope } from 'lucide-react';
import React from 'react'

const About = () => {
  return (
    <section className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center flex-col px-6 bg-[#f0f0f0]">
      <div className="text-center mb-12 w-full md:w-[70vw]">
        <h1 className="text-4xl md:text-5xl text-indigo-500 font-extrabold text-center mb-8">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-zinc-900 font-semibold text-center mb-8">
          SehatX is a healthcare platform to provide updated, easy to
          understand, and practical knowledge of Medical Conditions. At SehatX,
          we not only work to provide better care for the public, but we also
          train doctors on moral and ethical grounds to revive the Medical
          Community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-[2rem] shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-500 mb-2">
                Dr Muhammad Asad Raza
            </h3>
            <p className="text-lg font-semibold text-zinc-900 mb-2">
              MBBS(KE) MRCP(UK) MACP(USA) CHPE(HSA)
            </p>
            <p className="text-lg text-zinc-900">
              Consultant Physician and Medical Specialist
            </p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-500 mb-2">
              Dr Maria Kiran
            </h3>
            <p className="text-lg font-semibold text-zinc-900 mb-2">MBBS, MD(Psychiatry)</p>
            <p className="text-lg text-zinc-900">Mental Health Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
