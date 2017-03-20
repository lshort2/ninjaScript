function moveFire(objy) {
  var x = event.clientX;
  var y = event.clientY;
  move(objy) 
    .x(x-60) 
    .y(y-32) 
    .end();
}

