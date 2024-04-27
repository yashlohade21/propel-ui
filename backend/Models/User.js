const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [50, "Name can not exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please Enter Your Phone"],
    maxLength: [10, "Name can not exceed 10 characters"],
    minLength: [10, "Name should have more than 10 characters"],
  },
  otp: {
    type: String,
    required: [true, "Please Enter OTP"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

let userModel = mongoose.model("User", userSchema);
module.exports = userModel;
