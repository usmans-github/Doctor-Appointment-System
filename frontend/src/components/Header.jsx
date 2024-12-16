import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-indigo-500">
      <nav className="py-4 px-6 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
         
          <a href="/">
            <span className="text-2xl cursor-pointer text-white font-bold">
              HealthCare
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a href="/" className="text-sm font-medium">
            HOME
          </a>
          <a href="/doctors" className="text-sm font-medium">
            ALL DOCTORS
          </a>
          <a href="/about" className="text-sm font-medium">
            ABOUT
          </a>
          <a href="/contact" className="text-sm font-medium">
            CONTACT
          </a>
          <a href="/admin-login" className="text-sm font-medium">
          <button
              type="button"
              className="text-white hover:text-indigo-500 border border-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Admin
            </button>
          </a>
        </div>

        {/* Account and User Section */}
        <div className="flex items-center gap-2">
          <a href="/register" className="hidden md:inline">
            <button
              type="button"
              className="text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Create account
            </button>
          </a>
          <div className="hidden md:flex items-center text-white gap-2 cursor-pointer">
            <img
              src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-white" />
          </div>

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
          <a href="/" className="text-sm font-medium hover:text-indigo-300">
            HOME
          </a>
          <a href="/doctors" className="text-sm font-medium hover:text-indigo-300">
            ALL DOCTORS
          </a>
          <a href="/about" className="text-sm font-medium hover:text-indigo-300">
            ABOUT
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-indigo-300">
            CONTACT
          </a>
          <a href="/admin-login" className="text-sm font-medium hover:text-indigo-300">
            Admin Panel
          </a>
          <a href="/register">
            <button
              type="button"
              className="w-full text-indigo-500 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-300 
              font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
            >
              Create account
            </button>
          </a>
        </div>
      </div>

      {/* Overlay (for closing the sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}``
    </header>
  );
}