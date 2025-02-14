import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const { user_token, setuser_token } = useContext(AppContext);
  if (!user_token && !admin_token) {
    return <Navigate to="/login" />;
  }
  return element;
};

export default ProtectedRoute;
