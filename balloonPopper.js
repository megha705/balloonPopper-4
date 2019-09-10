var score = 0;
var speed = 1;
function setLeft(id,x){
    document.getElementById(id).style.left=x+"px";
}

function setTop(id,y){
    document.getElementById(id).style.top=y+"px";
}

function getLeft(id){
    return document.getElementById(id).offsetLeft;
}

function getTop(id){
    return document.getElementById(id).offsetTop;
}

function randomNumber(low,high){
    return(Math.floor(low+Math.random()*(1+high-low)));
}

var gameTimer = window.setInterval(floatUp,25);

function floatUp(){
    var y = getTop("balloon");
    if (y<-100){
        gameOver();
    }
    setTop("balloon",y - speed);
}

function popped(){
    score++;
    speed++;
    document.getElementById("scoreText").innerText="Score: "+score;
    setLeft("balloon",randomNumber(0,window.innerWidth-100));
    setTop("balloon",window.innerHeight);
}

function gameOver(){
    clearInterval(gameTimer);
    alert("Game Over You Scored "+score);
}