"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"; 
import {useDispatch} from "react-redux";
import { showLoading, hideLoading } from '../../redux/features/alertSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from "react-router-dom"

const AddDoctor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
      const {
          register,
          handleSubmit,
          reset,
          watch,
          formState: { errors },
        } = useForm();
      
      
        const onSubmit = async(data) => {
          try {
            dispatch(showLoading())
            const res = await axios.post("http://localhost:3000/api/admin/add-doctor", data)
            dispatch(hideLoading())
            if(res.data.success) {
              console.log("Registered succcessfuly and response.message is ", res.data.message); 
              toast.success('user created succcessfuly!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                setTimeout(() => {
                 navigate("/login")
                }, 1000);
            } else {
              toast.error('user already exists!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
                console.log("user already exists", res.data);
            }
          } catch (error) {
            dispatch(hideLoading())
            console.log("register page error onsubmit", error);
            console.log("something went wrong");
            
        }
          };
  return (
    <>
    <ToastContainer
      position="top-center"
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
    
        <section className="">
          <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-[80vh] lg:py-0">
           
            <div className="w-full bg-white  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                 Add a Doctor 
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
                  action="/api/user"
                >
                 {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Name
                    </label>
                    <input
                      defaultValue=""
                      {...register("name",  { required: true, minLength: 3, maxLength:20, })}
                      type="name"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Doe"
                      required={true}
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                       Email
                    </label>
                    <input
                      defaultValue=""
                      {...register("email")}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required={true}
                    />
                  </div>
                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      defaultValue=""
                      {...register("password")}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
  
                  <button
                    type="submit"
                    className="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Add a Doctor
                  </button>
                  <p className="text-sm font-normal text-black dark:text-gray-400">
                    Back to dashboard ?{" "}
                    <a
                      href="/admin/dashboard"
                      className="font-medium text-indigo-500 ml-2 hover:underline dark:text-primary-500"
                    >
                      Click here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
     
  
      </>
  )
}

export default AddDoctor
