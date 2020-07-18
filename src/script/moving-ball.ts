export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const msForCycle = 1000 / 60;
const [w, h] = [canvas.width, canvas.height];

type State = {
}

const update = (state: State): State => {
    const newState = { ...state };
    return newState
};

const render = (ctx: CanvasRenderingContext2D, state: State) => {
    ctx.clearRect(0, 0, w, h);
};

let state: State = {
}
setInterval(() => {
    state = update(state);
    render(ctx, state);
}, msForCycle);
