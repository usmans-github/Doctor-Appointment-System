import { createContext, useState } from "react";
import axios from "axios"



export const AppContext = createContext()


const AppContextProvider = (props) => {


    const [token, settoken] = useState("")
    // const getUserData = async() =>{
    //     const res = await axios.post("/server/api/user/getUserData")
    // }

    const value = { token, settoken }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider