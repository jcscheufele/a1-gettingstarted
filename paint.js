const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let strokeColor = '#226CA8'

let lineWidth = 5

let coord = { x: 0, y: 0 };

let colors = ['#226CA8','#66BAFF','#4BA8F6','#A86D11', '#F5B249']

let colorkey = 1
let widthkey = 5

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);
document.addEventListener("keypress", cycleColor)
document.addEventListener('wheel', cycleWidth)

function cycleColor(){
    strokeColor = colors[colorkey % 5];
    colorkey++
}

function cycleWidth(){
    lineWidth = widthkey%100 + 1;
    widthkey++
}

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
  
resize();

function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
}

function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

function stop() {
    document.removeEventListener("mousemove", draw);
}

function draw(event) {
    document.addEventListener("keypress", cycleColor)
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeColor;
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}