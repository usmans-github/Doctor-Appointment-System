import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoadingContext } from "./LoadingContext";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const { loading, setloading } = useContext(LoadingContext);
  const [admin_token, setadmin_token] = useState("");
  //All data for admin
  const [stats, setstats] = useState([]);
  const getStats = async () => {
    // try {
    //   setloading(true);
    //   const stats = await axios.get(
    //     `${import.meta.env.VITE_BACKEND_URL}/api/admin/getStats`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${admin_token}`, 
    //       },
    //       withCredentials: true, 
    //     }
    //   );
    //   setstats(stats.data)
    // } catch (error) {
    //   console.log(error.message);
    // } finally {
    //   setloading(false);
    // }
  };

  //Api to cancel & approve  the appointment
  const updateAppointments = async (appointmentId) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/update-appointment`,
        { appointmentId: appointmentId },
        {
          headers: {
            Authorization: `Bearer ${admin_token}`, 
          },
          withCredentials: true, 
        }
      );
      // getStats();
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // //All Patients data

  // useEffect(() => {
  //   getStats();
  // }, []);

  const value = {
    admin_token,
    setadmin_token,
    stats,
    setstats,
    getStats,
    updateAppointments,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;