let images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let selectedImages = images[randomNumber1 - 1];

let leftImage = document.querySelectorAll("img")[0];
leftImage.setAttribute("src", selectedImages);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let selectedImages2 = images[randomNumber2 - 1];

let rightImage = document.querySelectorAll("img")[1];
rightImage.setAttribute("src", selectedImages2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!";
}