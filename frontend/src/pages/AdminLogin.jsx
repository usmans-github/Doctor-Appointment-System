"use client";
import React, { useContext } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AdminContext } from "../context/AdminContext";
import { LoadingContext } from "../context/LoadingContext";

const AdminLogin = () => {
<<<<<<< HEAD
  const {  setloading } = useContext(LoadingContext);
  const {  admin_token, setadmin_token } = useContext(AdminContext);
=======
  const { setloading } = useContext(LoadingContext);
  const { admin_token, setadmin_token } = useContext(AdminContext);
>>>>>>> ebe5a46604e13ea0c3747c2a98350f1a7bd760b7
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      const res = await axios.post("https://sehatx.com/api/admin/login", data);
      console.log(res.data); // Add this line to check the response data
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          localStorage.setItem("admin_token", res.data.admin_token);
          setadmin_token(res.data.admin_token);
          navigate("/admin/dashboard");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
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
      <section className="bg-indigo-500">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[70vh] lg:py-0">
          <div
            className="w-full bg-[#f0f0f0] rounded-[2.5rem] shadow dark:border md:mt-0 sm:max-w-md xl:p-0
           dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login as Admin
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[1rem] focus:ring-indigo-600
                     focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="admin@admin.com"
                    required=""
                  />
                </div>
                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[1rem] focus:ring-primary-600
                     focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none
                   focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600
                    dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-normal text-black dark:text-gray-400">
                  User login ?
                  <Link
                    to="/login"
                    className="text-indigo-500 ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Click here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;