/*
	mouseDragged
*/
var len = 60
var time = new Array(1);
var posX = new Array(1);
var posY = new Array(1);
function setup() {
	createCanvas(800, 400);
  // frameRate(30);
	background(255);
  // setInterval(shift, 50);
  Pd.start();
  Pd.send("play",[true]);
}

/* 
	when the mouse button is pressed and moving (draart	draw an ellipse 
*/

function popPoint() {
    posX.pop();
    posY.pop();
    time.pop()
}

function draw() {
  background(255);
  if (millis() - time[time.length-1] >= 500) {
    popPoint();
  }
  var i = 0;
  for (i = time.length; i >= 0; i--) {
    noStroke();
    ecolor=i*6;
    constrain(ecolor,0,255);
    fill(ecolor);
	ellipse(posX[i], posY[i], i>10 ? 30-i/2 : i*2);
  }
}

function mouseDragged() {
  if (posX.length >= 50) {
    popPoint();
  }
  posX.unshift(mouseX);
  posY.unshift(mouseY);
  time.unshift(millis())
}