import axios from "axios";
import {  createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {
  const [admin_token, setadmin_token] = useState("")
  //All data for admin
  const [stats, setstats] = useState([])
  const getStats = async () => {
    try {
      const stats = await axios.get( `/server/api/admin/getStats`, admin_token)
      setstats(stats.data)
    } catch (error) {
      console.log(error.message);
    }
   
  }

  //Api to cancel & approve  the appointment
  const updateAppointments = async(appointmentId) => {
    try {
      const res = await axios.post("/server/api/admin/update-appointment", {appointmentId: appointmentId})
      if(res.data.success){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
    
  }
 
  //All Patients data

  useEffect(() => {
    getStats()
  }, [])
  
  
  const value = {
    admin_token,
    setadmin_token,
    stats,
    setstats,
    getStats,
    updateAppointments
  }

  return <AdminContext.Provider value={value}>
    {props.children}
  </AdminContext.Provider>
}


export default AdminContextProvider