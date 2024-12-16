"use client"
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"; 
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom"
import LoadingContext from '../context/LoadingProvider';

const Register = () => {
  
  const {loading, setloading} = useContext(LoadingContext)

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
          
          const res = await axios.post("/server/api/user/register", data)
         console.log(res.data.success);
         
          if(res.data.success) {
            console.log("Registered succcessfuly and response.message is ", res.data.message); 
            toast.success('Registered  succcessfuly!', {
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
              setloading(true)
               navigate("/login")
               setloading(false)  
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
              reset()
          }
        } catch (error) {
          console.log("register page error onsubmit", error);
          console.log("something went wrong");
          reset()
          // setloading(false)
          
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
                Create an account
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
                    Your name
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
                    Your email
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
                  Create an account
                </button>
                <p className="text-sm font-normal text-black dark:text-gray-400">
                  <Link to="/login">Already have an account?{" "}</Link> 
                  <a
                    href="/login"
                    className="font-medium text-indigo-500 ml-2 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default Register
