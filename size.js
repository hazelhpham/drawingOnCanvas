var canvas = document.getElementById('circle_mousedown');
var context = canvas.getContext('2d');

 //initialize the radius variable with size = 4 
var radius = 4;
context.lineWidth = radius * 2;

//a function to increase the pen size 
function increase_fnct() {
    radius = radius + 1;
    context.lineWidth = radius * 2;
    document.getElementById('rad').innerHTML = "Current size : " + radius;
    document.getElementById('rad').fontWeight = 'bold';
}
//a function to decrease the pen size 
function decrease_fnct() {
    radius = radius - 1;
    context.lineWidth = radius * 2;
    document.getElementById('rad').innerHTML = "Current size : " + radius;
    document.getElementById('rad').fontWeight = 'bold';
}
//--------------------------------------END -------------------------------------------------   
