const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });

// Home route
app.get("/", (req, res) => {
  res.send("RoadWatch AI Backend is running!");
});

// Report API
app.post("/api/reports", (req, res) => {
  const { damageType, latitude, longitude } = req.body;

  console.log("New Road Damage Report:");
  console.log("Damage Type:", damageType);
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);

  res.json({
    success: true,
    message: "Road damage report submitted successfully!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `RoadWatch AI Backend running on http://localhost:${PORT}`
  );
});