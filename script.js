const herName = "Jasel 💖"; // ← CHANGE THIS

const texts = [
  `Hi ${herName} 💕`,
  "I made this just for you",
  "Every day with you feels special",
  "You make my world brighter ✨",
  "I choose you, always",
  `Will you be my forever, ${herName}? 💍`
];

let index = 0;
const textEl = document.getElementById("text");
const subEl = document.getElementById("sub");
const music = document.getElementById("bgMusic");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");

// CONTINUOUS HEART RAIN
setInterval(() => {
  createHeart();
}, 400);

function nextStep() {
  if (music.paused) music.play();

  if (index < texts.length - 1) {
    index++;
    textEl.innerText = texts[index];
    subEl.innerText = "Tap again ❤️";
    burstHearts();
  }

  if (index === texts.length - 1) {
    buttons.classList.remove("hidden");
    subEl.innerText = "Choose wisely 😌";
  }
}

function yesClicked(e) {
  e.stopPropagation();
  textEl.innerText = `YAY!! I love you forever, ${herName}  💖💖💖`;
  subEl.innerText = "You just made me the happiest person alive 💍";
  buttons.style.display = "none";
  burstHearts(20);
}

function moveNo(e) {
  e.stopPropagation();
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

function burstHearts(count = 8) {
  for (let i = 0; i < count; i++) {
    createHeart();
  }
}
