const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = "green";
ctx.fillRect(50, 50, 50, 50);
