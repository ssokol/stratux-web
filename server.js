var express =   require("express");
var multer  =   require('multer');
var fs      =   require('fs');

var app      =  express();
var filepath =  "./uploads";
var htmlpath =  "/Users/ssokol/src/stratux/web/";
var port     =  3000;

// serve html out of the 'html' folder
app.use("/", express.static(htmlpath));

// Create a storage system for the uploader
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, filepath);
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

// Upload processor
var upload = multer({ storage : storage}).single('userUpload');

// API - post handler for the "upload" endpoint
app.post('/api/upload',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

// Validate that the upload directory exists
fs.stat(filepath, function(err, stat) {
	if (err) {
		if (err.errno == -2) {
			fs.mkdir(filepath, function(err) {
				startup();
			});
		}
	} else {
		startup();
	}
});

// Start the web server
function startup() {
	app.listen(port, function(){
			console.log("Working on port " + port);
	});
}

