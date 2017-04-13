var factor = 0.6;
var x = 10;
var iter = 0;
//var y = 50;
function setup() {
  createCanvas(500,500);
  stroke(155);
  strokeWeight(2);
  }

function draw() {
  background(41);
  rectMode(CENTER);
  translate(width/2,height);
  branch(-0.4*height);
  }

function branch(y) {
  //y = map(mouseY,600,0,0.5*y,1.2*y);
  iter++;
  strokeWeight(1);
  angle=map(mouseX,0,700,0.1*PI,0.5*PI);
  line(0,0,0,y);

  translate(0,y);
  push();
  rotate(angle);
  strokeWeight(map(iter,4,0,0,3));
  line(0,0,0,y/2);
  if(abs(y)>2){
      branch(0.6*y);
    }
  pop();

  push();
  rotate(-angle);
  line(0,0,0,y/2);
  if(abs(y)>2){
      branch(0.6*y);
    }
  if(abs(y)<2){
    ellipse(0,0,2,2);
  }
  pop();
}
