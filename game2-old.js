/////////////////////////////game page/////////////////////////////
// 0 - coverDraw
// 1 - prefaceDraw
// 2 - gameDraw
// 3 - endDraw
///////////////////////////////////////////////////////////////////

////////page///////////
let page = 0;
let pageCount = 0;

//
// let input;
// let img1;

//////////////img///////////////////
let img, bg, hover;
var vScale = 25;

let cubeBW = [];
let cubeColor = [];
let cover;
let bw;

//game 6 sets//

///////////////////////////saveImg///////////////////////////
let gameCanvas;
var snapshot = [];
let snapCount = 0;
// let newImg;



function preload(){
  bw =  loadImage('../assets/WDWT-game2/WDWTgame2-BW-cover.png');
  cover =  loadImage('../assets/WDWT-game2/WDWTgame2-color-cover.png');
  for (var i = 1; i < 7; i++) {
    cubeBW[i] = loadImage('../assets/WDWT-game2/WDWTgame2-BW-0' + i + '.png');
  }
  for (var i = 1; i < 7; i++) {
    cubeColor[i] = loadImage('../assets/WDWT-game2/WDWTgame2-color-0' + i + '.png');
  }
}

function setup() {

  gameCanvas =  createCanvas(500, 500).drop(gotFile).dragOver(highlight).dragLeave(redraw);
  // colorMode(RGB).imageMode(CORNER);

  // pixelDensity(1);
  hover = color('yellow');

}

function draw() {

 background(255);
   // if (img1) {
   //   image(img1, 0, 0, width, height);
   // }
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

function coverDraw(){
  pageCount++;
  background(255);
  image(cover, 0, 0, width, height);

  if (mouseIsPressed && pageCount >10){
    page = 1;
    pageCount=0;
  }
}


function prefaceDraw(){
  pageCount++;
  background(255);
  image(bw, 0, 0, width, height);

  if (mouseIsPressed && pageCount >10){
    // saveCanvas(gameCanvas,"screenshot","png");
    page = 2;
    pageCount=0;
  }
}

function gameDraw(){
  if (pageCount < 1){
    textAlign(CENTER).textSize(22).textStyle(BOLD).noLoop();
    fill(120).noStroke();
  }
  pageCount++;

  if (img) {
    img.resize( vScale-5 ,vScale-5);
    filter(GRAY);
    // image(img, 0, 0);
    img.loadPixels();
if (pageCount < 3 ){
    for (var y = 0; y < img.height; y++) {
      for (var x = 0; x < img.width; x++) {

        var index = (img.width + x + (y * img.width)) * 4;
        var r = img.pixels[index + 0] ;
        var g = img.pixels[index + 1] ;
        var b = img.pixels[index + 2] ;
        var bright = (r + g + b) / 3 ;
        // var w = map(bright, 0, 255, 0, vScale);
        var w = int(map(bright, 0, 255, 6, 1));
        noStroke();
        fill(0);
        rectMode(CENTER);
        text(pageCount, width>>1, height>>1);
        snapshot = image(cubeColor[w], x * vScale, y * vScale, vScale, vScale);
      }
    }
  } else if (pageCount ==2 ){
    if (mouseIsPressed && pageCount >1){

      text('hi', width>>1, height>>1);
      // saveCanvas(snapshot,"screenshot","png");
      // pageCount = 0;
      // page = 3;
    }
  }
  } else {
    text('Drag an image file onto the canvas.', width>>1, height>>1);

  }




}

function gotFile(f) {
 if (f.type === 'image')  {
   img = loadImage(f.data, redraw);
   // img.size(canvas.width / vScale, canvas.height / vScale);

 } else   {
     print(`"${f.name}" isn't an image file!`);}
}

function highlight(evt) {
 this.background(hover);
 evt.preventDefault();
}

function endDraw(){
  pageCount++;
  background(255);
  if (mouseIsPressed && pageCount >0){
      saveCanvas(gameCanvas,"screenshot","png");
    pageCount = 0;
  // image(, 0, 0, 500, 500);
  }
  // if (mouseX > 500-207 && mouseX < 500 && mouseY > 500-85 && mouseY < 500 && mouseIsPressed && pageCount >10){
  //     saveCanvas(snapshot,"screenshot","png");
  //   pageCount = 0;
  //
  // }


}





// function handleFile(file) {
//   print(file);
//   if (file.type === 'image') {
//     img1 = createImg(file.data, '');
//     img1.hide();
//   } else {
//     img1 = null;
//   }
// }
