import React, { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

const AllAppointments = () => {
  const { stats, setstats, updateAppointments, } = useContext(AdminContext);
  const Appointments = stats.reverseData;

  useEffect(() => {
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* All Appointments */}
      <div className="max-w-[80vw] mt-6 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
          ALL APPOINTMENTS
        </h1>

        {/* Search and Add Doctor Section */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/admin/dashboard">
            <button
              className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Back to dashboard
            </button>
          </Link>
        </div>

        {/* Appointment  List */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Table for Larger Screens */}
          <table className="hidden sm:table w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  PATIENT
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  PATIENT EMAIL
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  DOCTOR
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  DATE
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  TIME
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  PAYMENT
                </th>
                <th className=" px-4 py-3  text-xs font-medium text-black uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {Appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.userData.name}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">
                      {appointment.userData.email}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-sm text-black">
                      {appointment.docData.name}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-black">
                      {appointment.slotDate}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-black">
                      {appointment.slotTime}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div
                      className={`px-2 py-1 rounded-full w-18  text-center text-xs font-medium ${
                        appointment.Status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : appointment.Status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : appointment.Status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {appointment.Status}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-black">
                      Rs: {appointment.amount}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => updateAppointments(appointment._id)}
                      type="button"
                      className="text-white mr-4 hover:text-indigo-500 bg-indigo-500  border hover:border-indigo-500
                    hover:bg-indigo-50 font-medium rounded-lg text-sm px-3 py-1.5"
                    >
                      confirm
                    </button>
                    <button
                      onClick={() => updateAppointments(appointment._id)}
                      type="button"
                      className="text-white hover:text-indigo-500 bg-red-500  border hover:border-indigo-500
                    hover:bg-indigo-50 font-medium rounded-lg text-sm px-3 py-1.5"
                    >
                      cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Card Layout for Smaller Screens */}
          <div className="sm:hidden">
            {Appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="border-b last:border-none p-4"
              >
                <div className="flex justify-center">
                  <div>
                    <h3 className="text-lg  font-medium text-gray-900">
                      {appointment.userData.name}
                    </h3>
                    <p className="text-sm text-black">
                      {appointment.docData.name}
                    </p>
                  </div>
                </div>
                <div
                  className={`px-2 py-1 w-18 text-center inline-block   rounded-full text-xs font-medium ${
                    appointment.Status === "confirmed"
                      ? "bg-green-100 text-green-800"
                      : appointment.Status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : appointment.Status === "cancelled"
                      ? "bg-yellow-100 text-red-500"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {appointment.Status}
                </div>
                <p className="text-sm  text-center text-black">
                  Rs: {appointment.amount}
                </p>
                <div className="flex justify-center items-center mt-2 text-sm text-black">
                  <button
                    type="button"
                    className="text-white mr-4 hover:text-indigo-500 bg-indigo-500  border hover:border-indigo-500
                    hover:bg-indigo-50 font-medium rounded-lg text-sm px-3 py-1.5"
                  >
                    confirm
                  </button>
                  <button
                    type="button"
                    className="text-white hover:text-indigo-500 bg-red-500  border hover:border-indigo-500
                    hover:bg-indigo-50 font-medium rounded-lg text-sm px-3 py-1.5"
                  >
                    cancel
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

export default AllAppointments;
