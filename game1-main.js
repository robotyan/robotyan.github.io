/////////////////////////////game page/////////////////////////////
// 0 - coverDraw
// 1 - prefaceDraw
// 2 - gameDraw
// --> brushMode
// 3 - endDraw
/////////////////////////////////////////////////////////////////////////////////



let page = 0;
let pageCount = 0;
///////////////////////////img///////////////////////////
let cover;
let preface;
let bg;
let parts = [];
let btnFinish;
let btnDownload;

///////////////////////////drag array///////////////////////////
let shape = [];

///////////////////////////paint///////////////////////////
let brushMode= 0;

///////////////////////////saveImg///////////////////////////
let gameCanvas;
var snapshot = [];

function preload() {
  cover = loadImage('../assets/WDWT-game1/WDWT-game1-cover.png');
  preface = loadImage('../assets/WDWT-game1/WDWT-game1-preface.png');
  bg = loadImage('../assets/WDWT-game1/WDWT-game1-bg.png');
  btnFinish = loadImage('../assets/WDWT-game1/WDWT-game1-button-finish.png');
  btnDownload = loadImage('../assets/WDWT-game1/WDWT-game1-button-download.png');
  for (var i = 1; i < 10; i++) {
    parts[i] = loadImage('../assets/WDWT-game1/WDWT-game1-parts-0' + i + '.png');
  }
  for (var i = 10; i < 13; i++) {
    parts[i] = loadImage('../assets/WDWT-game1/WDWT-game1-parts-' + i + '.png');
  }
}


function setup() {
   gameCanvas = createCanvas(500, 500);
 //   for (var i = 1 ; i < 13 ; i++){
 //   movePartX[i] = int(random(400));
 //   movePartY[i] = int(random(400));
 // }

 for(var i = 1;i <13 ; i++){
shape[i] = new Draggable(parts[i], random(50,450), random(50,450), parts[i].width, parts[i].height);
 }

}

function draw() {
  // image(cover, 0, 0, 500, 500);
  // endDraw();

  //page
  switch (page) {
    case 0:
      coverDraw();
      break;
    case 1:
      prefaceDraw();
      break;
    case 2:
      gameDraw();
      break;
    case 3:
      endDraw();
      break;
    case 4:
      thankyouDraw();
      break;
    default:
  }

}


/////////////////////////////cover/////////////////////////////
function coverDraw(){
  pageCount++;
  background(255);
  image(cover, 0, 0, 500, 500);

  if (mouseIsPressed && pageCount >10){
    page = 1;
    pageCount=0;
  }
}


/////////////////////////////preface/////////////////////////////
function prefaceDraw(){
  pageCount++;
  background(255);
  image(preface, 0, 0, 500, 500);

  if (mouseIsPressed && pageCount >10){
    page = 2;
    pageCount=0;
  }
}

/////////////////////////////game/////////////////////////////
function gameDraw(){
  pageCount++;
  background(255);
  image(bg, 0, 0, 500, 500);
  // draggingImg();
  for(var i = 1;i <13 ; i++){
    shape[i].over();
    shape[i].update();
    shape[i].show();
}

  // for (var i = 1; i < 10; i++) {
  //   image(parts[i], 10*(i), 50*i);
  // }


  if (mouseX > 350 && mouseX < 500 && mouseY > 500-48 && mouseY < 500 && mouseIsPressed && pageCount >10){
    // takesnap();
    page = 3;
    pageCount=0;

  } else {
    image(btnFinish, 500-150, 500-48);
  }
}


function mousePressed() {
    for(var i = 1;i <13 ; i++){
      shape[i].pressed();
      shape[i].pressed();
  }
}

function mouseReleased() {
  for(var i = 1;i <13 ; i++){
    shape[i].released();
    shape[i].released();
  }
}

// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
  constructor(img, x, y, w, h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.img = parts;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {


    } else if (this.rollover) {
      angleMode(DEGREES);
// push();
// translate(width / 2, height / 2);
// imageMode(CENTER);
      // rotate(45);
    } else {
      fill(175, 200);
    }
    // rect(this.x, this.y, this.w, this.h);
    // image(bg, this.x, this.y, this.w, this.h);

// translate(this.x, this.y);
    image(this.img, this.x, this.y, this.w, this.h);
    // pop();
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}




/////////////////////////////end/////////////////////////////
function endDraw(){
  pageCount++;
  // background(255);
  // if(pageCount == 0){
  //   //print(snapshot.length);
  // image(snapshot, 0, 0, 500, 500);
  // }
  // image(preface, 0, 0, 500, 500);
  // image(btnDownload, 500-207, 500-85);

  if (mouseX > 500-207 && mouseX < 500 && mouseY > 500-85 && mouseY < 500 && mouseIsPressed && pageCount >10){
      saveCanvas(snapshot,"screenshot","png");
    // page = 4;
    pageCount = 0;

  } else {
    image(btnDownload, 500-207, 500-85);
  }
}

function thankyouDraw(){
  // saveCanvas(snapshot,"screenshot","png");
  image(snapshot, 0, 0, 500, 500);
  // page = 0;

}
