import { createContext, useEffect, useState } from "react";
import axios from "axios"



export const AppContext = createContext()


const AppContextProvider = (props) => {


    const [token, settoken] = useState("")
    

    //Get all doctors
    const [data, setdata] = useState([])
  
    const doctorData = async () => {
      const res = await axios.get("/server/api/user/getData")
      setdata(res.data.doctors)
      console.log(res.data.doctors);
      
    }
    useEffect(() => {
     doctorData()
    }, [])

    const value = {
        token,
        settoken,
        data,
        setdata
     }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider