const factBtn = document.getElementById("factBtn");
const factEl = document.getElementById("fact");

const facts = [
  "Alpacas communicate by humming softly!",
  "Their fleece is warmer, lighter, and softer than wool.",
  "There are two breeds of alpacas: Huacaya and Suri.",
  "Alpacas can live up to 20 years in the Andes.",
  "They are gentle and rarely spit at humans!"
  "In Peru, alpacas are considered a symbol of prosperity and peace."
];

factBtn.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factEl.textContent = randomFact;
});

