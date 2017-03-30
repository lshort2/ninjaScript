var oldX =10;
var oldY =10;
var rot  =0;

function moveFire(objy) {
  var x = event.clientX;
  var y = event.clientY;

  var slope = (oldY - y)/(oldX - x);
  slope = Math.atan(slope) * 57.2;
  if(x < oldX) {
    slope+=180;
  }
  rot+= slope;

  move(objy) 
    .x(x-60) 
    .y(y-32) 
    .rotate(slope)
    .end();
  oldX =x;
  oldY =y;

  blowShitUp();
}

function blowShitUp() {
  //code
}

