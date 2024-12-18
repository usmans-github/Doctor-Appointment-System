const jwt = require("jsonwebtoken")
const doctorModel = require("../models/doctor-model")
const { uploadOnCloudinary } = require("../utils/cloudinary")
const userModel = require("../models/user-model")




//Admin login controller
const login = async (req, res) => {
  try {
    const { email, password } =req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const admin_token = jwt.sign(email+password, process.env.JWT_SECRET)
        res.send({success: true, message: "Admin logged in successfully!", admin_token})
        
        
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
        const imageFile = req.file
        console.log({name, email, password, phone, specialization, experience, fee}, imageFile)
        const exists  = await doctorModel.findOne({email:email, password:password})
        if(exists) return res.status(201).send({success: false, message: "Doctor already exists"})
        const imageLocalPath = req.file?.path;
        if(!imageLocalPath){
            res.status(400).send("Picture file is required")
        }
        const picture = await uploadOnCloudinary(imageLocalPath)
        if(!imageFile) return res.status(201).send({success: false, message: "Please upload a file"})
            res.status(200).send({success: true, message: "Doctor added successfully!"})
        

            const doctor =  await doctorModel.create({
                name,
                email, 
                password, 
                phone, 
                specialization,
                experience,
                fee,
                picture: picture.secure_url 

            })
            await doctor.save()
            res.status(200).send({success: true, message: "Doctor added successfully!" })
       
    } catch (error) {
        console.log("admin controller addDoctor Error: ", error);
        
    }
 }

//Get Stats 

const getStats = async (req, res) => {
    try {
        const doctorsData = await doctorModel.find({})
        const usersData = await userModel.find({})
    res.status(201).send({success: true, message: "All Doctors data loaded successfuly", doctorsData, usersData})
    console.log(doctorsData);

    
    } catch (error) {
        console.log(error);
        
    }
    
}






module.exports = {
    login,
    addDoctor,
    getStats
}