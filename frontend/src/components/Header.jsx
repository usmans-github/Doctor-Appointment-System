import { useContext, useState } from "react";
import {  Diamond, House, Menu, UserRound, X } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Header() {  
  const { user_token, setuser_token } = useContext(AppContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  return (
    <header className="bg-[#f0f0f0] border rounded-b-[2.5rem]">
   
      <nav className="py-4 px-6 md:px-20  flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
         
          <Link to="/">
          <div className="flex">
          <span><img src="https://framerusercontent.com/images/x3QCVpPBf6SGXasG60eshYXj2s.svg" alt="" /></span>
            <span className="text-3xl cursor-pointer text-indigo-500 font-bold">
              Healthcare
            </span>
          </div>
         
          </Link>
        </div>
      
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-black">
          <Link to="/">
          <button  className="flex justify-center items-center gap-1 focus:text-indigo-500 px-3 py-1 rounded-xl  text-sm font-medium">
          <House size={16} />
            Home
          </button>
          </Link>
          <Link to="/all-doctors">
          <button  className="flex justify-center items-center gap-1 focus:text-indigo-500  text-sm font-medium">
          <UserRound size={16}  />
            Doctors 
          </button>
          </Link>
          <Link to="/admin-login" className="text-sm font-medium">
          <button
             className="flex justify-center items-center gap-1 focus:text-indigo-500  text-sm font-medium"
            >
              <Diamond  size={16} />
              Admin
            </button>
          </Link>
        </div>

        {/* Account and User Section */}
        <div className="flex items-center gap-2">
          <Link to="/register" className="hidden md:inline">
            <button
              className="text-indigo-500 border border-indigo-500 hover:bg-indigo-50 
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
             Book Appointment
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
          </div>
          : <Link to="/login"><button
            className="w-full text-white hidden md:inline lg:inline   bg-indigo-500 hover:bg-indigo-600 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600"
          >
           Login
          </button></Link>}

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-indigo-500 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>





      {/* Sidebar for mobile devices */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-indigo-600 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-indigo-600">
          <span className="text-2xl font-bold">Healthcare</span>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-6 space-y-4 mt-4">
        <Link to="/">
          <button  className="flex justify-center items-center gap-1 focus:text-indigo-500  text-sm font-medium">
          <House size={16} />
            Home
          </button>
          </Link>
          <Link to="/all-doctors">
          <button  className="flex justify-center items-center gap-1 focus:text-indigo-500  text-sm font-medium">
          <UserRound size={16}  />
            Doctors 
          </button>
          </Link>
          <Link to="/admin-login" className="text-sm font-medium">
          <button
             className="flex justify-center items-center gap-1 focus:text-indigo-500  text-sm font-medium"
            >
              <Diamond  size={16} />
              Admin
            </button>
          </Link>
          {user_token  ? 
          <div className=" sm:flex md:flex items-center text-white gap-2 cursor-pointer">
            <Link  to="/patient/profile">
            <img
              src="/avatar.webp"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
              /></Link> 
          </div>
          : <Link to="/login"><button
            className=" text-white  bg-indigo-500 hover:bg-indigo-600 
           font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600"
          >
           Login
          </button></Link>}

          <Link to="/register">
            <button
              type="button"
              className="w-full text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300 
              font-medium rounded-lg text-sm px-5 py-2.5 mt-1"
            >
              Book Appointment
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
