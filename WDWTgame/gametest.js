//https://p5js.org/examples/structure-create-graphics.html
var video;

function setup(){
  createCanvas(600, 500);
  video = createCapture(VIDEO);
  video.size(400, 300);
  // video.hide();
}

function draw(){
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  image(video,mouseX- 100, mouseY, 60, 60);
}

 function mousePressed(){
   fill(0);
   rect(0, 0, width, height);
 }
