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
    let replace = 3; // 한 게임 당 3번 반복
    playgame();
    setInterval(playgame,100);
    // 게임 시작 문구
    gameStart();
    replay();
    click();
}

function playgame(){
    moveHand(); //캐릭터 움직이기
    draw(); // 이미지들 그리기   
    
    // 물고기 당 밥 먹은 개수
    print(); 
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

    // 몇 번 째 경기인지 
    ctx.font = "bold 30px sans-serif"; 
    ctx.fillStyle = "#C5EFFF"; 
    ctx.fillText("th", 20, 30); 
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
        case 13: if(eating == 0 && nowEnter == 0){ 
            keychg(); 
        }
        break; // 선택
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
        if(x > 1120 && y > 530){
            goBackPage();
        }
    } 
}

// 현재 레벨이 3일 경우 : 제공하는 힌트
function hint() {
    addToCanvas(ctx, "../img/leaf.png", 1030, 290, 40, 40);
}

// ------------- 깜짝 놀란 물고기 -------------------
let supfish = new Image();
supfish.src = "../img/surprised.png";

let chk = 0;
function keychg(){
    // 맨 왼쪽의 물고기의 좌표 부분을 놀란 물고기로
    nowEnter = 1; // 물고기는 한 판에 한 번만 선택 가능함
    if((x-hand_w) + dx > 310 && x+dx < 520){
        chk = setInterval(() => { 
            ctx.drawImage(supfish, 272, 100, 212, 301); 
        });        
    } else if((x-hand_w) + dx > 520 && x+dx < 750){
        chk = setInterval(() => {
            ctx.drawImage(supfish, 502, 100, 212, 301);
        });     
    } else {
        chk = setInterval(() => {
            ctx.drawImage(supfish, 732, 100, 212, 301); 
        });
    }
    // 깜짝 놀란 물고기에서 기본 이미지로
    setTimeout(() => {
        clearInterval(chk);
    }, 800);   
}


// --------- 먹고 돌아오는 반복 -----------------
var eating = 0, maxIndex = 0;
var n = Math.floor(Math.random()*6)+5;    //변경횟수변수
var baseSpeed = 1100; // 기본으로 돌아오는 속도
let nowEnter = 0; // Enter키를 눌렀는지 여부

// 먹는 물고기 객체 생성
let eatfish= new Image();
eatfish.src="../img/eatfish.png";
let eatfish2= new Image();
eatfish2.src="../img/eatfish2.png";

//밥먹는 횟수 저장 배열
let sum = new Array(3);
sum = [0, 0, 0];

function fishMove(){    //물고기 이미지 바꾸기
    let i, j;
    
    for(i=0; i<n; i++){
        eating = 1;
        let imgNum = Math.floor(Math.random()*3); //바뀔 물고기 번호 랜덤값 생성
        let eatSpeed = 800;
        
        // 먹는 이미지
        setTimeout(() => {
            eatImg(imgNum);
        }, eatSpeed * i);

        // 기본
        setTimeout(() => {
            reImg(imgNum);
        }, baseSpeed * i);
        
        if(imgNum == 0) {
            sum[0]++; 
        } else if (imgNum == 1) {
            sum[1]++;
        } else if (imgNum == 2) {
            sum[2]++;
        }        
    }
    max = sum[0];
    for(j=0; j<sum.length; j++){ //가장 많이 먹은 물고기 방번호
        if(sum[j] > max){
            max = sum[j];
            maxIndex = j;
        }
    }
}

function eatImg(imgNum){ //먹는 이미지로 변경
    if(imgNum==0){
        ctx.drawImage(eatfish, 290, 100, 193, 301);
    }else if(imgNum==1){
        ctx.drawImage(eatfish2, 520, 100, 193, 301);
    }else if(imgNum==2){
        ctx.drawImage(eatfish, 750, 100, 193, 301);
    }
}

function reImg(imgNum){ //기본 이미지로 변경
    if(imgNum==0){
        ctx.drawImage(fish1, 290, 100, 193, 301);
    }else if(imgNum==1){
        ctx.drawImage(fish2, 520, 100, 193, 301);
    }else if(imgNum==2){
        ctx.drawImage(fish3, 750, 100, 193, 301);
    }
}

// ---------------------- 게임 start ----------------------
function gameStart() {
    let start = setInterval(() => {
        ctx.font = "bold 100px sans-serif"; //font = "스타일 폰트크기 폰트"
        ctx.fillStyle = "#C5EFFF"; //font = "스타일 폰트크기 폰트"
        ctx.fillText("게임 시작", 400, 200); //fillText(텍스트, x, y)
    });
    setTimeout(() => {
        clearInterval(start);
    }, 900);
}

// ------------------ 가장 많이 먹은 물고기 -------------------
function print() {
    for(let i=0; i<3; i++){
        ctx.font = "bold 30px sans-serif"; 
        ctx.fillStyle = "#C5EFFF"; 
        ctx.fillText(sum[i], 150 + ((i+1)*230), 90); // 간격 수정
    }
}

// -------------- 클리어 하거나 게임오버까지 진행 ----------------
function replay() {
    setTimeout(() => {
        fishMove();
    }, 1400); // 1.4 초 뒤에 시작
    
    // 물고기 이미지가 바뀌는 시간을 계산해서 그 시간이 지나면 변수를 다시 초기화
    let chg = setTimeout(() => {
        eating = 0;
        let choice = setInterval(() => { // 선택하세요 문구
            ctx.font = "bold 100px sans-serif"; 
            ctx.fillStyle = "#C5EFFF"; 
            ctx.fillText("물고기를 선택하세요", 210, 200); 
        });
        
        if(eating == 0){
            clearTimeout(chg);
            setTimeout(() => {
                clearInterval(choice);
            }, 800);
        }
    }, baseSpeed * n); // 물고기가 기본으로 돌아오기까지 걸리는 시간 * n마리, 비동기적 
}

// --------- 많이 먹은 물고기 공개 ------------
function maxEatFish() {
    for(let i=0; i<3; i++){
        ctx.font = "bold 30px sans-serif"; 
        ctx.fillStyle = "#C5EFFF"; 
        ctx.fillText(maxIndex , 210, 200);
    }
    /*ctx.font = "bold 100px sans-serif"; 
    ctx.fillStyle = "#C5EFFF"; 
    ctx.fillText("세바스찬" + (maxIndex + 1) + " 세", 210, 200); */
}

// --------------- 초기화 ---------------------
function reset() {
    
}

// 물고기 변경과 머ㅓㄱ는 횟수