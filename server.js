var tesseract = require('node-tesseract');
var multer = require('multer')
var express = require('express')
var uuid = require('uuid/v1');
var storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb (null, 'labels/')
  },
  filename: function(req, file, cb) {
    cb (null, `${uuid()}_${file.originalname}`)
  }
})
var upload = multer({storage: storage})
var app = express()

app.get('/', function(req, res) {
  res.send('nothing here :(')
});

app.post('/labels', upload.single('label'), function(req, res) {
  tesseract.process(req.file.path, function(err, text) {
    if (err) {
      return res.status(500).send({ "error": err })            
    }
    return res.status(200).send({ "text": text })
  });
});

app.listen(3000, function() {
  console.log('server is running...')
});