//create variables 
var canvas = document.getElementById('circle_mousedown');
var context = canvas.getContext('2d');
var draggingLines = false;
var dragging = false;
var rect = {}; //object rect
var shapes = [];
var mouseX, mouseY;
var snapshot;


//set canvas with the height and width of the browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//-------------------------------------------END SET VARIABLES-------------------------------------------------------------------------

//function to get the data of the images drawn on the canvas 
function takeSnapshot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

//function to store the data of the images drawn on the canvas
function restoreSnapshot() {
    context.putImageData(snapshot, 0, 0);
}

//draw function to allow users to draw on canvas 
var draw = function (e) {
    if (draggingLines) {
        context.beginPath();
        context.moveTo(e.clientX, e.clientY - canvas.offsetTop);
        context.lineTo(e.clientX, e.clientY - canvas.offsetTop);
        context.stroke();
        context.arc(e.clientX, e.clientY - canvas.offsetTop, radius, 0, Math.PI * 2);
        context.fill();
    }
}
//create rectangle shapes 
var createShape = function (e) {
    if (dragging) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        rect.w = (e.pageX - this.offsetLeft) - rect.startX;
        rect.h = (e.pageY - this.offsetTop) - rect.startY;
        restoreSnapshot();
        context.fillRect(rect.startX, rect.startY, rect.w, rect.h);
    }
}

//start drawing when mouse down 
var engage = function (e) {
    draggingLines = true;
    takeSnapshot();
    
}

//start creating shapes when mouse down 
var engageShape = function (e) {
    rect.startX = e.pageX - this.offsetLeft;
    rect.startY = e.pageY - this.offsetTop;
    dragging = true;
    takeSnapshot();
}

//stop drawing when mouse up 
var disengage = function () {
    draggingLines = false;
    //reset current path
    //otherwise old lines will be connected to new ones 
    context.beginPath();

}

//stop drawing when mouse up 
var disengageShapes = function () {
    dragging = false;
    //reset current path
    //otherwise old shapes will be connected to new shapes 
    context.beginPath();

}


function drawLines() {
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', disengage);
    canvas.addEventListener('mousedown', engage);
    
}

function drawShapes() {
    canvas.addEventListener('mousemove', createShape);
    canvas.addEventListener('mouseup', disengageShapes);
    canvas.addEventListener('mousedown', engageShape);
}


//print the positions of the mouse of user on console of browser
window.addEventListener('mousemove', function (e) {
    console.log("X:  " + e.clientX, "Y:  " + e.clientY);
});

//-----------------------------------------END ------------------------------------------------------------------------


//erases the whole canvas by pressing on the button "Erase" on control pannel 
function erase() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
