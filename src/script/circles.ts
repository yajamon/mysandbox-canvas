export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const w = canvas.width;
const h = canvas.height;

interface Circle {
    readonly radius: number;
}
interface Point {
    x: number;
    y: number;
}
class Entity implements Circle, Point {
    constructor(readonly radius: number, public x: number, public y: number) {
    }
}

const circles = new Array(10).fill(null).map(() => new Entity(10, w / 2, h / 2));

setInterval(() => {
    ctx.clearRect(0, 0, w, h);
    circles.map((circle) => {
        // -2 ~ 2の範囲で移動
        circle.x += Math.floor(Math.random() * 5 - 2);
        circle.y += Math.floor(Math.random() * 5 - 2);
        return circle;
    }).forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.stroke();
    });

}, 1000 / 60);
