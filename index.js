
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+ randomNumber1 + ".png";


var randomImageSource = randomDiceImage;
var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+ randomNumber2 + ".png";


var randomImageSource2 =  randomDiceImage2;
var Image2 = document.querySelectorAll("img")[1];

Image2.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML="PLAYER 1 WINS"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML="PLAYER 2 WINS"

}
else if (randomNumber1 == randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML="DRAW"

}
