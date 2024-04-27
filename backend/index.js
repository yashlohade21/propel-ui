require("dotenv").config();
const express = require("express"); // Importing the Express Framework/library
var cors = require("cors");

const otpRouter = require("./Routes/otpRoute");
const userRouter = require("./Routes/userRoute");

const connectToDatabase = require("./Config/database");
connectToDatabase();

const app = express(); // app as a Express Application
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json()); // Middlewere to use body of Request //
// Available Routes //
app.get("/", (req, res) => {
  res.send("We are live from Backend at Propel EdTech");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/otp", otpRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
