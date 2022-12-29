//Mixed messages section

// Arrays for the fortunes
const fortuneStart = [
  "In the near future",
  "Soon",
  "There will be a time where",
  "Don't miss out when",
  "You will succeed when",
  "Don't slow down when",
  "Don't be afraid when",
  "Moments from now",
  "In a little while",
  "If you falter",
];
const fortuneMiddle = [
  "you will",
  "a perfect opportunity will",
  "going through hard times will",
  "you will miss to",
  "you will be about to",
  "you will be at the point to",
  "you have to be willing to",
  "there will be a chance to",
  "an unforeseen circumstance will",
  "there might be a fortuitous opportunity that will",
];
const fortuneEnd = [
  "fall from the sky",
  "land on your feet",
  "achieve your dreams",
  "fall from grace",
  "land a golden opportunity",
  "make life very difficult",
  "make life very easy",
  "carve out your destiny",
  "succeed",
  "fail",
];

//function to pick a random string in the arrays
function randomArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//Function to form the fortune
function myFortune() {
  fortune.innerHTML = `${randomArray(fortuneStart)} ${randomArray(
    fortuneMiddle
  )} ${randomArray(fortuneEnd)}.`;
  fortuneButton.innerHTML = "Reveal Another";
}
const fortune = document.getElementById("fortune");
const fortuneButton = document.getElementsByClassName("fortuneButton")[0];

fortuneButton.onclick = myFortune;
