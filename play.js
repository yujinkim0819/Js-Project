"use strick"

let dx=0; // 이동 좌표

// canvas 위에 이미지
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

let x = 600, y = 500; // 손 처음 위치
let hand_w = 200, hand_h = 470; // 손의 크기

addToCanvas(ctx, "../img/fish1.png", 800, 340, 580, 920);
addToCanvas(ctx, "../img/fish2.png", 1600, 340, 580, 920);
addToCanvas(ctx, "../img/fish3.png", 2400, 340, 580, 920);
addToCanvas(ctx, "../img/hand.png", 1750, 1400, hand_w, hand_h);


// 캔버스에 이미지 추가
function addToCanvas(ctx, image, x, y, sizex, sizey) {
  let img = new Image;
  img.src = image;
  img.onload = function() {
    ctx.drawImage(img, x, y, sizex, sizey);
  };
};

//손 움직이기
function moveHand(){
  if(x + dx > 600 && x+dx < 2600) // hand 이동 제한
      x+=dx; // 좌표 이동
}

// 한 번에 20씩 이동
function keydown(){
  keycode=event.keyCode;
  switch(keycode){
      case 37: dx = -20; break; // 왼
      case 39: dx = 20; break; // 오
  }
}
// 누를 때 지연 간격 주기

function keyup(){
  keycode=event.keyCode;
  switch(keycode){
      case 37: // 왼
      case 39: dx=0; break; // 오
  }
}