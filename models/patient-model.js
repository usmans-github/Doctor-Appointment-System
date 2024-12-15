const mongoose = require("mongoose")

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    age: { type: Number },
    gender: { type: String }
  });
  

module.exports = mongoose.model("patient", PatientSchema)  