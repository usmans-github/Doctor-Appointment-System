const express = require('express');
const { login, register, authController } = require('../controllers/user-controller');
const authMiddleware = require("../middlewares/authMiddleware")

const router = express.Router()

//Admin login
router.post("/login", )



module.exports = router