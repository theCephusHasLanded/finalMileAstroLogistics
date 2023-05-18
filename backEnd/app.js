const express = require("express");
const app = express();
const cors = require("cors");
const planetsController = require("./Controllers/PlanetsController.js");
const reviewsController = require("./Controllers/ReviewsController.js");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/snacks", planetsController);
app.use("/reviews", reviewsController);

app.get("/", (_, res) => {
  res.send("Welcome to Final Mile Astro Logistics!<br/> Stay Tuned for your Packages!");
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "oopsie! Try Again" });
});

module.exports = app;