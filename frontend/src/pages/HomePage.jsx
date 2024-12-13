import React from 'react'
import axios from 'axios'

import Cookies from 'js-cookie';

const HomePage = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/user/getUserData", {}, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      })
    } catch (error) {
      console.log(error);
      
    }

    useEffect(() => {
      getUserData()
    }, [])
    
    
 
  }
  return (
    <div>
      <h1>Homepage </h1>
    </div>
  )
}

export default HomePage
