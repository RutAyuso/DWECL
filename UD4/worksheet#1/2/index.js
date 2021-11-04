/*
var x = null;
var y = null;

document.addEventListener('mousemove', actualiza, false);
document.addEventListener('mouseenter', actualiza, false);

function actualiza(e) {
  x = e.pageX;
  y = e.pageY;
  console.log(x, y);
}
*/


function locate(event){ // We are capturing the "event" object that the client (browser) is passing to the javascript file
  console.log(`Actual pos: ${event.pageX}, ${event.pageY}`);
}


// Load the window then begin executing the code

window.addEventListener('mousemove', locate); 