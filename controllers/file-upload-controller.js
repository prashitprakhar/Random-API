const _ = require('lodash');
//const multer = require('multer');
const { FileUploadModel } = require('./../models/file-upload-model');


exports.File_Upload_Controller = (req, res, next) => {
    console.log("Reachd here *******",req.file)
    let fileUploadData = new FileUploadModel({
        firstname : req.query.fname,
        lastname : req.query.lname,
        // path : req.file.buffer
        path : req.file.buffer
    });
    //let path = req.file.buffer
    //console.log("fileUploadData *********",fileUploadData)
    fileUploadData.save().then((data) => {
        //console.log("Data Saved")
        res.status(200).json({message : "Save Successful"});
    }, error => {
        res.status(400).json({Error : "Error Occured"})
    })
    
}
