import { User, UserPlus, Heart, Baby, Brain, Activity } from 'lucide-react'

const specialties = [
  {
    icon: <User className="w-8 h-8" />,
    name: 'General physician',
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
    icon: <Activity className="w-8 h-8" />,
    name: 'Gastroenterologist',
  },
]

export default function Specialties() {
  return (
    <section className="py-16  px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-white">Specialized In</h2>
        <p className="text-white text-lg">
          Simply browse through our extensive list of trusted doctors, schedule your appointments hassle-free.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {specialties.map((specialty, index) => (
          <div key={index} className=" flex flex-col h-40 pt-5 w-40 items-center rounded-lg bg-indigo-100">
            <div className="w-20 h-20 bg-indigo-200  rounded-full flex items-center justify-center mb-3">
              <div className="text-indigo-500">
                {specialty.icon}
              </div>    
            </div>
            <span className="text-sm font-semibold text-center text-indigo-700 ">{specialty.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

