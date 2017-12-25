import { setConfig, config } from 'LIB/config';
import convert from 'CONVERT/frame';

declare const GIF: {
    new (config: object): any;
}

const beginCap = function beginCap() {
    if (!this.video.ended && this.beginFlag) {
        const frame = this.getFrame();
        this.frameList.push(frame);
        window.requestAnimationFrame(() => {
            beginCap.call(this);
        });
    } else {
        this.end();
    }
};

const getGif = (frameList: Array<CanvasRenderingContext2D>) => {
    const gif = new GIF({
        workers: 2,
        quality: 10,
    });

    for (let i of frameList) {
        gif.addFrame(i, {
            copy: true,
        });
    }

    gif.on('finished', function(blob: Blob) {
        window.open(URL.createObjectURL(blob));
    });

    gif.render();
};

export default class Video {
    beginFlag: boolean;
    frameList: Array<CanvasRenderingContext2D>;
    video: HTMLVideoElement;

    constructor (canvas: HTMLCanvasElement, video: HTMLVideoElement) {
        const ctx = canvas.getContext('2d');
        const offCanvas = document.createElement('canvas');
        const offCtx = offCanvas.getContext('2d');
        this.beginFlag = false;
        this.frameList = [];
        this.video = video;
        console.log(this);

        setConfig({
            canvas,
            ctx,
            offCanvas,
            offCtx,
        });

    };

    getFrame () {
        const width = this.video.width || config.canvas.width;
        const height = this.video.height || config.canvas.height;
        config.offCanvas.width = width;
        config.offCanvas.height = height;
        config.offCtx.drawImage(this.video, 0, 0, width, height);

        //return config.offCtx.getImageData(0, 0, width, height);
        return config.offCanvas;
    };


    begin() {
        this.beginFlag = true;
        beginCap.call(this);
    };

    end () {
        this.beginFlag = false;

        return getGif(this.frameList);
    };
};
