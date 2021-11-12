const mongoose = require("mongoose") 
const tvSchema = mongoose.Schema({ 
 brand: String, 
 screen: String, 
 screen_size: String
}) 
 
module.exports = mongoose.model("tv", tvSchema)