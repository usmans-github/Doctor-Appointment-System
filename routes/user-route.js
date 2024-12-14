const express = require('express');
const { login, register, authController } = require('../controllers/user-controller');
const authMiddleware = require("../middlewares/authMiddleware")

const router = express.Router()

//Register
router.post("/register", register)

//Login
router.post("/login", login)

//Auth 
router.post("/getUserData", authMiddleware,  authController)



module.exports = router