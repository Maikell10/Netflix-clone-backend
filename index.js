const express = require("express");
const app = express();

require("./database");

app.listen(8800, () => {
    console.log("Backend server is running");
});
