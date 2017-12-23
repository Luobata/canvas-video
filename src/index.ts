import { setConfig } from 'LIB/config';
import convert from 'CONVERT/frame';

export default (canvas: HTMLCanvasElement, video: HTMLVideoElement) => {
    const ctx = canvas.getContext('2d');
    setConfig({
        canvas,
        ctx,
    });
    return () => {
        convert(video);
    };
};
