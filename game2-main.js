


let prefaceEN;
let prefaceCHI;
let selectBG;

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

let sliderY = 40;



function preload(){
  prefaceEN =  loadImage('../assets/WDWT-game2/preface_en.png');
  prefaceCHI =  loadImage('../assets/WDWT-game2/preface_chi.png');
  selectBG =  loadImage('../assets/WDWT-game2/select_bg.png');
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
rect( 450, 30, 14, 120);
rect (sliderY, 410, 80, 16);
// sliderMove = map(slider, 10, 410, 0, -6800);
if (mouseX > sliderY && mouseX < sliderY + 80 && mouseY > 410 && mouseY < 410 + 16 && mouseIsPressed && pageCount >10){
  if (mouseX < 50){
    sliderY = 10;
  } else if (mouseX > 450){
    sliderY = 410;
  } else {
    sliderY = mouseX - 40;
  }
}

fill(255);
rect( 30, 30, 120, 120);
image(kuchunyin_01, 30, 30, 120, 120);
rect( 170, 30, 120, 120);
image(kuchunyin_02, 170, 30, 120, 120);
rect( 310, 30, 120, 120);
image(leungkahim_01, 310, 30, 120, 120);




}
