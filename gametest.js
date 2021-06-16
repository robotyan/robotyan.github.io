var saveCanvas;

function setup(){
  ...
  saveCanvas =  createGraphics(height, height);
}

function draw(){
  ...
}

function keyPressed() {
  if (key == 's') {
    let c = get(width/2-height/2,0, height, height);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, frameCount+".png");
  }
}
