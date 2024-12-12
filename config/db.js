const mongoose = require("mongoose")



const connectDb = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hospital")
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`Mongodb server issue : ${error}`);
    }
}

module.exports = connectDb