import { User, UserPlus, Heart, Baby, Brain,  Sparkle,  ArrowRightIcon } from 'lucide-react'

const specialties = [
  {
    icon: <User className="w-8 h-8" />,
    name: 'General physician',
  },
  {
    icon: <Baby className="w-8 h-8" />,
    name: 'Pediatrician',
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    name: 'Gynecologist',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    name: 'Dermatologist',
  },
  {
    icon: <Baby className="w-8 h-8" />,
    name: 'Pediatrician',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    name: 'Neurologist',
  },
  {
    icon: <User className="w-8 h-8" />,
    name: 'General physician',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    name: 'Dermatologist',
  },
]

export default function Specialties() {
  return (
    <section className="py-14 mt-16 rounded-[2.5rem] flex justify-center items-center
     flex-col px-6 bg-[#f0f0f0]">
      <div className="text-center mb-12 w-full md:w-[40vw]">
        <div className="flex justify-center items-center gap-1 text-indigo-500">
        <Sparkle size={40}  />
        <h2 className="md:text-5xl text-4xl text-center md:text-start font-extrabold mb-4 ">Specialities</h2>
        </div>
       
        <p className="text-zinc-900 text-lg font-semibold mt-4">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa sed error
          eum distinctio illo libero autem doloremque 
        </p>
      </div>
      


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
        {specialties.map((specialty, index) => (
          <div key={index} className="group cursor-pointer flex flex-col w-full h-[40vh] md:h-[45vh]
           md:w-[20vw] pt-3 md:pt-5 bg-indigo-500 border items-center rounded-3xl md:rounded-[2.5rem]">
            <div  className="size-16  bg-indigo-200 rounded-full flex items-center justify-center mb-3">
              <div className=" text-indigo-500 group-hover:text-zinc-900 ">
                {specialty.icon}  
              </div>    
            </div>
            <span className="text-xl md:text-2xl font-semibold text-center group-hover:text-zinc-900 text-white
             mb-2">{specialty.name}</span>

            <span className='text-lg font-normal text-[#f0f0f0] mx-3 text-center mt-3'>Lorem ipsum,
               dolor sit amet consectetur adipisicing elit.</span>
            <div className='flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2
             transition-all gap-1 mt-3 md:mt-5  text-xl font-semibold text-center text-white'>
            <span>
              Learn more 
            </span> 

              <ArrowRightIcon className='mt-1'/>
            </div>
         
          
          </div>
        ))}
      </div>
    </section>
  )
}

