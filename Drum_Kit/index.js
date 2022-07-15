
//button press
document.querySelectorAll("button")[1].addEventListener("click", handle_click);

for(var i=0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var letter = this.textContent;
        handle_click(letter);
        buttonAnimation(letter);
    });
}

// keyboard press 
document.addEventListener("keypress", function(e){
    handle_click(e.key);
});

function handle_click(letter){
    var soundPath;
    switch (letter) {
        case 'w':
            soundPath = "sounds/crash.mp3";
            break;
        case 'a':
            soundPath = "sounds/kick-bass.mp3";
            break;
        case 's':
            soundPath = "sounds/snare.mp3";
            break;
        case 'd':
            soundPath = "sounds/tom-1.mp3";
            break;
        case 'j':
            soundPath = "sounds/tom-2.mp3";
            break;
        case 'k':
            soundPath = "sounds/tom-3.mp3";
            break;
        case 'l':
            soundPath = "sounds/tom-4.mp3";
            break;
        default:
            break;
    }
    var audio = new Audio(soundPath);
    audio.play();
    
    buttonAnimation(letter);
    return;
}

// animation
function buttonAnimation(currKey){
    var atr = document.querySelector("."+currKey).getAttribute("class");
    document.querySelector("."+currKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currKey).classList.remove("pressed");
    }, 100);
}