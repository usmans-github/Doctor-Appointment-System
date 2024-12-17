import { createContext, useEffect, useState } from "react";
import axios from "axios"



export const AppContext = createContext()


const AppContextProvider = (props) => {
    // Get cookie for homepage
    const [token, settoken] = useState("")
    //Get userData for user Profile
    const [userData, setuserData] = useState(false)
    const userProfileData = async() => {
        try {
            const {data} = await axios.get("/server/api/user/get-profile", {Headers: token})
            if(data.success){
                setuserData(data.userData)
            }else{
                data.message
            }
        } catch (error) {
            console.log(error.nessage);
        }
    }
 
    //Get all doctors
    const [doctors, setdoctors] = useState([])
  
    const doctorData = async () => {
        try {
            const res = await axios.get("/server/api/user/getData")
            setdoctors(res.data.doctors)
            
            
        } catch (error) {
            console.log(error.nessage);
            
        }
    
    }
    useEffect(() => { 
     doctorData()
    }, [])

    useEffect(() => { 
     userProfileData()
    }, [token])

    const value = {
        token,
        settoken,
        userData,
        setuserData,
        userProfileData,
        doctors,
        setdoctors,
     }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider