const express = require("express");
const router = express.Router();

// import controllers files
const {localfileUpload, imageUpload,videoUpload} = require("../controllers/fileUpload");

// define routes
router.post('/localFileUpload', localfileUpload)
router.post('/imageUpload', imageUpload)
router.post('/videoUpload', videoUpload)

// export router
module.exports = router;