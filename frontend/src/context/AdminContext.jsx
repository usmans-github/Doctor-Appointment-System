import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {
  const [admin_token, setadmin_token] = useState("")
  //All data for admin
  const [doctors, setdoctors] = useState([])
  const getStats = async () => {
    const docdata = await axios.get("/server/api/admin/getStats")
    setdoctors(docdata.data.doctorsData)
   
  }
 
  
  
  const value = {
    admin_token,
    setadmin_token,
    doctors,
    setdoctors,
    getStats
  }

  return <AdminContext.Provider value={value}>
    {props.children}
  </AdminContext.Provider>
}


export default AdminContextProvider