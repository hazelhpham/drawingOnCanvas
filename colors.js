
//create variables 
var canvas = document.getElementById('circle_mousedown');
var context = canvas.getContext('2d');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');
var pink = document.getElementById('pink');
var gray = document.getElementById('gray');


/*
when users choose yellow on the panel, this function will add effects onto the yellow 
box on the tool bar. 
the color of the pen will change into yellow.
*/
function choose_yellow() {
    if (yellow) {
        context.fillStyle = 'yellow';
        
        context.strokeStyle = 'yellow';
        context.shadowBlur = 5;
        context.shadowColor = "lightgray";
        yellow.style.boxShadow = '1px 1px 3px 3px white';
        green.style.boxShadow = '0px 0px 0px 0px white';
        gray.style.boxShadow = '0px 0px 0px 0px white';
        pink.style.boxShadow = '0px 0px 0px 0px white';
    }
}
/*
when users choose green on the panel, this function will add effects onto the green
box on the tool bar. 
the color of the pen will change into green.
*/
function choose_green() {
    if (green) {
        context.fillStyle = 'green';
       
        context.strokeStyle = 'green';
        context.shadowBlur = 5;
        context.shadowColor = "lightgray";
        green.style.boxShadow = '1px 1px 3px 3px white';
        gray.style.boxShadow = '0px 0px 0px 0px white';
        pink.style.boxShadow = '0px 0px 0px 0px white';
        yellow.style.boxShadow = '0px 0px 0px 0px white';
    }
}
/*
when users choose gray on the panel, this function will add effects onto the gray 
box on the tool bar. 
the color of the pen will change into gray.
*/
function choose_gray() {
    if (gray) {
        context.fillStyle = 'gray';
        
        context.strokeStyle = 'gray';
        context.shadowBlur = 5;
        context.shadowColor = "lightgray";
        gray.style.boxShadow = '1px 1px 3px 3px white';
        pink.style.boxShadow = '0px 0px 0px 0px white';
        yellow.style.boxShadow = '0px 0px 0px 0px white';
        green.style.boxShadow = '0px 0px 0px 0px white';
    }
}
/*
when users choose pink on the panel, this function will add effects onto the pink 
box on the tool bar. 
the color of the pen will change into pink.
*/
function choose_pink() {
    if (pink) {
        context.fillStyle = 'pink';
       
        context.strokeStyle = 'pink';
        context.shadowBlur = 5;
        context.shadowColor = "lightgray";
        pink.style.boxShadow = '1px 1px 3px 3px white';
        yellow.style.boxShadow = '0px 0px 0px 0px white';
        green.style.boxShadow = '0px 0px 0px 0px white';
        gray.style.boxShadow = '0px 0px 0px 0px white';
    }
}


/////---------------------------------------------END-------------------------------------------------   
