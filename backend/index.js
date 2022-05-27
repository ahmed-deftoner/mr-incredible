const express = require('express');
const {makeAngry}=require('./angry');
const { makeCanny } = require('./canny');
const { makeUncanny } = require('./uncanny');
const app = express()
const port = 3000
const str = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/angry', function(req, res) {
  str[0] = req.body.s1;
  str[1] = req.body.s2;
  str[2] = req.body.s3;
  str[3] = req.body.s4;
  str[4] = req.body.s5;
  str[5] = req.body.s6;
  str[6] = req.body.s7;
  str[7] = req.body.s8;
  str[8] = req.body.s9;
  str[9] = req.body.s10;


  res.send({
    's1': str[0],
    's2': str[1],
    's3': str[2]
  });
  makeAngry(str)
});

app.post('/api/canny', function(req, res) {
  str[0] = req.body.s1;
  str[1] = req.body.s2;
  str[2] = req.body.s3;
  str[3] = req.body.s4;
  str[4] = req.body.s5;
  str[5] = req.body.s6;
  str[6] = req.body.s7;
  str[7] = req.body.s8;
  str[8] = req.body.s9;
  str[9] = req.body.s10;


  res.send({
    's1': str[0],
    's2': str[1],
    's3': str[2]
  });
  makeCanny(str)
});

app.post('/api/uncanny', function(req, res) {
  str[0] = req.body.s1;
  str[1] = req.body.s2;
  str[2] = req.body.s3;
  str[3] = req.body.s4;
  str[4] = req.body.s5;
  str[5] = req.body.s6;
  str[6] = req.body.s7;
  str[7] = req.body.s8;
  str[8] = req.body.s9;
  str[9] = req.body.s10;


  res.send({
    's1': str[0],
    's2': str[1],
    's3': str[2]
  });
  makeUncanny(str)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
http.createServer(function (req, res) {
  var path = 'angry.mp4';
  var stat = fs.statSync(path);
  var total = stat.size;
  if (req.headers['range']) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total-1;
    var chunksize = (end-start)+1;
    console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

    var file = fs.createReadStream(path, {start: start, end: end});
    res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
    file.pipe(res);
  } else {
    console.log('ALL: ' + total);
    res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
    fs.createReadStream(path).pipe(res);
  }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/