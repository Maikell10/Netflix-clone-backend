const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO_URL, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB is connected");
    })
    .catch((err) => {
        console.log(err);
    });
