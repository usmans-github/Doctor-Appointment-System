import axios from "axios";
import {  createContext, useEffect, useState } from "react";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

  const [admin_token, setadmin_token] = useState("")
  
  const value = {
    admin_token,
    setadmin_token,

  }

  return <AdminContext.Provider value={value}>
    {props.children}
  </AdminContext.Provider>
}


export default AdminContextProvider