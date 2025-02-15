
const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
   
    email:{
        type: String,
        required: [true, "email is required"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    }

})

module.exports =   mongoose.model("admin", AdminSchema)