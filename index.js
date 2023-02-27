var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var dices = ["./images/dice1.png","./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]


document.querySelector(".img1").setAttribute("src", dices[randomNumber1]);
document.querySelector(".img2").setAttribute("src", dices[randomNumber2]);

var refreshMeHeader = document.querySelector("h1");

if (randomNumber1>randomNumber2){
    refreshMeHeader.innerHTML = "player 1 wins";
}
else if( randomNumber2> randomNumber1){
    refreshMeHeader.innerHTML = "player 2 wins";
}
else{
    refreshMeHeader.innerHTML = "Tie";
}
