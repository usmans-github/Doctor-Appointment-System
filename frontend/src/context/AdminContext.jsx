import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {
  const [admin_token, setadmin_token] = useState("")
  //All data for admin
  const [stats, setstats] = useState([])
  const getStats = async () => {
    const stats = await axios.get("/server/api/admin/getStats", admin_token)
    setstats(stats.data)
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
    getStats
  }

  return <AdminContext.Provider value={value}>
    {props.children}
  </AdminContext.Provider>
}


export default AdminContextProvider