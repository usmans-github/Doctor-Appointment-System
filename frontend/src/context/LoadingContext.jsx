import React, { createContext, useState } from 'react'
import Spinner from '../components/Spinner'


export const LoadingContext =createContext()

 const LoadingContextProvider = (props) => {
    const [loading, setloading] = useState(false)
    const value = {
      loading,
      setloading
    }
  return (
    <>
    {loading && <Spinner />}
    <LoadingContext.Provider value={value}>
        {props.children}
    </LoadingContext.Provider>
    </>
  )
}

export default LoadingContextProvider
