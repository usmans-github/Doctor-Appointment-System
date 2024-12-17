const express = require('express');
const { login, register, getData } = require('../controllers/user-controller');

const router = express.Router()

//Register
router.post("/register", register)

//Login
router.post("/login", login)



//Get Doctors Data
router.get("/getData", getData)
    


module.exports = router