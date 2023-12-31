// create app
const express = require("express");
const app = express();

// PORT find karna
require("dotenv").config()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));


// import database
const db = require("./config/database");
db.connect();

// import cloudinary
const cloudinary = require("./config/cloudinary")
cloudinary.cloudinaryConnect();

// import and mount routes
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload)

// server start
app.listen(PORT,()=>{
    console.log(`server is started at the port ${PORT}`)
})

app.get("/",(req, res)=>{
    res.send('<h1>Hello</h1>')
})