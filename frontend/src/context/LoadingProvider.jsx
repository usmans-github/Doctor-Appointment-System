import React, { createContext, useState } from 'react'


const LoadingContext =createContext()

export const LoadingProvider = ({children}) => {
    const [loading, setloading] = useState(false)


  return (
    <LoadingContext.Provider value={{loading,setloading}}>
        {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext
