const express = require("express");
require("dotenv").config();

const connectToDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const requestTimestamp = require("./middlewares/requestTimestamp");

const publisherRoutes = require("./routes/publisherRoutes");
const gameRoutes = require("./routes/gameRoutes");

const app = express();

app.use(express.json());
connectToDB();

app.use("/api/publishers", publisherRoutes);
app.use("/api/games", gameRoutes);
app.use(requestTimestamp);
app.use(errorHandler);

app.get("/test", (req, res) => {
  res
    .status(200)
    .json({ msg: "Server running", timestamp: req.requestTimestamp });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on https://localhost/${PORT}`);
});
