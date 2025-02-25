"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { LoadingContext } from "../context/LoadingContext";

const AddDoctor = () => {
  const { loading, setloading } = useContext(LoadingContext);
  const navigate = useNavigate();

  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phone", data.phone);
    formData.append("specialization", data.specialization);
    formData.append("experience", data.experience);
    formData.append("fee", data.fee);
    formData.append("file", data.file[0]);

    try {
      // console.log("form data is:", formData.data);
      setloading(true);
      const res = await axios.post(
        `https://sehatx.com/api/admin/add-doctor`,
        formData
      );
      if (res.data.success) {
        // console.log("Doctor addded successfuly", res.data.message);
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1000);
      } else {
        toast.error(res.data.message);
        // console.log(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setloading(false);
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

      <section className="py-16">
        <div className="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto sm:px-6 lg:py-0">
          <div className="w-full max-w-3xl bg-[#f0f0f0] rounded-[2.5rem] shadow-lg sm:px-6">
            <div className="p-6 space-y-4 md:p-8">
              <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl">
                Add a Doctor
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-6"
                encType="multipart/form-data"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                    type="text"
                    id="name"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    id="password"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="123456789"
                    required
                  />
                </div>

                {/* Specialization */}
                <div>
                  <label
                    htmlFor="specialization"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Specialization
                  </label>
                  <input
                    {...register("specialization")}
                    type="text"
                    id="specialization"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Specialization"
                    required
                  />
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Experience (Years)
                  </label>
                  <input
                    {...register("experience")}
                    type="number"
                    id="experience"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Years of Experience"
                    required
                  />
                </div>

                {/* Fee */}
                <div>
                  <label
                    htmlFor="fee"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Consultation Fee
                  </label>
                  <input
                    {...register("fee")}
                    type="number"
                    id="fee"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Fee in Rs"
                    required
                  />
                </div>

                {/* Upload Picture */}
                <div>
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Upload Picture
                  </label>
                  <input
                    {...register("file")}
                    type="file"
                    id="file"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem] focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-sm font-medium text-white transition-all bg-indigo-500 rounded-full hover:bg-indigo-600"
                  >
                    Add Doctor
                  </button>
                </div>

                {/* Back to Dashboard */}
                <div className="col-span-1 text-center sm:col-span-2">
                  <p className="text-sm font-normal text-gray-700">
                    Back to dashboard?
                    <Link
                      to="/admin/dashboard"
                      className="ml-2 font-medium text-indigo-500 hover:underline"
                    >
                      Click here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddDoctor;
