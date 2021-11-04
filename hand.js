"use strcik"

let dx = 0; // x의 이동 좌표
let keycode; // 키보드 입력 변수
let nowX = 0; // 현재 이동한 x좌표 
let x = 600, y = 500; // 손 처음 위치
let hand_w = 40, hand_h = 95; // 손의 크기

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

// 버튼
let btn = new Image();
btn.src = "../img/btn.png";


// 클릭하면 글 사진 잠깐 보여준 다음에 사라지도록 setInterval 같은 거 사용 
let leaf = new Image();
leaf.src = "../img/leaf.png";

let canvas= document.getElementById('c1');
let ctx= canvas.getContext('2d'); // 화가 객체

function movingHand(){
    // playgame 호출
    playgame();
    setInterval(playgame,100); 
    click();
    keychg();
}

function playgame(){
    moveHand(); //캐릭터 움직이기
    draw(); // 이미지들 그리기    
}

function moveHand(){
    if((x-hand_w) + dx > 310 && x+dx < 860) // hand 이동 제한
        x+=dx; // 좌표 이동
}


function draw(){
    ctx.drawImage(water,0,0,1260, 595); // 배경 출력
    ctx.drawImage(hand,x- hand_w,y- hand_h,hand_w*2,hand_h*2); // hand.png 출력
    ctx.drawImage(fish1, 290, 100, 193, 301);
    ctx.drawImage(fish2, 520, 100, 193, 301);
    ctx.drawImage(fish3, 750, 100, 193, 301);
    ctx.drawImage(btn, 1120, 500, 100, 100);
    for(let i = 0; i<3; i++){
        ctx.drawImage(bubble1[i], 1120 + (i*45), 10, 40, 40); // 비눗방울 출력
    }
    //ctx.drawImage(leaf, 1020, 170, 80, 60);
}


// 캔버스에 이미지 추가
function addToCanvas(ctx, image, x, y, sizex, sizey) {
  let img = new Image;
  img.src = image;
  img.onload = function() {
    ctx.drawImage(img, x, y, sizex, sizey);
  };
};


// 한 번에 20씩 이동
function keydown(){
    keycode=event.keyCode;
    switch(keycode){
        case 37: dx = -230; nowX = dx; break; // 왼
        case 39: dx = 230; nowX = dx; break; // 오
        //case 13: ChangeImg(); -> 이미지 바꾸기 
    }
}

function keyup(){
    keycode=event.keyCode;
    switch(keycode){
        case 37: // 왼
        case 39: dx=0; break; // 오
    }
}
    

function goBackPage() {
    window.history.back();
}

// canvas 좌표 클릭 위치
function click() {
    canvas.onclick = function(event){
        const x = event.clientX - ctx.canvas.offsetLeft; 
        const y = event.clientY - ctx.canvas.offsetTop;
        if(x > 860 && y > 330){
            goBackPage();
        }
    } 
}




// 깜짝 놀란 물고기
/*let supfish = new Image();
supfish.src = "../img/surprised.png";
function drawch() {
    ctx.drawImage(supfish, 290, 100, 193, 301);
}
*/

// 물고기 선택
/*
function keychg(){
    keycode=event.keyCode;
    if(keycode == 13){ // Enter
        //if(nowX >= 310 && nowX <= 410){ // 맨 오른쪽 물고기의 좌표
        if((x-hand_w) + dx > 310 && x+dx < 860){
            // 맨 왼쪽의 물고기의 좌표 부분을 놀란 물고기로
            ctx.drawImage(supfish, 290, 100, 193, 301);
        } 
    }
}
*/


// 이미지 변경
function ChangeImg(){
    document.getElementById("imgId").src = "surprised.png";
}


// 현재 레벨이 3일 경우 : 제공하는 힌트
function hint() {
    addToCanvas(ctx, "../img/leaf.png", 1030, 290, 40, 40);
}

