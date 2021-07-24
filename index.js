const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listsRoute = require("./routes/lists");
require("./database");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listsRoute);

app.listen(8800, () => {
    console.log("Backend server is running");
});
