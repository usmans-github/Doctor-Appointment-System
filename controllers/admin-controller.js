const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const adminModel = require("../models/admin-model")
const doctorModel = require("../models/doctor-model")
const statsModel = require("../models/stats-model")




//Admin login controller
const login = async (req, res) => {
    try {
        
        const { email, password } = req.body
        const admin = await adminModel.findOne({email: email})
        bcrypt.compare(password, admin.password, (err, result) => {
            if(err) return res.status(201).send({success: false, message: "Access denied, Admins Only!"})
            const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
                    expiresIn: "1d",
                  });
            
            res.status(200).send({success: true, message: "Admin login successfuly", token})
        })
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .send({ message: `Error in Admin controller ${error.message}` });
        
    }
 
 }

 //Admin add doctor controller
 const addDoctor = async (req, res) => {
    try {
        const { name, email, password, phone, specialization, experience, fee   }  = req.body

        const exists  = await doctorModel.findOne({email:email, password:password})
            if(exists) return res.status(201).send({success: false, message: "Doctor already exists"})

            const doctor =  await doctorModel.create({name, email, password, phone, specialization, experience, fee})
            await doctor.save()
            res.status(200).send({success: true, message: "Doctor added successfully!", })
       
    } catch (error) {
        console.log("admin controller addDoctor Error: ", error);
        
    }
 }

//ADmin get Stats
const getStats = async (req, res) => {
    try {
        const stats = await statsModel.find({})
        if(!stats)res.status(201).send({success: false, message: "Stats not found!"})
        res.status(200).send({success: true, message: "Stats fetched successfully!", stats})
        

    } catch (error) {
        console.log("admin controller getStats Error: ", error);

    }
 }






module.exports = {
    login,
    addDoctor,
    getStats
}