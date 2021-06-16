let prefaceEN;
let prefaceCHI;
let selectBG;
let selectTOP;

let gameLayout;
let gameLayout_kuchunyin;
let gameLayout_leungkahim;
let gameLayout_nghowah;
let gameLayout_nureni;
let gameLayout_winghei;
let gameLayout_xerxes;
let colorBar;
let brushCover;
let brushCover_01;
let brushCover_02;
let brushCover_03;

let kuchunyin_01;
let kuchunyin_02;
let leungkahim_01;
let leungkahim_02;
let nghowah_01;
let nghowah_02;
let nureni_01;
let nureni_02;
let winghei_01;
let winghei_02;
let xerxes_01;
let xerxes_02;

let lang = 0;

////////page///////////
let page = 0;
let pageCount = 0;

///
let sliderY = 30;
let pick = 0;
let brushWeight = 0;

///pixel get
let pixelPick;
let set = 0;

///////////////////////////saveImg///////////////////////////
let gameCanvas;


function preload(){
  prefaceEN = loadImage('../assets/WDWT-game2/preface_en.png');
  prefaceCHI = loadImage('../assets/WDWT-game2/preface_chi.png');
  selectBG = loadImage('../assets/WDWT-game2/select_bg.png');
  selectTOP = loadImage('../assets/WDWT-game2/select_top.png');
  gameLayout = loadImage('../assets/WDWT-game2/game_layout.png');
  colorBar = loadImage('../assets/WDWT-game2/colorBar.png');
  brushCover = loadImage('../assets/WDWT-game2/game_layout_cover.png');
  brushCover_01 = loadImage('../assets/WDWT-game2/game_layout_cover_01.png');
  brushCover_02 = loadImage('../assets/WDWT-game2/game_layout_cover_02.png');
  brushCover_03 = loadImage('../assets/WDWT-game2/game_layout_cover_03.png');

  gameLayout_kuchunyin = loadImage('../assets/WDWT-game2/game_layout_kuchunyin.png');
  gameLayout_leungkahim = loadImage('../assets/WDWT-game2/game_layout_leungkahim.png');
  gameLayout_nghowah = loadImage('../assets/WDWT-game2/game_layout_nghowah.png');
  gameLayout_nureni = loadImage('../assets/WDWT-game2/game_layout_nureni.png');
  gameLayout_winghei = loadImage('../assets/WDWT-game2/game_layout_chungwinghei.png');
  gameLayout_xerxes = loadImage('../assets/WDWT-game2/game_layout_xerxes.png');

  kuchunyin_01 = loadImage('../assets/WDWT-game2/artworks/ku_chun_yin_1.png');
  kuchunyin_02 = loadImage('../assets/WDWT-game2/artworks/ku_chun_yin_2.png');
  leungkahim_01 = loadImage('../assets/WDWT-game2/artworks/leung_ka_him_1.png');
  leungkahim_02 = loadImage('../assets/WDWT-game2/artworks/leung_ka_him_2.png');
  nghowah_01 = loadImage('../assets/WDWT-game2/artworks/ng_ho_wah_1.png');
  nghowah_02 = loadImage('../assets/WDWT-game2/artworks/ng_ho_wah_2.png');
  nureni_01 = loadImage('../assets/WDWT-game2/artworks/Nureni_1.png');
  nureni_02 = loadImage('../assets/WDWT-game2/artworks/Nureni_2.png');
  winghei_01 = loadImage('../assets/WDWT-game2/artworks/winghei_1.png');
  winghei_02 = loadImage('../assets/WDWT-game2/artworks/winghei_2.png');
  xerxes_01 = loadImage('../assets/WDWT-game2/artworks/xerxes_1.png');
  xerxes_02 = loadImage('../assets/WDWT-game2/artworks/xerxes_2.png');
}

function setup() {
  gameCanvas =  createCanvas(500, 500);
  noStroke();
}

function draw() {


  switch (page) {
    case 0:
      background(255);
      prefaceDraw();
      break;
    case 1:
      background(255);
      selectDraw();
      break;
    case 2:

      gameDraw();
      break;
    case 3:
      // gameDraw();
      break;
    case 4:
      // thankyouDraw();
      break;
    default:
 }


}

function prefaceDraw(){
  pageCount++;
  background(255);
  // image(prefaceCHI, 0, 0, width, height);

  if (mouseX > 420 && mouseX < 480 && mouseY > 30 && mouseY < 80 && mouseIsPressed && pageCount >10 ){
    lang = (lang + 1)%2 ;
    pageCount = 0;
  }

  if (lang == 0){
    image(prefaceCHI, 0, 0, 500, 500);
  } else {
    image(prefaceEN, 0, 0, 500, 500);
  }

  if (mouseX > 380 && mouseX < 380+100 && mouseY > 440 && mouseY < 440+40 && mouseIsPressed && pageCount >10){
    page = 1;
    pageCount = 0;
  }
}



function selectDraw(){
  pageCount++;
  image(selectBG, 0, 0, 500, 500);
  fill( '#F3BC4A');
  rect( 450, sliderY, 14, 200);
  sliderMove = map(sliderY, 30, 230, 0, -200);
  if (mouseX > 450 && mouseX < 450 + 14 && mouseY > sliderY && mouseY < sliderY + 200 && mouseIsPressed && pageCount >10){
    if (mouseY < 130){
      sliderY = 30;
    } else if (mouseY > 320){
      sliderY = 230;
    } else {
      sliderY = mouseY - 100;
   }
 }

  fill(255);
  noStroke();
  rect( 30, 30 + sliderMove, 120, 120);
  image(kuchunyin_01, 30, 30 + sliderMove, 120, 120);
  rect( 170, 30 + sliderMove, 120, 120);
  image(kuchunyin_02, 170, 30 + sliderMove, 120, 120);
  rect( 310, 30 + sliderMove, 120, 120);
  image(leungkahim_01, 310, 30 + sliderMove, 120, 120);
  //
  rect( 30, 170 + sliderMove, 120, 120);
  image(leungkahim_02, 30, 170 + sliderMove, 120, 120);
  rect( 170, 170 + sliderMove, 120, 120);
  image(nghowah_01, 170, 170 + sliderMove, 120, 120);
  rect( 310, 170 + sliderMove, 120, 120);
  image(nghowah_02, 310, 170 + sliderMove, 120, 120);
  //
  rect( 30, 310 + sliderMove, 120, 120);
  image(nureni_01, 30, 310 + sliderMove, 120, 120);
  rect( 170, 310 + sliderMove, 120, 120);
  image(nureni_02, 170, 310 + sliderMove, 120, 120);
  rect( 310, 310 + sliderMove, 120, 120);
  image(winghei_01, 310, 310 + sliderMove, 120, 120);
  //
  rect( 30, 450 + sliderMove, 120, 120);
  image(winghei_02, 30, 450 + sliderMove, 120, 120);
  rect( 170, 450 + sliderMove, 120, 120);
  image(xerxes_01, 170, 450 + sliderMove, 120, 120);
  rect( 310, 450 + sliderMove, 120, 120);
  image(xerxes_02, 310, 450 + sliderMove, 120, 120);

  selectArtwork();

  fill(255);
  noStroke();
  rect( 0, 0, 500, 30);
  rect( 0, 430, 500, 500);
  image(selectTOP, 0, 0, 500, 500);
  // fill(0);
  // rect(380, 440 ,100, 40);
}


function selectArtwork(){
  if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  30 + sliderMove && mouseY < 30 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 1 ){
    pick = 1;
    pageCount =0;
  }
  if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  30 + sliderMove && mouseY < 30 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 2 ){
    pick = 2;
    pageCount =0;
  }
  if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  30 + sliderMove && mouseY < 30 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 3 ){
    pick = 3;
    pageCount =0;
  }
  if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  170 + sliderMove && mouseY < 170 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 4 ){
    pick = 4;
    pageCount =0;
  }
  if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  170 + sliderMove && mouseY < 170 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 5 ){
    pick = 5;
    pageCount =0;
  }
  if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  170 + sliderMove && mouseY < 170 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 6 ){
    pick = 6;
    pageCount =0;
  }
  if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  310 + sliderMove && mouseY < 310 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 7 ){
    pick = 7;
    pageCount =0;
  }
  if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  310 + sliderMove && mouseY < 310 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 8 ){
    pick = 8;
    pageCount =0;
  }
  if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  310 + sliderMove && mouseY < 310 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 9 ){
    pick = 9;
    pageCount =0;
  }
  if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  450 + sliderMove && mouseY < 450 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 10 ){
    pick = 10;
    pageCount =0;
  }
  if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  450 + sliderMove && mouseY < 450 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 11 ){
    pick = 11;
    pageCount =0;
  }
  if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  450 + sliderMove && mouseY < 450 + sliderMove + 120 && mouseIsPressed && pageCount > 10 && pick != 12 ){
    pick = 12;
    pageCount =0;
  }

  strokeWeight(5);
  stroke(255, 204, 0);
  noFill();
  switch (pick) {
    case 0:

      break;
    case 1:
      rect( 30, 30 + sliderMove, 120, 120);
      if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  30 + sliderMove && mouseY < 30 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
    case 2:
      rect( 170, 30 + sliderMove, 120, 120);
      if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  30 + sliderMove && mouseY < 30 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
    }
      break;
    case 3:
      rect( 310, 30 + sliderMove, 120, 120);
      if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  30 + sliderMove && mouseY < 30 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
    case 4:
      rect( 30, 170 + sliderMove, 120, 120);
      if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  170 + sliderMove && mouseY < 170 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
    case 5:
      rect( 170, 170 + sliderMove, 120, 120);
      if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  170 + sliderMove && mouseY < 170 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
    case 6:
      rect( 310, 170 + sliderMove, 120, 120);
      if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  170 + sliderMove && mouseY < 170 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;

    case 7:
      rect( 30, 310 + sliderMove, 120, 120);
      if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  310 + sliderMove && mouseY < 310 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
    case 8:
      rect( 170, 310 + sliderMove, 120, 120);
      if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  310 + sliderMove && mouseY < 310 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
    case 9:
      rect( 310, 310 + sliderMove, 120, 120);
      if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  310 + sliderMove && mouseY < 310 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
        pick = 0;
        pageCount =0;
      }
      break;
   case 10:
     rect( 30, 450 + sliderMove, 120, 120);
     if (mouseX > 30 && mouseX < 30 + 120 && mouseY >  450 + sliderMove && mouseY < 450 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
       pick = 0;
       pageCount =0;
     }
     break;
   case 11:
     rect( 170, 450 + sliderMove, 120, 120);
     if (mouseX > 170 && mouseX < 170 + 120 && mouseY >  450 + sliderMove && mouseY < 450 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
       pick = 0;
       pageCount =0;
     }
     break;
   case 12:
     rect( 310, 450 + sliderMove, 120, 120);
     if (mouseX > 310 && mouseX < 310 + 120 && mouseY >  450 + sliderMove && mouseY < 450 + sliderMove + 120 && mouseIsPressed && pageCount > 10){
       pick = 0;
       pageCount =0;
     }
     break;
    default:
   }

   if (mouseX > 380 && mouseX < 380+100 && mouseY > 440 && mouseY < 440+40 && mouseIsPressed && pageCount >10 && pick != 0){
     page = 2;
     pageCount = 0;
   }
 }
 function touchMoved() {
   console.log(mouseX);
   // For single touch mouseX and mouseY work just fine
   line(mouseX, mouseY, pmouseX, pmouseY);
   // This prevents dragging screen around
   return false;
 }


function gameDraw(){

  if (pageCount == 0){
    background(255);
    // image(gameLayout, 0, 0, 500, 500);
    switch (pick) {
      case 0:
        break;
      case 1:
        image(gameLayout_kuchunyin, 0, 0, 500, 500);
        break;
      case 2:
        image(gameLayout_kuchunyin, 0, 0, 500, 500);
        break;
      case 3:
        image(gameLayout_leungkahim, 0, 0, 500, 500);
        break;
      case 4:
        image(gameLayout_leungkahim, 0, 0, 500, 500);
        break;
      case 5:
        image(gameLayout_nghowah, 0, 0, 500, 500);
        break;
      case 6:
        image(gameLayout_nghowah, 0, 0, 500, 500);
        break;
      case 7:
        image(gameLayout_nureni, 0, 0, 500, 500);
        break;
      case 8:
        image(gameLayout_nureni, 0, 0, 500, 500);
        break;
      case 9:
        image(gameLayout_winghei, 0, 0, 500, 500);
        break;
      case 10:
        image(gameLayout_winghei, 0, 0, 500, 500);
        break;
      case 11:
        image(gameLayout_xerxes, 0, 0, 500, 500);
        break;
      case 12:
        image(gameLayout_xerxes, 0, 0, 500, 500);
        break;
      default:
    }
    image(colorBar, 20,30, 60, 260);
    fill(0);
    stroke(0);
  }
  pageCount++;

  // line(48, 335, 49, 336);
  //fill(0);

  // ellipse(48, 335, 10, 10);
  // ellipse(48, 375, 15, 15);
  // ellipse(48, 415, 20, 20);
  getPix();
// strokeWeight(20);
rect(20, 300, 58, 30);
  if (mouseIsPressed && mouseX > 42 && mouseX < 42 + 15 && mouseY > 338 && mouseY < 338 + 15){
    brushWeight = 1;
  }

  if (mouseIsPressed && mouseX > 40 && mouseX < 40 + 20 && mouseY > 364 && mouseY < 364 + 20){
    brushWeight = 2;
  }

  if (mouseIsPressed && mouseX > 34 && mouseX < 34 + 31 && mouseY > 398 && mouseY < 398 + 31){
    brushWeight = 3;
  }
  switch (brushWeight) {
    case 0:
      strokeWeight(5);
      image(brushCover_01, 0, 0);
      break;
    case 1:
      strokeWeight(5);
      image(brushCover_01, 0, 0);
      break;
    case 2:
      strokeWeight(10);
      image(brushCover_02, 0, 0);
      break;
    case 3:
      strokeWeight(15);
      image(brushCover_03, 0, 0);
      break;
    default:

  }
  // rect(42, 338, 15, 15);
  // rect(40, 364, 20, 20);
  // rect(34, 398, 31, 31);
  if(mouseIsPressed && mouseX > 90 && mouseX < 90 + 400 && mouseY > 30 && mouseY < 30 + 400){
    touchMoved();
    //strokeWeight(5);
    // rect(20, 300, 58, 30);
    // console.log(mouseX);
    //  line(mouseX,mouseY,pmouseX,pmouseY);
    //  return false;
    	}

      switch (pick) {
        case 0:
          break;
        case 1:
          image(kuchunyin_01, 86, 32, 400, 400);
          break;
        case 2:
          image(kuchunyin_02, 86, 32, 400, 400);
          break;
        case 3:
          image(leungkahim_01, 86, 32, 400, 400);
          break;
        case 4:
          image(leungkahim_02, 86, 32, 400, 400);
          break;
        case 5:
          image(nghowah_01, 86, 32, 400, 400);
          break;
        case 6:
          image(nghowah_02, 86, 32, 400, 400);
          break;
        case 7:
          image(nureni_01, 86, 32, 400, 400);
          break;
        case 8:
          image(nureni_02, 86, 32, 400, 400);
          break;
        case 9:
          image(winghei_01, 86, 32, 400, 400);
          break;
        case 10:
          image(winghei_02, 86, 32, 400, 400);
          break;
        case 11:
          image(xerxes_01, 86, 32, 400, 400);
          break;
        case 12:
          image(xerxes_02, 86, 32, 400, 400);
          break;
        default:
      }

// noStroke();
image(brushCover, 0, 0);

  if (mouseX > 266 && mouseX < 266+100 && mouseY > 440 && mouseY < 440+40 && mouseIsPressed && pageCount >10 && pick != 0){
    // let snapshot = get(86, 32, 400, 400);
    // gameCanvas.image(snapshot, 0, 0);
    // save(gameCanvas,"screenshot","png");

    let to_save = get(87, 32, 400, 400); // Grab an image of a 100x200 rectangle at (20,30).
to_save.save("saved_name.png");
    page = 0;
    pageCount = 0;
  }
  if (mouseX > 380 && mouseX < 380+100 && mouseY > 440 && mouseY < 440+40 && mouseIsPressed && pageCount >10 && pick != 0){
    page = 1;
    pageCount = 0;
  }
}

// function touchMoved(){
//   console.log(mouseX);
//
//    line(mouseX,mouseY,pmouseX,pmouseY);
//    return false;
// }


function getPix(){

  pixelPick = gameCanvas.get(mouseX, mouseY);
  if (mouseX > 20 && mouseX < 20 + 60 && mouseY > 30 && mouseY < 30 + 260 && mouseIsPressed ){
    fill(pixelPick);
    stroke(pixelPick);
  }
}
