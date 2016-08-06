var express = require('express');
var app = express();
var fs = require('fs');
var multer = require('multer');
var upload = multer();

app.get('/', function(req, res){
    fs.readFile('index.html', 'utf8', function(err, file){
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(file);
    });
});

app.post('/file', upload.single('fileUpload'), function(req, res){
    res.end(JSON.stringify({'fileName': req.file.originalname, 'filesize': req.file.size}));
});

app.listen(process.env.PORT || 8080);