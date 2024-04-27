const express = require("express");
// const { registerUser } = require("../Controllers/userController");
const otpRouter = express.Router();
const { sendOtp, verifyOtp } = require("../Controllers/otpController");

// otpRouter.route("/verify").get(registerUser);
otpRouter.route("/").post(sendOtp);
otpRouter.route("/verify").post(verifyOtp);
// userRouter.route("/:id").patch(registerUser);
// userRouter.route("/:id").delete(registerUser);

module.exports = otpRouter;
