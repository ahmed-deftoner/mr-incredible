var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    ffmpeg = require('fluent-ffmpeg'),
    axios = require('axios');
    const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// make sure you set the correct path to your video file
ffmpeg.setFfmpegPath(ffmpegPath);

var proc = ffmpeg('angry.mp4')
        .videoFilters({
      filter: 'drawtext',
      options: {
        fontfile:'font.ttf',
        text: 'THIS IS TEXT',
        fontsize: 20,
        fontcolor: 'white',
        x: '(main_w/2-text_w/2)',
        y: 50,
        shadowcolor: 'black',
        shadowx: 2,
        shadowy: 2
      }
    })
        .on('end', function () {
            console.log('file has been converted succesfully');
        })
        .on('error', function (err) {
            console.log('an error happened: ' + err.message);
        })
        // save to file
        .save('./out.mp4'); 

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
console.log('Server running at http://127.0.0.1:1337/');