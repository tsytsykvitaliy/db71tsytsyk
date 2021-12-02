const mongoose = require("mongoose") 
const tvSchema = mongoose.Schema({ 
 brand: {
    type: String,
    enum: ["Samsung", "Sony", "LG"],
   }, 
 screen: {
  type: String,
  enum: ["LED", "LCD", "OLED"],
 },
 screen_size: String
}) 
 
module.exports = mongoose.model("tv", tvSchema)