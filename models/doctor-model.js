const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String, // Cloudinary url
        // required: true
    },
    phone: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    available : {
        type: Boolean,
        default: true
    },
    slots_booked : { type: Object, default: {}},
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "appointments"
    }]
},
{timestamps: true}
)

module.exports = mongoose.model("doctors", doctorSchema)