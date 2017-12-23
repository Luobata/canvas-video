import init from '../src/index.ts';

var canvas = document.getElementById('canvas');
var video = document.getElementById('video');
var anlyse = document.getElementById('anlyse');
var convert = init(canvas, video);

anlyse.addEventListener('click', () => {
    convert();
});
