const mongoose = require("mongoose");

const dotenv = require("dotenv");

const connectToDatabase = () => {
    mongoose.connect(process.env.mongoURI).then((data) => {
        console.log(`MongoDB Connected with Server : ${data.connection.host}`)
    })

}

module.exports = connectToDatabase;