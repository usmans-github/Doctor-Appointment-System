const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const doctorModel = require("../models/doctor-model");
const appointmentModel = require("../models/appointment-model");

//user register
const register = async (req, res) => {
  const { email, password, name, phone, age,  gender } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email, password: password });
    if (existingUser)
      return res
        .status(200)
        .send({ success: false, message: "User already exists" });
 
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        // Store hash in your password DB.
        const newUser = await userModel.create({
          name: name,
          email: email,
          password: hash,
          phone,
          age,
          gender
        });
        newUser.save();
        res.status(201).send({
          success: true,
          message: "User registered successfully",
          data: newUser,
        });
      });
    });
  } catch (error) {
    console.log(error);
    res.status(201).send({
      success: false,
      message: `Error in Register controller ${error.message}`,
    });
  }
};

//user login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email});
    if (!user)
      return res
        .status(200)
        .send({ success: false, message: "User not found" });
    bcrypt.compare(password, user.password, function (err, result) {
      if (!result)
        return res
          .status(200)
          .send({ success: false, message: "Invalid Credentials" });
      const user_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res
        .status(200)
        .send({ success: true, message: "Login successfuly", user_token });
    });
  } catch (error) {
    console.log(error);
    res
      .status(201)
      .send({success:false, message: `Error in Login controller ${error.message}` });
  }
};


//user profile data 
const getUserProfile = async(req, res) => {
  try {
    
    const { userId } = req.body
    const userData = await userModel.findById(userId).select("-password")
    res.status(200).send({success: true, userData})
  } catch (error) {
    console.log(error);
    res.status(201).send({ success: false, message: error.message })
  }
}

//doctor data 
const getDoctorsData = async (req, res) => {
  try {
    const doctors = await doctorModel.find({})
    if(!doctors) {
      return res.status(201).send({success: false, message: "Failed loading doctors"})
    }
    return res.status(200).send({success: true, message: "Doctors loaded successfully", doctors})
  } catch (error) {
    console.log("user controller getData error", error);
    res.status(201).send({success: false, message:"error.message"})
    
  }
}

//Api to book appointment
const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotdate, slottime } = req.body
    // console.log({ userId, docId, slotdate, slottime })
    const docData = await doctorModel.findById(docId).select("-password")
    if(!docData){
      return res.status(201).send({success: false, message: "Doctor not available"})
    }

     //Check for available slot 
    const isSlotBooked = docData.slots_booked.some((slot)=> slot.slotDate === slotdate && slot.slotTime === slottime);
    if(isSlotBooked){
      return res.status(200).send({success: false, message: "This slot is already booked"})
    }
     
     // Get userData 
     const userData = await userModel.findById(userId).select("-password")
     const appointmentData = {
      userId,
      docId,
      slotDate: slotdate,
      slotTime: slottime,
      userData,
      docData,
      date:slotdate
      // Status,
      // cancelled,
      // isCompleted,
     }
     const newAppointment = await appointmentModel.create(appointmentData)
     await newAppointment.save()

     //Save new slotdata in docData

    docData.slots_booked.push({slotDate: slotdate, slotTime: slottime})
    docData.save()
    console.log(docData)
     res.status(200).send({success: true, message: "Appointment Booked successfuly!"})

     


  } catch (error) {
    console.log(error);
    res.status(201).send({success: false, message: error.message})
  }
}


module.exports = {
  register,
  login,
  getUserProfile,
  getDoctorsData,
  bookAppointment 
};
