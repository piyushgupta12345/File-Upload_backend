// import mongoose
const mongoose = require("mongoose");

require("dotenv").config()

// mongoose connect to db
exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("db is connect successfully");
        })
        .catch((err) => {
            console.log("some error");
            console.error(err);
            process.exit(1);
        })
}
