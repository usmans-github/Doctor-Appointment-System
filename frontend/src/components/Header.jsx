import { ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-20 bg-indigo-500">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500  rounded"></div>
          <span className="text-2xl text-white font-bold">Prescripto</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="/" className="text-sm font-medium">HOME</a>
          <a href="/doctors" className="text-sm font-medium">ALL DOCTORS</a>
          <a href="/about" className="text-sm font-medium">ABOUT</a>
          <a href="/contact" className="text-sm font-medium">CONTACT</a>
          <a href="/admin" className="text-sm font-medium">Admin Portal</a>
        </div>
        
        <div className="flex items-center gap-2">
        <button type="button" className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-blue-300 
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">  Create account</button>
       
          <div className="flex items-center text-white gap-2 cursor-pointer">
            <img        
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </nav>
    </header>
  )
}

