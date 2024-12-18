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
    res.status(500).send({
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
      .status(500)
      .send({ message: `Error in Login controller ${error.message}` });
  }
};


//user data 
const getUserProfile = async(req, res) => {
  try {
    
    const { userId } = req.body
    console.log(req.body);
    const userData = await userModel.findById(userId).select("-password")
    res.status(200).send({success: true, userData})
  } catch (error) {
    console.log(error);
    res.status(401).send({ success: false, message: error.message })
  }
}

//doctor data 
const getDoctorsData = async (req, res) => {
  try {
    const doctors = await doctorModel.find({})
    if(!doctors) return res.status(201).send({success: false, message: "Failed loading doctors"})
    res.status(201).send({success: true, message: "Doctors loaded successfully", doctors})
  } catch (error) {
    console.log("user controller getData error", error);
    
  }
}

//Api to book appointment
const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime } = req.body
    const docData = await doctorModel.findById(docId).select("-password")
    // if(!docData.available){
    //   return res.status(201).send({succes: false, message: "Doctor not available"})
    // }
    let slots_booked = docData.slots_booked
    //Check for availablw slot
    if(slots_booked[slotDate]){
      if(slots_booked[slotDate].includes(slotTime)){
        return res.status(201).send({succes: false, message: "Slot not available"})
      }else { 
        slots_booked[slotDate].push(slotTime) 
      }
    }else{  
      slots_booked[slotDate] = []
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select("-password")
      
    // delete docData.slots_booked

    const appointmentData = {
      userId,
      docId,
      userData,
      amount: docData.fee,
      slotTime,
      slotDate,
      date: Date.now()
    }

    const newAppointment  = await appointmentModel.create(appointmentData)
    await newAppointment.save()

    //Save  new slotData in docData
    await doctorModel.findByIdAndUpdate(docId, {slots_booked})
    res.status(200).send({success: true, message: "Appointment Booked"})

  } catch (error) {
    console.log(error);
    res.send({success: false, message: error.message})
  }
}

//But in database i amstoring doctor like this 
// slots_booked : { type: Object, default: {}},

module.exports = {
  register,
  login,
  getUserProfile,
  getDoctorsData,
  bookAppointment 
};
