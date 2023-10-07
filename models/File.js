// import mongoose
const mongoose = require("mongoose");

// create a new file Schema
const fileSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
        },
        imageUrl:{
            type:String,
            required: true,
        },
        tags:{
            type:String,
        },
        email:{
            type:String,
        }
    }
)

module.exports = mongoose.model("File", fileSchema)