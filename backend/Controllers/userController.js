const User = require("../Models/User");
console.log(User);
// Register a User

exports.registerUser = async (req, res) => {
  const { name, email, phone, otp } = req.body;

  const user = await User.create({
    name,
    email,
    phone,
    otp,
  });

  return res.status(201).json({
    success: true,
    user,
  });
};
