import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import DoctorLogin from "./pages/DoctorLogin";
import Page from "./admin/Page";
import AddDoctor from "./admin/AddDoctor";
import BookAppointment from "./patient/BookAppointment";
import AllDoctors from "./pages/AllDoctors";
import Profile from "./patient/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Doctors from "./admin/Doctors";
import AllAppointments from "./admin/AllAppointments";
import Specialties from "./components/Specialities";
import Blogs from "./pages/Blogs";
import AllBlogs from "./pages/AllBlogs";
import CreateBlog from "./admin/CreateBlog";
import BlogPost from "./pages/BlogPost";
import AdminBlogs from "./admin/AdminBlogs";
import EditBlogPost from "./pages/EditBlogPost";

function App() {
  return (
    <>
      
      
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/blogpost/edit/:id" element={<EditBlogPost />} />
            <Route path="/blogpost/:id" element={<BlogPost />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
            <Route path="/specialities" element={<Specialties />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/patient/profile" element={<ProtectedRoute element={<Profile />} />} />
            <Route path="/patient/book-appointment" element={<ProtectedRoute element={<BookAppointment />} />} />
            <Route path="/all-doctors" element={<AllDoctors />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/appointments" element={<AllAppointments />} />
            <Route path="/admin/add-doctor" element={<AddDoctor />} />
            <Route path="/admin/doctors" element={<Doctors />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/create-blog" element={<CreateBlog />} />
            <Route path="/admin/dashboard" element={<Page />} />

          </Routes>
       
      
    </>
  );
}

export default App;