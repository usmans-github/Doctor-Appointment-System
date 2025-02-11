import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <section className='group  bg-[#f0f0f0] mt-16 border rounded-3xl md:rounded-[2.5rem] mx-2 md:mx-16'>
        <div className='grid grid-cols-2'>
            {/* Image */}
            <div className="p-6 flex items-center">
            <img src="doctors.png" alt="doctors" className='lg:h-[45vh] md:h-[50vh] sm:h-[30vh] md:mx-8 group-hover:scale-110 transition-all 
               object-cover object-center bg-indigo-500  border rounded-3xl md:rounded-[2.5rem]' />    
            </div>
            {/* text */}
            <div className='flex flex-col items-start text-sm gap-0 md:gap-4 lg:h-[60vh] md:h-[50vh] justify-center'>
            <p className='md:text-lg font-semibold'>Lorem, ipsum.</p>
            <h1 className="lg:text-5xl md:text-3xl px-2 text-start font-extrabold group-hover:text-zinc-900
              text-indigo-500 mt-2 ">
            Qualified and Experts Doctors that meet your needs
            </h1>
            <div className='flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2 transition-all
             gap-1 md:mt-5  md:text-xl font-semibold  text-indigo-500'>
              <Link to='/all-doctors'>
            <button>
              All doctors 
            </button> 
              </Link>

              <ArrowRightIcon className='mt-1'/>
            </div>
         
          
            </div>

        </div>
    </section>
  )
}

export default Featured
