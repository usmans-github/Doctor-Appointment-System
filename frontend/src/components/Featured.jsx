import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Featured = () => {
  return (
    <section className='group  bg-[#f0f0f0] mt-16 border rounded-3xl md:rounded-[2.5rem] mx-2 md:mx-16'>
        <div className='grid grid-cols-2 gap-0'>
            {/* Image */}
            <div className="p-6 ">
            <img src="doctors.png" alt="doctors" className='md:h-[50vh] sm:h-[30vh] group-hover:scale-110 transition-all 
               object -cover object-center bg-indigo-500  border rounded-3xl md:rounded-[2.5rem]' />    
            </div>
            {/* text */}
            <div className='flex flex-col items-start text-sm gap-0  md:gap-4 md:h-[60vh] justify-center'>
            <p className='md:text-lg font-semibold'>Lorem, ipsum.</p>
            <h1 className="md:text-5xl px-2 text-start font-extrabold group-hover:text-zinc-900
              text-indigo-500 mt-2 ">
            Qualified and Experts Doctors that meet your needs
            </h1>
            <p className='hidden md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
               <br /> sequi officiis quo consectetur.</p>
            <div className='flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2 transition-all
             gap-1 md:mt-5  md:text-xl font-semibold  text-indigo-500'>
            <button>
              All doctors 
            </button> 

              <ArrowRightIcon className='mt-1'/>
            </div>
         
          
            </div>

        </div>
    </section>
  )
}

export default Featured
