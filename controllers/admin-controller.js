const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const doctorModel = require("../models/doctor-model")
const statsModel = require("../models/stats-model")
const { uploadOnCloudinary } = require("../utils/cloudinary")




//Admin login controller
const login = async (req, res) => {
  try {
    const { email, password } =req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password, process.env.JWT_SECRET)
        res.send({success: true, message: "Admin logged in successfully!", token})
        
        
    }else{
        res.status(201).send({success: false, message:"Invalid Credentials"})
    }
    
  } catch (error) {
    console.log(error);
    res.status(401).send({ success: false, message: error.message })
    
  }
 
 }

 //Admin add doctor controller
 const addDoctor = async (req, res) => {
    try {
        const { name, email, password, phone, specialization, experience, fee }  = req.body
        console.log(req.file)
        const avatarLocalPath = req.file?.path;
        if(!avatarLocalPath){
            res.status(400).send("Avatar file is required")
        }
        const picture = await uploadOnCloudinary(avatarLocalPath)
        if(!file) return res.status(201).send({success: false, message: "Please upload a file"})
            res.status(200).send({success: true, message: "File uploaded successfully!"})
        const exists  = await doctorModel.findOne({email:email, password:password})
            if(exists) return res.status(201).send({success: false, message: "Doctor already exists"})

            const doctor =  await doctorModel.create({
                name,
                email, 
                password, 
                phone, 
                specialization,
                experience,
                fee,
                picture: picture.url

            })
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