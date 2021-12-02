const mongoose = require("mongoose") 
const tvSchema = mongoose.Schema({ 
 brand: String, 
 screen: {
  type: String,
  enum: ["LED", "LCD", "OLED"],
 },
 screen_size: String
}) 
 
module.exports = mongoose.model("tv", tvSchema)