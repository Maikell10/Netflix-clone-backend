const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
require("./database");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("Backend server is running");
});
