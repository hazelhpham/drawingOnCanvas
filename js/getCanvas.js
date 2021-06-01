

var canvas = document.getElementById('circle_mousedown');
var context = canvas.getContext('2d');
function getCanvasCoordinates(event){
    var x = event.clientX - canvas.getBoundingClientRect().left, 
    var y = event.clientX - canvas.getBoundingClientRect().top, 
    return {x:x, y:y};
}
