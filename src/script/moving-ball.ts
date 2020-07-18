export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const msForCycle = 1000 / 60;
const [w, h] = [canvas.width, canvas.height];

type Point = {
    x: number;
    y: number;
};
type Ball = Point & {
    radius: number;
};
type Size = {
    width: number;
    height: number;
};
type State = {
    size: Size;
    ball: Ball;
}

const update = (state: State): State => {
    const newState = { ...state };
    newState.ball = {
        x: state.ball.x,
        y: state.ball.y - 1,
        radius: state.ball.radius,
    }
    return newState
};

const render = (ctx: CanvasRenderingContext2D, state: State) => {
    ctx.clearRect(0, 0, w, h);

    const center: Point = {
        x: w / 2,
        y: h / 2,
    }
    const ballScaleRate = 10;

    let ball: Ball = {
        x: center.x + state.ball.x,
        y: center.y + state.ball.y,
        radius: state.ball.radius * ballScaleRate
    };
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.stroke();
};

let state: State = {
    size: {
        width: w,
        height: h,
    },
    ball: {
        radius: 1,
        x: 0,
        y: 0,
    }
}
setInterval(() => {
    state = update(state);
    render(ctx, state);
}, msForCycle);
