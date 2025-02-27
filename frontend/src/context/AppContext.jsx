import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import React from "react";
import { LoadingContext } from "./LoadingContext";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const { loading, setloading } = useContext(LoadingContext);
  // Get user_token
  const [user_token, setuser_token] = useState("");
  //Get userData for user Profile
  const [userData, setuserData] = useState({});
  const userProfileData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/get-profile`,
        {
          headers: {
            Authorization: `Bearer ${user_token}`,
          },
          withCredentials: true,
        }
      );
      if (data.success) {
        setuserData(data.userData);
      } else {
        toast.error(data.message);
        console.log(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.nessage);
    } 
  };

  //Get all doctors
  const [doctors, setdoctors] = useState([]);
  const doctorsData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/getData`
      );
      setdoctors(res.data.doctors);
    } catch (error) {
      toast.error(error);
      console.log(error);
    } 
  };

  useEffect(() => {
    doctorsData();
  }, []);

  const value = {
    user_token,
    setuser_token,
    userData,
    setuserData,
    userProfileData,
    doctors,
    setdoctors,
    doctorsData,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
