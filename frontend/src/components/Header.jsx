import { useContext, useState } from "react";
import {
  Diamond,
  GalleryHorizontal,
  House,
  LibraryBig,
  Menu,
  Stethoscope,
  UsersRound,
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
                  className="h-16 w-16 bg-blue"
                  src="/sehatx-logo.png"
                  alt="Sehat X"
                />
              </span>
              {/* <span className="text-3xl cursor-pointer text-indigo-500 font-bold">
                Sehat X
              </span> */}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Only for Large Screens) */}
        <div className="hidden lg:flex items-center gap-8 text-black">
          <Link to="/">
            <button className="flex justify-center items-center gap-1 focus:text-indigo-500 text-sm font-medium">
              <House size={15} />
              Home
            </button>
          </Link>
          <Link to="/all-doctors">
            <button className="flex justify-center items-center gap-1 focus:text-indigo-500 text-sm font-medium">
              <UsersRound size={15} />
              Our Team
            </button>
          </Link>
          <Link to="/about">
            <button className="flex justify-center items-center gap-1 focus:text-indigo-500 text-sm font-medium">
              <GalleryHorizontal size={15} />
              Portfolio
            </button>
          </Link>
          <Link to="/blogs">
            <button className="flex justify-center items-center gap-1 focus:text-indigo-500 text-sm font-medium">
              <LibraryBig size={15} />
              Public Education
            </button>
          </Link>
          <Link to="/medical/education">
            <button className="flex justify-center items-center gap-1 focus:text-indigo-500 text-sm font-medium">
              <Stethoscope size={15} />
              Medical Education
            </button>
          </Link>
          <Link
            to="/admin-login"
            className="flex justify-center items-center gap-1 focus:text-indigo-500 text-sm font-medium"
          >
            <Diamond size={15} />
            Admin
          </Link>
        </div>

        {/* Account Section */}
        <div className="flex items-center gap-2">
          <Link to="/register" className="hidden lg:inline">
            <button
              className="text-indigo-500 border border-indigo-500 hover:bg-indigo-50 font-medium
             rounded-lg text-sm px-5 py-2.5"
            >
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
              <button
                className="hidden lg:inline text-white bg-indigo-500 hover:bg-indigo-600 font-medium
               rounded-lg text-sm px-5 py-2.5"
              >
                Login
              </button>
            </Link>
          )}

          {/* Hamburger Menu (Visible on Mobile & Tablets) */}
          <button
            className="lg:hidden text-black"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile & Tablets */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#f0f0f0] text-black transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-6 py-4 ">
          <span className="text-2xl font-bold">Sehat X</span>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="flex flex-col px-6 space-y-6 mt-6">
          <Link to="/">
            <button className="flex justify-center items-center gap-1 text-sm font-medium">
<<<<<<< HEAD
             
=======
>>>>>>> ebe5a46604e13ea0c3747c2a98350f1a7bd760b7
              <House size={15} />
              Home
            </button>
          </Link>
          <Link to="/all-doctors">
            <button className="flex justify-center items-center gap-1 text-sm font-medium">
<<<<<<< HEAD
             
=======
>>>>>>> ebe5a46604e13ea0c3747c2a98350f1a7bd760b7
              <UsersRound size={15} /> Our Team
            </button>
          </Link>
          <Link to="/blogs">
            <button className="flex justify-center items-center gap-1 text-sm font-medium">
<<<<<<< HEAD
             
=======
>>>>>>> ebe5a46604e13ea0c3747c2a98350f1a7bd760b7
              <LibraryBig size={15} /> Public Education
            </button>
          </Link>
          <Link to="/medical/education">
            <button className="flex justify-center items-center gap-1 text-sm font-medium">
<<<<<<< HEAD
             
=======
>>>>>>> ebe5a46604e13ea0c3747c2a98350f1a7bd760b7
              <Stethoscope size={15} /> Medical Education
            </button>
          </Link>
          <Link to="/admin-login">
            <button className="flex justify-center items-center gap-1 text-sm font-medium">
<<<<<<< HEAD
             
=======
>>>>>>> ebe5a46604e13ea0c3747c2a98350f1a7bd760b7
              <Diamond size={15} /> Admin
            </button>
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
              <button
                className="w-full text-indigo-500 border border-indigo-500  font-medium
               rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </Link>
          )}

          <Link to="/register">
            <button
              className="w-full text-white border bg-indigo-500 font-medium
             rounded-lg text-sm px-5 py-2.5"
            >
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