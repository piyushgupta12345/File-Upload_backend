const express = require("express");
const router = express.Router();

// import controllers files
const {localfileUpload} = require("../controllers/Fileupload");

// define routes
router.post('/localFileUpload', localfileUpload)

// export router
module.exports = router;