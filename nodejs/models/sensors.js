const mongoose = require("mongoose");
const SensorsSchema = mongoose.Schema({
  pm1: {
    type: String,
    require: true,
  },
  pm2: {
    type: String,
    require: true,
  },
  pm10: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Sensors", SensorsSchema);
