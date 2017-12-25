import Video from '../src/index.ts';

var canvas = document.getElementById('canvas');
var video = document.getElementById('video');
var begin = document.getElementById('begin');
var end = document.getElementById('end');
var convert = new Video(canvas, video);

begin.addEventListener('click', () => {
    video.play();
    convert.begin();
});
end.addEventListener('click', () => {
    video.pause();
    convert.end();
});
