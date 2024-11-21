var image1=document.querySelectorAll('img')[0];

var randomNumber1=Math.floor(Math.random() * 6 +1);
var randomNumber2=Math.floor(Math.random() * 6 +1);

var randomDiceImage1="/images/dice"+randomNumber1+".png";
image1.setAttribute('src',randomDiceImage1);

var randomDiceImage2="/images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute('src',randomDiceImage2);

if(randomNumber1>randomNumber2){
    //OR header.textContent="🚩 Play1 Wins!";
    document.querySelector("h1").innerHTML="🚩 Play1 Wins!";
}
else if(randomNumber1===randomNumber2){
    //OR header.textContent="Draw!";
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    //OR header.textContent="Player 2 Wins! 🚩";
}