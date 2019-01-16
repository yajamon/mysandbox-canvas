export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

/* canvasの大きさはhtml上の属性で定義する
    * 何も指定しなかった場合は width:300 height:150 が初期値となる
    *
    * この数値は HTMLCanvasElementのプロパティ`width`,`height`によってアクセスできる
    */
for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const style = `rgb(${r}, ${g}, ${b})`;
        ctx.fillStyle = style;
        ctx.fillRect(x, y, 1, 1);
    }
}
