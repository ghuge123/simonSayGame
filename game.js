let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ['yellow','red','purple','green'];
document.addEventListener("keypress",function (){
    if (started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove("flash");
    },100);
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();


}

function checkAns(){
    //console.log("current level",level);
    let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(level<100){
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp , 1000);
            }
        }
        else if(level==100){
            h2.innerText = "Congratulation you win";
        }
    }else{
        h2.innerHTML=`Game Over!your score is <b>${level}<b>! press any key to start`;
        backColor();
        reset();
    }
    

}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random()*4);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
     gameSeq.push(randColor);
     console.log(gameSeq)
     
    gameFlash(randBtn);

}
function userFlash(btn){
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove("flash");
    },100);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0
}
function backColor(){
    let body = document.querySelector("body");
    body.classList.add("bgcolor");
    setTimeout(function (){
        body.classList.remove("bgcolor")
    },250);
}