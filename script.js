let randomWords = [
  "Life's too short",
  "Absolutely not",
  "Your God says you better not",
  "Fuck it, no!",
  "The heck with it",
  "How about not giving a crap?",
  "Fuck it, they don't deserve anything",
  "Nobody's gonna care anyway",
];
let wordDiv = document.getElementById("word");

function randomWord() {
  wordDiv.innerHTML =
    randomWords[Math.floor(Math.random() * randomWords.length)];
}
