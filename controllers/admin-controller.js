const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const adminModel = require("../models/admin-model")




//Admin login controller
const login = async (req, res) => {
    try {
        
        const { email, password } = req.body
        const admin = await adminModel.findOne({email: email})
        bcrypt.compare(password, admin.password, (err, result) => {
            if(err) return res.status(201).send({success: false, message: "Access denied, Admins Only!"})
            
            res.status(200).send({success: true, message: "Admin login successfuly", })
        })
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send({ message: `Error in Admin controller ${error.message}` });
        
    }
 
 }


module.exports = {
    login
}