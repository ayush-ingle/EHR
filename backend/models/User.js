const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    isPatient:{
        type: Boolean,
        default: false
    },
    isDoctor:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("user", UserSchema)
module.exports = User;