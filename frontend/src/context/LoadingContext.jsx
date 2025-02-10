import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingContextProvider = (props) => {
  const [loading, setloading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setloading }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
