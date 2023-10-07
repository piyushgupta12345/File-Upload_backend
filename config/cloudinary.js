// import cloudinary
const cloudinary = require('cloudinary').v2

require("dotenv").config()

exports.cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.Cloud_Name,
            cloud_key: process.env.Cloud_KEY,
            cloud_secret: process.env.Cloud_SECRET
        })
    } catch (error) {
        console.log("Cloudinary: ",error);
    }
}