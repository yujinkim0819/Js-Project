"use strcik"

let dx = 0; // x의 이동 좌표
let keycode; // 키보드 입력 변수
let nowX = 0; // 현재 이동한 x좌표 
let x = 600, y = 520; // 손 처음 위치
let hand_w = 40, hand_h = 95; // 손의 크기
let th = 1; // 몇 번째 판
let chghand = 0; // 기본, 정답, 오답 -> 손
let replace; // 한 게임 당 3번 씩 반복
let end = 0; // 한 번 게임이 돌았는지 안돌았는지
let stop = 0; // 만약 bubble이 2가 되면 게임 중지
let eatSpeed = 800;
let chgSpeed = 250; // 기본으로 되돌리는 속도

let canvas= document.getElementById('c1');
let ctx= canvas.getContext('2d'); // 화가 객체


// 배경, 손 객체 생성
let water= new Image();
water.src="../img/water.png";
let hand= new Image();
hand.src="../img/hand.png";
let goodhand= new Image();
goodhand.src="../img/good.png";
let badhand= new Image();
badhand.src="../img/bad.png";

// 물고기 객체 생성
let fish1= new Image();
fish1.src="../img/fish1.png";
let fish2= new Image();
fish2.src="../img/fish2.png";
let fish3= new Image();
fish3.src="../img/fish3.png";

// 비눗방울
let bubble1 = new Image();
bubble1.src = "../img/bubble1.png";
let bubble = -1; // 감소 개수 

// 버튼
let btn = new Image();
btn.src = "../img/btn.png";

// ---------------------- 문장 출력 -----------------------
let text, tx, ty, ptime; 
function printText(text, tx, ty, ptime) {
    let printT;
    printT = setInterval(() => {
        ctx.font = "bold 100px sans-serif"; //font = "스타일 폰트크기 폰트"
        ctx.fillStyle = "#C5EFFF"; //font = "스타일 폰트크기 폰트"
        ctx.fillText(text, tx, ty); //fillText(텍스트, x, y)
    });
    setTimeout(() => {
        clearInterval(printT);
    }, ptime);
}

// ---------------------- 게임 start ----------------------
function gameStart() {
    setTimeout(() => {
        printText("GAME START", 300, 250, 900);
    }, 600);
}

// ------------------ 가장 많이 먹은 물고기 -----------------
function print() {   
    cho = setInterval(() => {
        for(let i=0; i<3; i++){
            ctx.font = "bold 30px sans-serif"; 
            ctx.fillStyle = "#C5EFFF"; 
            ctx.fillText(sum[i], 150 + ((i+1)*230), 90); // 간격 수정
        }
    });
}

// -------------- 클리어 하거나 게임오버까지 진행 ----------------
function replay() {
    setTimeout(() => {
        fishMove();
    }, 1400); // 1.4 초 뒤에 시작
    
    setTimeout(() => {
        eating = 0;
        printText("물고기를 선택하세요", 210, 240, 800);
    }, baseSpeed * n + 200); // 물고기가 기본으로 돌아오기까지 걸리는 시간 * n마리, 비동기적 
}


// 메인
gameStart(); // start 문구
function movingHand(){
    playgame();
    setInterval(() => {
        playgame();
    }, 100);
    // 게임 시작 문구
    replay();
    click();

    // 테스트
    //checkFish(); 필요없는 듯
}

function playgame(){
    moveHand(); //캐릭터 움직이기
    draw(); // 이미지들 그리기   
    
    // print(); // 테스트 용도 
}

function moveHand(){
    if((x-hand_w) + dx > 310 && x+dx < 860) // hand 이동 제한
        x+=dx; // 좌표 이동
}

function clearCanvas()
{
    ctx.clearRect(50, 50, canvas.width, canvas.height); // 픽셀 정리
    ctx.beginPath(); // 컨텍스트 리셋
}

function draw(){
    ctx.drawImage(water, 0, 0, canvas.width, canvas.height); // 배경 출력
    if(chghand == 0) {
        ctx.drawImage(hand, x- hand_w, y- hand_h, hand_w*2, hand_h*2); // hand.png 출력
    } else if(chghand == 1){ //손 바꾸기
        ctx.drawImage(goodhand, x- hand_w, y- hand_h, hand_w*2, hand_h*2-70); 
    } else if(chghand == 2){ 
        ctx.drawImage(badhand, x- hand_w, y- hand_h, hand_w*2, hand_h*2-70); 
    }

    if(chfish == 0){ 
        ctx.drawImage(fish1, 290, 100, 193, 301);
        ctx.drawImage(fish2, 520, 100, 193, 301);
        ctx.drawImage(fish3, 750, 100, 193, 301);
    } else if(chfish == 1){
        ctx.drawImage(fish1, 290, 100, 193, 301);
        ctx.drawImage(fish2, 520, 100, 193, 301);
        ctx.drawImage(fish3, 750, 100, 193, 301);
        setTimeout(() => {
            chfish = 0;
            fish1.src = "../img/fish1.png"; // 기본으로 다시 되돌리기
            fish2.src = "../img/fish2.png";
            fish3.src = "../img/fish3.png";
        }, 1000); 
    } else if(chfish == 2){
        ctx.drawImage(fish1, 290, 100, 193, 301);
        ctx.drawImage(fish2, 520, 100, 193, 301);
        ctx.drawImage(fish3, 750, 100, 193, 301);
        setTimeout(() => {
            chfish = 0;
            fish1.src = "../img/fish1.png"; // 기본으로 다시 되돌리기
            fish2.src = "../img/fish2.png";
            fish3.src = "../img/fish3.png";
        }, chgSpeed); 
    }

    ctx.drawImage(btn, 1120, 500, 100, 100);
    for(let i = 0; i<3; i++){
        ctx.drawImage(bubble1, 1120 + (i*45), 10, 40, 40); // 비눗방울 출력
        if(bubble != -1 && bubble <= 2){
            let pop = new Image();
            pop.src="../img/bubble3.png";
            for(let j=0; j<=bubble; j++){
                ctx.drawImage(pop, 1120 + (j*45), 10, 40, 40);
            }
            if(bubble == 2){
                stop = 1;
            }
        }
    }
    // 몇 번 째 경기인지 
    ctx.font = "bold 30px sans-serif"; 
    ctx.fillStyle = "#C5EFFF"; 
    ctx.fillText(th + " th", 20, 30); 
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
        case 37: dx = -230; nowX = dx; chghand = 0; break; // 왼 chghand = 0 : 손 이동시 기본 이미지로
        case 39: dx = 230; nowX = dx; chghand = 0; break; // 오
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


// 속도
var check;
function speed() {
    if(th == 4){
        chgSpeed = 90;
        alert("Speed Up");

       /* check = document.createElement("check");
        check.className = "alert";
        check.innerHTML = "<strong>Speed UP!!</strong>";
        document.body.append(check); // 비로소 화면에 보임

        setTimeout(() => {
            check.remove()
        }, 3000); */

    } else if(th == 6){
        chgSpeed = 40;
        alert("Speed Up");
    }
}


// ------------- 깜짝 놀란 물고기 -------------------

let chfish = 0; // 먹는 이미지로 변경됨 : fish1 => surprised
function keychg(){
    nowEnter = 1; // 물고기는 한 판에 한 번만 선택 가능함
    chfish = 1; // 물고기가 바뀌었는지 체크
    /*for(let i=0; i<3; i++){
        if(maxIndex == i){
            chghand = 1;
        } else {
            bubble = 2;
            chghand = 2;
        }
    }*/
    print(); 
    
    if((x-hand_w) + dx > 310 && x+dx < 520){
        fish1.src="../img/surprised.png";
        if(maxIndex == 0){
            chghand = 1;
        } else {
            chghand = 2;
            bubble++;
        }
    } else if((x-hand_w) + dx > 520 && x+dx < 750){
        fish2.src="../img/surprised.png";
        if(maxIndex == 1){
            chghand = 1;
        } else {
            chghand = 2;
            bubble++;
        }
    } else {
        fish3.src="../img/surprised.png";
        if(maxIndex == 2){
            chghand = 1;
        } else {
            chghand = 2;
            bubble++;
        }
    }
    // 깜짝 놀란 물고기에서 기본 이미지로
    setTimeout(() => {
        clearInterval(cho); // 물고기 위에 숫자
        th++;
        gameOver(); // 게임 오버
        end = 1; // 추가
    }, 1000);   
     
    /*setTimeout(() => {
        clearInterval(right);
    }, 700);*/
}


// --------- 먹고 돌아오는 반복 -----------------
var eating = 0; // 먹고 있는 중
var maxIndex = 0; 
var n = Math.floor(Math.random()*6)+5;    //변경횟수변수 -> 2번 랜덤하는 이유
let baseSpeed = eatSpeed + 400; // 기본으로 돌아오는 속도
let nowEnter = 0; // Enter키를 눌렀는지 여부

//var audio = new Audio("../img/물방울.mp3");

// 먹는 물고기 객체 생성
let eatfish= new Image();
eatfish.src="../img/eatfish.png";
let eatfish2= new Image();
eatfish2.src="../img/eatfish2.png";

//밥먹는 횟수 저장 배열
let sum = new Array(3);
sum = [0, 0, 0];
var eatTime;

function fishMove(){ //물고기 이미지 바꾸기
    let i, j;
    for(i=1; i<=n; i++){
        eating = 1;
        let imgNum = Math.floor(Math.random()*3); //바뀔 물고기 번호 랜덤값 생성
        
        // 먹는 이미지
        eatTime = setTimeout(() => {
            eatImg(imgNum);
        }, eatSpeed * i);

        // 기본
        /*setTimeout(() => {
            //clearTimeout(Time);
            reImg(imgNum);
        }, baseSpeed * i);
        */
        for(let i=0; i<3; i++){
            if(imgNum == i){
                sum[i]++;
            }
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
    /*for(let i=0; i<3; i++){
        if(imgNum == i){
            chfish = 2; // 먹는 이미지라는 뜻
            fish1.src = "../img/eatfish.png";
        }
    }*/
    if(imgNum==0){
        chfish = 2; // 먹는 이미지라는 뜻
        fish1.src = "../img/eatfish.png";
    }else if(imgNum==1){
        chfish = 2; 
        fish2.src = "../img/eatfish.png";
    }else if(imgNum==2){
        chfish = 2; 
        fish3.src = "../img/eatfish.png";
    }
}

/*
function reImg(imgNum){ //기본 이미지로 변경
    if(imgNum==0){
        ctx.drawImage(fish1, 290, 100, 193, 301);
    }else if(imgNum==1){
        ctx.drawImage(fish2, 520, 100, 193, 301);
    }else if(imgNum==2){
        ctx.drawImage(fish3, 750, 100, 193, 301);
    }
}
*/


// ---------------------- 게임 over ----------------------
function gameOver() {
    if(stop == 1 || bubble == 3){
        setTimeout(() => {
            location.href = "gameover.html"; 
        }, 1000);
    } else if(th == 9){
        setTimeout(() => {
            location.href = "clear.html"; 
        }, 1500);
    } else {
        clearTimeout(eatTime); 
        reset();
        movingHand();
    }
}



// ---------------- 많이 먹은 물고기 공개 --------------------
function maxEatFish() {
    for(let i=0; i<3; i++){
        ctx.font = "bold 30px sans-serif"; 
        ctx.fillStyle = "#C5EFFF"; 
        ctx.fillText(maxIndex , 210, 200);
    }
}

// ---------------------- 초기화 -------------------------
function reset() {
    //clearTimeout(eatTime); // 먹는 물고기 해제
    nowEnter = 0; // Enter키, 물고기 선택 해제
    nowX = 0; // 현재 이동한 x좌표 
    dx = 0; // x의 이동 좌표
    x = 600, y = 520; // 손 처음 위치
    chghand = 0; // 기본, 정답, 오답 -> 손
    sum = [0, 0, 0]; // 각 물고기가 먹은 밥
    max = sum[0]; 
    maxIndex = 0; // 가장 많이 먹은 물고기
    eating = 0;
    //speed(); // 속도는 th에 따라서 다르게 해야 되므로..
    //baseSpeed = eatSpeed + 300;
    //n = Math.floor(Math.random()*6)+5;
    stop = 0; // 게임 중지 여부
    speed();
}

// 클릭하면 글 사진 잠깐 보여준 다음에 사라지도록 setInterval 같은 거 사용 
let leaf = new Image();
leaf.src = "../img/leaf.png";
// 현재 레벨이 3일 경우 : 제공하는 힌트
function hint() {
    addToCanvas(ctx, "../img/leaf.png", 1030, 290, 40, 40);
}



// 단계별 속도 조절, 폴사