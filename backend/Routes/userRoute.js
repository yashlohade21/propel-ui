const express = require("express");
const { registerUser } = require("../Controllers/userController");
const userRouter = express.Router();

// userRouter.route("/").get(registerUser);
// userRouter.route("/:id").get(registerUser);
userRouter.route("/").post(registerUser);
userRouter.route("/:id").patch(registerUser);
// userRouter.route("/:id").delete(registerUser);

module.exports = userRouter;
