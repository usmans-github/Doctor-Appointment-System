import { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Patients = () => {
  const { stats, getStats } = useContext(AdminContext);

  useEffect(() => {
    getStats();
  }, []);

  const PatientsData = stats?.usersData || [];

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
      {/* All Patients */}
      <div className="max-w-[80vw] mt-6 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
          All Patients
        </h1>

        {/* Search and Add Doctor Section */}
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/admin/dashboard">
            <button className="text-white hover:text-black flex justify-center items-center gap-2 font-medium rounded-lg text-sm px-5 py-2.5">
              <ArrowLeftIcon className="size-4" />
              Back to dashboard
            </button>
          </Link>
        </div>

        {/* Patient List */}
        <div className="bg-[#f0f0f0] shadow-md rounded-[1rem] overflow-hidden">
          {/* Table for Larger Screens */}
          <table className="hidden sm:table w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  PHONE
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  AGE
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  GENDER
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#f0f0f0] divide-y divide-gray-200">
              {PatientsData.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{user.email}</td>
                  <td className="px-4 py-3 text-sm text-black">{user.phone}</td>
                  <td className="px-4 py-3 text-sm text-black">
                    {user.age || "N/A"}
                  </td>
                  <td className="px-4 py-3 text-sm text-black">
                    {user.gender || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Card Layout for Smaller Screens */}
          <div className="sm:hidden">
            {PatientsData.map((user) => (
              <div key={user._id} className="border-b last:border-none p-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {user.name}
                  </h3>
                  <p className="text-sm text-black">Email: {user.email}</p>
                  <p className="text-sm text-black">Phone: {user.phone}</p>
                  <p className="text-sm text-black">Age: {user.age || "N/A"}</p>
                  <p className="text-sm text-black">
                    Gender: {user.gender || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Patients;
