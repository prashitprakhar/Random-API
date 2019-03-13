const appRouterFactory = require('./routes/router-factory');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 8080;
const multer = require('multer');

const app = express();

const upload = multer({
    //dest : 'files', //On Removing this, the binary data is passed to the api for upload to the db
    limits : {
        fileSize : 10000000
    },
    fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg)$/)) {
            return callback(new Error('Please upload a WORD document'))
        }
        callback(undefined, true)
    }
})



// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(upload.single('upload'))
//app.use(errorMiddleWare);

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//app.use(express.static(__dirname+'dist/faasos-spa'));

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('dist/faasos-spa'));
// }


app.use('', appRouterFactory);

// app.all('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/dist/faasos-spa','index.html'));
// })

app.listen(port, () => {
    console.log("Listening on port ",port);
});