import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Hero from '../components/Hero'
import Specialties from '../components/Specialities'

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
  }
  useEffect(() => {
    getUserData();
  }, [])


  return (
    <>
   <Hero />
   <Specialties />
    </>
  )
}

export default HomePage
