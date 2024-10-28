let canvas = document.getElementById('drawingCanvas');
let ctx = canvas.getContext('2d');


let isDrawing = false;
let startX = 0;
let startY = 0;


canvas.onmousedown = function(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
};


canvas.onmousemove = function(e) {
    if (!isDrawing) return;


    let selectedTool = document.querySelector('input[name="tool"]:checked').value;
    
  
    let color = document.getElementById('colorPicker').value;
    ctx.strokeStyle = color;


    ctx.clearRect(0, 0, canvas.width, canvas.height);

 
    ctx.beginPath();
}
   