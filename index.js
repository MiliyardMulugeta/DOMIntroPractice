import quotes from "./dummyAPI.js";

const button = document.querySelector("button");
const quoteDisplay = document.querySelector("div");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.textContent = randomQuote.text + " - " + randomQuote.author;
}

document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", generateQuote);
});
