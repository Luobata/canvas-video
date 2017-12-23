import { config } from 'LIB/config';

export default (video: HTMLVideoElement) => {
    const width = video.width || config.canvas.width;
    const height = video.height || config.canvas.height;
    config.canvas.width = width;
    config.canvas.height = height;
    config.ctx.drawImage(video, 0, 0, width, height);
};
