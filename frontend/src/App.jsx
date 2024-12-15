import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Spinner from "./components/Spinner";
import AdminLogin from "./pages/AdminLogin";
import DoctorLogin from "./pages/DoctorLogin";
import Page from "./admin/dashboard/Page";
import AddDoctor from "./admin/dashboard/AddDoctor";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
      {loading? <Spinner />:(

          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/add-doctor" element={<AddDoctor />} />
          <Route path="/admin/dashboard" element={<Page />} />

        </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
