// 물고기 밥 줍기
"use strick"

let canvas;
let ctx;

// 손 
let hand2 = new Image();
hand2.src="../img/hand2.png";

// 배경
let back = new Image();
back.src="../img/back.png"

function movingHand(){
    canvas= document.getElementById('c1');
    ctx= canvas.getContext('2d');

    // 화면에 손 그림
    draw();
}

function draw(){
    ctx.drawImage(back,0,0,1260, 599); // 배경
    ctx.drawImage(hand2, 520, 300, 293, 342); // hand2.png 출력
}