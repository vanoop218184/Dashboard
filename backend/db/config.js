const mongoose = require("mongoose");
const run= async()=>{
   await mongoose.connect(
    "mongodb+srv://ankit5737v:pcpmVSmb5S8xRWNu@data.mau4lbi.mongodb.net/?retryWrites=true&w=majority&appName=data"
  
    );
    console.log("hey mongo connected");
}
run();



