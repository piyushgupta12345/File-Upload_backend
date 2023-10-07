// import model
const File = require("../models/File")
const cloudinary = require('cloudinary').v2


exports.localfileUpload = async (req, res) => {
    try {
        // fetch file
        const file = req.files.file
        console.log("files:", file)

        // define path
        let path = __dirname + "/files/" + Date.now()
        console.log("path:---", path)

        file.mv(path, (err) => {
            console.log("err:", err)
        })

        res.status(200).json(
            {
                success: true,
                msg: "image upload successfully"
            }
        )

    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                success: false,
                msg: "data not fetch"
            }
        )
    }

}

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
    const options = {folder}
    options.resource_type = "auto"
    await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image upload ka handler
exports.imageUpload = async (req, res) => {
    try {
        // data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        // Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("fileType",fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported'
            })
        }

        // file format supported hai
        console.log("uploading to went wrong")
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        // db me entry save krni h
        const fileData = await File.create({
            name, 
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Image Sucessfully Uploaded",
        })

    } catch (error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong'
        })
    }
}

// video upload ka handler
exports.videoUpload = async (req, res) => {
    try {
        // data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;
        console.log(file);

        // Validation
        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("fileType",fileType)

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported'
            })
        }

        // file format supported hai
        console.log("uploading to went wrong")
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        // db me entry save krni h
        // const fileData = await File.create({
        //     name, 
        //     tags,
        //     email,
        //     imageUrl:response.secure_url,
        // })

        res.json({
            success:true,
            // imageUrl:response.secure_url,
            message:"Video Sucessfully Uploaded",
        })

    } catch (error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong'
        })
    }
}