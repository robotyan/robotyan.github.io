


let prefaceEN;
let prefaceCHI;
let selectBG;
let selectTOP;

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



function preload(){
  prefaceEN =  loadImage('../assets/WDWT-game2/preface_en.png');
  prefaceCHI =  loadImage('../assets/WDWT-game2/preface_chi.png');
  selectBG =  loadImage('../assets/WDWT-game2/select_bg.png');
  selectTOP =  loadImage('../assets/WDWT-game2/select_top.png');

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
 background(255);
 // prefaceDraw();
switch (page) {
  case 0:
    prefaceDraw();
    break;
  case 1:
    selectDraw();
    break;
  case 2:
    // layoutDraw();
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

}


function selectArtwork(){
  if (mouseX > 30 && mouseX < 120 && mouseY >  30 + sliderMove && mouseY < 120 && mouseIsPressed && pageCount > 10){
    // selectedAngel01++;
    // selectedAngel01 = selectedAngel01 % 2;
    pick = 1;
    pageCount =0;
  }
  strokeWeight(6);
  stroke(255, 204, 0);
  noFill();
  switch (pick) {
    case 0:

      break;
    case 1:
      rect( 30, 30 + sliderMove, 120, 120);
      break;
    case 2:
      // layoutDraw();
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
