import { config } from 'LIB/config';

let beginFlag = false;

export const getFrame = (video: HTMLVideoElement) => {
    const width = video.width || config.canvas.width;
    const height = video.height || config.canvas.height;
    config.offCanvas.width = width;
    config.offCanvas.height = height;
    config.offCtx.drawImage(video, 0, 0, width, height);

    return config.offCtx.getImageData(0, 0, width, height);
};

export const begin = (video: HTMLVideoElement) => {
    if (!video.ended) {
        beginFlag = true;
        const frame = getFrame(video);
    }
};

export const end = (video: HTMLVideoElement) => {
    beginFlag = false;
};

export default {
    begin,
    end,
    getFrame,
};
