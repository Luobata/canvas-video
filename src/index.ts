import { setConfig } from './lib/config';

export default (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    setConfig({
        canvas,
        ctx,
    });
};
