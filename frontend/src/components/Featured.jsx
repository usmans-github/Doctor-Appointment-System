import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Featured = () => {
  return (
    <section className='group h-[30vh] md:h-[60vh] bg-[#f0f0f0] mt-20 border rounded-[2.5rem] mx-8 md:mx-16'>
        <div className='grid grid-cols-2 gap-0'>
            {/* Image */}
            <div className=" p-10 h-[60vh] w-full md:w-[35vw] ">
            <img src="doctors.png" alt="doctors" className='group-hover:scale-110 transition-all h-[20vh] md:h-full
              md:w-full object-cover
             object-center bg-indigo-500  border rounded-xl md:rounded-[2.5rem]' />    
            </div>
            {/* text */}
            <div className='flex flex-col items-start text-sm gap-0  md:gap-4 h-[30vh] md:h-[60vh] justify-center'>
            <p className='md:text-lg font-semibold'>Lorem, ipsum.</p>
            <h1 className="md:text-5xl text-start font-extrabold group-hover:text-zinc-900
              text-indigo-500 mt-2 ">
            Qualified and Experts Doctors that meet your needs
            </h1>
            <p className='md:text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
               <br /> sequi officiis quo consectetur.</p>
            <div className='flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2 transition-all
             gap-1 md:mt-5  md:text-xl font-semibold  text-indigo-500'>
            <button>
              All doctors 
            </button    > 

              <ArrowRightIcon className='mt-1'/>
            </div>
         
          
            </div>

        </div>
    </section>
  )
}

export default Featured
