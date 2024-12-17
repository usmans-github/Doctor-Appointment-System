import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Spinner from "./components/Spinner";
import AdminLogin from "./pages/AdminLogin";
import DoctorLogin from "./pages/DoctorLogin";
import Page from "./admin/Page";
import AddDoctor from "./admin/AddDoctor";
import BookAppointment from "./patient/BookAppointment";
import { useContext } from "react";
import LoadingContext from "./context/LoadingProvider";
import AllDoctors from "./pages/AllDoctors";
import Profile from "./patient/Profile";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";

function App() {
  const {loading, setloading} = useContext(LoadingContext)
  const { token, settoken } = useContext(AppContext)
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            {token &&  <Route path="/patient/profile" element={<Profile />} />}
            {token &&  <Route path="/patient/book-appointment" element={<BookAppointment />} />}
            <Route path="/all-doctors" element={<AllDoctors />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />
            {token &&  <Route path="/admin/add-doctor" element={<AddDoctor />} />}
            <Route path="/admin/dashboard" element={<Page />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;