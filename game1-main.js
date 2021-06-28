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
let preface_EN;
let preface_CHI;
let bg;
let parts = [];
let btnFinish;
let btnDownload;
let btnRotate;
let btnRotateHighlighted;
let btnMove;
let btnMoveHighlighted;
///////
////
let lang = 0;
let isRotate = 0;
var angle = 0;
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
  preface_EN = loadImage('../assets/WDWT-game1/WDWT-game1-preface_EN.png');
  preface_CHI = loadImage('../assets/WDWT-game1/WDWT-game1-preface_CHI.png');
  bg = loadImage('../assets/WDWT-game1/WDWT-game1-bg.png');
  btnFinish = loadImage('../assets/WDWT-game1/WDWT-game1-button-finish.png');
  btnDownload = loadImage('../assets/WDWT-game1/WDWT-game1-button-download.png');
  btnRotate = loadImage('../assets/WDWT-game1/button_rotate.png');
  btnRotateHighlighted = loadImage('../assets/WDWT-game1/button_rotate_highlighted.png');
  btnMoveHighlighted = loadImage('../assets/WDWT-game1/move_arrows_highlighted.png');
  btnMove = loadImage('../assets/WDWT-game1/move_arrows.png');
  for (var i = 1; i < 10; i++) {
    parts[i] = loadImage('../assets/WDWT-game1/WDWT-game1-parts-0' + i + '.png');
  }
  for (var i = 10; i < 20; i++) {
    parts[i] = loadImage('../assets/WDWT-game1/WDWT-game1-parts-' + i + '.png');
  }
}


function setup() {
   gameCanvas = createCanvas(500, 500);
   if (outerWidth < 500){
    resizeCanvas(windowWidth, windowWidth);
  }
 //   for (var i = 1 ; i < 13 ; i++){
 //   movePartX[i] = int(random(400));
 //   movePartY[i] = int(random(400));
 // }

 for(var i = 1;i <20 ; i++){
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
  image(preface_CHI, 0, 0, 500, 500);

  var imgx = 300;
    var imgy = 300;
    if (mouseX > 420 && mouseX < 480 && mouseY > 420 && mouseY < 480 &&mouseIsPressed && pageCount >10){

      angle = angle + 5;
    }

  textSize(14);
  // text('中/ENG', 420, 50);

  if (mouseX > 420 && mouseX < 480 && mouseY > 30 && mouseY < 80 &&mouseIsPressed && pageCount >10 ){
    lang = (lang + 1)%2 ;
    pageCount=0;
  }
  if (lang == 0){
    image(preface_CHI, 0, 0, 500, 500);
    // textSize(32);
    // text('俊賢的移動城堡',50,90);
    // textSize(14);
    //
    // text('古俊賢作品的色彩及線條都有著強烈風格，成為這個遊戲的主要', 50, 120, 100, 200);
    // text('視覺元素，讓觀眾進入俊賢的創作世界，以他的視角觀察事物，', 50, 140, 100, 200);
    // text('並以他喜歡的幾何圖案創作，完成後可以下載及分享到社交平台。', 50, 160, 100, 200);
  } else {
    image(preface_EN, 0, 0, 500, 500);
    // textSize(32);
    // text('Chunyin’s Moving Castle',50,90);
    // textSize(14);
    //
    // text('The colors and lines of Chunyin’s works indicate a very strong and impressive style, which have developed as the main visual elements of this game, allowing audiences to enter Chunyin’s creative world, observing things from his perspective, and creating new artworks with geometric patterns that he likes, you can also download your works after collaging and share it on social platforms.', 50, 120, 420, 450);

  }
  fill('yellow');
  rectMode(CORNER);

  textAlign(CENTER);
  textSize(30);

  // text('開始/START', width/2, 280);
  textAlign(LEFT);

  if (mouseX > (width/2 -80)  && mouseX < (width/2+80) && mouseY > 240 && mouseY < 280 &&mouseIsPressed && pageCount >10 ){
    page = 2;
    pageCount=0;
  }
}

/////////////////////////////game/////////////////////////////
function gameDraw(){
  pageCount++;
  background(255);


  let n = map(pageCount, 20, 120, 0, 255);
  tint(255, n);
  image(bg, 0, 0, 500, 500);
  if (mouseX > 455  && mouseX < 455+30 && mouseY > 30 && mouseY < 30+30 &&mouseIsPressed && pageCount >10){
     isRotate = 1;
  }
  if (mouseX > 420  && mouseX < 420+30 && mouseY > 30 && mouseY < 30+30 &&mouseIsPressed && pageCount >10){
     isRotate = 0;
  }
  if (isRotate == 1){
     image(btnRotateHighlighted, 455, 30, 30, 30);
  }
  if (isRotate == 0){
    image(btnMoveHighlighted, 420, 30, 30, 30);
  }
  image(btnMove, 420, 30, 30, 30);
  image(btnRotate, 455, 30, 30, 30);

  let m = map(pageCount, 20, 120, 255, 0);
  tint(255, m);
  image(cover, 0, 0, 500, 500);
  tint(255, n);

  // draggingImg();
  for(var i = 1;i <20 ; i++){
    shape[i].over();
    shape[i].update();
    shape[i].show();
}



  if (mouseX > 350 && mouseX < 500 && mouseY > 500-48 && mouseY < 500 && mouseIsPressed && pageCount >10){
    // snapshot.takesnap();
    page = 3;
    pageCount=0;

  } else {
    image(btnFinish, 500-150, 500-48);
  }
}


function mousePressed() {
    for(var i = 1;i <20 ; i++){
      shape[i].pressed();
      shape[i].pressed();
  }
}

function mouseReleased() {
  for(var i = 1;i <20 ; i++){
    shape[i].released();
    shape[i].released();
  }
}

// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {



  constructor(img, x, y, w, h, angle) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = 0;
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

    } else {
      fill(175, 200);

    }
    push();
    translate(this.x + this.w/2 , this.y + this.h/2);

    rotate(this.angle);

    imageMode(CENTER);
    image(this.img, 0, 0, this.w, this.h);
    pop();
    imageMode(DEGREES);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      if (isRotate == 1 ){
        this.angle =  this.angle + 0.1;
      }
      if (isRotate == 0){
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
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
  // background(120);
  image(bg, 0, 0, 500, 500);
  for(var i = 1;i <20 ; i++){
    shape[i].show();
}


  if (mouseX > 500-207 && mouseX < 500 && mouseY > 500-85 && mouseY < 500 && mouseIsPressed && pageCount >10){
      saveCanvas(snapshot,"screenshot","png");
    page = 0;
    pageCount = 0;

  } else {
    image(btnDownload, 500-207, 500-85);
  }
}

function thankyouDraw(){
  pageCount++;
  background(255);
  text('end', width/2, height/2);
  if (mouseIsPressed && pageCount >10){
    page = 0;
    pageCount = 0;
  }
}
