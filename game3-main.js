/////////////////////////////game page/////////////////////////////
// 0 - coverDraw
// 1 - prefaceDraw
// 2 - gameDraw
// 3 - endDraw
///////////////////////////////////////////////////////////////////

////////page///////////
let page = 1;
let pageCount = 0;


//////////////img///////////////////
let preface;
let layout;
let layout01;
let layout02;
let layout03;
let layoutHighlight;
let leftArrow;
let rightArrow;
let selectPaint;
//game 6 sets//

//////////////layout_movement///////////////////
let layout01MoveX = 0;
let layout02MoveX = 410;
let layout03MoveX = 820;
let arrowMove = 0;
let selected01 = 0;
let selected02 = 0;
let selected03 = 0;
let _selected01 = 0;
let _selected02 = 0;
let _selected03 = 0;

let layout01Paint = [];
let layout02Paint = [];
let layout03Paint = [];

let selectedLayout01Print = 0;

let selectedLayout01Paint = [0,0,0,0,0,0];
let _selectedLayout01Paint = [0,0,0,0,0,0];

///////////////////////////Artworks/////////////////////////
let angel = [];
let bouie = [];
let chungchiho = [];

let kuchunyin = [];
let leungkahim = [];
let nghowah = [];
let nureni = [];
let chungwinghei = [];
let xerxes = [];
//img ratio//
let imgHeight = 140;
let angelRatio = [];
let bouieRatio = [];
let chungchihoRatio = [];

let kuchunyinRatio = [];
let leungkahimRatio = [];
let nghowahRatio = [];
let nureniRatio = [];
let chungwingheiRatio = [];
let xerxesRatio = [];

let teacherPositionX;
let kuchunyinPositionX;
let leungkahimPositionX;
let nghowahPositionX;
let nureniPositionX;
let chungwingheiPositionX;
let xerxesPositionX;

//artworkSelect
let selCase01 = 0;
let selCase02 = 0;
let selCase03 = 0;
let selCase04 = 0;
let selCase05 = 0;
let selectedAngel01 = 0;
let selectedAngel02 = 0;

let canvas_01 = 0;
let canvas_02 = 0;
let canvas_03 = 0;
let canvas_04 = 0;
let canvas_05 = 0;

let sliderX = 10;
let sliderXMove = 0;


///////////////////////////saveImg///////////////////////////
let gameCanvas;
var snapshot = [];
let snapCount = 0;
// let newImg;
////////////////////////////////////////////////////////////



function preload(){
  preface =  loadImage('../assets/WDWT-game3/preface.png');
  layout =  loadImage('../assets/WDWT-game3/select_layout.png');
  layout01 = loadImage('../assets/WDWT-game3/layout_01.png');
  layout02 = loadImage('../assets/WDWT-game3/layout_02.png');
  layout03 = loadImage('../assets/WDWT-game3/layout_03.png');
  layoutHighlight = loadImage('../assets/WDWT-game3/layout_highlight.png');
  leftArrow = loadImage('../assets/WDWT-game3/arrow_left.png');
  rightArrow = loadImage('../assets/WDWT-game3/arrow_right.png')
  selectPaint = loadImage('../assets/WDWT-game3/select_paint.png')

  for (var i = 1; i < 6; i++) {
    layout01Paint[i] = loadImage('../assets/WDWT-game3/layout1/layout01_0' + i + '.png');
  }

  for (var i = 1; i < 6; i++) {
    layout02Paint[i] = loadImage('../assets/WDWT-game3/layout2/layout02_0' + i + '.png');
  }

  for (var i = 1; i < 6; i++) {
    layout03Paint[i] = loadImage('../assets/WDWT-game3/layout3/layout03_0' + i + '.png');
  }

  //Artworks//
  for (var i = 1; i < 3; i++) {
    angel[i] = loadImage('../assets/WDWT-game3/artworks/Angel_0' + i + '.jpg');
  }

  for (var i = 1; i < 3; i++) {
    bouie[i] = loadImage('../assets/WDWT-game3/artworks/Bouie_0' + i + '.jpg');
  }

  for (var i = 1; i < 3; i++) {
    chungchiho[i] = loadImage('../assets/WDWT-game3/artworks/chungchiho_0' + i + '.jpg');
  }

  //student's artworks//
  for (var i = 1; i < 5; i++) {
    kuchunyin[i] = loadImage('../assets/WDWT-game3/artworks/kuchunyin_0' + i + '.jpg');
  }

  for (var i = 1; i < 5; i++) {
    leungkahim[i] = loadImage('../assets/WDWT-game3/artworks/leungkahim_0' + i + '.jpg');
  }

  for (var i = 1; i < 5; i++) {
    nghowah[i] = loadImage('../assets/WDWT-game3/artworks/nghowah_0' + i + '.jpg');
  }

  for (var i = 1; i < 5; i++) {
    nureni[i] = loadImage('../assets/WDWT-game3/artworks/Nureni_0' + i + '.jpg');
  }

  for (var i = 1; i < 5; i++) {
    chungwinghei[i] = loadImage('../assets/WDWT-game3/artworks/chungwinghei_0' + i + '.jpg');
  }

  for (var i = 1; i < 5; i++) {
    xerxes[i] = loadImage('../assets/WDWT-game3/artworks/xerxes_0' + i + '.jpg');
  }

}

function setup() {

  gameCanvas =  createCanvas(500, 500);
  noStroke();


}

function draw() {
 background(255);

 switch (page) {
   case 0:
     coverDraw();
     break;
   case 1:
     prefaceDraw();
     break;
   case 2:
     layoutDraw();
     break;
   case 3:
     gameDraw();
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
  //image(cover, 0, 0, width, height);

  if (mouseIsPressed && pageCount >10){
    page = 1;
    pageCount=0;
  }
}


function prefaceDraw(){
  pageCount++;
  background(255);
  image(preface, 0, 0, width, height);
  // rect( 382,434,100,35);
  if (mouseX > 382  && mouseX < 382+100 && mouseY > 434 && mouseY < 434+35 && mouseIsPressed && pageCount >10){

    page = 2;
    pageCount=0;
  }
}

function layoutDraw(){
  pageCount++;
  background(255);
  image(layout, 0, 0, width, height);
  rect(layout01MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  rect(layout02MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  rect(layout03MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  image(layout01, layout01MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  image(layout02, layout02MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  image(layout03, layout03MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  // text(arrowMove, width/2 , height/2);



  if (mouseX > 20  && mouseX < 20+28 && mouseY > 220 && mouseY < 220 + 52 && mouseIsPressed && pageCount >10){
    if (arrowMove < 0){
        arrowMove = arrowMove+ 5;
      }
  }
  if (mouseX > 450  && mouseX < 450+28 && mouseY > 220 && mouseY < 220 + 52 && mouseIsPressed && pageCount >10){
    if (arrowMove > -740){
      arrowMove = arrowMove- 5;
    }
  }

  if (mouseX > layout01MoveX + arrowMove && mouseX < layout01MoveX + arrowMove+layout01.width *0.8 && mouseY > 40 && mouseY < 40 + layout01.height*0.8 && mouseIsPressed && pageCount >10){
    selected01++;
    selected01 = selected01 %2;
    pageCount =0;
  }

  if (mouseX > layout02MoveX + arrowMove && mouseX < layout02MoveX + arrowMove+layout01.width *0.8 && mouseY > 40 && mouseY < 40 + layout01.height*0.8 && mouseIsPressed && pageCount >10){
    selected02++;
    selected02 = selected02 %2;
    pageCount =0;
  }

  if (mouseX > layout03MoveX + arrowMove && mouseX < layout03MoveX + arrowMove+layout01.width *0.8 && mouseY > 40 && mouseY < 40 + layout01.height*0.8 && mouseIsPressed && pageCount >10){
    selected03++;
    selected03 = selected03 %2;
    pageCount = 0;
  }

  if (selected01 == 1 ){
    image(layoutHighlight, layout01MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);

  }

  if (selected02 == 1 ){
    image(layoutHighlight, layout02MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);

  }

  if (selected03 == 1 ){
    image(layoutHighlight, layout03MoveX + arrowMove, 40, layout01.width *0.8, layout01.height*0.8);
  }


  if (_selected01 == 0 && selected01 == 1){
    selected02 = 0;
    selected03 = 0;
  }

  if (_selected02 == 0 && selected02 == 1){
    selected01 = 0;
    selected03 = 0;
  }

  if (_selected03 == 0 && selected03 == 1){
    selected01 = 0;
    selected02 = 0;
  }

  _selected01 = selected01;
  _selected02 = selected02;
  _selected03 = selected03;

  image(leftArrow, 20, 220);
  image(rightArrow, 450, 220);


  if (mouseX > 382  && mouseX < 382+100 && mouseY > 434 && mouseY < 434+35 && mouseIsPressed && pageCount >10){
      if ( selected01 == 1||selected02 == 1||selected03 == 1 ){
        page = 3;
        pageCount=0;
      }
  }
}



function gameDraw(){
  pageCount++;
  background(255);

  image(selectPaint, 0, 0, width, height);
  if (selected01 == 1){

    artworkSelect();
    artworkConfirm();
    layout1();
  } else if (selected02 == 1){
    image(layout02, 0, 0, layout02.width, layout02.height);

  } else if (selected03 == 1){
    image(layout03, 0, 0, layout03.width, layout03.height);
  }

  //////////// layout 1 ////
  // image(layout01Paint[1] ,25,150,layout01Paint[1].width, layout01Paint[1].height);
  // image(layout01Paint[2] ,57,49,layout01Paint[2].width, layout01Paint[2].height);
  // image(layout01Paint[3] ,162,94,layout01Paint[3].width, layout01Paint[3].height);
  // image(layout01Paint[4] ,248,43,layout01Paint[4].width, layout01Paint[4].height);
  // image(layout01Paint[5] ,360,108,layout01Paint[5].width, layout01Paint[5].height);

  /////// layout 2 ////
  // image(layout02Paint[1] ,32,37,layout02Paint[1].width, layout02Paint[1].height);
  // image(layout02Paint[2] ,187,51,layout02Paint[2].width, layout02Paint[2].height);
  // image(layout02Paint[3] ,395,45,layout02Paint[3].width, layout02Paint[3].height);
  // image(layout02Paint[4] ,117,140,layout02Paint[4].width, layout02Paint[4].height);
  // image(layout02Paint[5] ,312,138,layout02Paint[5].width, layout02Paint[5].height);

  ////// layout 3 ////
  // image(layout03Paint[1] ,58,21,layout03Paint[1].width, layout03Paint[1].height);
  // image(layout03Paint[2] ,182,43,layout03Paint[2].width, layout03Paint[2].height);
  // image(layout03Paint[3] ,314,35,layout03Paint[3].width, layout03Paint[3].height);
  // image(layout03Paint[4] ,405,101,layout03Paint[4].width, layout03Paint[4].height);
  // image(layout03Paint[5] ,114,138,layout03Paint[5].width, layout03Paint[5].height);


  // rect (57,49,10,10);

}

function layout1(){

  image(layout01, 0, 0, layout01.width, layout01.height);


}


function artworkSelect(){
  noStroke();
  fill(255, 204, 0);
  rect (sliderX, 410, 80, 16);
  sliderXMove = map(sliderX, 10, 410, 0, -4400);
  if (mouseX > sliderX && mouseX < sliderX+ 80 && mouseY > 410 && mouseY < 410 + 12 && mouseIsPressed && pageCount >10){
    if (mouseX < 50){
      sliderX = 10;
    } else if (mouseX > 450){
      sliderX = 410;
    } else {
      sliderX = mouseX - 40;
    }
  }

  angelRatio[1] = angel[1].height / angel[1].width;
  angelRatio[2] = angel[2].height / angel[2].width;

  bouieRatio[1] = bouie[1].height / bouie[1].width;
  bouieRatio[2] = bouie[2].height / bouie[2].width;

  chungchihoRatio[1] = chungchiho[1].height / chungchiho[1].width;
  chungchihoRatio[2] = chungchiho[2].height / chungchiho[2].width;

  kuchunyinRatio[1] = kuchunyin[1].height / kuchunyin[1].width;
  kuchunyinRatio[2] = kuchunyin[2].height / kuchunyin[2].width;
  kuchunyinRatio[3] = kuchunyin[3].height / kuchunyin[3].width;
  kuchunyinRatio[4] = kuchunyin[4].height / kuchunyin[4].width;

  leungkahimRatio[1] = leungkahim[1].height / leungkahim[1].width;
  leungkahimRatio[2] = leungkahim[2].height / leungkahim[2].width;
  leungkahimRatio[3] = leungkahim[3].height / leungkahim[3].width;
  leungkahimRatio[4] = leungkahim[4].height / leungkahim[4].width;

  nghowahRatio[1] = nghowah[1].height / nghowah[1].width;
  nghowahRatio[2] = nghowah[2].height / nghowah[2].width;
  nghowahRatio[3] = nghowah[3].height / nghowah[3].width;
  nghowahRatio[4] = nghowah[4].height / nghowah[4].width;

  nureniRatio[1] = nureni[1].height / nureni[1].width;
  nureniRatio[2] = nureni[2].height / nureni[2].width;
  nureniRatio[3] = nureni[3].height / nureni[3].width;
  nureniRatio[4] = nureni[4].height / nureni[4].width;

  chungwingheiRatio[1] = chungwinghei[1].height / chungwinghei[1].width;
  chungwingheiRatio[2] = chungwinghei[2].height / chungwinghei[2].width;
  chungwingheiRatio[3] = chungwinghei[3].height / chungwinghei[3].width;
  chungwingheiRatio[4] = chungwinghei[4].height / chungwinghei[4].width;

  xerxesRatio[1] = xerxes[1].height / xerxes[1].width;
  xerxesRatio[2] = xerxes[2].height / xerxes[2].width;
  xerxesRatio[3] = xerxes[3].height / xerxes[3].width;
  xerxesRatio[4] = xerxes[4].height / xerxes[4].width;


  image(angel[1], 10 + sliderXMove, 260, imgHeight / angelRatio[1], imgHeight);
  image(angel[2], 20 + sliderXMove + imgHeight / angelRatio[1], 260, imgHeight / angelRatio[2], imgHeight);

  image(bouie[1], 30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2], 260, imgHeight / bouieRatio[1], imgHeight);
  image(bouie[2], 40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1], 260, imgHeight / bouieRatio[2], imgHeight);

  image(chungchiho[1], 50 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2], 260, imgHeight / chungchihoRatio[1], imgHeight);
  image(chungchiho[2], 60 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2]+ imgHeight / chungchihoRatio[1], 260, imgHeight / chungchihoRatio[2], imgHeight);

  teacherPositionX = 60 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] + imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2] + imgHeight / chungchihoRatio[1] + imgHeight / chungchihoRatio[2];

  image(kuchunyin[1], 10 + teacherPositionX, 260, imgHeight / kuchunyinRatio[1], imgHeight);
  image(kuchunyin[2], 20 + teacherPositionX + imgHeight / kuchunyinRatio[1], 260, imgHeight / kuchunyinRatio[2], imgHeight);
  image(kuchunyin[3], 30 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2], 260, imgHeight / kuchunyinRatio[3], imgHeight);
  image(kuchunyin[4], 40 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3], 260, imgHeight / kuchunyinRatio[4], imgHeight);

  kuchunyinPositionX = teacherPositionX + 40 + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3] + imgHeight / kuchunyinRatio[4];

  image(leungkahim[1], 10 + kuchunyinPositionX, 260, imgHeight / leungkahimRatio[1], imgHeight);
  image(leungkahim[2], 20 + kuchunyinPositionX + imgHeight / leungkahimRatio[1], 260, imgHeight / leungkahimRatio[2], imgHeight);
  image(leungkahim[3], 30 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2], 260, imgHeight / leungkahimRatio[3], imgHeight);
  image(leungkahim[4], 40 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3], 260, imgHeight / leungkahimRatio[4], imgHeight);

  leungkahimPositionX = kuchunyinPositionX + 40 + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3] + imgHeight / leungkahimRatio[4];

  image(nghowah[1], 10 + leungkahimPositionX, 260, imgHeight / nghowahRatio[1], imgHeight);
  image(nghowah[2], 20 + leungkahimPositionX + imgHeight / nghowahRatio[1], 260, imgHeight / nghowahRatio[2], imgHeight);
  image(nghowah[3], 30 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2], 260, imgHeight / nghowahRatio[3], imgHeight);
  image(nghowah[4], 40 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3], 260, imgHeight / nghowahRatio[4], imgHeight);

  nghowahPositionX = leungkahimPositionX + 40 + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3] + imgHeight / nghowahRatio[4];

  image(nureni[1], 10 + nghowahPositionX, 260, imgHeight / nureniRatio[1], imgHeight);
  image(nureni[2], 20 + nghowahPositionX + imgHeight / nureniRatio[1], 260, imgHeight / nureniRatio[2], imgHeight);
  image(nureni[3], 30 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2], 260, imgHeight / nureniRatio[3], imgHeight);
  image(nureni[4], 40 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3], 260, imgHeight / nureniRatio[4], imgHeight);

  nureniPositionX = nghowahPositionX + 40 + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3] + imgHeight / nureniRatio[4];

  image(chungwinghei[1], 10 + nureniPositionX, 260, imgHeight / chungwingheiRatio[1], imgHeight);
  image(chungwinghei[2], 20 + nureniPositionX + imgHeight / chungwingheiRatio[1], 260, imgHeight / chungwingheiRatio[2], imgHeight);
  image(chungwinghei[3], 30 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2], 260, imgHeight / chungwingheiRatio[3], imgHeight);
  image(chungwinghei[4], 40 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3], 260, imgHeight / chungwingheiRatio[4], imgHeight);

  chungwingheiPositionX = nureniPositionX + 40 + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3] + imgHeight / chungwingheiRatio[4];

  image(xerxes[1], 10 + chungwingheiPositionX, 260, imgHeight / xerxesRatio[1], imgHeight);
  image(xerxes[2], 20 + chungwingheiPositionX + imgHeight / xerxesRatio[1], 260, imgHeight / xerxesRatio[2], imgHeight);
  image(xerxes[3], 30 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2], 260, imgHeight / xerxesRatio[3], imgHeight);
  image(xerxes[4], 40 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] + imgHeight / xerxesRatio[3], 260, imgHeight / xerxesRatio[4], imgHeight);

  if (mouseX > 10 + sliderXMove && mouseX < 10 + imgHeight / angelRatio[1] + sliderXMove && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 1;
    } else if (selectedLayout01Print == 2){
      selCase02 = 1;
    } else if (selectedLayout01Print == 3){
      selCase03 = 1;
    } else if (selectedLayout01Print == 4){
      selCase04 = 1;
    } else if (selectedLayout01Print == 5){
      selCase05 = 1;
    }
    pageCount = 0;
  }

  if (mouseX > 20 + imgHeight / angelRatio[1] + sliderXMove && mouseX < 20 + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] + sliderXMove&& mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 2;
    } else if (selectedLayout01Print == 2){
      selCase02 = 2;
    } else if (selectedLayout01Print == 3){
      selCase03 = 2;
    } else if (selectedLayout01Print == 4){
      selCase04 = 2;
    } else if (selectedLayout01Print == 5){
      selCase05 = 2;
    }
    pageCount = 0;
  }

  if (mouseX > 30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] && mouseX < 30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] +imgHeight / bouieRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 3;
    } else if (selectedLayout01Print == 2){
      selCase02 = 3;
    } else if (selectedLayout01Print == 3){
      selCase03 = 3;
    } else if (selectedLayout01Print == 4){
      selCase04 = 3;
    } else if (selectedLayout01Print == 5){
      selCase05 = 3;
    }
    pageCount = 0;
  }

  if (mouseX > 40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] && mouseX < 40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 4;
    } else if (selectedLayout01Print == 2){
      selCase02 = 4;
    } else if (selectedLayout01Print == 3){
      selCase03 = 4;
    } else if (selectedLayout01Print == 4){
      selCase04 = 4;
    } else if (selectedLayout01Print == 5){
      selCase05 = 4;
    }
    pageCount = 0;
  }

  strokeWeight(6);
  stroke(255, 204, 0);
  noFill();




}

function artworkConfirm(){

  if (mouseX > 25  && mouseX < 25+layout01Paint[1].width && mouseY > 150 && mouseY < 150+layout01Paint[1].height && mouseIsPressed && pageCount >10){
    selectedLayout01Print = 1;
    pageCount =0;
  }

  if (mouseX > 57  && mouseX < 57+layout01Paint[2].width && mouseY > 49 && mouseY < 49+layout01Paint[2].height && mouseIsPressed && pageCount >10){
    selectedLayout01Print = 2;
    pageCount =0;
  }

  if (mouseX > 162 && mouseX < 162+layout01Paint[3].width && mouseY > 94 && mouseY < 94+layout01Paint[3].height && mouseIsPressed && pageCount >10){
    selectedLayout01Print = 3;
    pageCount =0;
  }

  if (mouseX > 248 && mouseX < 248+layout01Paint[4].width && mouseY > 43 && mouseY < 43 +layout01Paint[4].height && mouseIsPressed && pageCount >10){
    selectedLayout01Print = 4;
    pageCount =0;
  }

  if (mouseX > 360 && mouseX < 360+layout01Paint[5].width && mouseY > 108 && mouseY < 108 +layout01Paint[5].height && mouseIsPressed && pageCount >10){
    selectedLayout01Print = 5;
    pageCount =0;
  }

  switch (selectedLayout01Print) {
    case 0:

      break;
    case 1:
      image(layout01Paint[1] ,25,150,layout01Paint[1].width, layout01Paint[1].height);
      selectedLayout01Paint[1] = 1;
      selectedLayout01Paint[2] = 0;
      selectedLayout01Paint[3] = 0;
      selectedLayout01Paint[4] = 0;
      selectedLayout01Paint[5] = 0;

      switch (selCase01) {
        case 0:

          break;
        case 1:
          rect(10 + sliderXMove, 260, imgHeight / angelRatio[1], imgHeight);
          break;
        case 2:
          rect(20 + sliderXMove + imgHeight / angelRatio[1], 260, imgHeight / angelRatio[2], imgHeight);
          break;
        case 3:
          rect(30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2], 260, imgHeight / bouieRatio[1], imgHeight);
          break;
        case 4:
          rect(40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1], 260, imgHeight / bouieRatio[2], imgHeight);
          break;
        case 5:
          rect(50 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2], 260, imgHeight / chungchihoRatio[1], imgHeight);
          break;
        case 6:
          rect(60 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2]+ imgHeight / chungchihoRatio[1], 260, imgHeight / chungchihoRatio[2], imgHeight);
          break;
        case 7:
          rect(10 + teacherPositionX, 260, imgHeight / kuchunyinRatio[1], imgHeight);
          break;
        case 8:
          rect(20 + teacherPositionX + imgHeight / kuchunyinRatio[1], 260, imgHeight / kuchunyinRatio[2], imgHeight);
          break;
        case 9:
          rect(30 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2], 260, imgHeight / kuchunyinRatio[3], imgHeight);
          break;
        case 10:
          rect(40 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3], 260, imgHeight / kuchunyinRatio[4], imgHeight);
          break;
        case 11:
          rect(10 + kuchunyinPositionX, 260, imgHeight / leungkahimRatio[1], imgHeight);
          break;
        case 12:
          rect(20 + kuchunyinPositionX + imgHeight / leungkahimRatio[1], 260, imgHeight / leungkahimRatio[2], imgHeight);
          break;
        case 13:
          rect(30 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2], 260, imgHeight / leungkahimRatio[3], imgHeight);
          break;
        case 14:
          rect(40 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3], 260, imgHeight / leungkahimRatio[4], imgHeight);
          break;
        case 15:
          rect(10 + leungkahimPositionX, 260, imgHeight / nghowahRatio[1], imgHeight);
          break;
        case 16:
          rect(20 + leungkahimPositionX + imgHeight / nghowahRatio[1], 260, imgHeight / nghowahRatio[2], imgHeight);
          break;
        case 17:
          rect(30 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2], 260, imgHeight / nghowahRatio[3], imgHeight);
          break;
        case 18:
          rect(40 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3], 260, imgHeight / nghowahRatio[4], imgHeight);
          break;
        case 19:
          rect(10 + nghowahPositionX, 260, imgHeight / nureniRatio[1], imgHeight);
          break;
        case 20:
          rect(20 + nghowahPositionX + imgHeight / nureniRatio[1], 260, imgHeight / nureniRatio[2], imgHeight);
          break;
        case 21:
          rect(30 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2], 260, imgHeight / nureniRatio[3], imgHeight);
          break;
        case 22:
          rect(40 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3], 260, imgHeight / nureniRatio[4], imgHeight);
          break;
        case 23:
          rect(10 + nureniPositionX, 260, imgHeight / chungwingheiRatio[1], imgHeight);
          break;
        case 24:
          rect(20 + nureniPositionX + imgHeight / chungwingheiRatio[1], 260, imgHeight / chungwingheiRatio[2], imgHeight);
          break;
        case 25:
          rect(30 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2], 260, imgHeight / chungwingheiRatio[3], imgHeight);
          break;
        case 26:
          rect(40 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3], 260, imgHeight / chungwingheiRatio[4], imgHeight);
          break;
        case 27:
          rect(10 + chungwingheiPositionX, 260, imgHeight / xerxesRatio[1], imgHeight);
          break;
        case 28:
          rect(20 + chungwingheiPositionX + imgHeight / xerxesRatio[1], 260, imgHeight / xerxesRatio[2], imgHeight);
          break;
        case 29:
          rect(30 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2], 260, imgHeight / xerxesRatio[3], imgHeight);
          break;
        case 30:
          rect(40 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] + imgHeight / xerxesRatio[3], 260, imgHeight / xerxesRatio[4], imgHeight);
          break;
        default:

      }
      break;
    case 2:
      image(layout01Paint[2] ,57,49,layout01Paint[2].width, layout01Paint[2].height);
      selectedLayout01Paint[1] = 0;
      selectedLayout01Paint[2] = 1;
      selectedLayout01Paint[3] = 0;
      selectedLayout01Paint[4] = 0;
      selectedLayout01Paint[5] = 0;

      switch (selCase02) {
        case 0:

          break;
        case 1:
          rect(10 + sliderXMove, 260, imgHeight / angelRatio[1], imgHeight);
          break;
        case 2:
          rect(20 + sliderXMove + imgHeight / angelRatio[1], 260, imgHeight / angelRatio[2], imgHeight);
          break;
        case 3:
          rect(30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2], 260, imgHeight / bouieRatio[1], imgHeight);
          break;
        case 4:
          rect(40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1], 260, imgHeight / bouieRatio[2], imgHeight);
          break;
        case 5:
          rect(50 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2], 260, imgHeight / chungchihoRatio[1], imgHeight);
          break;
        case 6:
          rect(60 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2]+ imgHeight / chungchihoRatio[1], 260, imgHeight / chungchihoRatio[2], imgHeight);
          break;
        case 7:
          rect(10 + teacherPositionX, 260, imgHeight / kuchunyinRatio[1], imgHeight);
          break;
        case 8:
          rect(20 + teacherPositionX + imgHeight / kuchunyinRatio[1], 260, imgHeight / kuchunyinRatio[2], imgHeight);
          break;
        case 9:
          rect(30 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2], 260, imgHeight / kuchunyinRatio[3], imgHeight);
          break;
        case 10:
          rect(40 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3], 260, imgHeight / kuchunyinRatio[4], imgHeight);
          break;
        case 11:
          rect(10 + kuchunyinPositionX, 260, imgHeight / leungkahimRatio[1], imgHeight);
          break;
        case 12:
          rect(20 + kuchunyinPositionX + imgHeight / leungkahimRatio[1], 260, imgHeight / leungkahimRatio[2], imgHeight);
          break;
        case 13:
          rect(30 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2], 260, imgHeight / leungkahimRatio[3], imgHeight);
          break;
        case 14:
          rect(40 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3], 260, imgHeight / leungkahimRatio[4], imgHeight);
          break;
        case 15:
          rect(10 + leungkahimPositionX, 260, imgHeight / nghowahRatio[1], imgHeight);
          break;
        case 16:
          rect(20 + leungkahimPositionX + imgHeight / nghowahRatio[1], 260, imgHeight / nghowahRatio[2], imgHeight);
          break;
        case 17:
          rect(30 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2], 260, imgHeight / nghowahRatio[3], imgHeight);
          break;
        case 18:
          rect(40 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3], 260, imgHeight / nghowahRatio[4], imgHeight);
          break;
        case 19:
          rect(10 + nghowahPositionX, 260, imgHeight / nureniRatio[1], imgHeight);
          break;
        case 20:
          rect(20 + nghowahPositionX + imgHeight / nureniRatio[1], 260, imgHeight / nureniRatio[2], imgHeight);
          break;
        case 21:
          rect(30 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2], 260, imgHeight / nureniRatio[3], imgHeight);
          break;
        case 22:
          rect(40 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3], 260, imgHeight / nureniRatio[4], imgHeight);
          break;
        case 23:
          rect(10 + nureniPositionX, 260, imgHeight / chungwingheiRatio[1], imgHeight);
          break;
        case 24:
          rect(20 + nureniPositionX + imgHeight / chungwingheiRatio[1], 260, imgHeight / chungwingheiRatio[2], imgHeight);
          break;
        case 25:
          rect(30 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2], 260, imgHeight / chungwingheiRatio[3], imgHeight);
          break;
        case 26:
          rect(40 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3], 260, imgHeight / chungwingheiRatio[4], imgHeight);
          break;
        case 27:
          rect(10 + chungwingheiPositionX, 260, imgHeight / xerxesRatio[1], imgHeight);
          break;
        case 28:
          rect(20 + chungwingheiPositionX + imgHeight / xerxesRatio[1], 260, imgHeight / xerxesRatio[2], imgHeight);
          break;
        case 29:
          rect(30 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2], 260, imgHeight / xerxesRatio[3], imgHeight);
          break;
        case 30:
          rect(40 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] + imgHeight / xerxesRatio[3], 260, imgHeight / xerxesRatio[4], imgHeight);
          break;
        default:
      }
      break;
    case 3:
      image(layout01Paint[3] ,162,94,layout01Paint[3].width, layout01Paint[3].height);
      selectedLayout01Paint[1] = 0;
      selectedLayout01Paint[2] = 0;
      selectedLayout01Paint[3] = 1;
      selectedLayout01Paint[4] = 0;
      selectedLayout01Paint[5] = 0;
      break;
    case 4:
      image(layout01Paint[4] ,248,43,layout01Paint[4].width, layout01Paint[4].height);
      selectedLayout01Paint[1] = 0;
      selectedLayout01Paint[2] = 0;
      selectedLayout01Paint[3] = 0;
      selectedLayout01Paint[4] = 1;
      selectedLayout01Paint[5] = 0;
      break;
    case 5:
      image(layout01Paint[5] ,360,108,layout01Paint[5].width, layout01Paint[5].height);
      selectedLayout01Paint[1] = 0;
      selectedLayout01Paint[2] = 0;
      selectedLayout01Paint[3] = 0;
      selectedLayout01Paint[4] = 0;
      selectedLayout01Paint[5] = 1;
      break;
    default:

  }


  //
  //
  //
  // if (_selectedLayout01Paint[1] == 0 && selectedLayout01Paint[1] == 1){
  //   selectedLayout01Paint[2] = 0;
  //   selectedLayout01Paint[3] = 0;
  //   selectedLayout01Paint[4] = 0;
  //   selectedLayout01Paint[5] = 0;
  // }
  //
  // if (_selectedLayout01Paint[2] == 0 && selectedLayout01Paint[2] == 1){
  //   selectedLayout01Paint[1] = 0;
  //   selectedLayout01Paint[3] = 0;
  //   selectedLayout01Paint[4] = 0;
  //   selectedLayout01Paint[5] = 0;
  // }
  //
  // if (_selectedLayout01Paint[3] == 0 && selectedLayout01Paint[3] == 1){
  //   selectedLayout01Paint[1] = 0;
  //   selectedLayout01Paint[2] = 0;
  //   selectedLayout01Paint[4] = 0;
  //   selectedLayout01Paint[5] = 0;
  // }
  //
  // if (_selectedLayout01Paint[4] == 0 && selectedLayout01Paint[4] == 1){
  //   selectedLayout01Paint[1] = 0;
  //   selectedLayout01Paint[2] = 0;
  //   selectedLayout01Paint[3] = 0;
  //   selectedLayout01Paint[5] = 0;
  // }
  //
  // if (_selectedLayout01Paint[5] == 0 && selectedLayout01Paint[5] == 1){
  //   selectedLayout01Paint[1] = 0;
  //   selectedLayout01Paint[2] = 0;
  //   selectedLayout01Paint[3] = 0;
  //   selectedLayout01Paint[4] = 0;
  // }
  //
  // for (var i = 1; i < 6; i++){
  //   _selectedLayout01Paint[i] = selectedLayout01Paint[i];
  // }


for (var i = 1; i < 31; i++){
  if (selectedLayout01Paint[1] == 1 && selCase01 == i){
    canvas_01 = i;
  }

  if (selectedLayout01Paint[2] == 1 && selCase02 == i){
    canvas_02 = i;
  }

}


// for (var i = 1; i < 31; i++){
//   if (selectedLayout01Paint[3] == 1 && selCase03 == i){
//     canvas_03 = i;
//   }
// }
//
// for (var i = 1; i < 31; i++){
//   if (selectedLayout01Paint[4] == 1 && selCase04 == i){
//     canvas_04 = i;
//   }
// }
//
// for (var i = 1; i < 31; i++){
//   if (selectedLayout01Paint[5] == 1 && selCase05 == i){
//     canvas_05 = i;
//   }
// }


// if (selectedLayout01Paint[1] == 1 && selCase01 == 2){
//   canvas_01 = 2;
// }



switch (canvas_02) {
  case 0:

    break;
  case 1:
    image(angel[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[1]);
    break;
  case 2:
    image(angel[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 3:
    image(bouie[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 4:
    image(bouie[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 5:
    image(chungchiho[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 6:
    image(chungchiho[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 7:
    image(kuchunyin[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 8:
    image(kuchunyin[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 9:
    image(kuchunyin[3], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 10:
    image(kuchunyin[4], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 11:
    image(leungkahim[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 12:
    image(leungkahim[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 13:
    image(leungkahim[3], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 14:
    image(leungkahim[4], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 15:
    image(nghowah[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 16:
    image(nghowah[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 17:
    image(nghowah[3], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 18:
    image(nghowah[4], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 19:
    image(nureni[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 20:
    image(nureni[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 21:
    image(nureni[3], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 22:
    image(nureni[4], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 23:
    image(chungwinghei[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 24:
    image(chungwinghei[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 25:
    image(chungwinghei[3], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 26:
    image(chungwinghei[4], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 27:
    image(xerxes[1], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 28:
    image(xerxes[2], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 29:
    image(xerxes[3], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;
  case 30:
    image(xerxes[4], 57, 49, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    break;

  default:

  }
  switch (canvas_01) {
    case 0:

      break;
    case 1:
      image(angel[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[1]);
      break;
    case 2:
      image(angel[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 3:
      image(bouie[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 4:
      image(bouie[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 5:
      image(chungchiho[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 6:
      image(chungchiho[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 7:
      image(kuchunyin[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 8:
      image(kuchunyin[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 9:
      image(kuchunyin[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 10:
      image(kuchunyin[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 11:
      image(leungkahim[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 12:
      image(leungkahim[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 13:
      image(leungkahim[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 14:
      image(leungkahim[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 15:
      image(nghowah[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 16:
      image(nghowah[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 17:
      image(nghowah[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 18:
      image(nghowah[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 19:
      image(nureni[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 20:
      image(nureni[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 21:
      image(nureni[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 22:
      image(nureni[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 23:
      image(chungwinghei[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 24:
      image(chungwinghei[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 25:
      image(chungwinghei[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 26:
      image(chungwinghei[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 27:
      image(xerxes[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 28:
      image(xerxes[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 29:
      image(xerxes[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 30:
      image(xerxes[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;

    default:

  }
}
