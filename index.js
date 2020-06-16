function myFunction() {
  // function randomDice() {
  //     return (Math.round(Math.random()*5));
  // }
  //
  // function diceOne() {
  //   if (randomDice() === 1) {
  //     document.querySelector('img.dice1').src = "images/dice1.png";
  //     return 1;
  //   } else if (randomDice() === 2) {
  //     document.querySelector('img.dice1').src = "images/dice2.png";
  //     return 2;
  //   } else if (randomDice() === 3) {
  //     document.querySelector('img.dice1').src = "images/dice3.png";
  //     return 3;
  //   } else if (randomDice() === 4) {
  //     document.querySelector('img.dice1').src = "images/dice4.png";
  //     return 4;
  //   } else if (randomDice() === 5) {
  //     document.querySelector('img.dice1').src = "images/dice5.png";
  //     return 5;
  //   } else {
  //     document.querySelector('img.dice1').src = "images/dice6.png";
  //     return 6;
  //   }
  // }
  //
  // function diceTwo() {
  //   if (randomDice() === 1) {
  //     document.querySelector('img.dice2').src = "images/dice1.png";
  //     return 1;
  //   } else if (randomDice() === 2) {
  //     document.querySelector('img.dice2').src = "images/dice2.png";
  //     return 2;
  //   } else if (randomDice() === 3) {
  //     document.querySelector('img.dice2').src = "images/dice3.png";
  //     return 3;
  //   } else if (randomDice() === 4) {
  //     document.querySelector('img.dice2').src = "images/dice4.png";
  //     return 4;
  //   } else if (randomDice() === 5) {
  //     document.querySelector('img.dice2').src = "images/dice5.png";
  //     return 5;
  //   } else {
  //     document.querySelector('img.dice2').src = "images/dice6.png";
  //     return 6;
  //   }
  // }
  //
  // var one = diceOne();
  // var two = diceTwo();
  //
  // if (one > two) {
  //   document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!";
  // } else if (one < two) {
  //   document.querySelector('h1').innerHTML = "🚩 Player 2 Wins!";
  // } else {
  //   document.querySelector('h1').innerHTML = "Draw!";
  // }

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage = 'dice' + randomNumber1 + ".png";

  var randomImageSource = "images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 2 Wins!";
  } else {
    document.querySelector('h1').innerHTML = "Draw!";
  }
}
document.getElementById("clickMe").onclick = function() {location.reload();};
document.getElementById("clickMe").onclick = function() {myFunction();};
