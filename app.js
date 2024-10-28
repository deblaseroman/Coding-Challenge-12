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
   
function draw(e) {
    if (!isDrawing) return;

    const selectedTool = document.querySelector('input[name="tool"]:checked').value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    ctx.beginPath();

    //line tool
    if (selectedTool === 'line') {
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(e.offsetX, e.offsetY);
    } 
    //rectangle
    else if (selectedTool === 'rectangle') {
        
        const width = e.offsetX - startX;
        const height = e.offsetY - startY;
        ctx.strokeRect(startX, startY, width, height);
    } 
    //circle
    else if (selectedTool === 'circle') {
        
        const radius = Math.sqrt(
            Math.pow(e.offsetX - startX, 2) + 
            Math.pow(e.offsetY - startY, 2)
        );
        ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    }

    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false
}