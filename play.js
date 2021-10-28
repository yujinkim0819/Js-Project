"use strick"

// canvas 위에 이미지
let canvas = document.getElementById('mycanvas');
let ctx = canvas.getContext('2d');

addToCanvas(ctx, "../img/fish1.png", 800, 340);
addToCanvas(ctx, "../img/fish2.png", 1600, 340);
addToCanvas(ctx, "../img/fish3.png", 2400, 340);


// 캔버스에 이미지 추가
function addToCanvas(ctx, image, x, y) {
  let img = new Image;
  img.src = image;
  img.onload = function() {
    ctx.drawImage(img, x, y);
  };
};
