const express = require('express');
const { login, register, getDoctorsData, getUserProfile, bookAppointment } = require('../controllers/user-controller');
const authUser = require('../middlewares/authUser');

const router = express.Router()

//Register
router.post("/register", register)

//Login
router.post("/login", login)

//Get User Data
router.get("/get-profile", authUser, getUserProfile)


//Get Doctors Data
router.get("/getData", getDoctorsData)

//Book new Appointment
router.post("/book-new-appointment", authUser, bookAppointment)
    


module.exports = router