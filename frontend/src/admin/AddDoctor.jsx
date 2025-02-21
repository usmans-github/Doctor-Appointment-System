"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { LoadingContext } from "../context/LoadingContext";



const AddDoctor = () => {
  const { loading, setloading } = useContext(LoadingContext)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm();

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
      setloading(true)
      const res = await axios.post(
        `http://sehatx.com/api/admin/add-doctor`,
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
      toast.error(error.message)
      console.log(error);
    }finally{
      setloading(false)
    }
  };
  
 return  (
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

      <section className="py-6 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-md">
            <div className="p-6 space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Add a Doctor
              </h1>
              <form
                method="post"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Left Column */}
                <div className="space-y-4">
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
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      placeholder="John Doe"
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
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      placeholder="name@company.com"
                      required={true}
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
                      placeholder="••••••••"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      required={true}
                    />
                  </div>
                  {/* Picture  */}
                  <div>
                    <label
                      htmlFor="picture"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Upload Picture
                    </label>
                    <input
                      {...register("file")}
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      type="file"
                      name="file"
                      id="file"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
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
                      type="number"
                      id="phone"
                      placeholder="0000000000"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
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
                      placeholder="Specialize In"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      required
                    />
                  </div>
                  {/* Experience */}
                  <div>
                    <label
                      htmlFor="experience"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Experience
                    </label>
                    <input
                      {...register("experience")}
                      type="text"
                      id="experience"
                      placeholder="Experience"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      required
                    />
                  </div>
                  {/* Fee */}
                  <div>
                    <label
                      htmlFor="fee"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Fee
                    </label>
                    <input
                      {...register("fee")}
                      type="number"
                      id="fee"
                      placeholder="0000"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Add a Doctor
                  </button>
                  <p className="text-sm font-normal text-black mt-2 text-center">
                    Back to dashboard?{" "}
                    <Link
                     to="/admin/dashboard"
                      className="font-medium text-indigo-500 hover:underline"
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
