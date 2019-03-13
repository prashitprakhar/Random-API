const { mongoose } = require('./../db-connection/mongoose-connection');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

const FileUploadSchema = new Schema({
    firstname : {
        type : String,
        trim : true
    },
    lastname : {
        type : String,
        trim : true
    },
    path : { 
        type: Buffer
    }
});

const FileUploadModel = mongoose.model('FileUpload', FileUploadSchema);

module.exports = { FileUploadModel };

    // productid : {
    //     type: Number,
    //     required : true,
    //     trim : true,
    //     minlength : 1
    // },
    // productname : {
    //     type : String,
    //     required : true,
    //     minlength : 3,
    //     trim : true
    // },
    // quantity : {
    //     type : Number,
    //     required : true,
    //     minlength : 1,
    //     trim : true
    // },
    // status : {
    //     type : Boolean,
    //     default : false
    // },
    // timestamp : {
    //     type : Date,
    //     default : Date.now
    // },
    // completedAt : {
    //     type : Date,
    //     required : false,
    //     default : null
    // }