interface canvasConfig {
    canvas: HTMLCanvasElement | null,
    ctx: CanvasRenderingContext2D | null,
    offCanvas: HTMLCanvasElement | null,
    offCtx: CanvasRenderingContext2D | null,
};
export const config: canvasConfig = {
    canvas: null,
    ctx: null,
    offCanvas: null,
    offCtx: null,
};
export const setConfig = (conf: canvasConfig) => {
    Object.assign(config, conf);
};
