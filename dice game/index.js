
var ran_num1 = Math.floor(Math.random()*6)+1;
var ran_num2 = Math.floor(Math.random()*6)+1;

image1 = "images/dice"+ran_num1+".png";
image2 = "images/dice"+ran_num2+".png";

document.querySelectorAll(".dice-image")[0].setAttribute("src", image1);
document.querySelectorAll(".dice-image")[1].setAttribute("src", image2);
var win_text = " wins!";
if (ran_num1 > ran_num2){
    document.querySelector("body .header").textContent = "Player 1" + win_text;
}
else if(ran_num2 > ran_num1){
    document.querySelector("body .header").textContent = "Player 2" + win_text;
}
else{
    document.querySelector("body .header").textContent = "It's a Draw!";
}
