const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  totalPatients: {
    type: Number,
    default: 0,
  },
  totalDoctors: {
    type: Number,
    default: 0,
  },
  totalAppointments: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Stats", statsSchema)