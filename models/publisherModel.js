const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Name must be unique"],
  },
  location: String,
  yearEstablished: { type: Number, min: 1950 },
});

module.exports = mongoose.model("Publisher", publisherSchema);
