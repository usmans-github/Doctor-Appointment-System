import { useContext, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  
  const { user_token, setuser_token } = useContext(AppContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  return (
    <header className="bg-indigo-500">
      <nav className="py-4 px-6 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
         
          <Link to="/">
            <span className="text-2xl cursor-pointer text-white font-bold">
              HealthCare
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="text-sm font-medium">
            HOME
          </Link>
          <Link to="/all-doctors" className="text-sm font-medium">
            ALL DOCTORS
          </Link>
          <Link to="/about" className="text-sm font-medium">
            ABOUT
          </Link>
          <Link to="/contact" className="text-sm font-medium">
            CONTACT
          </Link>
          <Link to="/admin-login" className="text-sm font-medium">
          <button
              type="button"
              className="text-white hover:text-indigo-500 border border-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Admin
            </button>
          </Link>
        </div>

        {/* Account and User Section */}
        <div className="flex items-center gap-2">
          <Link to="/register" className="hidden md:inline">
            <button
              type="button"
              className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Create account
            </button>
          </Link>
          {/* //User logged in  */}
          {user_token   ? 
          <div className="hidden md:flex items-center text-white gap-2 cursor-pointer">
            <Link  to="/patient/profile">
            
            <img
              src="/avatar.webp"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
              /></Link> 
            {/* <ChevronDown className="w-4 h-4 text-white" /> */}
          </div>
          : <Link to="/login"><button
            className="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none
             focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
              dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
           Login
          </button></Link>}

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-indigo-600 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-indigo-600">
          <span className="text-2xl font-bold">Healthcare</span>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-6 space-y-4 mt-4">
          <Link to="/" className="text-sm font-medium hover:text-indigo-300">
            HOME
          </Link>
          <Link to="/all-doctors" className="text-sm font-medium hover:text-indigo-300">
            ALL DOCTORS
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-indigo-300">
            ABOUT
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-indigo-300">
            CONTACT
          </Link>
          <Link to="/admin-login" className="text-sm font-medium hover:text-indigo-300">
            Admin Panel
          </Link>
          <Link to="/register">
            <button
              type="button"
              className="w-full text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300 
              font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            >
              Create account
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay (for closing the sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}
