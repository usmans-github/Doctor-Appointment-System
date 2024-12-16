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
    profilePicture: {
        type: String, // Cloudinary url
        required: true
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
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "appointments"
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("doctors", doctorSchema)