const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    aboutme:{
        type:String
    },
    date:{
        type: Date,
        default:Date.now
    }
})


module.exports = Profile = mongoose.model("profile", profileSchema);