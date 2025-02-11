const express = require('express');
const { login, register, getDoctorsData, getUserProfile, bookAppointment, upComingAppointments } = require('../controllers/user-controller');
const authUser = require('../middlewares/authUser');
const { getBlogs } = require('../controllers/blog-controller');

const router = express.Router()

//Register
router.post("/register", register)

//Login
router.post("/login", login)

//Get User Data
router.get("/get-profile", authUser, getUserProfile)


//Get Doctors Data
router.get("/getData", getDoctorsData)

//Get Blogs Data
router.get("/Blogs", getBlogs)

//Book new Appointment
router.post("/book-new-appointment", authUser, bookAppointment)
    
//Get Upcoming appointments for user
router.get("/user-appointments", authUser, upComingAppointments)

module.exports = router