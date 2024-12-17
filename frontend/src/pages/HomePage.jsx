import React, { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Hero from '../components/Hero'
import Specialties from '../components/Specialities'
import TopDoctors from '../components/TopDoctors'
import Cta from '../components/Cta'

const HomePage = () => {



  return (
    <>
   <Hero />
   <Specialties />
   <TopDoctors />
   <Cta />
    </>
  )
}

export default HomePage
