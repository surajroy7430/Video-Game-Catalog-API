const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};

module.exports = connectToDB;
