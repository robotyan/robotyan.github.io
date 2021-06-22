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
let download;
let ready;
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
let to_save;
///pixel get
let pixelPick;
//var snapshot = [];
//let snapCount = 0;
// let newImg;
////////////////////////////////////////////////////////////

let text1 = '你好';
let text2 = '我';
let text3 = '你22';
let text4 = '2';
let text5 = '123';

let artistNameAngel = 0;
let artistNameBouie = 0;
let artistNameChiho = 0;

let artistNameKuChunYin = 0;
let artistNameLeungKaHim = 0;
let artistNameNgHoWah = 0;
let artistNameNureni = 0;
let artistNameChungWingHei = 0;
let artistNameXerxes = 0;
function preload(){
  preface =  loadImage('../assets/WDWT-game3/preface.png');
  layout =  loadImage('../assets/WDWT-game3/select_layout.png');
  layout01 = loadImage('../assets/WDWT-game3/layout_01.png');
  layout02 = loadImage('../assets/WDWT-game3/layout_02.png');
  layout03 = loadImage('../assets/WDWT-game3/layout_03.png');
  layoutHighlight = loadImage('../assets/WDWT-game3/layout_highlight.png');
  leftArrow = loadImage('../assets/WDWT-game3/arrow_left.png');
  rightArrow = loadImage('../assets/WDWT-game3/arrow_right.png');
  selectPaint = loadImage('../assets/WDWT-game3/select_paint.png');
  download = loadImage('../assets/WDWT-game3/download.png');
  ready = loadImage('../assets/WDWT-game3/ready.png');

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
     readyDraw();
     break;
   case 5:
     endDraw();
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


    if (mouseX > 382  && mouseX < 382+110 && mouseY > 430 && mouseY < 430+40 && mouseIsPressed && pageCount >10){
        if (selCase01 != 0 && selCase02 != 0 && selCase03 != 0 && selCase04 != 0 && selCase05 != 0){


          to_save = get(0, 0, 500, 250);
          gameCanvas.image(to_save, 0, 0);

          page = 4;
          pageCount=0;
        }
    }


}

function layout1(){

  image(layout01, 0, 0, layout01.width, layout01.height);


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
      switch (selCase03) {
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
    case 4:
      image(layout01Paint[4] ,248,43,layout01Paint[4].width, layout01Paint[4].height);
      selectedLayout01Paint[1] = 0;
      selectedLayout01Paint[2] = 0;
      selectedLayout01Paint[3] = 0;
      selectedLayout01Paint[4] = 1;
      selectedLayout01Paint[5] = 0;
      switch (selCase04) {
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
    case 5:
      image(layout01Paint[5] ,360,108,layout01Paint[5].width, layout01Paint[5].height);
      selectedLayout01Paint[1] = 0;
      selectedLayout01Paint[2] = 0;
      selectedLayout01Paint[3] = 0;
      selectedLayout01Paint[4] = 0;
      selectedLayout01Paint[5] = 1;

      switch (selCase05) {
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
    default:

  }


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

    if (selectedLayout01Paint[3] == 1 && selCase03 == i){
      canvas_03 = i;
    }

    if (selectedLayout01Paint[4] == 1 && selCase04 == i){
      canvas_04 = i;
    }

    if (selectedLayout01Paint[5] == 1 && selCase05 == i){
      canvas_05 = i;
    }
  }



// if (selectedLayout01Paint[1] == 1 && selCase01 == 2){
//   canvas_01 = 2;
// }


switch (canvas_02) {
  case 0:

    break;
  case 1:
    image(angel[1], 57, 49 - layout01Paint[2].width * angelRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * angelRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 2:
    image(angel[2], 57, 49 - layout01Paint[2].width * angelRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * angelRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 3:
    image(bouie[1], 57, 49 -  layout01Paint[2].height * bouieRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * bouieRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 4:
    image(bouie[2], 57, 49 - layout01Paint[2].height * bouieRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * bouieRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 5:
    image(chungchiho[1], 57, 49 - 10, layout01Paint[2].width, layout01Paint[2].width * chungchihoRatio[1]);
    // image(chungchiho[1], 57, 49 - layout01Paint[2].height * chungchihoRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * chungchihoRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 6:
    image(chungchiho[2], 57, 49 - layout01Paint[2].width * chungchihoRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * chungchihoRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 7:
    image(kuchunyin[1], 57, 49 - layout01Paint[2].width * kuchunyinRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * kuchunyinRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 8:
    image(kuchunyin[2], 57, 49 - layout01Paint[2].width * kuchunyinRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * kuchunyinRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 9:
    image(kuchunyin[3], 57, 49 - layout01Paint[2].width * kuchunyinRatio[3] / 4, layout01Paint[2].width, layout01Paint[2].width * kuchunyinRatio[3]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 10:
    image(kuchunyin[4], 57, 49 - layout01Paint[2].width * kuchunyinRatio[4] / 4, layout01Paint[2].width, layout01Paint[2].width * kuchunyinRatio[4]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 11:
    image(leungkahim[1], 57, 49 - layout01Paint[2].width * leungkahimRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * leungkahimRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 12:
    image(leungkahim[2], 57, 49 - layout01Paint[2].width * leungkahimRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * leungkahimRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 13:
    image(leungkahim[3], 57, 49 - layout01Paint[2].width * leungkahimRatio[3] / 4, layout01Paint[2].width, layout01Paint[2].width * leungkahimRatio[3]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 14:
    image(leungkahim[4], 57, 49 - layout01Paint[2].width * leungkahimRatio[4] / 4, layout01Paint[2].width, layout01Paint[2].width * leungkahimRatio[4]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 15:
    image(nghowah[1], 57, 49 - layout01Paint[2].width * nghowahRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * nghowahRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 16:
    image(nghowah[2], 57, 49 - layout01Paint[2].width * nghowahRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * nghowahRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 17:
    image(nghowah[3], 57, 49 - layout01Paint[2].width * nghowahRatio[3] / 4, layout01Paint[2].width, layout01Paint[2].width * nghowahRatio[3]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 18:
    image(nghowah[4], 57, 49 - layout01Paint[2].width * nghowahRatio[4] / 4, layout01Paint[2].width, layout01Paint[2].width * nghowahRatio[4]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 19:
    image(nureni[1], 57, 49 - layout01Paint[2].width * nureniRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * nureniRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 20:
    image(nureni[2], 57, 49 - layout01Paint[2].width * nureniRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * nureniRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 21:
    image(nureni[3], 57, 49 - layout01Paint[2].width * nureniRatio[3] / 4, layout01Paint[2].width, layout01Paint[2].width * nureniRatio[3]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 22:
    image(nureni[4], 57, 49 - layout01Paint[2].width * nureniRatio[4] / 4, layout01Paint[2].width, layout01Paint[2].width * nureniRatio[4]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 23:
    image(chungwinghei[1], 57, 49 - layout01Paint[2].width * chungwingheiRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * chungwingheiRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 24:
    image(chungwinghei[2], 57, 49 - layout01Paint[2].width * chungwingheiRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * chungwingheiRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 25:
    image(chungwinghei[3], 57, 49 - layout01Paint[2].width * chungwingheiRatio[3] / 4, layout01Paint[2].width, layout01Paint[2].width * chungwingheiRatio[3]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 26:
    image(chungwinghei[4], 57, 49 - layout01Paint[2].width * chungwingheiRatio[4] / 4, layout01Paint[2].width, layout01Paint[2].width * chungwingheiRatio[4]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 27:
    image(xerxes[1], 57, 49 - layout01Paint[2].width * xerxesRatio[1] / 4, layout01Paint[2].width, layout01Paint[2].width * xerxesRatio[1]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 28:
    image(xerxes[2], 57, 49 - layout01Paint[2].width * xerxesRatio[2] / 4, layout01Paint[2].width, layout01Paint[2].width * xerxesRatio[2]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 29:
    image(xerxes[3], 57, 49 - layout01Paint[2].width * xerxesRatio[3] / 4, layout01Paint[2].width, layout01Paint[2].width * xerxesRatio[3]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;
  case 30:
    image(xerxes[4], 57, 49 - layout01Paint[2].width * xerxesRatio[4] / 4, layout01Paint[2].width, layout01Paint[2].width * xerxesRatio[4]);
    fill(255);
    rect( 25, 150, 80, 80);
    break;

  default:


  }


  ////////////////////////////////////////////////////////////////////////////////////////
  switch (canvas_04) {
    case 0:

      break;
    case 1:
      image(angel[1], 248, 43 - layout01Paint[4].height * angelRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * angelRatio[1]);
      break;
    case 2:
      image(angel[2], 248, 43 - layout01Paint[4].width * angelRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * angelRatio[2]);
      break;
    case 3:
      image(bouie[1], 248, 43 -  layout01Paint[4].width * bouieRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * bouieRatio[1]);
      break;
    case 4:
      image(bouie[2], 248, 43 - layout01Paint[4].width * bouieRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * bouieRatio[2]);
      break;
    case 5:
      image(chungchiho[1], 248, 43, layout01Paint[4].height / chungchihoRatio[1], layout01Paint[4].height);
      break;
    case 6:
      image(chungchiho[2], 248, 43, layout01Paint[4].height / chungchihoRatio[2], layout01Paint[4].height);
      break;
    case 7:
      image(kuchunyin[1], 248, 43 - layout01Paint[4].width * kuchunyinRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[1]);
      break;
    case 8:
      image(kuchunyin[2], 248, 43, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[2]);
      break;
    case 9:
      image(kuchunyin[3], 248, 43, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[3]);
      break;
    case 10:
      image(kuchunyin[4], 248, 43, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[4]);
      break;
    case 11:
      image(leungkahim[1], 248, 43, layout01Paint[4].height /leungkahimRatio[1] , layout01Paint[4].height);
      break;
    case 12:
      image(leungkahim[2], 248, 43 - layout01Paint[4].width * leungkahimRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * leungkahimRatio[2]);
      break;
    case 13:
      image(leungkahim[3], 248, 43, layout01Paint[4].height / leungkahimRatio[3], layout01Paint[4].height);
      break;
    case 14:
      image(leungkahim[4], 248, 43 - layout01Paint[4].width * leungkahimRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * leungkahimRatio[4]);
      break;
    case 15:
      image(nghowah[1], 248, 43, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[1]);
      break;
    case 16:
      image(nghowah[2], 248, 43, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[2]);
      break;
    case 17:
      image(nghowah[3], 248, 43, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[3]);
      break;
    case 18:
      image(nghowah[4], 248, 43, layout01Paint[4].height / nghowahRatio[4], layout01Paint[4].height);
      break;
    case 19:
      image(nureni[1], 248, 43 - layout01Paint[4].width * nureniRatio[1] / 4 , layout01Paint[4].width, layout01Paint[4].width * nureniRatio[1]);
      break;
    case 20:
      image(nureni[2], 248, 43, layout01Paint[4].height / nureniRatio[2], layout01Paint[4].height);
      break;
    case 21:
      image(nureni[3], 248, 43, layout01Paint[4].height / nureniRatio[3], layout01Paint[4].height);
      break;
    case 22:
      image(nureni[4], 248, 43 - layout01Paint[4].width * nureniRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * nureniRatio[4]);
      break;
    case 23:
      image(chungwinghei[1], 248, 43, layout01Paint[4].height / chungwingheiRatio[1], layout01Paint[4].height);
      break;
    case 24:
      image(chungwinghei[2], 248, 43 , layout01Paint[4].height / chungwingheiRatio[2], layout01Paint[4].height );
      break;
    case 25:
      image(chungwinghei[3], 248, 43 - layout01Paint[4].width * chungwingheiRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * chungwingheiRatio[3]);
      break;
    case 26:
      image(chungwinghei[4], 248, 43 , layout01Paint[4].height / chungwingheiRatio[4], layout01Paint[4].height);
      break;
    case 27:
      image(xerxes[1], 248, 43 - layout01Paint[4].width * xerxesRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * xerxesRatio[1]);
      break;
    case 28:
      image(xerxes[2], 248, 43, layout01Paint[4].height / xerxesRatio[2], layout01Paint[4].height);
      break;
    case 29:
      image(xerxes[3], 248, 43 - layout01Paint[4].width * xerxesRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * xerxesRatio[3]);
      break;
    case 30:
      image(xerxes[4], 248, 43, layout01Paint[4].height / xerxesRatio[4], layout01Paint[4].height);
      break;
    default:
  }




  // switch (canvas_04) {
  //   case 0:
  //
  //     break;
  //   case 1:
  //     image(angel[1], 248, 43 - layout01Paint[4].height * angelRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * angelRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 2:
  //     image(angel[2], 248, 43 - layout01Paint[4].width * angelRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * angelRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 3:
  //     image(bouie[1], 248, 43 -  layout01Paint[4].width * bouieRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * bouieRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 4:
  //     image(bouie[2], 248, 43 - layout01Paint[4].width * bouieRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * bouieRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 5:
  //     image(chungchiho[1], 248, 43, layout01Paint[4].height / chungchihoRatio[1], layout01Paint[4].height );
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 6:
  //     image(chungchiho[2], 248, 43 - layout01Paint[4].width * chungchihoRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * chungchihoRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 7:
  //     image(kuchunyin[1], 248, 43 - layout01Paint[4].width * kuchunyinRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 8:
  //     image(kuchunyin[2], 248, 43 - layout01Paint[4].width * kuchunyinRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 9:
  //     image(kuchunyin[3], 248, 43 - layout01Paint[4].width * kuchunyinRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[3]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 10:
  //     image(kuchunyin[4], 248, 43 - layout01Paint[4].width * kuchunyinRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * kuchunyinRatio[4]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 11:
  //     image(leungkahim[1], 248, 43 - layout01Paint[4].width * leungkahimRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * leungkahimRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 12:
  //     image(leungkahim[2], 248, 43 - layout01Paint[4].width * leungkahimRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * leungkahimRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 13:
  //     image(leungkahim[3], 248, 43 - layout01Paint[4].width * leungkahimRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * leungkahimRatio[3]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 14:
  //     image(leungkahim[4], 248, 43 - layout01Paint[4].width * leungkahimRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * leungkahimRatio[4]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 15:
  //     image(nghowah[1], 248, 43 - layout01Paint[4].width * nghowahRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 16:
  //     image(nghowah[2], 248, 43 - layout01Paint[4].width * nghowahRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 17:
  //     image(nghowah[3], 248, 43 - layout01Paint[4].width * nghowahRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[3]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 18:
  //     image(nghowah[4], 248, 43 - layout01Paint[4].width * nghowahRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * nghowahRatio[4]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 19:
  //     image(nureni[1], 248, 43 - layout01Paint[4].width * nureniRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * nureniRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 20:
  //     image(nureni[2], 248, 43 - layout01Paint[4].width * nureniRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * nureniRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 21:
  //     image(nureni[3], 248, 43 - layout01Paint[4].width * nureniRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * nureniRatio[3]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 22:
  //     image(nureni[4], 248, 43 - layout01Paint[4].width * nureniRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * nureniRatio[4]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 23:
  //     image(chungwinghei[1], 248, 43 - layout01Paint[4].width * chungwingheiRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * chungwingheiRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 24:
  //     image(chungwinghei[2], 248, 43 - layout01Paint[4].width * chungwingheiRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * chungwingheiRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 25:
  //     image(chungwinghei[3], 248, 43 - layout01Paint[4].width * chungwingheiRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * chungwingheiRatio[3]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 26:
  //     image(chungwinghei[4], 248, 43 - layout01Paint[4].width * chungwingheiRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * chungwingheiRatio[4]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 27:
  //     image(xerxes[1], 248, 43 - layout01Paint[4].width * xerxesRatio[1] / 4, layout01Paint[4].width, layout01Paint[4].width * xerxesRatio[1]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 28:
  //     image(xerxes[2], 248, 43 - layout01Paint[4].width * xerxesRatio[2] / 4, layout01Paint[4].width, layout01Paint[4].width * xerxesRatio[2]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 29:
  //     image(xerxes[3], 248, 43 - layout01Paint[4].width * xerxesRatio[3] / 4, layout01Paint[4].width, layout01Paint[4].width * xerxesRatio[3]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //   case 30:
  //     image(xerxes[4], 248, 43 - layout01Paint[4].width * xerxesRatio[4] / 4, layout01Paint[4].width, layout01Paint[4].width * xerxesRatio[4]);
  //     fill(255);
  //     rect( 162, 94, 90, 90);
  //     break;
  //
  //   default:
  //
  //   }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  switch (canvas_01) {
    case 0:

      break;
    case 1:
      image(angel[1], 25, 150 - layout01Paint[1].height * angelRatio[1] / 4, layout01Paint[1].width, layout01Paint[1].width * angelRatio[1]);
      break;
    case 2:
      image(angel[2], 25, 150 - layout01Paint[1].width * angelRatio[2] / 4, layout01Paint[1].width, layout01Paint[1].width * angelRatio[2]);
      break;
    case 3:
      image(bouie[1], 25, 150 -  layout01Paint[1].width * bouieRatio[1] / 4, layout01Paint[1].width, layout01Paint[1].width * bouieRatio[1]);
      break;
    case 4:
      image(bouie[2], 25, 150 - layout01Paint[1].width * bouieRatio[2] / 4, layout01Paint[1].width, layout01Paint[1].width * bouieRatio[2]);
      break;
    case 5:
      image(chungchiho[1], 25, 150, layout01Paint[1].height / chungchihoRatio[1], layout01Paint[1].height);
      break;
    case 6:
      image(chungchiho[2], 25, 150, layout01Paint[1].height / chungchihoRatio[2], layout01Paint[1].height);
      break;
    case 7:
      image(kuchunyin[1], 25, 150 - layout01Paint[1].width * kuchunyinRatio[1] / 4, layout01Paint[1].width, layout01Paint[1].width * kuchunyinRatio[1]);
      break;
    case 8:
      image(kuchunyin[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * kuchunyinRatio[2]);
      break;
    case 9:
      image(kuchunyin[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * kuchunyinRatio[3]);
      break;
    case 10:
      image(kuchunyin[4], 25, 150, layout01Paint[1].width, layout01Paint[1].width * kuchunyinRatio[4]);
      break;
    case 11:
      image(leungkahim[1], 25, 150, layout01Paint[1].height /leungkahimRatio[1] , layout01Paint[1].height);
      break;
    case 12:
      image(leungkahim[2], 25, 150 - layout01Paint[1].width * leungkahimRatio[2] / 4, layout01Paint[1].width, layout01Paint[1].width * leungkahimRatio[2]);
      break;
    case 13:
      image(leungkahim[3], 25, 150, layout01Paint[1].height / leungkahimRatio[3], layout01Paint[1].height);
      break;
    case 14:
      image(leungkahim[4], 25, 150 - layout01Paint[1].width * leungkahimRatio[4] / 4, layout01Paint[1].width, layout01Paint[1].width * leungkahimRatio[4]);
      break;
    case 15:
      image(nghowah[1], 25, 150, layout01Paint[1].width, layout01Paint[1].width * nghowahRatio[1]);
      break;
    case 16:
      image(nghowah[2], 25, 150, layout01Paint[1].width, layout01Paint[1].width * nghowahRatio[2]);
      break;
    case 17:
      image(nghowah[3], 25, 150, layout01Paint[1].width, layout01Paint[1].width * nghowahRatio[3]);
      break;
    case 18:
      image(nghowah[4], 25, 150, layout01Paint[1].height / nghowahRatio[4], layout01Paint[1].height);
      break;
    case 19:
      image(nureni[1], 25, 150 - layout01Paint[1].width * nureniRatio[1] / 4 , layout01Paint[1].width, layout01Paint[1].width * nureniRatio[1]);
      break;
    case 20:
      image(nureni[2], 25, 150, layout01Paint[1].height / nureniRatio[2], layout01Paint[1].height);
      break;
    case 21:
      image(nureni[3], 25, 150, layout01Paint[1].height / nureniRatio[3], layout01Paint[1].height);
      break;
    case 22:
      image(nureni[4], 25, 150 - layout01Paint[1].width * nureniRatio[4] / 4, layout01Paint[1].width, layout01Paint[1].width * nureniRatio[4]);
      break;
    case 23:
      image(chungwinghei[1], 25, 150, layout01Paint[1].height / chungwingheiRatio[1], layout01Paint[1].height);
      break;
    case 24:
      image(chungwinghei[2], 25, 150 , layout01Paint[1].height / chungwingheiRatio[2], layout01Paint[1].height );
      break;
    case 25:
      image(chungwinghei[3], 25, 150 - layout01Paint[1].width * chungwingheiRatio[3] / 4, layout01Paint[1].width, layout01Paint[1].width * chungwingheiRatio[3]);
      break;
    case 26:
      image(chungwinghei[4], 25, 150 , layout01Paint[1].height / chungwingheiRatio[4], layout01Paint[1].height);
      break;
    case 27:
      image(xerxes[1], 25, 150 - layout01Paint[1].width * xerxesRatio[1] / 4, layout01Paint[1].width, layout01Paint[1].width * xerxesRatio[1]);
      break;
    case 28:
      image(xerxes[2], 25, 150, layout01Paint[1].height / xerxesRatio[2], layout01Paint[1].height);
      break;
    case 29:
      image(xerxes[3], 25, 150 - layout01Paint[1].width * xerxesRatio[3] / 4, layout01Paint[1].width, layout01Paint[1].width * xerxesRatio[3]);
      break;
    case 30:
      image(xerxes[4], 25, 150, layout01Paint[1].height / xerxesRatio[4], layout01Paint[1].height);
      break;
    default:
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////


  switch (canvas_03) {
    case 0:

      break;
    case 1:
      image(angel[1], 162, 94 - layout01Paint[3].height * angelRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * angelRatio[1]);
      break;
    case 2:
      image(angel[2], 162, 94 - layout01Paint[3].width * angelRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * angelRatio[2]);
      break;
    case 3:
      image(bouie[1], 162, 94 -  layout01Paint[3].width * bouieRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * bouieRatio[1]);
      break;
    case 4:
      image(bouie[2], 162, 94 - layout01Paint[3].width * bouieRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * bouieRatio[2]);
      break;
    case 5:
      image(chungchiho[1], 162, 94, layout01Paint[3].height / chungchihoRatio[1], layout01Paint[3].height);
      break;
    case 6:
      image(chungchiho[2], 162, 94, layout01Paint[3].height / chungchihoRatio[2], layout01Paint[3].height);
      break;
    case 7:
      image(kuchunyin[1], 162, 94 - layout01Paint[3].width * kuchunyinRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[1]);
      break;
    case 8:
      image(kuchunyin[2], 162, 94, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[2]);
      break;
    case 9:
      image(kuchunyin[3], 162, 94, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[3]);
      break;
    case 10:
      image(kuchunyin[4], 162, 94, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[4]);
      break;
    case 11:
      image(leungkahim[1], 162, 94, layout01Paint[3].height /leungkahimRatio[1] , layout01Paint[3].height);
      break;
    case 12:
      image(leungkahim[2], 162, 94 - layout01Paint[3].width * leungkahimRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * leungkahimRatio[2]);
      break;
    case 13:
      image(leungkahim[3], 162, 94, layout01Paint[3].height / leungkahimRatio[3], layout01Paint[3].height);
      break;
    case 14:
      image(leungkahim[4], 162, 94 - layout01Paint[3].width * leungkahimRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * leungkahimRatio[4]);
      break;
    case 15:
      image(nghowah[1], 162, 94, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[1]);
      break;
    case 16:
      image(nghowah[2], 162, 94, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[2]);
      break;
    case 17:
      image(nghowah[3], 162, 94, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[3]);
      break;
    case 18:
      image(nghowah[4], 162, 94, layout01Paint[3].height / nghowahRatio[4], layout01Paint[3].height);
      break;
    case 19:
      image(nureni[1], 162, 94 - layout01Paint[3].width * nureniRatio[1] / 4 , layout01Paint[3].width, layout01Paint[3].width * nureniRatio[1]);
      break;
    case 20:
      image(nureni[2], 162, 94, layout01Paint[3].height / nureniRatio[2], layout01Paint[3].height);
      break;
    case 21:
      image(nureni[3], 162, 94, layout01Paint[3].height / nureniRatio[3], layout01Paint[3].height);
      break;
    case 22:
      image(nureni[4], 162, 94 - layout01Paint[3].width * nureniRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * nureniRatio[4]);
      break;
    case 23:
      image(chungwinghei[1], 162, 94, layout01Paint[3].height / chungwingheiRatio[1], layout01Paint[3].height);
      break;
    case 24:
      image(chungwinghei[2], 162, 94 , layout01Paint[3].height / chungwingheiRatio[2], layout01Paint[3].height );
      break;
    case 25:
      image(chungwinghei[3], 162, 94 - layout01Paint[3].width * chungwingheiRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * chungwingheiRatio[3]);
      break;
    case 26:
      image(chungwinghei[4], 162, 94 , layout01Paint[3].height / chungwingheiRatio[4], layout01Paint[3].height);
      break;
    case 27:
      image(xerxes[1], 162, 94 - layout01Paint[3].width * xerxesRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * xerxesRatio[1]);
      break;
    case 28:
      image(xerxes[2], 162, 94, layout01Paint[3].height / xerxesRatio[2], layout01Paint[3].height);
      break;
    case 29:
      image(xerxes[3], 162, 94 - layout01Paint[3].width * xerxesRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * xerxesRatio[3]);
      break;
    case 30:
      image(xerxes[4], 162, 94, layout01Paint[3].height / xerxesRatio[4], layout01Paint[3].height);
      break;
    default:
  }


  // switch (canvas_03) {
  //   case 0:
  //
  //     break;
  //     case 1:
  //       image(angel[1], 162, 94 - layout01Paint[3].width * angelRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * angelRatio[1]);
  //       break;
  //     case 2:
  //       image(angel[2], 162, 94 - layout01Paint[3].width * angelRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * angelRatio[2]);
  //       break;
  //     case 3:
  //       image(bouie[1], 162, 94 -  layout01Paint[3].width * bouieRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * bouieRatio[1]);
  //       break;
  //     case 4:
  //       image(bouie[2], 162, 94 - layout01Paint[3].width * bouieRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * bouieRatio[2]);
  //       break;
  //     case 5:
  //       image(chungchiho[1], 162, 94, layout01Paint[3].height / chungchihoRatio[1], layout01Paint[3].height);
  //       break;
  //     case 6:
  //       image(chungchiho[2], 162, 94 - layout01Paint[3].width * chungchihoRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * chungchihoRatio[2]);
  //       break;
  //     case 7:
  //       image(kuchunyin[1], 162, 94 - layout01Paint[3].width * kuchunyinRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[1]);
  //       break;
  //     case 8:
  //       image(kuchunyin[2], 162, 94 - layout01Paint[3].width * kuchunyinRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[2]);
  //       break;
  //     case 9:
  //       image(kuchunyin[3], 162, 94 - layout01Paint[3].width * kuchunyinRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[3]);
  //       break;
  //     case 10:
  //       image(kuchunyin[4], 162, 94 - layout01Paint[3].width * kuchunyinRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * kuchunyinRatio[4]);
  //       break;
  //     case 11:
  //       image(leungkahim[1], 162, 94 - layout01Paint[3].width * leungkahimRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * leungkahimRatio[1]);
  //       break;
  //     case 12:
  //       image(leungkahim[2], 162, 94 - layout01Paint[3].width * leungkahimRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * leungkahimRatio[2]);
  //       break;
  //     case 13:
  //       image(leungkahim[3], 162, 94 - layout01Paint[3].width * leungkahimRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * leungkahimRatio[3]);
  //       break;
  //     case 14:
  //       image(leungkahim[4], 162, 94 - layout01Paint[3].width * leungkahimRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * leungkahimRatio[4]);
  //       break;
  //     case 15:
  //       image(nghowah[1], 162, 94 - layout01Paint[3].width * nghowahRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[1]);
  //       break;
  //     case 16:
  //       image(nghowah[2], 162, 94 - layout01Paint[3].width * nghowahRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[2]);
  //       break;
  //     case 17:
  //       image(nghowah[3], 162, 94 - layout01Paint[3].width * nghowahRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[3]);
  //       break;
  //     case 18:
  //       image(nghowah[4], 162, 94 - layout01Paint[3].width * nghowahRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * nghowahRatio[4]);
  //       break;
  //     case 19:
  //       image(nureni[1], 162, 94 - layout01Paint[3].width * nureniRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * nureniRatio[1]);
  //       break;
  //     case 20:
  //       image(nureni[2], 162, 94 - layout01Paint[3].width * nureniRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * nureniRatio[2]);
  //       break;
  //     case 21:
  //       image(nureni[3], 162, 94 - layout01Paint[3].width * nureniRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * nureniRatio[3]);
  //       break;
  //     case 22:
  //       image(nureni[4], 162, 94 - layout01Paint[3].width * nureniRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * nureniRatio[4]);
  //       break;
  //     case 23:
  //       image(chungwinghei[1], 162, 94 - layout01Paint[3].width * chungwingheiRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * chungwingheiRatio[1]);
  //       break;
  //     case 24:
  //       image(chungwinghei[2], 162, 94 - layout01Paint[3].width * chungwingheiRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * chungwingheiRatio[2]);
  //       break;
  //     case 25:
  //       image(chungwinghei[3], 162, 94 - layout01Paint[3].width * chungwingheiRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * chungwingheiRatio[3]);
  //       break;
  //     case 26:
  //       image(chungwinghei[4], 162, 94 - layout01Paint[3].width * chungwingheiRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * chungwingheiRatio[4]);
  //       break;
  //     case 27:
  //       image(xerxes[1], 162, 94 - layout01Paint[3].width * xerxesRatio[1] / 4, layout01Paint[3].width, layout01Paint[3].width * xerxesRatio[1]);
  //       break;
  //     case 28:
  //       image(xerxes[2], 162, 94 - layout01Paint[3].width * xerxesRatio[2] / 4, layout01Paint[3].width, layout01Paint[3].width * xerxesRatio[2]);
  //       break;
  //     case 29:
  //       image(xerxes[3], 162, 94 - layout01Paint[3].width * xerxesRatio[3] / 4, layout01Paint[3].width, layout01Paint[3].width * xerxesRatio[3]);
  //       break;
  //     case 30:
  //       image(xerxes[4], 162, 94 - layout01Paint[3].width * xerxesRatio[4] / 4, layout01Paint[3].width, layout01Paint[3].width * xerxesRatio[4]);
  //       break;
  //
  //   default:
  //
  //   }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    switch (canvas_05) {
      case 0:

        break;
      case 1:
        image(angel[1], 360, 108 - layout01Paint[5].height * angelRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * angelRatio[1]);
        break;
      case 2:
        image(angel[2], 360, 108 - layout01Paint[5].width * angelRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * angelRatio[2]);
        break;
      case 3:
        image(bouie[1], 360, 108 -  layout01Paint[5].width * bouieRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * bouieRatio[1]);
        break;
      case 4:
        image(bouie[2], 360, 108 - layout01Paint[5].width * bouieRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * bouieRatio[2]);
        break;
      case 5:
        image(chungchiho[1], 360, 108, layout01Paint[5].height / chungchihoRatio[1], layout01Paint[5].height);
        break;
      case 6:
        image(chungchiho[2], 360, 108, layout01Paint[5].height / chungchihoRatio[2], layout01Paint[5].height);
        break;
      case 7:
        image(kuchunyin[1], 360, 108 - layout01Paint[5].width * kuchunyinRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[1]);
        break;
      case 8:
        image(kuchunyin[2], 360, 108, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[2]);
        break;
      case 9:
        image(kuchunyin[3], 360, 108, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[3]);
        break;
      case 10:
        image(kuchunyin[4], 360, 108, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[4]);
        break;
      case 11:
        image(leungkahim[1], 360, 108, layout01Paint[5].height /leungkahimRatio[1] , layout01Paint[5].height);
        break;
      case 12:
        image(leungkahim[2], 360, 108 - layout01Paint[5].width * leungkahimRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * leungkahimRatio[2]);
        break;
      case 13:
        image(leungkahim[3], 360, 108, layout01Paint[5].height / leungkahimRatio[3], layout01Paint[5].height);
        break;
      case 14:
        image(leungkahim[4], 360, 108 - layout01Paint[5].width * leungkahimRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * leungkahimRatio[4]);
        break;
      case 15:
        image(nghowah[1], 360, 108, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[1]);
        break;
      case 16:
        image(nghowah[2], 360, 108, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[2]);
        break;
      case 17:
        image(nghowah[3], 360, 108, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[3]);
        break;
      case 18:
        image(nghowah[4], 360, 108, layout01Paint[5].height / nghowahRatio[4], layout01Paint[5].height);
        break;
      case 19:
        image(nureni[1], 360, 108 - layout01Paint[5].width * nureniRatio[1] / 4 , layout01Paint[5].width, layout01Paint[5].width * nureniRatio[1]);
        break;
      case 20:
        image(nureni[2], 360, 108, layout01Paint[5].height / nureniRatio[2], layout01Paint[5].height);
        break;
      case 21:
        image(nureni[3], 360, 108, layout01Paint[5].height / nureniRatio[3], layout01Paint[5].height);
        break;
      case 22:
        image(nureni[4], 360, 108 - layout01Paint[5].width * nureniRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * nureniRatio[4]);
        break;
      case 23:
        image(chungwinghei[1], 360, 108, layout01Paint[5].height / chungwingheiRatio[1], layout01Paint[5].height);
        break;
      case 24:
        image(chungwinghei[2], 360, 108 , layout01Paint[5].height / chungwingheiRatio[2], layout01Paint[5].height );
        break;
      case 25:
        image(chungwinghei[3], 360, 108 - layout01Paint[5].width * chungwingheiRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * chungwingheiRatio[3]);
        break;
      case 26:
        image(chungwinghei[4], 360, 108 , layout01Paint[5].height / chungwingheiRatio[4], layout01Paint[5].height);
        break;
      case 27:
        image(xerxes[1], 360, 108 - layout01Paint[5].width * xerxesRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[1]);
        break;
      case 28:
        image(xerxes[2], 360, 108, layout01Paint[5].height / xerxesRatio[2], layout01Paint[5].height);
        break;
      case 29:
        image(xerxes[3], 360, 108 - layout01Paint[5].width * xerxesRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[3]);
        break;
      case 30:
        image(xerxes[4], 360, 108 , layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[4]);
        break;
      default:
    }

  // switch (canvas_05) {
  //   case 0:
  //
  //     break;
  //   case 1:
  //     image(angel[1], 360, 108 - layout01Paint[5].width * angelRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * angelRatio[1]);
  //     break;
  //   case 2:
  //     image(angel[2], 360, 108 - layout01Paint[5].width * angelRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * angelRatio[2]);
  //     break;
  //   case 3:
  //     image(bouie[1], 360, 108 -  layout01Paint[5].width * bouieRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * bouieRatio[1]);
  //     break;
  //   case 4:
  //     image(bouie[2], 360, 108 - layout01Paint[5].width * bouieRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * bouieRatio[2]);
  //     break;
  //   case 5:
  //     image(chungchiho[1], 360, 108 - layout01Paint[5].width * chungchihoRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * chungchihoRatio[1]);
  //     break;
  //   case 6:
  //     image(chungchiho[2], 360, 108 - layout01Paint[5].width * chungchihoRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * chungchihoRatio[2]);
  //     break;
  //   case 7:
  //     image(kuchunyin[1], 360, 108 - layout01Paint[5].width * kuchunyinRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[1]);
  //     break;
  //   case 8:
  //     image(kuchunyin[2], 360, 108 - layout01Paint[5].width * kuchunyinRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[2]);
  //     break;
  //   case 9:
  //     image(kuchunyin[3], 360, 108 - layout01Paint[5].width * kuchunyinRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[3]);
  //     break;
  //   case 10:
  //     image(kuchunyin[4], 360, 108 - layout01Paint[5].width * kuchunyinRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * kuchunyinRatio[4]);
  //     break;
  //   case 11:
  //     image(leungkahim[1], 360, 108 - layout01Paint[5].width * leungkahimRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * leungkahimRatio[1]);
  //     break;
  //   case 12:
  //     image(leungkahim[2], 360, 108 - layout01Paint[5].width * leungkahimRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * leungkahimRatio[2]);
  //     break;
  //   case 13:
  //     image(leungkahim[3], 360, 108 - layout01Paint[5].width * leungkahimRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * leungkahimRatio[3]);
  //     break;
  //   case 14:
  //     image(leungkahim[4], 360, 108 - layout01Paint[5].width * leungkahimRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * leungkahimRatio[4]);
  //     break;
  //   case 15:
  //     image(nghowah[1], 360, 108 - layout01Paint[5].width * nghowahRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[1]);
  //     break;
  //   case 16:
  //     image(nghowah[2], 360, 108 - layout01Paint[5].width * nghowahRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[2]);
  //     break;
  //   case 17:
  //     image(nghowah[3], 360, 108 - layout01Paint[5].width * nghowahRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[3]);
  //     break;
  //   case 18:
  //     image(nghowah[4], 360, 108 - layout01Paint[5].width * nghowahRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * nghowahRatio[4]);
  //     break;
  //   case 19:
  //     image(nureni[1], 360, 108 - layout01Paint[5].width * nureniRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * nureniRatio[1]);
  //     break;
  //   case 20:
  //     image(nureni[2], 360, 108 - layout01Paint[5].width * nureniRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * nureniRatio[2]);
  //     break;
  //   case 21:
  //     image(nureni[3], 360, 108 - layout01Paint[5].width * nureniRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * nureniRatio[3]);
  //     break;
  //   case 22:
  //     image(nureni[4], 360, 108 - layout01Paint[5].width * nureniRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * nureniRatio[4]);
  //     break;
  //   case 23:
  //     image(chungwinghei[1], 360, 108 - layout01Paint[5].width * chungwingheiRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * chungwingheiRatio[1]);
  //     break;
  //   case 24:
  //     image(chungwinghei[2], 360, 108 - layout01Paint[5].width * chungwingheiRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * chungwingheiRatio[2]);
  //     break;
  //   case 25:
  //     image(chungwinghei[3], 360, 108 - layout01Paint[5].width * chungwingheiRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * chungwingheiRatio[3]);
  //     break;
  //   case 26:
  //     image(chungwinghei[4], 360, 108 - layout01Paint[5].width * chungwingheiRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * chungwingheiRatio[4]);
  //     break;
  //   case 27:
  //     image(xerxes[1], 360, 108 - layout01Paint[5].width * xerxesRatio[1] / 4, layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[1]);
  //     break;
  //   case 28:
  //     image(xerxes[2], 360, 108 - layout01Paint[5].width * xerxesRatio[2] / 4, layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[2]);
  //     break;
  //   case 29:
  //     image(xerxes[3], 360, 108 - layout01Paint[5].width * xerxesRatio[3] / 4, layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[3]);
  //     break;
  //   case 30:
  //     image(xerxes[4], 360, 108 - layout01Paint[5].width * xerxesRatio[4] / 4, layout01Paint[5].width, layout01Paint[5].width * xerxesRatio[4]);
  //     break;
  //
  //   default:
  //
  //   }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

}


function artworkSelect(){
  // stroke(255, 204, 0);
  // strokeWeight(1);


  noStroke();
  fill(255, 204, 100, 70);
  rect (10, 410, 480, 16);
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
      text1 = '兩個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 1;
      text2 = '綠色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 1;
      text3 = '小精靈';
    } else if (selectedLayout01Print == 4){
      selCase04 = 1;
      text4 = '好奇';
    } else if (selectedLayout01Print == 5){
      selCase05 = 1;
      text5 = '可愛的';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + imgHeight / angelRatio[1] + sliderXMove && mouseX < 20 + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] + sliderXMove&& mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 2;
      text1 = '一隻';
    } else if (selectedLayout01Print == 2){
      selCase02 = 2;
      text2 = '藍色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 2;
      text3 = '大鳥';
    } else if (selectedLayout01Print == 4){
      selCase04 = 2;
      text4 = '憂鬱';
    } else if (selectedLayout01Print == 5){
      selCase05 = 2;
      text5 = '安靜的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] && mouseX < 30 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2] +imgHeight / bouieRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 3;
      text1 = '一隻';
    } else if (selectedLayout01Print == 2){
      selCase02 = 3;
      text2 = '受傷';
    } else if (selectedLayout01Print == 3){
      selCase03 = 3;
      text3 = '野豬';
    } else if (selectedLayout01Print == 4){
      selCase04 = 3;
      text4 = '孤獨';
    } else if (selectedLayout01Print == 5){
      selCase05 = 3;
      text5 = '傷心的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] && mouseX < 40 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 4;
      text1 = '一條';
    } else if (selectedLayout01Print == 2){
      selCase02 = 4;
      text2 = '自由';
    } else if (selectedLayout01Print == 3){
      selCase03 = 4;
      text3 = '魚';
    } else if (selectedLayout01Print == 4){
      selCase04 = 4;
      text4 = '巨大';
    } else if (selectedLayout01Print == 5){
      selCase05 = 4;
      text5 = '勇敢的';
    }
    pageCount = 0;
  }

  if (mouseX > 50 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2] && mouseX < 50 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2] + imgHeight / chungchihoRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 5;
      text1 = '一間';
    } else if (selectedLayout01Print == 2){
      selCase02 = 5;
      text2 = '擠迫';
    } else if (selectedLayout01Print == 3){
      selCase03 = 5;
      text3 = '店舖';
    } else if (selectedLayout01Print == 4){
      selCase04 = 5;
      text4 = '豐富';
    } else if (selectedLayout01Print == 5){
      selCase05 = 5;
      text5 = '整齊的';
    }
    pageCount = 0;
  }

  if (mouseX > 60 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2]+ imgHeight / chungchihoRatio[1] && mouseX < 50 + sliderXMove + imgHeight / angelRatio[1] + imgHeight / angelRatio[2]+ imgHeight / bouieRatio[1] + imgHeight / bouieRatio[2] + imgHeight / chungchihoRatio[1] + imgHeight / chungchihoRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 6;
      text1 = '一座';
    } else if (selectedLayout01Print == 2){
      selCase02 = 6;
      text2 = '宏偉';
    } else if (selectedLayout01Print == 3){
      selCase03 = 6;
      text3 = '獅子山';
    } else if (selectedLayout01Print == 4){
      selCase04 = 6;
      text4 = '穩重';
    } else if (selectedLayout01Print == 5){
      selCase05 = 6;
      text5 = '堅毅的';
    }
    pageCount = 0;
  }

  if (mouseX > 10 + teacherPositionX && mouseX < 10 + teacherPositionX + imgHeight / kuchunyinRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 7;
      text1 = '一隻';
    } else if (selectedLayout01Print == 2){
      selCase02 = 7;
      text2 = '聰明';
    } else if (selectedLayout01Print == 3){
      selCase03 = 7;
      text3 = '飛鳥';
    } else if (selectedLayout01Print == 4){
      selCase04 = 7;
      text4 = '勇敢';
    } else if (selectedLayout01Print == 5){
      selCase05 = 7;
      text5 = '自由的';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + teacherPositionX + imgHeight / kuchunyinRatio[1] && mouseX < 10 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 8;
      text1 = '一座';
    } else if (selectedLayout01Print == 2){
      selCase02 = 8;
      text2 = '古老';
    } else if (selectedLayout01Print == 3){
      selCase03 = 8;
      text3 = '時鐘';
    } else if (selectedLayout01Print == 4){
      selCase04 = 8;
      text4 = '準確';
    } else if (selectedLayout01Print == 5){
      selCase05 = 8;
      text5 = '穩定的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] && mouseX < 30 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 9;
      text1 = '一班';
    } else if (selectedLayout01Print == 2){
      selCase02 = 9;
      text2 = '快樂';
    } else if (selectedLayout01Print == 3){
      selCase03 = 9;
      text3 = '朋友';
    } else if (selectedLayout01Print == 4){
      selCase04 = 9;
      text4 = '團結';
    } else if (selectedLayout01Print == 5){
      selCase05 = 9;
      text5 = '有力量的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3] && mouseX < 40 + teacherPositionX + imgHeight / kuchunyinRatio[1] + imgHeight / kuchunyinRatio[2] + imgHeight / kuchunyinRatio[3] + imgHeight / kuchunyinRatio[4] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 10;
      text1 = '一座';
    } else if (selectedLayout01Print == 2){
      selCase02 = 10;
      text2 = '七彩';
    } else if (selectedLayout01Print == 3){
      selCase03 = 10;
      text3 = '小小世界';
    } else if (selectedLayout01Print == 4){
      selCase04 = 10;
      text4 = '閃亮';
    } else if (selectedLayout01Print == 5){
      selCase05 = 10;
      text5 = '愉快的';
    }
    pageCount = 0;
  }

  if (mouseX > 10 + kuchunyinPositionX && mouseX < 10 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 11;
      text1 = '有一天';
    } else if (selectedLayout01Print == 2){
      selCase02 = 11;
      text2 = '紅色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 11;
      text3 = '巴士';
    } else if (selectedLayout01Print == 4){
      selCase04 = 11;
      text4 = '悠閒';
    } else if (selectedLayout01Print == 5){
      selCase05 = 11;
      text5 = '晴天的';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] && mouseX < 20 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 12;
      text1 = '一個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 12;
      text2 = '安靜';
    } else if (selectedLayout01Print == 3){
      selCase03 = 12;
      text3 = '男生';
    } else if (selectedLayout01Print == 4){
      selCase04 = 12;
      text4 = '誠實';
    } else if (selectedLayout01Print == 5){
      selCase05 = 12;
      text5 = '可靠的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] && mouseX < 30 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 13;
      text1 = '這個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 13;
      text2 = '虛無';
    } else if (selectedLayout01Print == 3){
      selCase03 = 13;
      text3 = '宇宙';
    } else if (selectedLayout01Print == 4){
      selCase04 = 13;
      text4 = '神秘';
    } else if (selectedLayout01Print == 5){
      selCase05 = 13;
      text5 = '美麗的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3] && mouseX < 30 + kuchunyinPositionX + imgHeight / leungkahimRatio[1] + imgHeight / leungkahimRatio[2] + imgHeight / leungkahimRatio[3] + imgHeight / leungkahimRatio[4] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 14;
      text1 = '這個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 14;
      text2 = '古怪';
    } else if (selectedLayout01Print == 3){
      selCase03 = 14;
      text3 = '英雄';
    } else if (selectedLayout01Print == 4){
      selCase04 = 14;
      text4 = '正義';
    } else if (selectedLayout01Print == 5){
      selCase05 = 14;
      text5 = '勇敢的';
    }
    pageCount = 0;
  }

  if (mouseX > 10 + leungkahimPositionX && mouseX < 10 + leungkahimPositionX + imgHeight / nghowahRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 15;
      text1 = '這些';
    } else if (selectedLayout01Print == 2){
      selCase02 = 15;
      text2 = '白色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 15;
      text3 = '物件';
    } else if (selectedLayout01Print == 4){
      selCase04 = 15;
      text4 = '日常';
    } else if (selectedLayout01Print == 5){
      selCase05 = 15;
      text5 = '微型的';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + leungkahimPositionX + imgHeight / nghowahRatio[1] && mouseX < 20 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 16;
      text1 = '一棵';
    } else if (selectedLayout01Print == 2){
      selCase02 = 16;
      text2 = '孤獨';
    } else if (selectedLayout01Print == 3){
      selCase03 = 16;
      text3 = '小樹';
    } else if (selectedLayout01Print == 4){
      selCase04 = 16;
      text4 = '獨立';
    } else if (selectedLayout01Print == 5){
      selCase05 = 16;
      text5 = '茁壯的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] && mouseX < 30 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 17;
      text1 = '這個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 17;
      text2 = '紫色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 17;
      text3 = '圖騰';
    } else if (selectedLayout01Print == 4){
      selCase04 = 17;
      text4 = '優雅';
    } else if (selectedLayout01Print == 5){
      selCase05 = 17;
      text5 = '熱情的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3] && mouseX < 40 + leungkahimPositionX + imgHeight / nghowahRatio[1] + imgHeight / nghowahRatio[2] + imgHeight / nghowahRatio[3] + imgHeight / nghowahRatio[4] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 18;
      text1 = '有些';
    } else if (selectedLayout01Print == 2){
      selCase02 = 18;
      text2 = '橙色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 18;
      text3 = '雲';
    } else if (selectedLayout01Print == 4){
      selCase04 = 18;
      text4 = '溫暖';
    } else if (selectedLayout01Print == 5){
      selCase05 = 18;
      text5 = '懶惰的';
    }
    pageCount = 0;
  }

  if (mouseX > 10 + nghowahPositionX && mouseX < 10 + nghowahPositionX + imgHeight / nureniRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 19;
      text1 = '一棵';
    } else if (selectedLayout01Print == 2){
      selCase02 = 19;
      text2 = '茂密';
    } else if (selectedLayout01Print == 3){
      selCase03 = 19;
      text3 = '大樹';
    } else if (selectedLayout01Print == 4){
      selCase04 = 19;
      text4 = '安全';
    } else if (selectedLayout01Print == 5){
      selCase05 = 19;
      text5 = '可靠的';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + nghowahPositionX + imgHeight / nureniRatio[1] && mouseX < 20 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 20;
      text1 = '一個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 20;
      text2 = '藍色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 20;
      text3 = '婚禮';
    } else if (selectedLayout01Print == 4){
      selCase04 = 20;
      text4 = '浪漫';
    } else if (selectedLayout01Print == 5){
      selCase05 = 20;
      text5 = '幸福的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] && mouseX < 20 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 21;
      text1 = '這個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 21;
      text2 = '白色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 21;
      text3 = '雪人';
    } else if (selectedLayout01Print == 4){
      selCase04 = 21;
      text4 = '快樂';
    } else if (selectedLayout01Print == 5){
      selCase05 = 21;
      text5 = '有生命的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3] && mouseX < 40 + nghowahPositionX + imgHeight / nureniRatio[1] + imgHeight / nureniRatio[2] + imgHeight / nureniRatio[3] + imgHeight / nureniRatio[4] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 22;
      text1 = '一座';
    } else if (selectedLayout01Print == 2){
      selCase02 = 22;
      text2 = '透明';
    } else if (selectedLayout01Print == 3){
      selCase03 = 22;
      text3 = '大樓';
    } else if (selectedLayout01Print == 4){
      selCase04 = 22;
      text4 = '繁榮';
    } else if (selectedLayout01Print == 5){
      selCase05 = 22;
      text5 = '富有的';
    }
    pageCount = 0;
  }

  if (mouseX > 10 + nureniPositionX && mouseX < 10 + nureniPositionX + imgHeight / chungwingheiRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 23;
      text1 = '這個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 23;
      text2 = '七彩';
    } else if (selectedLayout01Print == 3){
      selCase03 = 23;
      text3 = '家庭';
    } else if (selectedLayout01Print == 4){
      selCase04 = 23;
      text4 = '很忙碌';
    } else if (selectedLayout01Print == 5){
      selCase05 = 23;
      text5 = '很受歡迎';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + nureniPositionX + imgHeight / chungwingheiRatio[1] && mouseX < 20 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 24;
      text1 = '四個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 24;
      text2 = '彩色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 24;
      text3 = '朋友';
    } else if (selectedLayout01Print == 4){
      selCase04 = 24;
      text4 = '不同';
    } else if (selectedLayout01Print == 5){
      selCase05 = 24;
      text5 = '融洽的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] && mouseX < 30 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 25;
      text1 = '兩個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 25;
      text2 = '興奮';
    } else if (selectedLayout01Print == 3){
      selCase03 = 25;
      text3 = '年青人';
    } else if (selectedLayout01Print == 4){
      selCase04 = 25;
      text4 = '積極';
    } else if (selectedLayout01Print == 5){
      selCase05 = 25;
      text5 = '進步的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3] && mouseX < 40 + nureniPositionX + imgHeight / chungwingheiRatio[1] + imgHeight / chungwingheiRatio[2] + imgHeight / chungwingheiRatio[3] + imgHeight / chungwingheiRatio[4] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 26;
      text1 = '很多';
    } else if (selectedLayout01Print == 2){
      selCase02 = 26;
      text2 = '紅色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 26;
      text3 = '愛心';
    } else if (selectedLayout01Print == 4){
      selCase04 = 26;
      text4 = '滿足';
    } else if (selectedLayout01Print == 5){
      selCase05 = 26;
      text5 = '歡樂的';
    }
    pageCount = 0;
  }

  if (mouseX > 10 + chungwingheiPositionX && mouseX < 10 + chungwingheiPositionX + imgHeight / xerxesRatio[1] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 27;
      text1 = '這棵';
    } else if (selectedLayout01Print == 2){
      selCase02 = 27;
      text2 = '茂密';
    } else if (selectedLayout01Print == 3){
      selCase03 = 27;
      text3 = '樹';
    } else if (selectedLayout01Print == 4){
      selCase04 = 27;
      text4 = '隨意';
    } else if (selectedLayout01Print == 5){
      selCase05 = 27;
      text5 = '自然的';
    }
    pageCount = 0;
  }

  if (mouseX > 20 + chungwingheiPositionX + imgHeight / xerxesRatio[1] && mouseX < 20 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 28;
      text1 = '這些';
    } else if (selectedLayout01Print == 2){
      selCase02 = 28;
      text2 = '堅硬';
    } else if (selectedLayout01Print == 3){
      selCase03 = 28;
      text3 = '石頭';
    } else if (selectedLayout01Print == 4){
      selCase04 = 28;
      text4 = '混亂';
    } else if (selectedLayout01Print == 5){
      selCase05 = 28;
      text5 = '沉重的';
    }
    pageCount = 0;
  }

  if (mouseX > 30 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] && mouseX < 30 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] + imgHeight / xerxesRatio[3] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 29;
      text1 = '一棵';
    } else if (selectedLayout01Print == 2){
      selCase02 = 29;
      text2 = '等待';
    } else if (selectedLayout01Print == 3){
      selCase03 = 29;
      text3 = '樹';
    } else if (selectedLayout01Print == 4){
      selCase04 = 29;
      text4 = '忍耐';
    } else if (selectedLayout01Print == 5){
      selCase05 = 29;
      text5 = '安靜的';
    }
    pageCount = 0;
  }

  if (mouseX > 40 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] + imgHeight / xerxesRatio[3] && mouseX < 40 + chungwingheiPositionX + imgHeight / xerxesRatio[1] + imgHeight / xerxesRatio[2] + imgHeight / xerxesRatio[3] + imgHeight / xerxesRatio[4] && mouseY > 260 && mouseY < 260 + imgHeight && mouseIsPressed && pageCount > 10){
    if (selectedLayout01Print == 1){
      selCase01 = 30;
      text1 = '一個';
    } else if (selectedLayout01Print == 2){
      selCase02 = 30;
      text2 = '黑色';
    } else if (selectedLayout01Print == 3){
      selCase03 = 30;
      text3 = '蜘蛛俠';
    } else if (selectedLayout01Print == 4){
      selCase04 = 30;
      text4 = '神秘';
    } else if (selectedLayout01Print == 5){
      selCase05 = 30;
      text5 = '冷酷的';
    }

    pageCount = 0;
  }
  if (selCase01 == 1 || selCase01 == 2 || selCase02 == 1 || selCase02 == 2 || selCase03 == 1 || selCase03 == 2 || selCase04 == 1 || selCase04 == 2 || selCase05 == 1 || selCase02 == 5){
    artistNameAngel = 1;
  } else{
    artistNameAngel = 0;
  }

  if (selCase01 == 3 || selCase01 == 4 || selCase02 == 3 || selCase02 == 4 || selCase03 == 3 || selCase03 == 4 || selCase04 == 3 || selCase04 == 4 || selCase05 == 3 || selCase05 == 4){
    artistNameBouie = 1;
  } else{
    artistNameBouie = 0;
  }

  if (selCase01 == 5 || selCase01 == 6 || selCase02 == 5 || selCase02 == 6 || selCase03 == 5 || selCase03 == 6 || selCase04 == 5 || selCase04 == 6  || selCase05 == 5 || selCase05 == 6){
    artistNameChiho = 1;
  } else{
    artistNameChiho = 0;
  }


  if (selCase01 == 9 || selCase01 == 10 || selCase01 == 7 || selCase01 == 8 || selCase02 == 9 || selCase02 == 10 || selCase02 == 7 || selCase02 == 8 || selCase03 == 9 || selCase03 == 10 || selCase03 == 7 || selCase03 == 8 || selCase04 == 9 || selCase04 == 10 || selCase04 == 7 || selCase04 == 8 || selCase05 == 9 || selCase05 == 10 || selCase05 == 7 || selCase05 == 8){
    artistNameKuChunYin = 1;
  } else{
    artistNameKuChunYin = 0;
  }

  if (selCase01 == 13 || selCase01 == 14 || selCase01 == 11 || selCase01 == 12 || selCase02 == 13 || selCase02 == 14 || selCase02 == 11 || selCase02 == 12 || selCase03 == 13 || selCase03 == 14 || selCase03 == 11 || selCase03 == 12 || selCase04 == 13 || selCase04 == 14 || selCase04 == 11 || selCase04 == 12 || selCase05 == 13 || selCase05 == 14 || selCase05 == 11 || selCase05 == 12){
    artistNameLeungKaHim = 1;
  } else{
    artistNameLeungKaHim = 0;
  }

  if (selCase01 == 17 || selCase01 == 18 || selCase01 == 15 || selCase01 == 16 || selCase02 == 17 || selCase02 == 18 || selCase02 == 15 || selCase02 == 16 || selCase03 == 17 || selCase03 == 18 || selCase03 == 15 || selCase03 == 16 || selCase04 == 17 || selCase04 == 18 || selCase04 == 15 || selCase04 == 16 || selCase05 == 17 || selCase05 == 18 || selCase05 == 15 || selCase05 == 16){
    artistNameNgHoWah = 1;
  } else{
    artistNameNgHoWah = 0;
  }

  if (selCase01 == 21 || selCase01 == 22 || selCase01 == 19 || selCase01 == 20 || selCase02 == 21 || selCase02 == 22 || selCase02 == 19 || selCase02 == 20 || selCase03 == 21 || selCase03 == 22 || selCase03 == 19 || selCase03 == 20 || selCase04 == 21 || selCase04 == 22 || selCase04 == 19 || selCase04 == 20 || selCase05 == 21 || selCase05 == 22 || selCase05 == 19 || selCase05 == 20){
    artistNameNureni = 1;
  } else{
    artistNameNureni = 0;
  }

  if (selCase01 == 25 || selCase01 == 26 || selCase01 == 23 || selCase01 == 24 || selCase02 == 25 || selCase02 == 26 || selCase02 == 23 || selCase02 == 24 || selCase03 == 25 || selCase03 == 26 || selCase03 == 23 || selCase03 == 24 || selCase04 == 25 || selCase04 == 26 || selCase04 == 23 || selCase04 == 24 || selCase05 == 25 || selCase05 == 26 || selCase05 == 23 || selCase05 == 24){
    artistNameChungWingHei = 1;
  } else{
    artistNameChungWingHei = 0;
  }

  if (selCase01 == 27 || selCase01 == 28 || selCase01 == 29 || selCase01 == 30 || selCase02 == 27 || selCase02 == 28 || selCase02 == 29 || selCase02 == 30 || selCase03 == 27 || selCase03 == 28 || selCase03 == 29 || selCase03 == 30 || selCase04 == 27 || selCase04 == 28 || selCase04 == 29 || selCase04 == 30 || selCase05 == 27 || selCase05 == 28 || selCase05 == 29 || selCase05 == 30){
    artistNameXerxes = 1;
  } else{
    artistNameXerxes = 0;
  }


  strokeWeight(6);
  stroke(255, 204, 0);
  noFill();

}


function readyDraw(){
  pageCount++
  background(255);
  image(ready, 0, 0);
  image(to_save, 0, 0);

  if (mouseX > 382  && mouseX < 382+110 && mouseY > 430 && mouseY < 430+40 && mouseIsPressed && pageCount >10){


        to_save = get(0, 0, 500, 250);
        image(to_save, 0, 0);

        page = 5;
        pageCount=0;

  }

}

function endDraw(){
  pageCount++
  background(255);
  image(download, 0, 0);
  image(to_save, 0, 0);
  noStroke();
  fill(0);
  textSize(20);
  text( text1 + text2 + '的' + text3 + '是' +text4 + '和' + text5, 25, 320);
  textSize(12);
//1
  if (artistNameAngel == 1){
    text('彭灼楹', 440, 300);
    // text('彭灼楹', 440, 320);
    // text('彭灼楹', 440, 340);
    // text('彭灼楹', 440, 360);
    // text('彭灼楹', 440, 380);
  }
//2
  if (artistNameBouie == 1 && artistNameAngel == 0){
    text('蔡鈺娟', 440, 300);
  } else if (artistNameBouie == 1 && artistNameAngel == 1){
    text('蔡鈺娟', 440, 320);
  }
//3
  if (artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 0){
    text('鍾智豪', 440, 300);
  } else if ((artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 0) ||(artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 1)){
    text('鍾智豪', 440, 320);
  } else if (artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 1) {
    text('鍾智豪', 440, 340);
  }

//1
  if (artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 0){
    text('古俊賢', 440, 300);
  } else if ((artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 0) ||(artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 1 && artistNameAngel == 0) || (artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 1)){
    text('古俊賢', 440, 320);
  } else if ((artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 0)||(artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 1)||(artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 1 && artistNameAngel == 1)) {
    text('古俊賢', 440, 340);
  } else if (artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 1){
    text('古俊賢', 440, 360);
  }

//2
  if (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 0){
    text('梁家謙', 440, 300);
  } else if ((artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 0 && artistNameBouie == 1 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 1)){
    text('梁家謙', 440, 320);
  } else if ((artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 1 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 1) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 1) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 0 && artistNameBouie == 1 && artistNameAngel == 1)) {
    text('梁家謙', 440, 340);
  } else if ((artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 0) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 1) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 0 && artistNameBouie == 1 && artistNameAngel == 1) || (artistNameLeungKaHim == 1 && artistNameKuChunYin == 0 && artistNameChiho == 1 && artistNameBouie == 0 && artistNameAngel == 1)){
    text('梁家謙', 440, 360);
  } else if (artistNameLeungKaHim == 1 && artistNameKuChunYin == 1 && artistNameChiho == 1 && artistNameBouie == 1 && artistNameAngel == 1) {
    text('梁家謙', 440, 380);
  }

//3
if (artistNameNgHoWah == 1 && artistNameLeungKaHim == 0 && artistNameKuChunYin == 0 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 0){
  text('吳灝華', 440, 300);
} else if (artistNameNgHoWah == 1 && ((artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 1)){
  text('吳灝華', 440, 320);
} else if (artistNameNgHoWah == 1 && ((artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 2)){
  text('吳灝華', 440, 340);
} else if (artistNameNgHoWah == 1 && ((artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 3)){
  text('吳灝華', 440, 360);
} else if (artistNameNgHoWah == 1 && ((artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 4)){
  text('吳灝華', 440, 380);
}
//4
if (artistNameNureni == 1 && artistNameNgHoWah == 0 && artistNameLeungKaHim == 0 && artistNameKuChunYin == 0 && artistNameChiho == 0 && artistNameBouie == 0 && artistNameAngel == 0){
  text('余詠楠', 440, 300);
} else if (artistNameNureni == 1 && ((artistNameNgHoWah + artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 1)){
  text('余詠楠', 440, 320);
} else if (artistNameNureni == 1 && ((artistNameNgHoWah + artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 2)){
  text('余詠楠', 440, 340);
} else if (artistNameNureni == 1 && ((artistNameNgHoWah + artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 3)){
  text('余詠楠', 440, 360);
} else if (artistNameNureni == 1 && ((artistNameNgHoWah + artistNameLeungKaHim + artistNameKuChunYin + artistNameChiho  +artistNameBouie + artistNameAngel) == 4)){
  text('余詠楠', 440, 380);
}
  // let artistNameAngel = '彭灼楹';
  // let artistNameBouie = '蔡鈺娟';
  // let artistNameChiho = '鍾智豪';
  //
  // let artistNameKuChunYin = '古俊賢';
  // let artistNameLeungKaHim = '梁家謙';
  // let artistNameNgHoWah = '吳灝華';
  // let artistNameNureni = '余詠楠';
  // let artistNameChungWingHei = '鍾泳希';
  // let artistNameXerxes = '胡凱俊';

  if (mouseX > 382  && mouseX < 382+110 && mouseY > 430 && mouseY < 430+40 && mouseIsPressed && pageCount >10){
        to_save.save("saved_name.png");
        page = 1;
        pageCount=0;

  }
  //to_save.save("saved_name.png");

}
