const EMOJI_LIST = ["💜", "💕", "💖", "💞", "❤️"];
const txt = "Clément c'est vraiment le plus beau <3";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 2 + 3 + "s";

  emoji.innerText = EMOJI_LIST[randomInt(0, EMOJI_LIST.length - 1)];

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createEmoji, 300);
