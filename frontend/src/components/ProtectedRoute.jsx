import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  
  const { user_token, setuser_token } = useContext(AppContext);
  if (!user_token) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;
