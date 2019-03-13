var express = require('express');
const bodyParser = require('body-parser');
const FileUploadController = require('./../controllers/file-upload-controller');
var router = express.Router();
//const multer = require('multer');
//const { FileUploadModel } = require('./../models/file-upload-model');
//const { TestMongooseConnectionModel } = require('./../models/test-mongoose-connection');

// const errorMiddleWare = (req, res, next) => {
//     res.status(400).json({ErrorMessage : "error occured"})
// }

router.post('/upload', FileUploadController.File_Upload_Controller)


module.exports = router;
