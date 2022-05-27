const { timeStamp } = require('console');
var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    ffmpeg = require('fluent-ffmpeg'),
    axios = require('axios');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

// make sure you set the correct path to your video file
ffmpeg.setFfmpegPath(ffmpegPath);

function makeCanny(str){
    var proc = ffmpeg('canny.mp4')
            .videoFilters({
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[0],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,0,2)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[1],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,2,5)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[2],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,5,9)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[3],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,9,14)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[4],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,14,18)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[5],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,18,23)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[6],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,23,28)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[7],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,28,33)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[8],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,33,39)',
            shadowcolor: 'black',
            shadowx: 2,
            shadowy: 2
        }
        },{
        filter: 'drawtext',
        options: {
            fontfile:'font.ttf',
            text: str[8],
            fontsize: 20,
            fontcolor: 'white',
            x: '(main_w/2-text_w/2)',
            y: 50,
            enable:'between(t,39,49)',
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
}

module.exports.makeCanny = makeCanny;