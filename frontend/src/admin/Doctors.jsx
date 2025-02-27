import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { LoadingContext } from "../context/LoadingContext";
import Cookies from "js-cookie";

const Doctors = () => {
  const { loading, setloading } = useContext(LoadingContext);
  const { stats, getStats } = useContext(AdminContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setloading(true)
    getStats();
    setloading(false)
  }, []);

  const filteredDoctors =
    stats?.doctorsData?.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleDelete = async (id) => {
    console.log(`Delete doctor with ID: ${id}`);
    
    
    try {
      setloading(true);
      const admin_token = Cookies.get("admin_token");
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/delete-doctor?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${admin_token}`,
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
              toast.success(res.data.message);
            } else {
              toast.error(res.data.message);
            }
    } catch (error) {
      console.log(error.message)
    }finally{
      setloading(false)
    }
    
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />



      <div className="mb-4 max-w-[80vw] mx-auto"></div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
          Doctors Management
        </h1>
        <Link to="/admin/dashboard">
          <button className="text-white border border-[#f0f0f0] hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 flex justify-center items-center gap-2 font-medium rounded-lg text-sm px-5 py-2.5">
            <ArrowLeftIcon className="size-4" />
            Back to dashboard
          </button>
        </Link>

        {/* Search and Add Doctor Section */}
        <div className="mt-4 mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search doctors..."
            className="px-4 py-2 w-full sm:w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/admin/add-doctor">
            <button className="text-white border border-[#f0f0f0] hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Add New Doctor
            </button>
          </Link>
        </div>

        {/* Doctors List */}
        <div className="bg-white shadow-md rounded-[1rem] overflow-hidden">
          {/* Table for Larger Screens */}
          <table className="hidden sm:table w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specialization
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fee
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDoctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">
                      {doctor.name}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-gray-500">
                      {doctor.specialization}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-gray-500">{doctor.email}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-gray-500">{doctor.phone}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-gray-500">
                      Rs: {doctor.fee}
                    </div>
                  </td>
                  <td className="px-4 py-3 flex gap-2 justify-center">
                    <button
                      onClick={() => handleDelete(doctor._id)}
                      className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Card Layout for Smaller Screens */}
          <div className="sm:hidden">
            {filteredDoctors.map((doctor) => (
              <div key={doctor._id} className="border-b last:border-none p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {doctor.specialization}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">Rs: {doctor.fee}</p>
                </div>
                <p className="text-sm text-gray-500">{doctor.email}</p>
                <p className="text-sm text-gray-500">{doctor.phone}</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(doctor._id)}
                    className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(doctor._id)}
                    className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
