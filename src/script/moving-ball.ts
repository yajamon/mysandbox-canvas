export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const msForCycle = 1000 / 60;
const [w, h] = [canvas.width, canvas.height];

type Point = {
    x: number;
    y: number;
};
type Vector = {
    x: number;
    y: number;
}
type Physics = {
    a: Vector // acceleration
    v: Vector // velocity
}
type Ball = Point & Physics & {
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

type DiffTime = number;
const update = (state: State, dtMilliseconds: DiffTime): State => {
    const dt = dtMilliseconds / 1000;
    const newState = { ...state };
    newState.ball = {
        x: state.ball.x + state.ball.v.x * dt + state.ball.a.x * Math.pow(dt, 2) / 2,
        y: state.ball.y + state.ball.v.y * dt + state.ball.a.y * Math.pow(dt, 2) / 2,
        radius: state.ball.radius,
        v: {
            x: state.ball.v.x + state.ball.a.x * dt,
            y: state.ball.v.y + state.ball.a.y * dt,
        },
        a: state.ball.a,
    }
    // safety
    if (newState.ball.x - newState.ball.radius < 0) {
        newState.ball.x = 0 + newState.ball.radius;
        newState.ball.v.x = newState.ball.v.x * -1;
        newState.ball.a.x = newState.ball.a.x * -1;
    }
    if (newState.ball.x + newState.ball.radius > newState.size.width) {
        newState.ball.x = newState.size.width - newState.ball.radius;
        newState.ball.v.x = newState.ball.v.x * -1;
        newState.ball.a.x = newState.ball.a.x * -1;
    }
    if (newState.ball.y - newState.ball.radius < 0) {
        newState.ball.y = 0 + newState.ball.radius;
        newState.ball.v.y = newState.ball.v.y * -1;
        newState.ball.a.y = newState.ball.a.y * -1;
    }
    if (newState.ball.y + newState.ball.radius > newState.size.height) {
        newState.ball.y = newState.size.height - newState.ball.radius;
        newState.ball.v.y = newState.ball.v.y * -1;
        newState.ball.a.y = newState.ball.a.y * -1;
    }
    return newState
};

const render = (ctx: CanvasRenderingContext2D, state: State) => {
    ctx.clearRect(0, 0, w, h);

    const origin: Point = {
        x: 0,
        y: h,
    }
    const reverseAxisX = false;
    const reverseAxisY = true;
    const transformX = (x: number) => origin.x + (reverseAxisX ? -x : x);
    const transformY = (y: number) => origin.y + (reverseAxisY ? -y : y);

    const ball: Ball = { ...state.ball };
    ball.x = transformX(state.ball.x);
    ball.y = transformY(state.ball.y);
    ball.radius = state.ball.radius;

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
        radius: 10,
        x: w / 2,
        y: h / 2,
        v: { x: 1.0, y: 5.0 },
        a: { x: 10.0, y: 5.0 },
    }
}
setInterval(() => {
    state = update(state, msForCycle);
    render(ctx, state);
}, msForCycle);
