let canvas = document.getElementById('drawingCanvas');
let ctx = canvas.getContext('2d');


let isDrawing = false;
let startX = 0;
let startY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
}
   