const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  genre: {
    type: String,
    enum: ["RPG", "Action", "Adventure", "Strategy", "Sports"],
  },
  releaseDate: Date,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
    required: true,
  },
});

module.exports = mongoose.model("Game", gamesSchema);
