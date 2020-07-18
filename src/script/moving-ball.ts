export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const msForCycle = 1000 / 60;
const [w, h] = [canvas.width, canvas.height];

const render = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, w, h);
};

setInterval(() => {
    render(ctx);
}, msForCycle);
