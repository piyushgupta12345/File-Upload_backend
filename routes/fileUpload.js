const express = require("express");
const router = express.Router();

// import controllers files
const {localfileUpload, imageUpload} = require("../controllers/fileUpload");

// define routes
router.post('/localFileUpload', localfileUpload)
router.post('/imageUpload', imageUpload)

// export router
module.exports = router;