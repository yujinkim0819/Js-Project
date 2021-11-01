"use strcik"

let canvas;
let ctx; //화가 객체
let dx=0; // 이동 좌표
let keycode; // 키보드 입력 변수
 
// 배경, 손 객체 생성
let water= new Image();
water.src="../img/water.png";
let hand= new Image();
hand.src="../img/hand.png";

// 물고기 객체 생성
let fish1= new Image();
fish1.src="../img/fish1.png";
let fish2= new Image();
fish2.src="../img/fish2.png";
let fish3= new Image();
fish3.src="../img/fish3.png";

// 비눗방울
bubble1 = new Array();
for(let i = 0; i<3; i++){
    bubble1[i] = new Image();
    bubble1[i].src = "../img/bubble1.png";
}

let x = 600, y = 500; // 손 처음 위치
let hand_w = 40, hand_h = 95; // 손의 크기

function movingHand(){
    canvas= document.getElementById('c1');
    ctx= canvas.getContext('2d');

    // playgame 호출
    playgame();
    setInterval(playgame,10); 
}

function playgame(){
    moveHand(); //캐릭터 움직이기
    draw(); // 이미지들 그리기
}

function moveHand(){
    if((x-hand_w) + dx > 0 && x+dx < 1200) // hand 이동 제한
        x+=dx; // 좌표 이동
}

function draw(){
    ctx.drawImage(water,0,0,1260, 595); // 배경 출력
    ctx.drawImage(hand,x- hand_w,y- hand_h,hand_w*2,hand_h*2); // hand.png 출력
    ctx.drawImage(fish1, 290, 100, 193, 301);
    ctx.drawImage(fish2, 520, 100, 193, 301);
    ctx.drawImage(fish3, 750, 100, 193, 301);

    for(let i = 0; i<3; i++){
        ctx.drawImage(bubble1[i], 1120 + (i*45), 10, 40, 40); // 비눗방울 출력
    }
}

// 한 번에 15씩 이동
function keydown(){
    keycode=event.keyCode;
    switch(keycode){
        case 37: dx = -15; break; // 왼
        case 39: dx = 15; break; // 오
    }
}

function keyup(){
    keycode=event.keyCode;
    switch(keycode){
        case 37: // 왼
        case 39: dx=0; break; // 온
    }
}