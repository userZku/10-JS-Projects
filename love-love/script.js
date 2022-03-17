let HEART_LIST = ["💜", "🔥", "🥰", "🤣", "😜", "🥵", "😎", "🤗"];
const txt = "Clément c'est vraiment le plus beau <3";

let index = 0;

function writeText() {
    document.body.innerText = txt.slice(0, index);
    index++;
    if (index > txt.length) {
        index = 0;
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = HEART_LIST[randomInt(0, HEART_LIST.length - 1)];

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(() => {
    writeText();
    createHeart();
}, 100);
