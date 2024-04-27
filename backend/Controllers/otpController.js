// const User = require("../Models/UserModel");
require("dotenv").config();

// Register a User
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
exports.sendOtp = async (req, res) => {
  client.verify.v2
    .services("VA4810ea4e31c3c88e753dbe7c4ae599e7")
    .verifications.create({ to: "+916370302039", channel: "sms" })
    .then((verification) => {
      console.log(verification.status);
      res.status(200).json({
        success: true,
        message: verification.status,
      });
    });
};

exports.verifyOtp = async (req, res) => {
  let { otp } = req.body;
  client.verify.v2
    .services("VA4810ea4e31c3c88e753dbe7c4ae599e7")
    .verificationChecks.create({ to: "+916370302039", code: otp })
    .then((verification) => {
      res.status(200).json({
        success: true,
        message: verification.status,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: verification.status,
      });
    });
};
