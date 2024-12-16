const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const doctorModel = require("../models/doctor-model");

//user register
const register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
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
    const loggedInUser = await userModel.findOne({ email: email });
    if (!loggedInUser)
      return res
        .status(200)
        .send({ success: false, message: "User not found" });
    bcrypt.compare(password, loggedInUser.password, function (err, result) {
      if (!result)
        return res
          .status(200)
          .send({ success: false, message: "Invalid Credentials" });
      const token = jwt.sign({ id: loggedInUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res
        .status(200)
        .send({ success: true, message: "Login successfuly", token });
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Error in Login controller ${error.message}` });
  }
};

//doctor data 
const getData = async (req, res) => {
  try {
    const doctors = await doctorModel.find({})
    if(!doctors) res.status(201).send({success: false, message: "Failed loading doctors"})
      res.status(201).send({success: true, message: "Doctors loaded successfully", data:doctors})
  } catch (error) {
    console.log("user controller getData error", error);
    
  }
}

//Auth
const authController = async (req, res) => {
      try {
        const user = await userModel.findOne({ _id: req.body.userId });
        if (!user) {
          return res.status(200).send({
            message: "user not found",
            success: false,
          });
        } else {
          res.status(200).send({
            success: true,
            data: {
              name: user.name,
              email: user.email,
             },
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "auth error",
          error,
        });
        
      }
}



module.exports = {
  register,
  login,
  authController,
  getData 
};
