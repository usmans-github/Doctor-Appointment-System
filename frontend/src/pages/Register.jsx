import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { LoadingContext } from "../context/LoadingContext";

const Register = () => {
  const { loading, setloading } = useContext(LoadingContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setloading(true);
      console.log(data);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
        data
      );
      toast.success(res.data.message);
      if (res.data.success) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
      console.log("Register page error onSubmit:", errorMessage);
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
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-4 mx-auto lg:py-0 w-full">
          <div className="w-full max-w-3xl bg-[#f0f0f0] rounded-[2.5rem] shadow-lg sm:px-6">
            <div className="p-6 md:p-8 space-y-4">
              <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                action="/api/user"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    defaultValue=""
                    {...register("name", {
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem]
                     focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
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
                    Your email
                  </label>
                  <input
                    defaultValue=""
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem]
                     focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
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
                    defaultValue=""
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem]
                     focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
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
                    defaultValue=""
                    {...register("phone")}
                    type="tel"
                    name="phone"
                    id="phone"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem]
                     focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="123456789"
                  />
                </div>

                {/* Age */}
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Age
                  </label>
                  <input
                    defaultValue=""
                    {...register("age")}
                    type="number"
                    name="age"
                    id="age"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem]
                     focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label
                    htmlFor="gender"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Gender
                  </label>
                  <select
                    {...register("gender", { required: true })}
                    name="gender"
                    id="gender"
                    className="bg-white border border-indigo-500 text-gray-900 text-sm rounded-[1rem]
                    focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    defaultValue="" // Ensures default empty selection
                    required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full text-white bg-indigo-500 hover:bg-indigo-600 font-medium
                     rounded-full text-sm px-5 py-3 transition-all"
                  >
                    Create an account
                  </button>
                </div>

                {/* Login Link */}
                <div className="col-span-1 sm:col-span-2 text-center">
                  <p className="text-sm font-normal text-gray-700">
                    Already have an account?
                    <Link
                      to="/login"
                      className="ml-2 font-medium text-indigo-500 hover:underline"
                    >
                      Login here
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

export default Register;
