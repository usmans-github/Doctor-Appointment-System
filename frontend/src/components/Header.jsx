import { useContext, useState } from "react";
import {
  Diamond,
  Hexagon,
  House,
  LayoutList,
  LibraryBig,
  Menu,
  SquarePen,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { user_token } = useContext(AppContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-[#f0f0f0] z-50 border rounded-b-[2.5rem]">
      <nav className="py-4 px-6 md:px-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Link to="/">
            <div className="flex">
              <span>
                <img
                  src="https://framerusercontent.com/images/x3QCVpPBf6SGXasG60eshYXj2s.svg"
                  alt="Sehat X"
                />
              </span>
              <span className="text-3xl cursor-pointer text-indigo-500 font-bold">
                Sehat X
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Only for Large Screens) */}
        <div className="hidden lg:flex items-center gap-8 text-black">
          <Link to="/">
            <button className="focus:text-indigo-500 text-sm font-medium">
              Home
            </button>
          </Link>
          <Link to="/all-doctors">
            <button className="focus:text-indigo-500 text-sm font-medium">
              Our Team
            </button>
          </Link>
          <Link to="/about">
            <button className="focus:text-indigo-500 text-sm font-medium">
              Portfolio
            </button>
          </Link>
          <Link to="/blogs">
            <button className="focus:text-indigo-500 text-sm font-medium">
              Public Education
            </button>
          </Link>
          <Link to="/medical/education">
            <button className="focus:text-indigo-500 text-sm font-medium">
              Medical Education
            </button>
          </Link>
          <Link to="/admin-login" className="text-sm font-medium">
            Admin
          </Link>
        </div>

        {/* Account Section */}
        <div className="flex items-center gap-2">
          <Link to="/register" className="hidden lg:inline">
            <button className="text-indigo-500 border border-indigo-500 hover:bg-indigo-50 font-medium rounded-lg text-sm px-5 py-2.5">
              Book Appointment
            </button>
          </Link>

          {user_token ? (
            <div className="hidden lg:flex items-center text-white gap-2 cursor-pointer">
              <Link to="/patient/profile">
                <img
                  src="/avatar.webp"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="hidden lg:inline text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">
                Login
              </button>
            </Link>
          )}

          {/* Hamburger Menu (Visible on Mobile & Tablets) */}
          <button
            className="lg:hidden text-indigo-500"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile & Tablets */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-indigo-600 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-indigo-600">
          <span className="text-2xl font-bold">Sehat X</span>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col px-6 space-y-6 mt-6">
          <Link to="/">
            <button className="text-sm font-medium">Home</button>
          </Link>
          <Link to="/all-doctors">
            <button className="text-sm font-medium">Our Team</button>
          </Link>
          <Link to="/blogs">
            <button className="text-sm font-medium">Public Education</button>
          </Link>
          <Link to="/medical/education">
            <button className="text-sm font-medium">Medical Education</button>
          </Link>
          <Link to="/admin-login">
            <button className="text-sm font-medium">Admin</button>
          </Link>

          {user_token ? (
            <div className="flex items-center text-white gap-2 cursor-pointer">
              <Link to="/patient/profile">
                <img
                  src="/avatar.webp"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="w-full text-white border border-white hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Login
              </button>
            </Link>
          )}

          <Link to="/register">
            <button className="w-full text-indigo-500 bg-white hover:bg-indigo-50 font-medium rounded-lg text-sm px-5 py-2.5">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header> 
  );
}
