// import model
const File = require("../models/files")

exports.localfileUpload = async(req, res) =>{
    try {
        // fetch file
        const file = req.files.file
        console.log("files:", file)

        // define path
        let path = __dirname + "/files/" + `.${file.name.split('.')[1]}`
        console.log("path:---", path)

        file.mv(path,(err)=>{
            console.log(err)
        })

        res.status(200).json(
                {
                    success:true,
                    msg:"image upload successfully"
                } 
        )

    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                success:false,
                msg:"data not fetch"
            }
        )
    }

}