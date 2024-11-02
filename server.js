const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Connect to DB
connectDB();

// Console logging
app.use(logger("dev"));

// Middleware setup
app.set("view engine", "ejs");
app.set(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set routes
app.use("/", mainRoutes);

// Server running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
})