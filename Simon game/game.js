var buttonColors = ["red", "green", "yellow", "blue"];
var colorSequence = [];
var userChosenColors = [];
var levelCounter = 0;
var started = false;


document.addEventListener("keypress", function(event){
    if(started == false){
        started = true;
        $("header h1").text("Level "+window.levelCounter);
        nextSequence();
    }   
});

$("button").click(function (e) { 
    var c = $(this).attr('id');
    userChosenColors.push(c);
    setTimeout(function(){
        animateButton(c);
    }, 50);


    if(userChosenColors[userChosenColors.length-1] == colorSequence[userChosenColors.length-1]){
        if(userChosenColors.length == colorSequence.length){
            setTimeout(function(e){
                nextSequence();
            }, 1000);
        }
    }
    else{
        // wrong input - game lost
        playSound("wrong");
        $("body").addClass("wrong");
        $("header h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
          $("body").removeClass("wrong");
        }, 300);
        startOver();
    }
});

function playSound(color){
    var soundPath = "sounds/"+color+".mp3";
    var audio = new Audio(soundPath);
    audio.play();
}

function animateButton(color){
    setTimeout(
        function (event){ 
            playSound(color);
            $("#"+color).fadeOut(100).fadeIn(100);
         }, 100);
}

function nextSequence(){
    levelCounter++;
    $("header h1").text("Level "+window.levelCounter);
    var randomNumber = Math.floor(10*Math.random(1))%4; // 0 to 3
    var buttonColor = window.buttonColors[randomNumber];
    window.colorSequence.push(buttonColor);
    animateButton(buttonColor);
    userChosenColors = [];  // make it empty for every level
    return;
}

function startOver(){
    started = false;
    colorSequence = [];
    userChosenColors = [];
    levelCounter = 0;
}

